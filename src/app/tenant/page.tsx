import Link from "next/link";
import Image from "next/image";
import { routes } from "@/constants/routes";
import { WalletOverview } from "@/components/data-visualization/wallet-overview";
import { LiaCoinsSolid } from "react-icons/lia";
import { FaHourglassHalf, FaLongArrowAltRight } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";

export default function Home() {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-5 py-7 pb-20 lg:px-20">
      {/* Gretting */}
      <div className="font-cormorant">
        <h1 className="text-2xl font-bold text-black">
          Good morning, Samantha Oliver!
        </h1>
        <p className="font-semibold text-black lg:text-lg">
          Let us help you track your rentals
        </p>
      </div>

      <div className="mt-6 grid grid-cols-7 items-start gap-5">
        <section className="col-span-7 space-y-5 lg:col-span-5">
          <WalletOverview />
          <div className="mb-5 grid w-full gap-5 sm:grid-cols-2 md:grid-cols-3 lg:mb-10">
            <FinanceSummary
              title="Rented Properties"
              icon={<LiaCoinsSolid />}
              total="3"
              description={<p>Total properties rented</p>}
              color="#4A4A4A"
              textColor="#ffffff"
            />
            <FinanceSummary
              title="Total Overdue"
              icon={<RiErrorWarningFill size={14} />}
              total="1"
              description={<p>₦3M Sum of overdue rent</p>}
              color="#D32F2F"
              textColor="#ffffff"
            />
            <FinanceSummary
              title="Total Upcoming"
              icon={<FaHourglassHalf size={14} />}
              total="1"
              description={<p>₦600K Sum of upcoming rent</p>}
              color="#D4A017"
              textColor="#000000"
            />
          </div>
        </section>
        <section className="col-span-7 space-y-5 lg:col-span-2">
          <div className="rounded-lg bg-white px-5 py-3">
            <h3 className="mb-4 text-lg font-semibold text-black">Chats</h3>
            <div className="no-scrollbar grid w-full gap-y-3 overflow-x-scroll px-1">
              <FriendCard />
              <FriendCard />
              <FriendCard />
            </div>
          </div>
        </section>
        <section className="col-span-7">
          <div className="mt-5 rounded-lg bg-white sm:p-5">
            <div className="mb-4 p-5 sm:p-0">
              <h3 className="text-lg font-semibold text-black">
                Rental Payment Overview
              </h3>
            </div>

            <div
              role="grid"
              aria-label="Rental Payment Overview"
              className="hidden space-y-3 lg:block"
            >
              <div
                role="row"
                className="grid grid-cols-8 items-center gap-x-3 text-sm font-semibold"
              >
                <h3 role="columnheader" className="col-span-2 text-left">
                  Property
                </h3>
                <h3 role="columnheader">Start Date</h3>
                <h3 role="columnheader">Due Date</h3>
                <h3 role="columnheader">Rent Amount</h3>
                <h3 role="columnheader">Rent Status`</h3>
                <h3 role="columnheader">Payment Status</h3>
                <h3 role="columnheader">Action</h3>
              </div>
              <PaymentHistoryLine status="overdue" />
              <PaymentHistoryLine status="upcoming" />
              <PaymentHistoryLine
                status="current"
                payment_status="successful"
              />
            </div>

            <div className="space-y-5 bg-gray-100 sm:bg-transparent lg:hidden">
              <PaymentHistoryLineMobile status="overdue" />
              <PaymentHistoryLineMobile status="upcoming" />
              <PaymentHistoryLineMobile
                status="current"
                payment_status="successful"
              />
            </div>
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
      className="w-full rounded-lg px-5 py-3"
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

function FriendCard() {
  return (
    <Link href={routes.CHAT + "/0"} replace>
      <article className="flex items-center gap-x-3 rounded-lg bg-gold/10 px-2 py-1.5 text-[#09132C]">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <Image
            src="/images/profile-img.jpeg"
            alt="name of person photo"
            fill
            sizes="72px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="flex grow flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">Jane Cooper</h3>
            <p className="text-xxs">07:38am</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xxs">Haha that&apos;s hillarious</p>
            {false ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.2891 6.68392C14.5687 6.95698 14.574 7.40502 14.301 7.68464L7.39018 14.7613C7.25093 14.9039 7.058 14.9812 6.85882 14.9741C6.65964 14.967 6.47266 14.8763 6.34386 14.7242L3.34734 11.1859C3.09476 10.8876 3.13178 10.4411 3.43003 10.1885C3.72828 9.93593 4.17482 9.97295 4.4274 10.2712L6.92114 13.2159L13.2884 6.69578C13.5615 6.41617 14.0095 6.41085 14.2891 6.68392Z"
                  fill="#087c7c"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.336 6.68392C18.6156 6.95698 18.6209 7.40502 18.3479 7.68464L11.4371 14.7613C11.2978 14.9039 11.1049 14.9812 10.9057 14.9741C10.7065 14.967 10.5195 14.8763 10.3907 14.7242L7.39421 11.1859C7.14163 10.8876 7.17865 10.4411 7.4769 10.1885C7.77516 9.93593 8.22169 9.97295 8.47427 10.2712L10.968 13.2159L17.3353 6.69578C17.6083 6.41617 18.0564 6.41085 18.336 6.68392Z"
                  fill="#087c7c"
                />
              </svg>
            ) : (
              <span className="text-primary-500 rounded-full bg-gold p-1 text-3xs font-semibold leading-none text-white">
                10
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}

function PaymentHistoryLine({
  status,
  payment_status,
}: {
  status: "overdue" | "current" | "upcoming";
  payment_status?: "successful";
}) {
  return (
    <article
      role="row"
      className="hidden grid-cols-8 items-center gap-x-3 border-b border-b-gray-200 pb-2 lg:grid"
    >
      <div role="gridcell" className="col-span-2">
        <h3 className="text-sm font-semibold text-gray-700">
          Emperica in Dazil, Villa
        </h3>
        <p className="text-medium flex items-center gap-x-0.5 text-xs">
          Palaxisto Emeriando Plaza Road
        </p>
      </div>
      <div role="gridcell">12/12/2023</div>
      <div role="gridcell">12/12/2024</div>
      <div role="gridcell">₦650,000</div>
      <div
        role="gridcell"
        className={`${status === "overdue" ? "text-[#D32F2F]" : status === "upcoming" ? "text-[#D4A017]" : "text-green-600"}`}
      >
        {status === "overdue"
          ? "overdue"
          : status === "upcoming"
            ? "upcoming"
            : "current"}
      </div>
      <div
        role="gridcell"
        className={`${payment_status !== "successful" ? "text-[#D32F2F]" : "text-green-600"}`}
      >
        {payment_status === "successful" ? "paid" : "not paid"}
      </div>
      <div role="gridcell">
        {payment_status !== "successful" && (
          <button className="shrink-0 rounded-full bg-black px-3 py-1 text-sm font-bold text-white">
            Pay Rent
          </button>
        )}
      </div>
    </article>
  );
}

function PaymentHistoryLineMobile({
  status,
  payment_status,
}: {
  status: "overdue" | "current" | "upcoming";
  payment_status?: "successful";
}) {
  return (
    <article className="space-y-3 bg-white px-5 py-3 sm:rounded-xl sm:border sm:border-gray-300 lg:hidden">
      <p className="flex items-center gap-x-2 border-b border-b-gray-300 pb-2 text-black">
        18th Aug, 2020{" "}
        <span>
          <FaLongArrowAltRight />
        </span>{" "}
        18th Aug, 2021
      </p>

      <div className="flex items-center justify-between">
        <div className="col-span-2 flex items-center gap-x-1">
          <p className="text-sm">Rent Status</p>
        </div>
        <div>
          <span
            className={`rounded-full px-2 py-1 capitalize ${status === "overdue" ? "bg-[#D32F2F]/10 text-[#D32F2F]" : status === "upcoming" ? "bg-[#D4A017]/10 text-[#D4A017]" : "bg-green-600/10 text-green-600"}`}
          >
            {status === "overdue"
              ? "overdue"
              : status === "upcoming"
                ? "upcoming"
                : "current"}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between rounded-lg bg-gray-100 px-3 py-3">
        <div>
          <h3 className="text-sm font-semibold text-gray-700">
            Emperica in Dazil, Villa
          </h3>
          <p className="text-medium flex items-center gap-x-0.5 text-xs">
            Palaxisto Emeriando Plaza Road
          </p>
        </div>
        <Link
          href={routes.LANDLORD_PROPERTIES + "/0"}
          className="inline-block text-xs underline"
        >
          View Property
        </Link>
      </div>
      <div className="flex items-center justify-between rounded-lg px-3">
        <p className="text-sm">Rent Amount</p>
        <p className="font-semibold text-black">₦650,000</p>
      </div>
      <div className="flex items-center justify-between rounded-lg bg-gray-100 px-3 py-3">
        <p className="text-sm">Payment Status</p>
        <div
          role="gridcell"
          className={`${payment_status !== "successful" ? "text-[#D32F2F]" : "text-green-600"}`}
        >
          {payment_status === "successful" ? "paid" : "not paid"}
        </div>
      </div>
      <div role="gridcell">
        {payment_status !== "successful" && (
          <button className="shrink-0 rounded-full bg-black px-3 py-1 text-sm font-bold text-white">
            Pay Rent
          </button>
        )}
      </div>
    </article>
  );
}
