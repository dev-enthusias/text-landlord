import Home from "./_page";
import { getPropertyByCategory } from "@/api/services/property";
import { getRole, getToken } from "@/lib/actions";

const categories = [
  "flat",
  "apartment",
  "shop",
  "building",
  "office",
  "room",
  "land",
  "shortlet",
] as const;

const getPropertiesByCategory = async () =>
  Promise.all(categories.map((category) => getPropertyByCategory(category)));

export default async function LandingPage() {
  const token = await getToken();
  const role = await getRole();
  const [
    flats,
    apartments,
    shops,
    buildings,
    offices,
    rooms,
    lands,
    shortlets,
  ] = await getPropertiesByCategory();

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
