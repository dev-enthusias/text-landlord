import { getRole, getToken } from "@/lib/actions";
import Home from "./_page";
import { getPropertyByCategory } from "@/api/services/property";

export default async function LandingPage() {
  const token = await getToken();
  const role = await getRole();
  const categories = [
    "flat",
    "apartment",
    "shop",
    "building",
    "office",
    "room",
    "land",
    "shortlet",
  ];
  const properties = await Promise.all(
    categories.map((category) => getPropertyByCategory(category)),
  );
  const [flats, apartment, shop, building, office, room, land, shortlet] =
    properties;

  return (
    <Home
      token={token}
      role={role}
      flat={flats}
      apartment={apartment}
      shop={shop}
      building={building}
      office={office}
      room={room}
      land={land}
      shortlet={shortlet}
    />
  );
}
