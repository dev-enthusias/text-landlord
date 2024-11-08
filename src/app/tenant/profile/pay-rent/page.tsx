import PrevPageButton from "@/components/ui/prev-page";
import {
  PropertyCardLandscape,
  TenantPropertyCard,
} from "@/components/ui/property-card";

export default function PayRent() {
  return (
    <section>
      <header className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5">
        <div className="flex gap-x-2">
          <PrevPageButton className="text-black" />
          <h1 className="text-xl font-semibold text-black">Pay Rent</h1>
        </div>
      </header>

      <div className="px-10 py-7">
        <div className="grid grid-cols-3 gap-x-4">
          <div className="flex flex-col items-center rounded-lg bg-gold py-4 text-white">
            <span className="text-xl font-bold">10</span>
            <h3 className="mt-2 font-semibold">Total</h3>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-accent py-4 text-white">
            <span className="text-xl font-bold">4</span>
            <h3 className="mt-2 font-semibold">Upcoming</h3>
          </div>
          <div className="custom-shadow flex flex-col items-center rounded-lg border bg-white py-4 text-gray-700">
            <span className="text-xl font-bold">2</span>
            <h3 className="mt-2 font-semibold">Overdue</h3>
          </div>
        </div>

        <section className="my-6">
          <div className="space-y-5 lg:hidden">
            <PropertyCardLandscape queryParam="rent" />
            <PropertyCardLandscape status="overdue" queryParam="rent" />
            <PropertyCardLandscape status="upcoming" queryParam="rent" />
          </div>
          <div className="hidden items-stretch gap-5 lg:grid lg:grid-cols-2 xl:grid-cols-3">
            <TenantPropertyCard type="rent" />
            <TenantPropertyCard type="rent" />
            <TenantPropertyCard type="rent" />
            <TenantPropertyCard type="rent" />
            <TenantPropertyCard type="rent" />
            <TenantPropertyCard type="rent" />
            <TenantPropertyCard type="rent" />
            <TenantPropertyCard type="rent" />
            <TenantPropertyCard type="rent" />
          </div>
        </section>
      </div>
    </section>
  );
}
