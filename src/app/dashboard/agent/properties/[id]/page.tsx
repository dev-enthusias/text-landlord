import PrevPageButton from "@/components/ui/prev-page";
import ImageSlider from "@/components/ui/image-slider";
import { MapPin } from "lucide-react";
import {
  LandlordPropertyPricingDetails,
  PropertyDescription,
  PropertyFeatures,
  PropertyName,
  PropertyPricing,
} from "@/components/pages/properties";

export default function PropertyDetails() {
  return (
    <>
      <section className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5 lg:top-20">
        <div className="flex gap-x-4">
          <PrevPageButton />
          <h1 className="text-xl font-semibold">Emperica Dazil, Villa</h1>
        </div>
      </section>

      <main className="gap-x-5 p-3 pb-28 lg:grid lg:grid-cols-3 lg:px-10 lg:pt-5">
        <div className="lg:col-span-2">
          <ImageSlider />

          <div className="lg:hidden">
            <section className="mb-4 flex items-center justify-between pt-4">
              <PropertyName />
            </section>

            <PropertyFeatures />
            <PropertyPricing />
          </div>

          <PropertyDescription />
          <button className="mt-4 hidden w-fit rounded-lg bg-primary px-10 py-3 text-lg font-semibold text-black lg:block">
            Edit
          </button>
        </div>

        <div className="hidden lg:block">
          <section className="mb-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-accent">Apartment</p>
            </div>
            <h2 className="font-semibold xl:text-lg">Emperica Dazil, Villa</h2>
            <p className="flex items-center gap-x-1 text-sm xl:text-[14px]">
              <MapPin className="h-3 w-3" /> Palaxisto Emeriando Plaza Road
            </p>
          </section>
          <LandlordPropertyPricingDetails />
          <PropertyFeatures />

          <div className="mb-6 flex flex-wrap items-center justify-between gap-x-5 gap-y-2">
            <div>
              <p className="text-2xl font-semibold">₦10,000,000</p>
            </div>

            <button className="hidden w-fit rounded-lg bg-primary px-10 py-3 text-lg font-semibold text-black lg:block">
              Edit
            </button>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 flex w-full items-center justify-between space-x-6 border-t border-t-gray-300 bg-white px-6 pb-8 pt-4 lg:hidden">
        <button className="w-full rounded-lg border-t border-gray-300 bg-foreground py-3 text-lg font-semibold text-white">
          Delete
        </button>
        <button className="w-full rounded-lg bg-primary py-3 text-lg font-semibold text-black">
          Edit
        </button>
      </footer>
    </>
  );
}
