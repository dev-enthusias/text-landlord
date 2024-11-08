"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isAxiosError } from "axios";
import axiosInstance from "./axios-instance";
import { ROLE_ROUTES } from "@/constants/data";
import { routes } from "@/constants/routes";
import { LoginDataType } from "@/definition";

export async function getRole() {
  const role = cookies().get("role");
  return role ? parseInt(role.value) : undefined;
}

export async function authenticate(
  data: LoginDataType,
): Promise<string | undefined> {
  let redirectionPathname: string | undefined;

  try {
    const res = await axiosInstance.post("/public/v1/login", data);

    if (res.status === 200) {
      const authToken = res.data.access_token;
      const roleId = res.data.role_id;

      // role_id === 4 means 'Landlord'
      // role_id === 5 means 'Tenant'
      // role_id === 7 means 'Agent'

      cookies().set("session", authToken, {
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

      redirectionPathname = ROLE_ROUTES[roleId as keyof typeof ROLE_ROUTES];
    }
  } catch (error: unknown) {
    if (isAxiosError(error) && error?.status === 401) {
      return "Invalid credentials";
    }

    return "An unexpected error occurred. Please check your internet connection and try again.";
  }

  redirect(redirectionPathname!);
}

export async function logout() {
  cookies().delete("session");
  cookies().delete("role");

  redirect(routes.LOGIN);
}
