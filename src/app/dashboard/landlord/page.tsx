"use client";

import Link from "next/link";
import { HomeIcon, MapPin } from "lucide-react";
import { WalletOverview } from "./client-component";
import PropertyCard from "@/components/ui/property-card";
import { routes } from "@/constants/routes";
import TransactionCard from "@/components/ui/transaction-card";
import Topbar from "@/components/layout/topbar";
import Menu from "@/components/layout/footer-menu";
import { FriendCard } from "./chat/sidebar";
import { getRole } from "@/utils/role";
import LandLordQuickActions from "./modals/add-property";

export default function DashboardHomePage() {
  const USERROLE = getRole();
  return (
    <>
      <div className="lg:hidden">
        <Topbar />
      </div>

      <main className="px-3 pb-24 pt-5 lg:px-10 lg:pt-8">
        <h1 className="mb-3 flex items-center text-xl lg:text-2xl">
          <span className="font-semibold">Welcome Back,</span>
          <span className="ml-1 font-semibold">
            {USERROLE === "landlord"
              ? "Landloard"
              : USERROLE === "agent"
                ? "Agent"
                : "Tenant"}
          </span>
          <span className="">🎉</span>
        </h1>

        <div className="grid gap-y-6 lg:gap-y-10">
          {USERROLE === "tenant" && (
            <div className="flex gap-x-5">
              <WalletOverview />
              <Summary />
            </div>
          )}

          {USERROLE === "landlord" && <LandLordQuickActions />}

          <section className="-mx-3">
            <div className="mb-2 flex items-center justify-between px-3 font-semibold">
              <h2 className="text-lg lg:text-xl">
                {USERROLE === "tenant" && "New"} Properties
              </h2>
              <Link
                href={routes.DASHBOARDPROPERTIES}
                className="text-sm text-accent underline lg:text-[14px]"
              >
                View more
              </Link>
            </div>
            <div className="no-scrollbar flex w-full gap-x-5 overflow-x-scroll px-3 lg:justify-between">
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
            </div>
          </section>

          {USERROLE === "tenant" && (
            <div className="flex flex-col gap-y-2 lg:flex-row lg:gap-x-5">
              <RentNotification />
              <UpcomingRentNotification />
            </div>
          )}

          <div className="grid-cols-5 gap-x-20 lg:grid">
            <section className="col-span-2 hidden rounded-lg lg:block lg:border lg:bg-white">
              <div className="mb-2 flex items-center justify-between font-semibold lg:border-b lg:px-5 lg:py-5">
                <h2 className="text-lg lg:text-xl">Chats</h2>
                <Link
                  href={routes.DASHBOARDCHAT}
                  className="text-sm text-accent underline lg:text-[14px]"
                >
                  View all
                </Link>
              </div>
              <div className="no-scrollbar grid w-full gap-y-5 overflow-x-scroll lg:px-5">
                <FriendCard />
                <FriendCard />
                <FriendCard />
              </div>
            </section>

            <section className="col-span-3 rounded-lg lg:overflow-hidden lg:border lg:bg-white">
              <div className="mb-2 flex items-center justify-between font-semibold lg:border-b lg:px-5 lg:py-5">
                <h2 className="text-lg lg:text-xl">Recent transactions</h2>
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

// Dynamically set on card to display data
function RentNotification() {
  return (
    <article className="flex w-full max-w-[540px] items-center justify-between gap-x-2 rounded-lg border border-red-600 bg-red-50 px-3 py-1 lg:py-2">
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
    <article className="flex w-full max-w-[540px] items-center justify-between gap-x-2 rounded-lg border border-gray-400 bg-gray-50 px-3 py-1 lg:py-2">
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

function Summary() {
  return (
    <div className="hidden w-full justify-between gap-x-5 lg:flex">
      <article className="flex w-full flex-col justify-between rounded-lg bg-accent px-4 py-3 text-white">
        <h3 className="flex items-center gap-x-1 text-sm font-medium">
          <HomeIcon size={12} /> Total Rented Properties
        </h3>
        <p className="text-3xl font-semibold">5</p>
      </article>

      <article className="flex w-full flex-col justify-between rounded-lg bg-red-700 px-4 py-3 text-white">
        <h3 className="flex items-center gap-x-1 text-sm font-medium">
          <HomeIcon size={12} />
          Total Overdue Rent
        </h3>
        <p className="text-3xl font-semibold">5</p>
      </article>
    </div>
  );
}
