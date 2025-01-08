import { AddGalleryPhotoDataType } from "@/definition";
import { propertyEndpoints } from "../endpoints";
import { getToken } from "@/lib/actions";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const addProperty = async (data: any) => {
  const token = await getToken();
  const formData = new FormData();

  for (const key in data) {
    if (key === "default_image") {
      formData.append("default_image", data.default_image[0]);
    } else {
      formData.append(key, data[key]);
    }
  }

  const res = await fetch(`${BASE_URL}/private/v1/property/store`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await res.json();
  return result;
};

export const addPropertyBasicInfo = async (data: any, id: number) => {
  const token = await getToken();

  const res = await fetch(
    `${BASE_URL}/private/v1/property/update-basic-info/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const result = await res.json();
  return result;
};

export const createAdvert = async (data: any) => {
  const token = await getToken();

  const res = await fetch(`${BASE_URL}/private/v1/advertisement/create`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await res.json();
  return result;
};

export const addGalleryPhoto = async (
  data: { [key: string]: any } & AddGalleryPhotoDataType,
) => {
  const token = await getToken();
  const formData = new FormData();

  for (const key in data) {
    if (key === "image" && data.image) {
      formData.append("image", data?.image[0]);
    } else {
      formData.append(key, data[key]);
    }
  }

  const res = await fetch(`${BASE_URL}/private/v1/property/add-gallery`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await res.json();
  return result;
};

export const addFloorPlanPhoto = async (
  data: { [key: string]: any } & AddGalleryPhotoDataType,
) => {
  const token = await getToken();
  const formData = new FormData();

  for (const key in data) {
    if (key === "image" && data.image) {
      formData.append("image", data?.image[0]);
    } else {
      formData.append(key, data[key]);
    }
  }

  const res = await fetch(`${BASE_URL}/private/v1/property/add-floorplan`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await res.json();
  return result;
};

export const getPropertyTypeAndCategory = async () => {
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
  const { type, categories, completion } = data.data;
  return { type, categories, completion };
};

export const getCountry = async () => {
  const token = await getToken();
  const res = await fetch(`${BASE_URL}/public/v1/countries`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data.data;
};

export const getStates = async (id: number | string) => {
  const token = await getToken();
  const res = await fetch(`${BASE_URL}/public/v1/states/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data.data;
};

export const getCities = async (id: string | number) => {
  const token = await getToken();
  const res = await fetch(`${BASE_URL}/public/v1/cities/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data.data;
};
