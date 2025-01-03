import { apiGet } from "@/api/config";
import { tenantEndpoints } from "@/api/endpoints";
import { LandlordTenantsResponseType } from "@/definition";
import { getToken } from "@/lib/actions";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getTenants() {
  const token = await getToken();

  const res = await fetch(`${BASE_URL}${tenantEndpoints.GET_TENANTS}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data.data as LandlordTenantsResponseType;
}
