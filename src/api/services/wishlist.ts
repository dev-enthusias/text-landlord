"use server";

import { getToken } from "@/lib/actions";

export async function removePropertyFromWishlist(id: number) {
  const token = getToken();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/private/v1/wishlists/add`,
    {
      method: "POST",
      body: JSON.stringify({ property_id: id }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer: ${token}`,
      },
    },
  );
  console.log(res);

  const result = await res.json();

  console.log(result);
}
