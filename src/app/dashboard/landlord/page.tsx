import Link from "next/link";
import Topbar from "@/components/layout/topbar";
import Menu from "@/components/layout/footer-menu";
import RecentChatsAndTransactions from "@/components/data-visualization/recent-chat-trx";
import { LandlordPropertyCard } from "@/components/ui/property-card";
import LandLordQuickActions from "@/components/layout/quick-actions";
import { routes } from "@/constants/routes";

export default function DashboardHomePage() {
  return (
    <>
      <div className="lg:hidden">
        <Topbar />
      </div>

      <main className="px-5 pb-24 pt-5 lg:px-10 lg:pt-8">
        {/* Welcome Note */}
        <h1 className="mb-3 flex items-center text-xl font-semibold lg:text-xl xl:text-2xl">
          Welcome Back, Landlord 🎉
        </h1>

        <div className="grid gap-y-10 lg:gap-y-14">
          <LandLordQuickActions />

          <section className="-mx-5">
            <div className="mb-2 flex items-center justify-between px-5 font-semibold">
              <h2 className="text-lg xl:text-xl">Properties</h2>
              <Link
                href={routes.LANDLORD_DASHBOARD_PROPERTIES}
                className="text-sm text-accent underline lg:text-[14px]"
              >
                View more
              </Link>
            </div>

            <div className="no-scrollbar flex w-screen min-w-64 grid-cols-3 gap-5 overflow-x-auto px-5 lg:grid lg:w-auto lg:justify-between xl:hidden">
              <LandlordPropertyCard />
              <LandlordPropertyCard />
              <LandlordPropertyCard />
              <LandlordPropertyCard />
              <LandlordPropertyCard />
              <LandlordPropertyCard />
            </div>

            <div className="no-scrollbar hidden w-screen min-w-64 grid-cols-3 gap-5 overflow-x-auto px-5 lg:w-auto lg:justify-between xl:grid xl:grid-cols-4">
              <LandlordPropertyCard />
              <LandlordPropertyCard />
              <LandlordPropertyCard />
              <LandlordPropertyCard />
              <LandlordPropertyCard />
              <LandlordPropertyCard />
              <LandlordPropertyCard />
              <LandlordPropertyCard />
            </div>
          </section>

          <RecentChatsAndTransactions />
        </div>
      </main>

      <Menu />
    </>
  );
}
