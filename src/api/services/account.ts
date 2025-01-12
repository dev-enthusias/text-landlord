import { AddAccountDataType } from "@/definition";
import { getToken } from "@/lib/actions";

const SECRET_KEY = process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY;

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
