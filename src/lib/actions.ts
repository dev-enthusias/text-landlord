"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { BASE_URL } from "./axios-instance";
import { ROLE_ROUTES } from "@/constants/data";
import { routes } from "@/constants/routes";
import { LoginDataType, RegisterDataType } from "@/definition";

export async function getRole() {
  const role = cookies().get("role");
  return role ? parseInt(role.value) : undefined;
}

export async function getToken() {
  const token = cookies().get("session");
  return token ? token.value : undefined;
}

export async function getUsername() {
  const username = cookies().get("name");
  return username ? username.value : undefined;
}

export async function authenticate(
  data: LoginDataType,
): Promise<{ status: boolean; message: string }> {
  let redirectionPathname: string | undefined;

  try {
    const res = await fetch(`${BASE_URL}/public/v1/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();

    if (result.role_id) {
      const authToken = result.access_token;
      const roleId = result.role_id;
      const userDetails = {
        name: result.name,
      };

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

      cookies().set("name", userDetails.name, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });

      redirectionPathname = ROLE_ROUTES[roleId as keyof typeof ROLE_ROUTES];
    } else if (result.message) {
      return {
        status: false,
        message: result.message,
      };
    }
  } catch (error: unknown) {
    return {
      status: false,
      message:
        "An unexpected error occurred. Please check your internet connection and try again.",
    };
  }

  redirect(redirectionPathname!);
}

export async function registerUser(data: RegisterDataType) {
  try {
    const res = await fetch(`${BASE_URL}/public/v1/register`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();

    console.log(result);

    if (result?.errors?.email) {
      return {
        status: false,
        message: "User already exists, kindly login",
      };
    } else if (result.role_id)
      return {
        status: true,
        message: "You have successfully registered on this platform.",
      };
  } catch (error: unknown) {
    console.log(error);
    return {
      status: false,
      message:
        "An unexpected error occurred. Please check your internet connection and try again.",
    };
  }
}

export async function logout() {
  cookies().delete("session");
  cookies().delete("role");

  redirect(routes.LOGIN);
}
