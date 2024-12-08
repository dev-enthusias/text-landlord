"use server";

import { apiGet, apiPut } from "@/api/config";
import { notificationEndpoints, userEndpoints } from "@/api/endpoints";
import { ProfileFormData, UserDetailsResponseDataType } from "@/definition";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

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

export async function getProfileDetails() {
  const res = await apiGet<UserDetailsResponseDataType>(
    userEndpoints.GET_USER_DETAILS,
    "userdetails",
  );
  return res.data;
}

export async function markNotificationAsRead(notificationId: number) {
  await apiPut(
    notificationEndpoints.MARK_NOTIFICATION_AS_READ + "/" + notificationId,
    {},
  );

  revalidateTag("notifications");
}

export async function markAllNotificationAsRead() {
  await apiPut(notificationEndpoints.MARK_ALL_NOTIFICATIONS_AS_READ, {});

  revalidateTag("notifications");
}

export async function updateProfile(data: ProfileFormData) {
  await apiPut(userEndpoints.UPDATE_USER_DETAILS, data);

  // revalidateTag("userdetails"); when user details are updated
}
