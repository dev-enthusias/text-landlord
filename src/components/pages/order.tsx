import PrevPageButton from "@/components/ui/prev-page";
import { TenantPropertyCard } from "@/components/ui/property-card";
import OrderCard from "../ui/order-card";

export default function Orders() {
  return (
    <div>
      <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5 lg:hidden">
        <div className="flex gap-x-4">
          <PrevPageButton />
          <h1 className="text-xl font-semibold">Orders</h1>
        </div>
      </header>

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

        <div className="gap-5 py-3 lg:grid lg:grid-cols-2 xl:grid-cols-3">
          <TenantPropertyCard type="order" />
          <TenantPropertyCard type="order" />
          <TenantPropertyCard type="order" />
        </div>
      </section>
    </div>
  );
}
