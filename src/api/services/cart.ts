import { getToken } from "@/lib/actions";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const addToCart = async (credentials: {
  credentials: {
    property_id: string;
    amount: string;
    advertisement_id: string;
  };
}) => {
  const token = await getToken();

  const res = await fetch(`${BASE_URL}/private/v1/add-to-cart`, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data;
};
