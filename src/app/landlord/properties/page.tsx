import { BASE_URL } from "@/api/config";
import AddPropertyBtn from "@/components/modals/add-property";
import { PropertyCard } from "@/components/ui/property-card";
import { LandlordPropertiesResponseDataType } from "@/definition";

import { isAxiosError } from "axios";

async function getLandlordProperties(): Promise<
  LandlordPropertiesResponseDataType | undefined
> {
  try {
    const res = await fetch(`${BASE_URL}/private/v1/property/list`);
    const result = await res.json();
    console.log(result);
    // if (res.status === 200 && res.data.result) return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) return error.response?.data;
  }
}

export default async function Properties() {
  const data = await getLandlordProperties();

  return (
    <main className="mb-20 flex px-5 pt-7 lg:gap-x-8 lg:px-10 xl:gap-x-10">
      {/* <section className="w-[240px] shrink-0 px-2">
        <Filter />
      </section> */}
      <section className="flex min-h-[65.5vh] w-full lg:gap-x-8 xl:gap-x-10">
        <section className="grow">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-lg font-semibold text-black">
              My Properties (0)
            </h1>

            <AddPropertyBtn />
          </div>

          <div className="lg:grid-cols grid w-full gap-5 sm:grid-cols-2 min-[875px]:grid-cols-3 2xl:grid-cols-4">
            {data?.properties.list.map((property) => (
              <PropertyCard key={property.id} roleid={4} data={property} />
            ))}
          </div>
        </section>

        {/* <div className="custom-shadow max-h-screen shrink-0 overflow-hidden rounded-lg bg-gray-200 lg:w-[340px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.95592331531633!3d-37.81621897975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778bda6c69c3e3!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1619194702645!5m2!1sen!2sau"
            width="340"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div> */}
      </section>
    </main>
  );
}
