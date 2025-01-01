import Filter from "@/components/layout/filter";
import PropertyListing from "@/components/data-visualization/property-listing";
import { getToken } from "@/lib/actions";

export default async function Properties() {
  const token = await getToken();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/private/v1/properties`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await res.json();
  const properties = data.data;

  return (
    <main className="mb-20 flex px-5 pt-7 lg:gap-x-8 lg:px-10 xl:gap-x-10">
      <section className="hidden w-[240px] shrink-0 px-2 lg:block">
        <Filter />
      </section>
      <section className="w-full px-2">
        <PropertyListing properties={properties} />
      </section>
    </main>
  );
}
