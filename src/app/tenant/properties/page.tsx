import {
  getAllAdvertisedProperties,
  getPropertyFields,
} from "@/api/services/property";
import {
  AdvertisedPropertiesRDT,
  PropertySearchFieldsRDT,
} from "@/definitions/tenant";
import ClientPropertiesPage from "./client-page";
import Menu from "@/components/layout/footer-menu";

export default async function Properties() {
  const { data } = (await getAllAdvertisedProperties({
    types: ["Commercial", "Residential", "Industrial", "Land"],
  })) as AdvertisedPropertiesRDT;
  const searchFields = (await getPropertyFields()) as PropertySearchFieldsRDT;

  return (
    <>
      <ClientPropertiesPage searchFields={searchFields} properties={data} />
      <Menu />
    </>
  );
}
