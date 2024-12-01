
import PrevPageButton from "@/components/ui/prev-page";
import { PropertyCard } from "@/components/ui/property-card";

export default function Orders() {
  return (
    <section>
      <header className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5">
        <div className="flex gap-x-2">
          <PrevPageButton className="text-black" />
          <h1 className="text-xl font-semibold text-black">Orders</h1>
        </div>
      </header>

      <section className="px-5 py-7 lg:px-10">
        <div className="grid gap-5 py-3 lg:grid-cols-2 xl:grid-cols-3">
          <PropertyCard
            type="order"
            data={{
              id: 3,
              name: "Property 1",
              image: "/images/property-1.jpg",
              deal_type: "Rent",
              type: "Commercial",
              completion: "Completed",
              status: "pending",
              total_unit: null,
              total_occupied: null,
              total_rent: null,
              total_sell: null,
            }}
            roleid={5}
          />
          <PropertyCard
            type="order"
            data={{
              id: 3,
              name: "Property 1",
              image: "/images/property-1.jpg",
              deal_type: "Rent",
              type: "Commercial",
              completion: "Completed",
              status: "pending",
              total_unit: null,
              total_occupied: null,
              total_rent: null,
              total_sell: null,
            }}
            roleid={5}
          />
        </div>
      </section>
    </section>
  );
}
