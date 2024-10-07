import Image from "next/image";
import Link from "next/link";
import NavLink from "@/components/general/navlink";
import {
  LucideBellRing,
  LucideHistory,
  LucideHousePlus,
  LucideLayoutDashboard,
  LucideSettings,
  LucideShoppingCart,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-yellow-50/20">
      <Topbar />
      <main className="px-3 pb-24 pt-5">{children}</main>
      <Menu />
    </section>
  );
}

const Topbar = () => {
  return (
    <header className="sticky top-0 z-50 flex h-16 justify-between overflow-hidden border bg-white px-5">
      <Image
        src="/logos/logo-transparent.png"
        alt="Oga landlord logo"
        width={96}
        height={96}
        priority
        className="-mt-2 h-24 w-24"
      />

      <div className="flex items-center gap-x-4">
        <Link href="">
          <LucideBellRing />
        </Link>
        <Link href="">
          <LucideShoppingCart />
        </Link>
        <Link href="">
          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
        </Link>
      </div>
    </header>
  );
};

const Menu = () => {
  return (
    <footer>
      <ul className="fixed bottom-0 flex w-full justify-between rounded-t-3xl bg-black px-5 py-4 text-background">
        <li>
          <NavLink
            href="/dashboard"
            exact
            className="flex flex-col items-center justify-center gap-y-1 text-sm"
            activeClassName="text-primary font-semibold"
          >
            <LucideLayoutDashboard className="h-5 w-5" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/dashboard/properties"
            className="flex flex-col items-center justify-center gap-y-1 text-sm"
            activeClassName="text-primary font-bold"
          >
            <LucideHousePlus className="h-5 w-5" />
            Properties
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/dashboard/history"
            className="flex flex-col items-center justify-center gap-y-1 text-sm"
            activeClassName="text-primary font-bold"
          >
            <LucideHistory className="h-5 w-5" />
            History
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/dashboard/settings"
            className="flex flex-col items-center justify-center gap-y-1 text-sm"
            activeClassName="text-primary font-bold"
          >
            <LucideSettings className="h-5 w-5" />
            Settings
          </NavLink>
        </li>
      </ul>
    </footer>
  );
};
