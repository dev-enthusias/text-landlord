import { LandlordTenantsResponseType } from "@/definition";
import { getToken } from "@/lib/actions";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getTrx() {
  const token = await getToken();

  const res = await fetch(
    `${BASE_URL}/private/v1/transactions/landlord-transactions`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await res.json();
  return data.data as LandlordTenantsResponseType;
}
