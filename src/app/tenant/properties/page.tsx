import Filter from "@/components/layout/filter";
import PropertyListing from "@/components/data-visualization/property-listing";

export default function Properties() {
  return (
    <main className="mb-20 flex px-5 lg:px-10 pt-7 lg:gap-x-8 xl:gap-x-10">
      <section className="hidden w-[240px] shrink-0 px-2 lg:block">
        <Filter />
      </section>
      <section className="w-full px-2">
        <PropertyListing />
      </section>
    </main>
  );
}
