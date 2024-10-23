import Link from "next/link";
import { HomeIcon, MapPin } from "lucide-react";
import { WalletOverview } from "@/components/data-visualization/wallet-overview";
import { TenantPropertyCard } from "@/components/ui/property-card";
import TransactionCard from "@/components/general/transaction-card";
import Topbar from "@/components/general/topbar";
import Menu from "@/components/layout/footer-menu";
import { FriendCard } from "@/components/pages/chat/sidebar";
import { routes } from "@/constants/routes";

export default function TenantDashboard() {
  return (
    <>
      <div className="lg:hidden">
        <Topbar />
      </div>

      <main className="px-5 pb-24 pt-5 lg:px-10 lg:pt-8">
        {/* Welcome Note */}
        <h1 className="mb-3 flex items-center text-xl font-semibold lg:text-xl xl:text-2xl">
          Welcome Back, Tenant 🎉
        </h1>

        <div className="grid gap-y-6 lg:gap-y-16">
          {/* Summaries */}
          <div className="grid grid-cols-12 grid-rows-1 items-stretch gap-x-5">
            <div className="col-span-6">
              <WalletOverview />
            </div>

            <div className="col-span-3">
              <TotalRentedProperty />
            </div>
            <div className="col-span-3">
              <TotalOverdueRent />
            </div>
          </div>

          {/* Properties Listing section */}
          <section className="-mx-5">
            <div className="mb-2 flex items-center justify-between px-5 font-semibold">
              <h2 className="text-lg xl:text-xl">New Properties</h2>
              <Link
                href={routes.TENANT_DASHBOARD_PROPERTIES}
                className="text-sm text-accent underline lg:text-[14px]"
              >
                View more
              </Link>
            </div>
            <div className="no-scrollbar flex w-screen min-w-64 grid-cols-3 gap-5 overflow-x-auto px-5 lg:grid lg:w-auto lg:justify-between xl:hidden">
              <TenantPropertyCard />
              <TenantPropertyCard />
              <TenantPropertyCard />
              <TenantPropertyCard />
              <TenantPropertyCard />
              <TenantPropertyCard />
            </div>

            <div className="no-scrollbar hidden w-screen min-w-64 grid-cols-3 gap-5 overflow-x-auto px-5 lg:w-auto lg:justify-between xl:grid xl:grid-cols-4">
              <TenantPropertyCard />
              <TenantPropertyCard />
              <TenantPropertyCard />
              <TenantPropertyCard />
              <TenantPropertyCard />
              <TenantPropertyCard />
              <TenantPropertyCard />
              <TenantPropertyCard />
            </div>
          </section>

          {/* Rent Notifications */}
          <div className="grid gap-5 lg:grid-cols-2 lg:flex-row xl:grid-cols-3">
            <RentNotification status="upcoming" />
            <RentNotification status="overdue" />
            <RentNotification status="upcoming" />
          </div>

          <div className="grid-cols-12 gap-x-5 lg:grid">
            {/* Recent Chats */}
            <section className="hidden rounded-lg lg:col-span-5 lg:block lg:border lg:bg-white xl:col-span-5">
              <div className="mb-2 flex items-center justify-between font-semibold lg:border-b lg:px-5 lg:py-5">
                <h2 className="text-lg xl:text-xl">Chats</h2>
                <Link
                  href={routes.DASHBOARDCHAT}
                  className="text-sm text-accent underline lg:text-[14px]"
                >
                  View all
                </Link>
              </div>
              <div className="no-scrollbar grid w-full gap-y-5 overflow-x-scroll px-1">
                <FriendCard />
                <FriendCard />
                <FriendCard />
              </div>
            </section>

            {/* Recent Transactions */}
            <section className="rounded-lg lg:col-span-7 lg:overflow-hidden lg:border lg:bg-white xl:col-span-7">
              <div className="mb-2 flex items-center justify-between font-semibold lg:border-b lg:px-5 lg:py-5">
                <h2 className="text-lg xl:text-xl">Recent transactions</h2>
                <Link
                  href={routes.DASHBOARDHISTORY}
                  className="text-sm text-accent underline lg:text-[14px]"
                >
                  View all
                </Link>
              </div>
              <div className="no-scrollbar grid w-full gap-y-5 overflow-x-scroll lg:px-5">
                <TransactionCard status="credit" />
                <TransactionCard status="credit" />
                <TransactionCard status="debit" />
              </div>
            </section>
          </div>
        </div>
      </main>

      <Menu />
    </>
  );
}

function TotalRentedProperty() {
  return (
    <article className="flex h-full w-full flex-col justify-between rounded-lg bg-accent px-4 py-3 text-white">
      <h3 className="flex items-center gap-x-1 text-sm">
        <HomeIcon size={12} /> Rented Properties
      </h3>
      <p className="font-semibold lg:text-2xl xl:text-3xl">5</p>
    </article>
  );
}

function TotalOverdueRent() {
  return (
    <article className="custom-shadow flex h-full w-full flex-col justify-between rounded-lg bg-white px-4 py-3 text-foreground">
      <h3 className="flex items-center gap-x-1 text-sm">
        <HomeIcon size={12} />
        Overdue Rents
      </h3>
      <p className="font-semibold lg:text-2xl xl:text-3xl">5</p>
    </article>
  );
}

function RentNotification({ status }: { status: "upcoming" | "overdue" }) {
  return (
    <article className="flex w-full max-w-[540px] items-center justify-between gap-x-2 rounded-lg border border-gray-400 bg-gray-50 px-3 py-1 lg:py-2">
      <div>
        <p
          className={`mb-1 text-xxs font-semibold ${status === "upcoming" ? "text-gray-500" : "text-red-600"}`}
        >
          {status === "upcoming" ? " Upcoming rent due" : "Overdue"}
        </p>
        <h3 className="font-semibold">Clear Home</h3>
        <p className="mb-1 flex items-center gap-x-0.5 text-xs font-medium">
          <MapPin size={10} />
          Erimus, d richest man house road
        </p>
        <p className="text-xxs">
          {status === "upcoming"
            ? "Expires on 12th Dec, 2024"
            : "Renew now to avoid issues"}
        </p>
      </div>
      {status === "upcoming" ? (
        <button className="shrink-0 rounded-full bg-black px-3 py-1 text-sm font-bold text-white">
          Pay Rent
        </button>
      ) : (
        <button className="shrink-0 rounded-full bg-black px-3 py-1 text-sm font-bold text-white">
          Renew
        </button>
      )}
    </article>
  );
}
