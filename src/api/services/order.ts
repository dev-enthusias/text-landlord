import { getToken } from "@/lib/actions";

export const createOrder = async (orderItem: {
  grand_total: string;
  cart_id: number;
}) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/private/v1/order/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${await getToken()}`,
        },
        body: JSON.stringify(orderItem),
      },
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error creating order:", error);
  }
};
