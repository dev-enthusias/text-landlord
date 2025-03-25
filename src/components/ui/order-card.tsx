import Link from "next/link";
import { routes } from "@/constants/routes";
import PropertyPhoto from "./property-photo";
import { Order, OrderDetailsDataType } from "@/definition";

export function OrderCard({
  orderDetailsData,
  orderData,
}: {
  orderDetailsData: OrderDetailsDataType;
  orderData: Order;
}) {
  const order = orderDetailsData.data.list[0];

  if (order === undefined) return null;

  return (
    <Link
      href={`${routes.TENANT_ORDERS}/${orderData.id}`}
      className="block w-full rounded-lg border bg-white p-2 font-lato shadow-gold transition duration-300 ease-out hover:shadow-lg"
    >
      <article className="group flex gap-x-1 sm:flex-col">
        <PropertyPhoto photo={order.property?.image} />{" "}
        {/* Use the correct image URL */}
        <div className="grow pt-2">
          <div className="px-2">
            <div className="flex justify-between">
              <PropertyPrice price={order.price} />
              <p
                className={`flex items-center justify-center rounded-full px-4 py-0.5 text-xs font-semibold capitalize leading-none ${order.payment_status.toLowerCase() === "unpaid" ? "bg-gray-600/10 text-gray-500" : "bg-green-600/10 text-green-500"}`}
              >
                {order.payment_status}
              </p>
            </div>

            <div className="mt-1 flex items-center gap-x-3">
              <h3 className="font-bold text-gray-600">{order.property.name}</h3>
              <span className="rounded bg-accent px-2 py-[1px] text-xs font-semibold text-white">
                Rent
              </span>
            </div>

            <p className="mt-1 text-sm">
              Order date:{" "}
              <span className="font-semibold text-gray-600">
                {orderData.date}
              </span>
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}

function PropertyPrice({ price }: { price: string }) {
  return (
    <p className="flex items-center gap-x-1 text-lg font-bold text-accent">
      {price}
      <span className="text-xs font-medium text-gray-500 opacity-80">
        / year
      </span>
    </p>
  );
}
