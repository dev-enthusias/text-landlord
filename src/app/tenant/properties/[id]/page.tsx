import { BackButton } from "@/components/ui/prev-page";
import {
  Description,
  Features,
  Gallery,
  Location,
  PropertyNameAndTags,
  PropertyOwner,
  PurchaseProperty,
  WishlistButton,
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
        <PropertyNameAndTags
          data={{
            name: "House",
            dealType: "Rent",
            type: "House",
            city: "Lagos",
          }}
        />
        <WishlistButton />
      </section>

      <Gallery />

      <section className="grid grid-cols-5 gap-x-10">
        <div className="col-span-3 grid gap-y-10">
          <Description />
          <Features />
        </div>

        <div className="col-span-2 flex flex-col gap-y-10">
          <PropertyOwner />
          <PurchaseProperty />
        </div>

        <section className="col-span-5 mt-10">
          <Location />
        </section>
      </section>
    </main>
  );
}
