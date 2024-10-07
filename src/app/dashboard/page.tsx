import Link from "next/link";
import { MapPin, MoveDownIcon, MoveUpIcon } from "lucide-react";
import { WalletOverview } from "./client-component";
import PropertyCard from "@/components/general/property-card";

export default function DashboardHomePage() {
  return (
    <>
      <h1 className="mb-3 flex items-center text-xl">
        <span className="font-semibold">Welcome Back,</span>
        <span className="font-semibold">Tenant</span>
        <span className="">🎉</span>
      </h1>

      <div className="space-y-6">
        <WalletOverview />

        <section className="-mx-3">
          <div className="mb-2 flex items-center justify-between px-3 font-semibold">
            <h2 className="text-lg">New Properties</h2>
            <Link href="" className="text-sm text-accent underline">
              View more
            </Link>
          </div>
          <div className="no-scrollbar flex w-full gap-x-5 overflow-x-scroll px-3">
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </div>
        </section>

        <div className="space-y-2">
          <RentNotification />
          <UpcomingRentNotification />
        </div>

        <section>
          <div className="mb-2 flex items-center justify-between font-semibold">
            <h2 className="text-lg">Recent transactions</h2>
            <Link href="" className="text-sm text-accent underline">
              View all
            </Link>
          </div>
          <div className="no-scrollbar grid w-full gap-y-5 overflow-x-scroll">
            <TransactionCard status="credit" />
            <TransactionCard status="credit" />
            <TransactionCard status="debit" />
            <TransactionCard status="debit" />
            <TransactionCard status="credit" />
          </div>
        </section>
      </div>
    </>
  );
}

// Dynamically set on card to display data
function RentNotification() {
  return (
    <article className="flex items-center justify-between gap-x-2 rounded-lg border border-red-600 bg-red-50 px-3 py-1">
      <div>
        <p className="mb-1 text-xxs font-semibold text-red-600">Overdue</p>
        <h3 className="text-lg font-semibold">Havilla Somalisto</h3>
        <p className="mb-1 flex items-center gap-x-0.5 text-sm font-medium">
          <MapPin size={10} />
          Santababra avenue off reserve road
        </p>
        <p className="text-sm">Renew now to avoid issues</p>
      </div>
      <button className="shrink-0 rounded-full bg-black px-3 py-1 text-sm font-bold text-white">
        Renew
      </button>
    </article>
  );
}

function UpcomingRentNotification() {
  return (
    <article className="flex items-center justify-between gap-x-2 rounded-lg border border-gray-400 bg-gray-50 px-3 py-1">
      <div>
        <p className="mb-1 text-xxs font-semibold text-gray-500">
          Upcoming rent due
        </p>
        <h3 className="text-lg font-semibold">Clear Home</h3>
        <p className="mb-1 flex items-center gap-x-0.5 text-sm font-medium">
          <MapPin size={10} />
          Erimus, d richest man house road
        </p>
        <p className="text-sm">Expires on 12th Dec, 2024</p>
      </div>
      <button className="shrink-0 rounded-full bg-black px-3 py-1 text-sm font-bold text-white">
        Renew
      </button>
    </article>
  );
}

function TransactionCard({ status }: { status: "credit" | "debit" }) {
  return (
    <article className="flex justify-between gap-x-1 border-b border-b-gray-200 pb-3">
      <div className="flex grow items-center gap-x-2 truncate">
        <div className="text-primary-dark flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
          {status === "credit" ? (
            <MoveDownIcon size={20} />
          ) : (
            <MoveUpIcon size={20} />
          )}
        </div>
        <div>
          <h3 className="font-semibold">Emperica in Dazil, Villa</h3>
          <p className="text-medium flex items-center gap-x-0.5 text-sm">
            <MapPin size={10} />
            Palaxisto Emeriando Plaza Road
          </p>
        </div>
      </div>
      <div className="shrink-0 font-bold">
        <p>{status === "debit" && "-"}₦650,000</p>
      </div>
    </article>
  );
}
