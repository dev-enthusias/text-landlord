import { routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./navlink";
import {
  HistoryIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  LucideHousePlus,
  LucideSettings,
  MessageCircleMoreIcon,
} from "lucide-react";
import { USERROLE } from "@/utils/role";

export default function Sidebar() {
  return (
    <aside className="oveflow-y-auto no-scrollbar hidden w-[310px] shrink-0 border-r px-4 pb-10 lg:block">
      <div className="flex h-20 items-center justify-center border-b">
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

      <ul className="no-scrollbar my-4 flex h-[calc(100vh-80px)] flex-col gap-y-6 overflow-y-auto pb-20">
        <li>
          <NavLink
            exact
            className="flex items-center gap-x-2 rounded-lg px-10 py-4 font-semibold hover:bg-primary/50"
            activeClassName=" bg-primary font-bold-dark/20 text-yellow-700 hover:bg-primary-dark/20"
            href={routes.DASHBOARD}
          >
            <LayoutDashboardIcon size={22} />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center gap-x-2 rounded-lg px-10 py-4 font-semibold hover:bg-primary/50"
            activeClassName="font-bold  bg-primary-dark/20 text-yellow-700 hover:bg-primary-dark/20"
            href={routes.DASHBOARDPROPERTIES}
          >
            <LucideHousePlus size={22} />
            Properties
          </NavLink>
        </li>

        {USERROLE === "landlord" && (
          <li>
            <NavLink
              className="flex items-center gap-x-2 rounded-lg px-10 py-4 font-semibold hover:bg-primary/50"
              activeClassName="font-bold  bg-primary-dark/20 text-yellow-700 hover:bg-primary-dark/20"
              href={routes.DASHBOARDTENANT}
            >
              <HistoryIcon size={22} />
              Tenants
            </NavLink>
          </li>
        )}

        {USERROLE === "landlord" && (
          <li>
            <NavLink
              className="flex items-center gap-x-2 rounded-lg px-10 py-4 font-semibold hover:bg-primary/50"
              activeClassName="font-bold  bg-primary-dark/20 text-yellow-700 hover:bg-primary-dark/20"
              href={routes.DASHBOARDREPORTS}
            >
              <HistoryIcon size={22} />
              Reports
            </NavLink>
          </li>
        )}

        {USERROLE === "landlord" && (
          <li>
            <NavLink
              className="flex items-center gap-x-2 rounded-lg px-10 py-4 font-semibold hover:bg-primary/50"
              activeClassName="font-bold  bg-primary-dark/20 text-yellow-700 hover:bg-primary-dark/20"
              href={routes.DASHBOARDBILLS}
            >
              <HistoryIcon size={22} />
              Bills Management
            </NavLink>
          </li>
        )}

        <li>
          <NavLink
            className="flex items-center gap-x-2 rounded-lg px-10 py-4 font-semibold hover:bg-primary/50"
            activeClassName="font-bold  bg-primary-dark/20 text-yellow-700 hover:bg-primary-dark/20"
            href={routes.DASHBOARDHISTORY}
          >
            <HistoryIcon size={22} />
            Transaction History
          </NavLink>
        </li>

        <li>
          <NavLink
            className="flex items-center gap-x-2 rounded-lg px-10 py-4 font-semibold hover:bg-primary/50"
            activeClassName="font-bold  bg-primary-dark/20 text-yellow-700 hover:bg-primary-dark/20"
            href={routes.DASHBOARDCHAT}
          >
            <MessageCircleMoreIcon size={22} />
            Chat
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center gap-x-2 rounded-lg px-10 py-4 font-semibold hover:bg-primary/50"
            activeClassName="font-bold  bg-primary-dark/20 text-yellow-700 hover:bg-primary-dark/20"
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
