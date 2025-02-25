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

export async function addTenant(payload: {
  email: string;
  property_id: number;
}) {
  try {
    const token = await getToken();

    const res = await fetch(`${BASE_URL}/private/v1/tenant/add-by-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorRes = await res
        .json()
        .catch(() => ({ message: "Unknown error occurred" }));
      return {
        success: false,
        error: errorRes.message || "Failed to add tenant",
      };
    }

    const data = await res.json();
    return { success: true, data: data.data };
  } catch (error) {
    console.error("Error adding tenant:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}
