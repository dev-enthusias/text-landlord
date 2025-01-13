"use server";

import { apiPut } from "@/api/config";
import { notificationEndpoints } from "@/api/endpoints";
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

export async function getUserId() {
  const userid = cookies().get('userid');
  return userid ? userid.value : undefined;
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
