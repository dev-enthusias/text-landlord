import PropertyCard from "@/components/ui/property-card";
import OrderCard from "./order-card";

export default function OrderPageContent() {
  return (
    <section className="p-3">
      <div className="mb-5">
        <h2 className="text-xl font-semibold">My Orders</h2>
        <p className="opacity-50">
          You can view all your orders and transaction details here
        </p>
      </div>

      <div className="space-y-5 py-3 lg:hidden">
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>

      <div className="grid-cols-3 py-3 lg:grid">
        <PropertyCard type="order" />
        <PropertyCard type="order" />
        <PropertyCard type="order" />
      </div>
    </section>
  );
}
