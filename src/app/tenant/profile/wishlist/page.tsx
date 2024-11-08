import PrevPageButton from "@/components/ui/prev-page";
import {
  PropertyCardLandscape,
  TenantPropertyCard,
} from "@/components/ui/property-card";

export default function Wishlist() {
  return (
    <section>
      <header className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5">
        <div className="flex gap-x-2">
          <PrevPageButton className="text-black" />
          <h1 className="text-xl font-semibold text-black">Wishlist</h1>
        </div>
      </header>

      <div className="px-10 py-7">
        <div className="space-y-5 px-3 py-3 lg:hidden">
          <PropertyCardLandscape />
          <PropertyCardLandscape />
          <PropertyCardLandscape />
          <PropertyCardLandscape />
        </div>

        <div className="hidden gap-5 lg:grid lg:grid-cols-2 lg:px-3 xl:grid-cols-3">
          <TenantPropertyCard type="wishlist" />
          <TenantPropertyCard type="wishlist" />
          <TenantPropertyCard type="wishlist" />
          <TenantPropertyCard type="wishlist" />
        </div>
      </div>
    </section>
  );
}
