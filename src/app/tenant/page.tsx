import Link from "next/link";
import { WalletOverview } from "@/components/data-visualization/wallet-overview";
import { LiaCoinsSolid } from "react-icons/lia";
import { FaHourglassHalf, FaLongArrowAltRight } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
import { getProfileDetails } from "@/api/services/profile";
import { getUserId } from "@/lib/actions";
import ChatList from "@/components/data-visualization/chat-list";
import greetUser from "@/utils/greet";
import { getAllAdvertisedProperties } from "@/api/services/property";
import { TenantPropertyCardPotrait } from "@/components/ui/property-card";
import { TenantAdvertisedProperties } from "@/definition";
import { MdArrowOutward } from "react-icons/md";
import { getOrderDetails, getOrders } from "@/api/services/order";
import { MergedOrder, OrderRDT } from "@/definitions/tenant";
import Image from "next/image";

export default async function Home() {
  const profileDetails = await getProfileDetails();
  const userId = (await getUserId()) as string;
  const properties = await getAllAdvertisedProperties({
    types: ["Commercial", "Residential", "Industrial", "Land"],
  });
  const orders = (await getOrders()) as OrderRDT;
  const orderDetails: MergedOrder[] = await Promise.all(
    orders.data.list.slice(0, 5).map(async (order) => {
      const orderDetail = await getOrderDetails(order.id);
      return { ...order, ...orderDetail.data.list[0] }; // Merge order with its details
    }),
  );

  return (
    <section className="mx-auto w-full max-w-[1240px] px-3 py-7 lg:px-20">
      {/* Greeting */}
      <section className="font-cormorant">
        <h1 className="text-[24px] font-bold text-black lg:text-2xl">
          {greetUser()}, {profileDetails?.profile_info.name ?? ""}
        </h1>
        <p className="font-semibold text-black lg:text-lg">
          Let us help you track your rentals
        </p>
      </section>

      <div className="mt-5 grid grid-cols-7 items-start gap-5">
        {/* Wallet and Rental Summary */}
        <section className="col-span-7 grid gap-3 lg:col-span-5 lg:gap-5">
          <WalletOverview />
          <div className="no-scrollbar flex w-full gap-3 overflow-x-auto sm:grid sm:grid-cols-2 md:grid-cols-3 lg:gap-5">
            <FinanceSummary
              title="Rented Properties"
              icon={<LiaCoinsSolid />}
              total="0"
              description={<p>Total properties rented</p>}
              color="#4A4A4A"
              textColor="#ffffff"
            />
            <FinanceSummary
              title="Total Overdue"
              icon={<RiErrorWarningFill size={14} />}
              total="0"
              description={<p>₦0 Sum of overdue rent</p>}
              color="#D32F2F"
              textColor="#ffffff"
            />
            <FinanceSummary
              title="Total Upcoming"
              icon={<FaHourglassHalf size={14} />}
              total="0"
              description={<p>₦0 Sum of upcoming rent</p>}
              color="#D4A017"
              textColor="#000000"
            />
          </div>
        </section>

        {/* Chat */}
        <section className="col-span-7 hidden lg:col-span-2 lg:block">
          <div className="rounded-lg bg-white px-3 py-3">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-black">Chats</h2>
              <Link href={"/chat"} className="text-sm text-accent underline">
                See all
              </Link>
            </div>
            <ChatList id={userId} max={3} />
          </div>
        </section>

        {/* Properties */}
        {properties.length > 0 && (
          <section className="col-span-7">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-black lg:text-xl">
                Rent Property
              </h2>
              <Link
                href="/tenant/properties"
                className="flex items-center gap-x-1 border-b border-accent text-sm font-medium text-accent lg:text-base"
              >
                View more <MdArrowOutward className="mt-1" />
              </Link>
            </div>
            <div className="no-scrollbar flex w-full gap-3 overflow-x-auto sm:grid-cols-2 md:grid-cols-3 lg:grid lg:grid-cols-4">
              {properties
                .slice(0, 4)
                .map((property: TenantAdvertisedProperties) => (
                  <TenantPropertyCardPotrait
                    key={property.id}
                    data={property}
                    roleid={5}
                  />
                ))}
            </div>
          </section>
        )}

        {/* Orders */}
        <section className="col-span-7">
          <div className="rounded-lg bg-white px-2 py-4 lg:px-5">
            <div className="mb-4">
              <h2 className="hidden text-lg font-semibold text-black lg:block">
                Rental Payment Overview
              </h2>
              <h2 className="text-lg font-semibold text-black lg:hidden">
                Order History
              </h2>
            </div>

            {orders.data.list.length <= 0 ? (
              <p>You have not purchased any property yet</p>
            ) : (
              <div
                role="grid"
                aria-label="Rental Payment Overview"
                className="hidden lg:block"
              >
                <div
                  role="row"
                  className="mb-3 grid grid-cols-8 items-center gap-x-3 text-sm font-semibold"
                >
                  <h3 role="columnheader" className="col-span-2 text-left">
                    Property
                  </h3>
                  <h3 role="columnheader">Start Date</h3>
                  <h3 role="columnheader">Grace Period</h3>
                  <h3 role="columnheader">Rent Amount</h3>
                  <h3 role="columnheader">Order Status</h3>
                  <h3 role="columnheader">Payment Status</h3>
                  <h3 role="columnheader"></h3>
                </div>
                <div className="grid gap-y-3">
                  {orderDetails.map((order) => {
                    return <PaymentHistoryLine key={order.id} data={order} />;
                  })}
                </div>
              </div>
            )}

            <div className="grid gap-3 lg:hidden">
              {orderDetails.map((order) => {
                return <PaymentHistoryLineMobile key={order.id} data={order} />;
              })}
            </div>
          </div>
        </section>

        {/* Chat */}
        <section className="col-span-7 lg:col-span-2 lg:hidden">
          <div className="rounded-lg bg-white px-3 py-3">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-black">Chats</h2>
              <Link href={"/chat"} className="text-sm text-accent underline">
                See all
              </Link>
            </div>
            <ChatList id={userId} max={3} />
          </div>
        </section>
      </div>
    </section>
  );
}

