import PrevPageButton from "@/components/ui/prev-page";
import ImageSlider from "@/components/ui/image-slider";
import {
  PayRentOrAddToCartBtn,
  PropertyDescription,
  PropertyFeatures,
  PropertyListerContact,
  PropertyName,
  PropertyPricing,
  PropertyPricingDetails,
} from "@/components/pages/properties";
import { routes } from "@/constants/routes";
import Link from "next/link";

export default function PropertyDetailsPage() {
  return (
    <>
      <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5 lg:top-20">
        <div className="flex gap-x-4">
          <PrevPageButton />
          <h1 className="text-xl font-semibold">Emperica Dazil, Villa</h1>
        </div>
      </header>

      <main className="gap-x-5 p-5 lg:grid lg:grid-cols-3 lg:px-10 lg:pt-5">
        <section className="lg:col-span-2">
          <ImageSlider />

          <div className="lg:hidden">
            <PropertyName />
            <PropertyPricingDetails />
            <PropertyFeatures />
            <PropertyPricing />
          </div>

          <PropertyDescription />
          <div className="hidden lg:block">
            <PayRentOrAddToCartBtn />
          </div>

          <div className="mt-5 lg:hidden">
            <PropertyListerContact />
          </div>
        </section>

        <section className="hidden lg:block">
          <PropertyName />
          <PropertyPricingDetails />
          <PropertyFeatures />
          <PropertyPricing />
          <PropertyListerContact />
        </section>
      </main>

      <footer className="fixed bottom-0 flex w-full items-center justify-between gap-x-5 border-t border-t-gray-300 bg-white px-5 py-4 lg:hidden">
        <Link
          href={routes.TENANT_DASHBOARD_CHAT + "/0"}
          className="rounded-lg border-t border-gray-300 bg-foreground px-6 py-3 text-center text-lg font-semibold text-white"
        >
          Get in touch
        </Link>
        <PayRentOrAddToCartBtn />
      </footer>
    </>
  );
}
