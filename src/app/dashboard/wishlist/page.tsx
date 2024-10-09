import PrevPageButton from "@/components/general/prev-page";
import { PropertyCardLandscape } from "@/components/general/property-card";

export default function Wishlist() {
  return (
    <>
      <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5">
        <div className="flex gap-x-4">
          <PrevPageButton />
          <h1 className="text-xl font-semibold">Wishlist</h1>
        </div>
      </header>

      <div className="space-y-5 px-3 py-3">
        <PropertyCardLandscape />
        <PropertyCardLandscape />
        <PropertyCardLandscape />
        <PropertyCardLandscape />
      </div>
    </>
  );
}
