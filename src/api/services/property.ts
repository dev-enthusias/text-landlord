import {
  AddTenantDataType,
  PropertyMetadataResponseDataType,
} from "@/definition";
import { apiGet, apiPost } from "../config";
import { propertyEndpoints } from "../endpoints";

export const propertyService = {
  getPropertyMetadata: async () => {
    const res = await apiGet<PropertyMetadataResponseDataType>(
      propertyEndpoints.GET_PROPERTY_METADATA_ENDPOINT,
    );

    return res;
  },
  addTenant: async (data: AddTenantDataType) => {
    const res = await apiPost<any, AddTenantDataType>(
      propertyEndpoints.ADD_TENANT_ENDPOINT,
      data,
    );
    return res;
  },
};
