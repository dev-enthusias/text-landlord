import { apiGet } from "@/api/config";
import { propertyEndpoints } from "@/api/endpoints";
import AddPropertyBtn from "@/components/modals/add-property";
import { PropertyCard } from "@/components/ui/property-card";
import { LandlordPropertiesResponseDataType } from "@/definition";

async function getProperties() {
  const res = await apiGet<LandlordPropertiesResponseDataType>(
    propertyEndpoints.LANDLORD_PROPERTIES,
  );
  return res.data;
}

export default async function Properties() {
  const data = await getProperties();
  console.log(data);

  if (!data) return null;



  return (
    <main className="flex h-full px-5 pb-20 pt-7 lg:gap-x-8 lg:px-10 xl:gap-x-10">
      {/* <section className="w-[240px] shrink-0 px-2">
        <Filter />
      </section> */}
      <section className="flex w-full lg:gap-x-8 xl:gap-x-10">
        <section className="grow">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-lg font-semibold text-black">
              My Properties ({data.properties.list.length})
            </h1>

            <AddPropertyBtn />
          </div>

          <div className="lg:grid-cols grid w-full gap-5 sm:grid-cols-2 min-[875px]:grid-cols-3 2xl:grid-cols-4">
            {data.properties.list.map((property) => (
              <PropertyCard key={property.id} roleid={4} data={property} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
