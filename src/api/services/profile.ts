import { ProfileFormData } from "@/definition";
import { getToken } from "@/lib/actions";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const updateProfile = async (data: ProfileFormData) => {
  const token = await getToken();

  const { name, email, phone, occupation, institution, gender } = data;

  const newData = { name, email, phone, occupation, institution, gender };

  const res = await fetch(`${BASE_URL}/private/v1/user/profile-update`, {
    method: "POST",
    body: JSON.stringify(newData),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await res.json();

  return result;
};
