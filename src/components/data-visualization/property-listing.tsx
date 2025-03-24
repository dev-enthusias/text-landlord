"use client";

import { TenantPropertyCard } from "../ui/property-card";
import FilterBtn from "../modals/filter";
import {
  AdvertisedPropertiesRDT,
  PropertySearchFieldsRDT,
} from "@/definitions/tenant";

export default function PropertyListing({
  properties,
  searchFieldData,
}: {
  properties: AdvertisedPropertiesRDT["data"];
  searchFieldData: PropertySearchFieldsRDT;
}) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <div className="text-black">
          <h1 className="text-lg lg:text-xl font-semibold">Properties</h1>
          <p className="text-sm">Showing {properties.length} search results</p>
        </div>
        <FilterBtn properties={properties} searchFields={searchFieldData} />
      </div>

      <div className="grid w-full gap-2 lg:gap-5 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
        {properties.length <= 0 ? (
          <p className="col-span-3 lg:col-span-2 xl:col-span-3 2xl:col-span-4">
            There are no advertised properties found.
          </p>
        ) : (
          properties.map((property) => (
            <TenantPropertyCard key={property.id} data={property} roleid={5} />
          ))
        )}
      </div>
    </section>
  );
}
