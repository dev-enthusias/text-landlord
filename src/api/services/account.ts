import { getToken } from "@/lib/actions";

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
  const SECRET_KEY = process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY;

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
