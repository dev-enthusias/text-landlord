import {
  getAdvertisedProperties,
  getAllProperties,
  getCountry,
  getPropertyDetails,
  getPropertyTypeAndCategory,
} from "@/api/services/property";
import PropertiesPage from "./_page";

export default async function Properties() {
  const [properties, propertyTypeAndCategory, country, advertisedProperties] =
    await Promise.all([
      getAllProperties(),
      getPropertyTypeAndCategory(),
      getCountry(),
      getAdvertisedProperties(),
    ]);

  const advertisedList = await Promise.all(
    advertisedProperties.data.map((ad: { property_id: number }) =>
      getPropertyDetails(ad.property_id),
    ),
  ).then((results) => results.filter(Boolean));

  const myPropertyDetailsList = await Promise.all(
    properties.properties.list.map((p: { id: number }) =>
      getPropertyDetails(p.id),
    ),
  ).then((results) => results.filter(Boolean));

  return (
    <PropertiesPage
      properties={properties}
      propertyTypeAndCategory={propertyTypeAndCategory}
      country={country}
      advertisedProperties={advertisedList}
      myPropertyDetailsList={myPropertyDetailsList}
    />
  );
}
