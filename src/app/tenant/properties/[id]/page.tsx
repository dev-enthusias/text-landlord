import { BackButton } from "@/components/ui/prev-page";
import {
  Description,
  Features,
  Location,
  PropertyNameAndTags,
  PropertyOwner,
  PurchaseProperty,
  WishlistButton,
} from "@/components/pages/properties";
import Gallery from "@/components/gallery";

export default function PropertyDetails() {
  return (
    <main className="px-5 py-7 pb-10 lg:px-20 lg:pb-20">
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
        <div className="flex gap-x-2">
          <WishlistButton />
          <button className="w-full rounded-full bg-gold px-4 py-2 text-sm font-bold text-white">
            Add to Cart
          </button>
        </div>
      </section>

      <Gallery displayPhoto="" gallery={[]} />

      <section className="grid grid-cols-5 gap-10">
        <div className="col-span-5 grid gap-y-10 lg:col-span-3">
          <Description description="Your description text here" />
          <Features features={{ size: "1000", bedroom: "2", bathroom: "2" }} />
        </div>

        <div className="col-span-5 flex flex-col gap-y-10 lg:col-span-2">
          <PropertyOwner />
          <PurchaseProperty rent={1000} totalVacant={1} />
        </div>

        <section className="col-span-5 mt-10">
          <Location
            address="123 Main St"
            city="New York"
            country="USA"
            cord={[40.7128, -74.006]}
          />
        </section>
      </section>
    </main>
  );
}
