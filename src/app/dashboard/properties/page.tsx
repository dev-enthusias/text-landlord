import Menu from "@/components/general/footer-menu";
import { PropertyCardLandscape } from "@/components/general/property-card";
import Topbar from "@/components/general/topbar";
import { propertyCategories } from "@/constants/data";
import { FilterIcon } from "lucide-react";

export default function Properties() {
  return (
    <>
      <Topbar />

      <main className="pb-24 pt-5">
        <section className="z-50 border-b px-3">
          <h1 className="mb-3 flex items-center text-xl font-semibold">
            Properties
          </h1>

          <button className="mb-3 flex w-full items-center justify-between rounded-lg border bg-gray-50 px-4 py-3">
            <span className="text-xs">
              Filter by categories, beds, baths, area
            </span>
            <FilterIcon size={16} />
          </button>

          <ul className="no-scrollbar -mx-3 my-5 flex w-[calc(97vw)] gap-x-6 overflow-scroll px-3">
            {propertyCategories.map(({ icon, title }, i) => (
              <li
                key={i}
                className="flex flex-col items-center justify-center space-y-1"
              >
                <div className="z-40 flex h-14 w-14 items-center justify-center rounded-full border">
                  {icon}
                </div>
                <h3 className="text-[14px] font-medium">{title}</h3>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-6 p-3">
          <PropertyCardLandscape />
          <PropertyCardLandscape />
          <PropertyCardLandscape />
          <PropertyCardLandscape />
          <PropertyCardLandscape />
          <PropertyCardLandscape />
        </section>
      </main>

      <Menu />
    </>
  );
}
