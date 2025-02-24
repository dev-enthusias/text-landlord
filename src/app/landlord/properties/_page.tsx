"use client";

import { useState } from "react";
import Image from "next/image";
import AddPropertyBtn from "@/components/modals/add-property";
import { LandlordPropertyCard } from "@/components/ui/property-card";
import {
  Country,
  LandlordPropertiesResponseDataType,
  LandlordPropertyDetailsResponseDataType,
  Property,
  PropertyMetadataResponseDataType,
} from "@/definition";

export default function PropertiesPage({
  properties,
  propertyTypeAndCategory,
  country,
  advertisedProperties,
  myPropertyDetailsList,
  checkDefaultAccount,
}: {
  properties: LandlordPropertiesResponseDataType;
  propertyTypeAndCategory: PropertyMetadataResponseDataType;
  country: Country[];
  advertisedProperties: LandlordPropertyDetailsResponseDataType[];
  myPropertyDetailsList: LandlordPropertyDetailsResponseDataType[];
  checkDefaultAccount: any;
}) {
  const [allOrAdvertised, setAllOrAdvertised] = useState<"all" | "advertised">(
    "all",
  );

  const totalProperties =
    allOrAdvertised === "all"
      ? properties.properties.list.length
      : advertisedProperties.length;

  return (
    <main className="relative flex h-full px-5 pb-20 pt-7 lg:gap-x-8 lg:px-10 xl:gap-x-10">
      <section className="flex w-full lg:gap-x-8 xl:gap-x-10">
        <section className="grow">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-lg font-semibold text-black">
              My Properties ({totalProperties})
            </h1>

            <div className="custome-shadow fixed bottom-20 left-1/2 flex -translate-x-1/2 gap-x-2 rounded-full border bg-white from-gold/20 to-gold/10 p-1.5">
              <button
                className={`rounded-full px-4 py-2 ${allOrAdvertised === "all" ? "bg-black/90 text-white" : "bg-gray-100 text-black"}`}
                onClick={() => setAllOrAdvertised("all")}
              >
                My Properties
              </button>
              <button
                className={`rounded-full px-4 py-2 ${allOrAdvertised === "advertised" ? "bg-black/90 text-white" : "bg-gray-100 text-black"}`}
                onClick={() => setAllOrAdvertised("advertised")}
              >
                Advertised Properties
              </button>
            </div>

            <AddPropertyBtn
            checkDefaultAccount={checkDefaultAccount}
              categories={propertyTypeAndCategory.categories}
              types={propertyTypeAndCategory.type}
              country={country}
            />
          </div>

          <div className="grid w-full gap-5 sm:grid-cols-2 min-[875px]:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4">
            {allOrAdvertised === "all" ? (
              properties.properties.list.length <= 0 ? (
                <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-y-2 px-5">
                  <Image
                    src="/illustrations/undraw_quiet-street.svg"
                    alt="no properties illustration"
                    width={600}
                    height={600}
                  />
                  <p className="text-center text-black">
                    You have not added any property yet.
                  </p>
                </div>
              ) : (
                properties.properties.list.map((property: Property, index) => (
                  <LandlordPropertyCard
                    key={property.id}
                    data={{
                      id: property.id,
                      name: property.name,
                      price: String(
                        myPropertyDetailsList[index].property.rent_amount,
                      ),
                      image: myPropertyDetailsList[index].property.image,
                      status: property.status,
                      address: {
                        address: myPropertyDetailsList[index].property.address,
                      },
                      bedrooms: myPropertyDetailsList[index].property.bedroom,
                      bathrooms: myPropertyDetailsList[index].property.bathroom,
                      size: String(myPropertyDetailsList[index].property.size),
                    }}
                  />
                ))
              )
            ) : (
              advertisedProperties.map((property, index) => (
                <LandlordPropertyCard
                  key={property.property.id}
                  data={{
                    id: property.property.id,
                    name: property.property.name,
                    price: String(
                      myPropertyDetailsList[index].property.rent_amount,
                    ),
                    image: myPropertyDetailsList[index].property.image,
                    status: property.property.status,
                    address: {
                      address: myPropertyDetailsList[index].property.address,
                    },
                    bedrooms: myPropertyDetailsList[index].property.bedroom,
                    bathrooms: myPropertyDetailsList[index].property.bathroom,
                    size: String(myPropertyDetailsList[index].property.size),
                  }}
                />
              ))
            )}
          </div>
        </section>
      </section>
    </main>
  );
}