function FinanceSummary({
  title,
  icon,
  total,
  description,
  color,
  textColor,
}: {
  title: string;
  icon: React.ReactNode;
  total: string;
  description: React.ReactNode;
  color: string;
  textColor?: string;
}) {
  return (
    <article
      className="w-full max-w-[250px] shrink-0 rounded-lg px-5 py-3 sm:w-auto"
      style={{ background: color, color: textColor }}
    >
      <div className="flex items-center gap-x-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 backdrop-blur-lg">
          {icon}
        </div>
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
      <p className="ml-9 py-1 text-2xl font-bold">{total}</p>
      <div className="ml-9 text-xs">{description}</div>
    </article>
  );
}

function PaymentHistoryLine({ data }: { data: MergedOrder }) {
  return (
    <article
      role="row"
      className="hidden grid-cols-8 items-center gap-x-3 border-b border-b-gray-200 pb-2 lg:grid"
    >
      <div role="gridcell" className="col-span-2 flex items-center gap-x-2">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={data.property.image}
            alt={`${data.property.name} photo`}
            fill
          />
        </div>
        <h3 className="font-semibold text-gray-700">{data.property.name}</h3>
      </div>
      <div role="gridcell">{data.date}</div>
      <div role="gridcell">
        {data.grace_period} {data.grace_period > 1 ? "weeks" : "week"}
      </div>
      <div role="gridcell">{data.grand_total}</div>
      <div
        role="gridcell"
        className={`w-fit rounded-full px-2 py-0.5 text-sm ${data.status === "pending" ? "bg-[#D4A017]/10 text-[#D4A017]" : "bg-green-600/10 text-green-600"}`}
      >
        {data.status === "completed"
          ? "Completed"
          : data.status === "pending"
            ? "Pending"
            : ""}
      </div>
      <div
        role="gridcell"
        className={`w-fit rounded-full px-2 py-0.5 text-sm capitalize ${data.payment_status !== "paid" ? "bg-[#D32F2F]/10 text-[#D32F2F]" : "bg-green-600/10 text-green-600"}`}
      >
        {data.payment_status === "paid" ? "paid" : "not paid"}
      </div>
      <div role="gridcell">
        <Link
          href={`/tenants/orders/${data.id}`}
          className="flex shrink-0 items-center gap-x-1 text-sm font-semibold"
        >
          View Details <MdArrowOutward />
        </Link>
      </div>
    </article>
  );
}

function PaymentHistoryLineMobile({ data }: { data: MergedOrder }) {
  return (
    <article className="rounded-xl border border-gray-300 bg-white p-2 lg:hidden">
      <div className="mb-2 flex items-center gap-x-2 border-b border-b-gray-200 px-2 pb-2">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={data.property.image}
            alt={`${data.property.name} photo`}
            fill
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-700">{data.property.name}</h3>
          <Link
            href={`/tenants/orders/${data.id}`}
            className="text-xs underline"
          >
            View Details
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-lg px-2 pb-2 text-sm">
        <p>Rent Amount</p>
        <p className="font-semibold text-black">₦650,000</p>
      </div>

      <div className="flex items-center justify-between rounded-lg bg-gray-100 p-2 text-sm">
        <p>Payment Status</p>
        <div
          role="gridcell"
          className={`rounded-full px-2 py-0.5 text-sm capitalize ${data.payment_status !== "paid" ? "bg-[#D32F2F]/10 text-[#D32F2F]" : "bg-green-600/10 text-green-600"}`}
        >
          {data.payment_status === "paid" ? "paid" : "not paid"}
        </div>
      </div>

      <div className="flex items-center justify-between py-2 px-2 text-sm">
        <div className="col-span-2 flex items-center gap-x-1">
          <p>Order Status</p>
        </div>
        <div>
          <span
            className={`rounded-full px-2 py-1 capitalize ${data.status === "pending" ? "bg-[#D4A017]/10 text-[#D4A017]" : "bg-green-600/10 text-green-600"}`}
          >
            {data.status === "completed"
              ? "Completed"
              : data.status === "pending"
                ? "Pending"
                : ""}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-lg bg-gray-100 p-2 text-sm">
        <p>Start Date</p>
        <div role="gridcell" className="">
          {data.date}
        </div>
      </div>
    </article>
  );
}
