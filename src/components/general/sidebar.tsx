"use client";

import Link from "next/link";
import Image from "next/image";
import NavLink from "./navlink";
import { LogOutIcon } from "lucide-react";
import { routes } from "@/constants/routes";
import { SidebarNavLinks } from "@/definition";
import { logout } from "@/lib/actions";

export default function Sidebar({ navlinks }: { navlinks: SidebarNavLinks }) {
  return (
    <aside className="pb-10">
      <div className="flex h-20 items-center justify-center border-b">
        <Link href={routes.HOME} className="relative block h-32 w-32">
          <Image
            src="/logos/logo-transparent.png"
            alt="Oga landlord logo"
            fill
            sizes="128px"
            priority
            className="mt-3 h-32 w-32"
          />
        </Link>
      </div>

      <div className="no-scrollbar my-4 h-[calc(100vh-80px)] overflow-y-auto px-4 pb-16">
        <ul className="grid gap-y-4">
          {navlinks.map(({ href, name, icon }, i) => (
            <li key={i}>
              <NavLink
                exact
                className="flex items-center gap-x-2 rounded-lg px-4 py-4 text-[14px] font-semibold hover:bg-primary/20"
                activeClassName=" bg-primary/60 font-bold-dark/20 text-yellow-700 hover:bg-primary/60"
                href={href}
              >
                {icon}
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        <form action={logout} className="mt-4">
          <button
            type="submit"
            className="flex items-center gap-x-2 px-4 py-4 text-[15px] font-semibold text-red-600"
          >
            <LogOutIcon className="-rotate-180" size={16} />
            Logout
          </button>
        </form>
      </div>
    </aside>
  );
}
