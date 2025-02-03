import PrevPageButton from "@/components/ui/prev-page";
import { PropertyCard } from "@/components/ui/property-card";
import { getToken } from "@/lib/actions";

export default async function Wishlist() {
  const token = await getToken();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/private/v1/tenant/wishlist`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await res.json();
  const properties = data.data.list;

  return (
    <section>
      <header className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5">
        <div className="flex gap-x-2">
          <PrevPageButton className="text-black" />
          <h1 className="text-xl font-semibold text-black">Wishlist</h1>
        </div>
      </header>

      <div className="px-10 py-7">
        <div className="hidden gap-5 lg:grid lg:grid-cols-2 lg:px-3 xl:grid-cols-3">
          {properties.length <= 0 ? (
            <p>You have not added any property to wishlist</p>
          ) : (
            properties.map((list: any) => (
              <PropertyCard
                type="wishlist"
                roleid={5}
                key={list.id}
                data={list.property}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
