import { getToken } from "./actions";

export const BASE_URL = "http://api.ogalandlords.com/api";

const authFetch = async (
  input: RequestInfo,
  init?: RequestInit,
  token?: string,
) => {
  if (!token) {
    const newToken = await getToken();

    if (!newToken) {
      window.location.href = "/login";
      return;
    } else {
      token = newToken;
    }
  }

  const response = await fetch(input, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 401) {
    window.location.href = "/login";
    return;
  }

  return response;
};

export async function postData(urlPath: string, data: any) {
  const response = await fetch(`${BASE_URL}${urlPath}`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}

export const postDataWithToken = async (urlPath: string, data: any) => {
  const response = await authFetch(`${BASE_URL}${urlPath}`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  const result = await response?.json();
  return result;
};

export const getDataWithToken = async (urlPath: string) => {
  const response = await authFetch(`${BASE_URL}${urlPath}`);

  const result = await response?.json();
  return result;
};
