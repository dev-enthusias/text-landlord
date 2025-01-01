import { PropertyCard } from "../ui/property-card";
import FilterBtn from "../modals/filter";

export default function PropertyListing({ properties }: { properties: any }) {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <p className="font-semibold text-black">
          Showing {properties.length} search results
        </p>
        <FilterBtn />
      </div>

      <div className="grid w-full gap-5 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
        {properties.length <= 0 ? (
          <p>There are no advertised properties</p>
        ) : (
          properties.map((property: any) => (
            <PropertyCard
              type="wishlist"
              key={property.id}
              data={{
                id: 3,
                name: "Property 1",
                price: "$1000",
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
          ))
        )}
      </div>
    </section>
  );
}
