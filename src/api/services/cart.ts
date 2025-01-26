"use server";

import { getToken } from "@/lib/actions";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const addToCart = async (formData: FormData) => {
  const token = await getToken();

  const bodyData = {
    property_id: formData.get("property_id"),
    amount: formData.get("price"),
    advertisement_id: formData.get("advertisement_id"),
  };

  const res = await fetch(`${BASE_URL}/private/v1/add-to-cart`, {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data.data;
};
