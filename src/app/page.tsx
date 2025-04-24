import Home from "./_page";
import { getRole, getToken } from "@/lib/actions";

const getPropertyByCategory = async (category: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/public/v1/properties`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category: category }),
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data.data;
};

export default async function LandingPage() {
  const token = await getToken();
  const role = await getRole();

  const flats = await getPropertyByCategory("flats");
  const apartments = await getPropertyByCategory("apartments");
  const shops = await getPropertyByCategory("shops");
  const buildings = await getPropertyByCategory("buildings");
  const offices = await getPropertyByCategory("offices");
  const rooms = await getPropertyByCategory("rooms");
  const lands = await getPropertyByCategory("lands");
  const shortlets = await getPropertyByCategory("shortlets");

  return (
    <Home
      token={token}
      role={role}
      flat={flats}
      apartment={apartments}
      shop={shops}
      building={buildings}
      office={offices}
      room={rooms}
      land={lands}
      shortlet={shortlets}
    />
  );
}
