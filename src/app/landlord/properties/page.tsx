import { apiGet } from "@/api/config";
import { propertyEndpoints } from "@/api/endpoints";
import { propertyService } from "@/api/services/property";
import AddPropertyBtn from "@/components/modals/add-property";
import { PropertyCard } from "@/components/ui/property-card";
import { LandlordPropertiesResponseDataType } from "@/definition";
import Image from "next/image";

async function getProperties() {
  const res = await apiGet<LandlordPropertiesResponseDataType>(
    propertyEndpoints.LANDLORD_PROPERTIES,
  );
  return res.data;
}

export default async function Properties() {
  const [properties, propertyTypeAndCategory, country] = await Promise.all([
    getProperties(),
    propertyService.getPropertyTypeAndCategory(),
    propertyService.getCountry(),
  ]);

  if (!properties) return null;

  return (
    <main className="flex h-full px-5 pb-20 pt-7 lg:gap-x-8 lg:px-10 xl:gap-x-10">
      {/* <section className="w-[240px] shrink-0 px-2">
        <Filter />
      </section> */}
      <section className="flex w-full lg:gap-x-8 xl:gap-x-10">
        <section className="grow">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-lg font-semibold text-black">
              My Properties ({properties.properties.list.length})
            </h1>

            <AddPropertyBtn
              categories={propertyTypeAndCategory.categories}
              types={propertyTypeAndCategory.type}
              country={country}
            />
          </div>

          <div className="grid w-full gap-5 sm:grid-cols-2 min-[875px]:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4">
            {properties.properties.list.length <= 0 ? (
              <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-y-2 px-5">
                <Image
                  src="/illustrations/undraw_quiet-street.svg"
                  alt="no properties illustration"
                  width={600}
                  height={600}
                />
                <p className="text-center text-black">
                  You have not added or listed any property yet.
                </p>
              </div>
            ) : (
              properties.properties.list.map((property) => (
                <PropertyCard key={property.id} roleid={4} data={property} />
              ))
            )}
          </div>
        </section>
      </section>
    </main>
  );
}
