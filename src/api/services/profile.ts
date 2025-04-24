import { ProfileFormData } from "@/definition";
import { getToken } from "@/lib/actions";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://api.ogalandlords.com/api";

export const updateProfile = async (data: ProfileFormData) => {
  const token = await getToken();

  const res = await fetch(`${BASE_URL}/private/v1/user/profile-update`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await res.json();

  return result;
};

export const updateProfilePhoto = async (data: any) => {
  const token = await getToken();

  const res = await fetch(`${BASE_URL}/private/v1/user/profile-image-update`, {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await res.json();

  return result;
};

export const getProfileDetails = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/private/v1/user/profile`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch profile details");
  }

  const result = await res.json();

  return result.data;
};
