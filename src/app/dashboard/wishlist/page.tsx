import PrevPageButton from "@/components/general/prev-page";
import PropertyCard, {
  PropertyCardLandscape,
} from "@/components/general/property-card";

export default function Wishlist() {
  return (
    <>
      <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5 lg:hidden">
        <div className="flex gap-x-4">
          <PrevPageButton />
          <h1 className="text-xl font-semibold">Wishlist</h1>
        </div>
      </header>

      <div className="mb-5 hidden lg:block lg:p-3">
        <h2 className="text-xl font-semibold">Wishlist</h2>
        <p className="opacity-50">
          Find your saved items, and get ready to order them.
        </p>
      </div>

      <div className="space-y-5 px-3 py-3 lg:hidden">
        <PropertyCardLandscape />
        <PropertyCardLandscape />
        <PropertyCardLandscape />
        <PropertyCardLandscape />
      </div>
      <div className="hidden grid-cols-3 gap-5 lg:grid lg:p-3">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </>
  );
}
