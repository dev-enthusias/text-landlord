import { getToken } from "@/lib/actions";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getLandlordBills() {
  const token = await getToken();

  const res = await fetch(`${BASE_URL}${"/private/v1/bill/landlord"}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data.data as any;
}
