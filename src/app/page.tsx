import Home from "./_page";
import {
  getPropertyByCategory,
  getPropertyFields,
} from "@/api/services/property";
import { Property } from "@/definition";
import { PropertySearchFieldsRDT } from "@/definitions/tenant";
import { getRole, getToken } from "@/lib/actions";

export default async function LandingPage() {
  const token = await getToken();
  const role = await getRole();
  const {
    data: { categories },
  } = (await getPropertyFields()) as PropertySearchFieldsRDT;

  const getPropertiesByCategory = async () =>
    Promise.all(categories.map(({ name }) => getPropertyByCategory(name)));

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
