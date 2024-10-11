import Menu from "@/components/general/footer-menu";
import PropertyCard, {
  PropertyCardLandscape,
} from "@/components/general/property-card";
import Topbar from "@/components/general/topbar";
import { propertyCategories } from "@/constants/data";
import FilterModal from "../modals/filter-modal";

export default function Properties() {
  return (
    <>
      <div className="lg:hidden">
        <Topbar />
      </div>

      <main className="pb-24 pt-5">
        <section className="z-50 border-b px-3 lg:px-10">
          <div className="flex flex-col gap-3 lg:flex-row">
            <h1 className="flex items-center text-xl font-semibold lg:text-3xl">
              Properties
            </h1>

            <FilterModal />
          </div>

          <ul className="no-scrollbar -mx-3 my-5 flex w-[calc(97vw)] gap-x-6 overflow-scroll px-3 lg:w-full lg:justify-between">
            {propertyCategories.map(({ icon, title }, i) => (
              <li
                key={i}
                className="flex flex-col items-center justify-center gap-x-2 space-y-1 lg:flex-row lg:border rounded-full lg:pr-8"
              >
                <div className="z-40 flex h-14 w-14 items-center justify-center rounded-full border">
                  {icon}
                </div>
                <h3 className="text-[14px] font-medium">{title}</h3>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-6 p-3 lg:hidden">
          <PropertyCardLandscape />
          <PropertyCardLandscape />
          <PropertyCardLandscape />
          <PropertyCardLandscape />
          <PropertyCardLandscape />
          <PropertyCardLandscape />
        </section>

        <section className="hidden justify-between gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid lg:grid-cols-4 lg:p-10">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </section>
      </main>

      <Menu />
    </>
  );
}
