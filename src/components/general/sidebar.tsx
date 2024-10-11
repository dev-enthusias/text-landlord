import { routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./navlink";
import {
  LayoutDashboardIcon,
  LogOutIcon,
  LucideHousePlus,
  LucideSettings,
  MessageCircleMoreIcon,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden w-[340px] shrink-0 bg-primary lg:block">
      <div className="flex h-20 items-center justify-center bg-white">
        <Link href={routes.HOME} className="relative block h-32 w-32">
          <Image
            src="/logos/logo-transparent.png"
            alt="Oga landlord logo"
            fill
            priority
            className="mt-3 h-32 w-32"
          />
        </Link>
      </div>

      <ul className="my-8 flex flex-col gap-y-6">
        <li>
          <NavLink
            exact
            className="flex items-center gap-x-2 px-10 py-4 font-semibold hover:bg-white"
            activeClassName="text-yellow-700 bg-white font-bold"
            href={routes.DASHBOARD}
          >
            <LayoutDashboardIcon size={22} />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center gap-x-2 px-10 py-4 font-semibold hover:bg-white"
            activeClassName="font-bold text-yellow-700 bg-white"
            href={routes.DASHBOARDPROPERTIES}
          >
            <LucideHousePlus size={22} />
            Properties
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center gap-x-2 px-10 py-4 font-semibold hover:bg-white"
            activeClassName="font-bold text-yellow-700 bg-white"
            href={routes.DASHBOARDCHAT}
          >
            <MessageCircleMoreIcon size={22} />
            Chat
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center gap-x-2 px-10 py-4 font-semibold hover:bg-white"
            activeClassName="font-bold text-yellow-700 bg-white"
            href={routes.DASHBOARDSETTINGS}
          >
            <LucideSettings size={22} />
            Settings
          </NavLink>
        </li>
        <li>
          {/* <form>
          <button className="flex gap-x-2 px-1 font-bold text-red-600">
            <LogOutIcon className="-rotate-180" />
            Logout
          </button>
        </form> */}
          <Link
            href={routes.LOGIN}
            className="flex items-center gap-x-2 px-10 py-4 font-semibold text-red-600"
          >
            <LogOutIcon className="-rotate-180" />
            Logout
          </Link>
        </li>
      </ul>
    </aside>
  );
}
