import { getToken } from "@/lib/actions";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getLandlordSplitDetails = async (id: number) => {
  const token = await getToken();

  try {
    const response = await fetch(
      `${BASE_URL}/private/v1/bank-account/landlord-active-split-data/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      // Parse the error response as JSON
      const errorData = await response.json();
      throw errorData;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const initializeTrx = async (credentials: {
  email: string;
  amount: number;
  split_code: string;
  payment_type: string;
  id: number;
}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/private/v1/bank-account/landlord-active-split-data`,
    {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
      },
    },
  );
  const data = res.json();
  return data;
};
