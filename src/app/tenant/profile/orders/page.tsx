import OrderCard from "@/components/ui/order-card";
import PrevPageButton from "@/components/ui/prev-page";
import { TenantPropertyCard } from "@/components/ui/property-card";
import React from "react";

export default function Orders() {
  return (
    <section>
      <header className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5">
        <div className="flex gap-x-2">
          <PrevPageButton className="text-black" />
          <h1 className="text-xl font-semibold text-black">Orders</h1>
        </div>
      </header>

      <section className="px-10 py-7">
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
    </section>
  );
}
