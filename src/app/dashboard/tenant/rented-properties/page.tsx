import PrevPageButton from "@/components/general/prev-page";
import PropertyCard, {
  PropertyCardLandscape,
} from "@/components/general/property-card";

export default function RentedProperties() {
  return (
    <>
      <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5 lg:hidden">
        <div className="flex gap-x-4">
          <PrevPageButton />
          <h1 className="text-xl font-semibold">Rented Properties</h1>
        </div>
      </header>

      <main className="p-3">
        <section>
          <div className="mb-5">
            <h2 className="text-xl font-semibold">Rented Properties</h2>
            <p className="opacity-50">
              View all your rented properties, overdue, and upcoming rents.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-x-4">
            <div className="flex flex-col items-center rounded-lg bg-primary-dark py-4 text-black">
              <span className="text-xl font-bold">10</span>
              <h3 className="mt-2 font-semibold opacity-80">Total</h3>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-accent py-4 text-white">
              <span className="text-xl font-bold">4</span>
              <h3 className="mt-2 font-semibold opacity-80">Upcoming</h3>
            </div>
            <div className="flex flex-col items-center rounded-lg border border-red-500 bg-red-600 py-4 text-white">
              <span className="text-xl font-bold">2</span>
              <h3 className="mt-2 font-semibold opacity-80">Overdue</h3>
            </div>
          </div>

          <section className="my-6">
            <h3 className="mb-2 text-[14px] font-semibold">
              All rented properties
            </h3>
            <div className="space-y-5 lg:hidden">
              <PropertyCardLandscape queryParam="rent" />
              <PropertyCardLandscape status="overdue" queryParam="rent" />
              <PropertyCardLandscape status="upcoming" queryParam="rent" />
            </div>
            <div className="hidden grid-cols-3 items-stretch gap-5 lg:grid">
              <PropertyCard queryParam="rent" />
              <PropertyCard status="overdue" queryParam="rent" />
              <PropertyCard status="upcoming" queryParam="rent" />
              <PropertyCard queryParam="rent" />
              <PropertyCard status="overdue" queryParam="rent" />
              <PropertyCard status="upcoming" queryParam="rent" />
              <PropertyCard queryParam="rent" />
              <PropertyCard status="overdue" queryParam="rent" />
              <PropertyCard status="upcoming" queryParam="rent" />
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
