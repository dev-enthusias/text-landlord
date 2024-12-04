import Link from "next/link";
import { BackButton } from "@/components/ui/prev-page";
import EditPropertyBtn from "@/components/modals/edit-property";
import {
  Description,
  Features,
  Gallery,
  Location,
  PropertyAgent,
  PropertyNameAndTags,
  PropertyTenants,
  PurchaseProperty,
} from "@/components/pages/properties";
import { routes } from "@/constants/routes";

export default async function PropertyDetails({
  params,
}: {
  params: { id: string };
}) {
  console.log(params);
  return (
    <main className="px-5 py-7 pb-10 lg:px-20 lg:pb-20">
      <div className="mb-8 flex justify-between">
        <BackButton />
        <p className="text-sm">
          <Link
            href={routes.LANDLORD_PROPERTIES}
            className="transition-all duration-300 hover:text-black hover:underline"
          >
            Properties
          </Link>{" "}
          /{" "}
          <span className="cursor-pointer text-black hover:underline">
            Details
          </span>
        </p>
      </div>

      <section className="mb-4 flex items-center justify-between">
        <PropertyNameAndTags
          data={{
            name: "Radical House",
            dealType: "Rent",
            type: "Duplex",
            city: "Lagos",
          }}
        />
        <EditPropertyBtn />
      </section>

      <Gallery />

      <section className="grid grid-cols-5 gap-10">
        <div className="col-span-5 grid gap-y-10 lg:col-span-3">
          <Description />
          <Features />
          <Location />
        </div>

        <div className="col-span-5 flex flex-col-reverse gap-y-10 lg:col-span-2 lg:flex-col">
          <PropertyAgent />
          <PropertyTenants />
          <PurchaseProperty />
        </div>
      </section>
    </main>
  );
}
