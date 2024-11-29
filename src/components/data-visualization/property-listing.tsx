import { PropertyCard } from "../ui/property-card";

export default function PropertyListing() {
  return (
    <section>
      <div className="mb-6">
        <p className="font-semibold text-black">Showing 577 search results</p>
      </div>

      <div className="grid w-full gap-5 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
        <PropertyCard
          type="wishlist"
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
  );
}
