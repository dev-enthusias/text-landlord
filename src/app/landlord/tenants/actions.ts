import { apiGet } from "@/api/config";
import { tenantEndpoints } from "@/api/endpoints";
import { LandlordTenantsResponseType } from "@/definition";

export async function getTenants() {
  const res = await apiGet(tenantEndpoints.GET_TENANTS);
  if (res.data === null) return res.error;
  return res.data as LandlordTenantsResponseType;
} 