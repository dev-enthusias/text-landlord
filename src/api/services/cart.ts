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

export const getPropertiesInCart = async () => {
  const token = await getToken();

  try {
    const response = await fetch(`${BASE_URL}/private/v1/cart-list`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cart list:", error);
  }
};

export const removeFromCart = async (id: number) => {
  const token = await getToken();

  try {
    const response = await fetch(
      `${BASE_URL}/private/v1/remove-from-cart/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cart list:", error);
  }
};
