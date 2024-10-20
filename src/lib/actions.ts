"use server";

import { redirect } from "next/navigation";
import axiosInstance from "./axios-instance";
import { loginSchema } from "./schema";
import { cookies } from "next/headers";
import { routes } from "@/constants/routes";

export async function authenticate(_currentState: unknown, formData: FormData) {
  const validateFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validateFields.success) {
    return validateFields.error.flatten().fieldErrors;
  }

  try {
    const res = await axiosInstance.post(
      "/public/v1/login",
      validateFields.data,
    );

    if (res.status === 200) {
      const encryptedSessionData = res.data.access_token;
      const roleId = res.data.role_id;

      // role_id === 4 means 'Landlord'
      // role_id === 5 means 'Tenant'

      cookies().set("session", encryptedSessionData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // One week
        path: "/",
      });
      cookies().set("role", roleId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });
    }
  } catch (error: any) {
    if (error?.status === 401) {
      return "Invalid credentials";
    }

    return "An unexpected error occurred. Please check your internet connection and try again.";
  }

  redirect(routes.DASHBOARD);
}
