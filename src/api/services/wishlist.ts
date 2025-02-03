import { getToken } from "@/lib/actions";

export async function getPropertyInWishlist() {
  const token = await getToken();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/private/v1/tenant/wishlist`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await res.json();
  return data;
}

export async function togglePropertyInWishlist(data: { property_id: number }) {
  const token = getToken();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/private/v1/wishlists/add`,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer: ${token}`,
      },
    },
  );

  const result = await res.json();

  return result;
}
