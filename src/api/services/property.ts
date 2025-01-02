import { AddTenantDataType } from "@/definition";
import { apiPost } from "../config";
import { propertyEndpoints } from "../endpoints";
import { getToken } from "@/lib/actions";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const propertyService = {
  addTenant: async (data: AddTenantDataType) => {
    const res = await apiPost<any, AddTenantDataType>(
      propertyEndpoints.ADD_TENANT_ENDPOINT,
      data,
    );
    return res;
  },

  addProperty: async (data: any) => {
    const token = await getToken();
    const res = await fetch(`${BASE_URL}/private/v1/property/create`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await res.json();
    return result;
  },

  getPropertyTypeAndCategory: async () => {
    const token = await getToken();
    const res = await fetch(
      `${BASE_URL}${propertyEndpoints.GET_PROPERTY_METADATA_ENDPOINT}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const data = await res.json();
    const { type, categories } = data.data;
    return { type, categories };
  },

  getCountry: async () => {
    const token = await getToken();
    const res = await fetch(`${BASE_URL}/public/v1/countries`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    return data.data;
  },
  getStates: async (id: number | string) => {
    const token = await getToken();
    const res = await fetch(`${BASE_URL}/public/v1/states/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    return data.data;
  },

  getCities: async (id: string | number) => {
    const token = await getToken();
    const res = await fetch(`${BASE_URL}/public/v1/cities/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    return data.data;
  },
};
