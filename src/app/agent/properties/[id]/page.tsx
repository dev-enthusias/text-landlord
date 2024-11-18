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

export default function PropertyDetails() {
  return (
    <main className="px-20 py-7 pb-20">
      <div className="mb-8 flex justify-between">
        <BackButton />
        <p className="text-sm">
          Properties / <span className="text-black">Details</span>
        </p>
      </div>

      <section className="mb-4 flex items-center justify-between">
        <PropertyNameAndTags />
        <EditPropertyBtn />
      </section>

      <Gallery />

      <section className="grid grid-cols-5 gap-x-10">
        <div className="col-span-3 grid gap-y-10">
          <Description />
          <Features />
          <Location />
        </div>

        <div className="col-span-2 flex flex-col gap-y-10">
          <PropertyAgent />
          <PropertyTenants />
          <PurchaseProperty />
        </div>
      </section>
    </main>
  );
}
