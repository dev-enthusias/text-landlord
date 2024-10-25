import Menu from "@/components/layout/footer-menu";
import {
  LandlordPropertyCard,
  PropertyCardLandscape,
} from "@/components/ui/property-card";
import Topbar from "@/components/layout/topbar";
import { propertyCategories } from "@/constants/data";
import FilterModal from "@/components/ui/filter-modal";

export default function Properties() {
  const propertiesOverview = [
    {
      title: "Total",
      number: 20,
    },
    {
      title: "Occupied",
      number: 15,
    },
    {
      title: "Vacant",
      number: 5,
    },
  ];
  return (
    <>
      <div className="lg:hidden">
        <Topbar />
      </div>

      <main className="pb-24 pt-5">
        <section className="z-50 mb-5 border-b px-3 lg:px-10">
          <div className="mb-10 grid grid-cols-3 gap-x-4">
            {propertiesOverview.map(({ title, number }, i) => (
              <div
                key={i}
                className={`flex flex-col items-center rounded-lg ${i === 0 ? "bg-black text-background" : i === 1 ? "bg-primary-dark" : "custom-shadow bg-white"} py-4`}
              >
                <span className="text-xl font-bold">{number}</span>
                <h3 className="mt-2 font-semibold opacity-80">{title}</h3>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 lg:flex-row">
            <h1 className="flex items-center text-xl font-semibold lg:text-2xl">
              Properties
            </h1>

            <FilterModal />
          </div>

          <ul className="no-scrollbar -mx-3 my-5 flex w-[calc(97vw)] gap-x-5 overflow-scroll px-3 lg:w-full lg:justify-between">
            {propertyCategories.map(({ number, title }, i) => (
              <li
                key={i}
                className="flex shrink-0 flex-col items-center justify-center gap-x-2 space-y-1 rounded-full lg:flex-row lg:border lg:pr-8"
              >
                <div className="z-40 flex h-14 w-14 items-center justify-center rounded-full border text-lg font-bold">
                  {number}
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

        <div className="no-scrollbar flex w-screen min-w-64 grid-cols-3 gap-5 overflow-x-auto px-5 lg:grid lg:w-auto lg:justify-between lg:px-10 xl:hidden">
          <LandlordPropertyCard />
          <LandlordPropertyCard />
          <LandlordPropertyCard />
          <LandlordPropertyCard />
          <LandlordPropertyCard />
          <LandlordPropertyCard />
        </div>

        <div className="no-scrollbar hidden w-screen min-w-64 grid-cols-3 gap-5 overflow-x-auto px-5 lg:w-auto lg:justify-between lg:px-10 xl:grid xl:grid-cols-4">
          <LandlordPropertyCard />
          <LandlordPropertyCard />
          <LandlordPropertyCard />
          <LandlordPropertyCard />
          <LandlordPropertyCard />
          <LandlordPropertyCard />
          <LandlordPropertyCard />
          <LandlordPropertyCard />
        </div>
      </main>

      <Menu />
    </>
  );
}
