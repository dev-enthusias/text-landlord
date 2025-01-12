import { AddAccountDataType } from "@/definition";
import { getToken } from "@/lib/actions";

const SECRET_KEY = process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getBanks = async (country: string) => {
  const res = await fetch(`https://api.paystack.co/bank?country=${country}`, {
    headers: {
      Authorization: `Bearer ${await getToken()}`,
    },
  });
  const result = await res.json();

  return result.data;
};

export const resolveAccount = async (bankCode: string, accNo: string) => {
  const res = await fetch(
    `https://api.paystack.co/bank/resolve?account_number=${accNo}&bank_code=${bankCode}`,
    {
      headers: {
        Authorization: `Bearer ${SECRET_KEY}`,
      },
    },
  );

  const result = await res.json();
  return result;
};

export const addAccount = async (data: AddAccountDataType) => {
  const newData = { ...data, percentage_charge: 10 };

  const res = await fetch(`https://api.paystack.co/subaccount`, {
    method: "POST",
    body: JSON.stringify(newData),
    headers: {
      Authorization: `Bearer ${SECRET_KEY}`,
    },
  });

  const result = await res.json();
  return result;
};

export const addAccountToOgaLandlord = async (data: {
  name: string;
  sub_account: string;
  account_number: string;
  account_name: string;
}) => {
  const res = await fetch(`${BASE_URL}/private/v1/bank-account/add`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getToken()}`,
    },
  });

  const result = await res.json();
  return result;
};

export const getAllAcounts = async () => {
  const res = await fetch(`${BASE_URL}/private/v1/bank-account/accounts`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getToken()}`,
    },
  });
  const result = await res.json();

  return result.data;
};

export const setAsDefault = async (id: number) => {
  const res = await fetch(
    `${BASE_URL}/private/v1/bank-account/active-Account/${id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
      },
    },
  );
  const result = await res.json();
  return result;
};

export const updateDefaultAccount = async (id: number) => {
  const res = await fetch(`${BASE_URL}/private/v1/bank-account/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getToken()}`,
    },
  });
  const result = await res.json();
  return result;
};

export const deleteAccount = async (id: number) => {
  const res = await fetch(`${BASE_URL}/private/v1/bank-account/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getToken()}`,
    },
  });
  const result = await res.json();
  return result;
};

export const getDefaultAccont = async () => {
  const res = await fetch(
    `${BASE_URL}/private/v1/bank-account/active-Account/`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
      },
    },
  );

  const result = await res.json();
  return result;
};
