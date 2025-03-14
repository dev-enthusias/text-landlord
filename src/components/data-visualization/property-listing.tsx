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
      <div className="mb-6 flex items-center justify-between">
        <p className="font-semibold text-black">
          Showing {properties.length} search results
        </p>
        <FilterBtn properties={properties} searchFields={searchFieldData} />
      </div>

      <div className="grid w-full gap-5 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
        {properties.length <= 0 ? (
          <p>There are no advertised properties</p>
        ) : (
          properties.map((property) => (
            <TenantPropertyCard key={property.id} data={property} roleid={5} />
          ))
        )}
      </div>
    </section>
  );
}
