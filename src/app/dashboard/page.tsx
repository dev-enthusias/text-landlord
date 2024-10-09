import Link from "next/link";
import { MapPin } from "lucide-react";
import { WalletOverview } from "./client-component";
import PropertyCard from "@/components/general/property-card";
import { routes } from "@/constants/routes";
import TransactionCard from "@/components/general/transaction-card";
import Topbar from "@/components/general/topbar";
import Menu from "@/components/general/footer-menu";

export default function DashboardHomePage() {
  return (
    <>
      <Topbar />

      <main className="px-3 pb-24 pt-5">
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
              <Link
                href={routes.DASHBOARDPROPERTIES}
                className="text-sm text-accent underline"
              >
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
              <Link
                href={routes.DASHBOARDHISTORY}
                className="text-sm text-accent underline"
              >
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
      </main>

      <Menu />
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
        Pay Rent
      </button>
    </article>
  );
}
