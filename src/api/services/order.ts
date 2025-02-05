import { getToken } from "@/lib/actions";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const createOrder = async (orderItem: {
  grand_total: string;
  cart_id: number;
}) => {
  try {
    const res = await fetch(`${BASE_URL}/private/v1/order/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
      },
      body: JSON.stringify(orderItem),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error creating order:", error);
  }
};

export const getOrders = async () => {
  const token = await getToken();

  try {
    const response = await fetch(`${BASE_URL}/private/v1/order/list`, {
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
    console.error("Error fetching order list:", error);
  }
};

export const getOrderDetails = async (id: number) => {
  const token = await getToken();

  try {
    const response = await fetch(`${BASE_URL}/private/v1/order/details/${id}`, {
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
    console.error(`Error fetching order details for order ID: ${id}`, error);
  }
};
