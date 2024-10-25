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

export default function PropertyDetailsPage() {
  return (
    <>
      <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5 lg:top-20">
        <div className="flex gap-x-4">
          <PrevPageButton />
          <h1 className="text-xl font-semibold">Emperica Dazil, Villa</h1>
        </div>
      </header>

      <main className="gap-x-5 p-3 pb-28 lg:grid lg:grid-cols-3 lg:px-10 lg:pt-5">
        <section className="lg:col-span-2">
          <ImageSlider />

          <div className="lg:hidden">
            <PropertyName />
            <PropertyPricingDetails />
            <PropertyFeatures />
            <PropertyPricing />
          </div>

          <PropertyDescription />
          <PayRentOrAddToCartBtn />

          <div className="lg:hidden">
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

      <footer className="fixed bottom-0 flex w-full items-center justify-between space-x-6 border-t border-t-gray-300 bg-white px-6 pb-8 pt-4 lg:hidden">
        <button className="w-full rounded-lg border-t border-gray-300 bg-foreground py-3 text-lg font-semibold text-white">
          Get in touch
        </button>
        <PayRentOrAddToCartBtn />
      </footer>
    </>
  );
}
