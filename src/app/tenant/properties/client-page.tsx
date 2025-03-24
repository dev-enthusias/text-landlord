"use client";

import Filter from "@/components/layout/filter";
import PropertyListing from "@/components/data-visualization/property-listing";
import {
  AdvertisedPropertiesRDT,
  PropertySearchFieldsRDT,
} from "@/definitions/tenant";
import { useState, useEffect } from "react";
import Menu from "@/components/layout/footer-menu";

export default function ClientPropertiesPage({
  searchFields,
  properties,
}: {
  searchFields: PropertySearchFieldsRDT;
  properties: AdvertisedPropertiesRDT["data"];
}) {
  const [data, setData] = useState<AdvertisedPropertiesRDT["data"]>(properties);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [data]);

  return (
    <main className="mb-20 flex px-5 pt-7 lg:gap-x-8 lg:px-10 xl:gap-x-10">
      <section className="hidden w-[240px] shrink-0 px-2 lg:block">
        <Filter searchFieldsData={searchFields} setData={setData} />
      </section>
      <section className="w-full px-2">
        <PropertyListing properties={data} searchFieldData={searchFields} />
      </section>
      <Menu />
    </main>
  );
}
