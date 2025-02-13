import { WaitListDataType } from "@/definition";

export async function joinWaitList(data: WaitListDataType) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/public/v1/waitlist`,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    },
  );

  const result = await res.json();

  return result;
}
