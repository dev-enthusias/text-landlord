import { getOrderDetails, getOrders } from "@/api/services/order";
import { OrderCard } from "@/components/ui/order-card";
import PrevPageButton from "@/components/ui/prev-page";
import { OrderDetailsDataType, OrdersDataType } from "@/definition";

export default async function Orders() {
  const orders = (await getOrders()) as OrdersDataType;

  const allOrderDetails = await Promise.all(
    orders.data.list.map(
      async (order) =>
        (await getOrderDetails(order.id)) as OrderDetailsDataType,
    ),
  );

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
          {allOrderDetails
            .filter((order) => order.data.list.length > 0)
            .map((orderDetail, i) => (
              <OrderCard
                key={orderDetail.data.list[0].id}
                orderDetailsData={orderDetail}
                orderData={orders.data.list[i]}
              />
            ))}
        </div>
      </section>
    </section>
  );
}
