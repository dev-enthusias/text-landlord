"use client";

import Menu from "@/components/layout/footer-menu";
import FilterModal from "@/components/ui/filter-modal";
import {
  PropertyCardLandscape,
  TenantPropertyCard,
} from "@/components/ui/property-card";
import Topbar from "@/components/layout/topbar";
import { propertyCategories } from "@/constants/data";

export default function TenantProperties() {
  return (
    <>
      <div className="lg:hidden">
        <Topbar />
      </div>

      <main className="pb-24 pt-5">
        <section className="z-50 mb-5 border-b px-3 lg:px-10">
          <div className="flex flex-col gap-3 lg:flex-row">
            <h1 className="flex items-center text-xl font-semibold lg:text-2xl xl:text-3xl">
              Properties
            </h1>

            <FilterModal />
          </div>

          <ul className="no-scrollbar -mx-3 my-5 flex w-[calc(97vw)] gap-x-6 overflow-scroll px-3 lg:w-full lg:justify-between">
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
          <TenantPropertyCard />
          <TenantPropertyCard />
          <TenantPropertyCard />
          <TenantPropertyCard />
          <TenantPropertyCard />
          <TenantPropertyCard />
        </div>

        <div className="no-scrollbar hidden w-screen min-w-64 grid-cols-3 gap-5 overflow-x-auto px-5 lg:w-auto lg:justify-between lg:px-10 xl:grid xl:grid-cols-4">
          <TenantPropertyCard />
          <TenantPropertyCard />
          <TenantPropertyCard />
          <TenantPropertyCard />
          <TenantPropertyCard />
          <TenantPropertyCard />
          <TenantPropertyCard />
          <TenantPropertyCard />
        </div>
      </main>

      <Menu />
    </>
  );
}
