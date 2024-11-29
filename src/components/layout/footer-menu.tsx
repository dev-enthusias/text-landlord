import NavLink from "../ui/navlink";
import { LuUsers2 } from "react-icons/lu";
import { MdDashboard, MdHomeWork } from "react-icons/md";
import { FaFileInvoice, FaUsers } from "react-icons/fa";
import { getRole } from "@/lib/actions";
import { routes } from "@/constants/routes";
import { LucideShoppingCart } from "lucide-react";
import { BsChat } from "react-icons/bs";

export default async function Menu() {
  const roleid = await getRole();

  return (
    <footer className="mt-20 bg-[#cecaa3] lg:hidden">
      <ul className="fixed bottom-0 flex w-full justify-between rounded-t-3xl bg-black px-5 py-4 text-background">
        <li>
          <NavLink
            href="/landlord"
            exact
            className="flex flex-col items-center justify-center gap-y-1 text-sm"
            activeClassName="text-gold font-semibold"
          >
            <MdDashboard className="h-5 w-5" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/landlord/properties"
            className="flex flex-col items-center justify-center gap-y-1 text-sm"
            activeClassName="text-gold font-bold"
          >
            <MdHomeWork className="h-5 w-5" />
            Properties
          </NavLink>
        </li>
        {roleid === 4 && (
          <>
            <li>
              <NavLink
                href="/landlord/tenants"
                className="flex flex-col items-center justify-center gap-y-1 text-sm"
                activeClassName="text-gold font-bold"
              >
                <FaUsers className="h-5 w-5" />
                Tenants
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/landlord/agents"
                className="flex flex-col items-center justify-center gap-y-1 text-sm"
                activeClassName="text-gold font-bold"
              >
                <LuUsers2 className="h-5 w-5" />
                Agents
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/landlord/bills"
                className="flex flex-col items-center justify-center gap-y-1 text-sm"
                activeClassName="text-gold font-bold"
              >
                <FaFileInvoice className="h-5 w-5" />
                Bills
              </NavLink>
            </li>
          </>
        )}

        {roleid == 5 && (
          <>
            <li>
              <NavLink
                href={routes.CHAT}
                className="flex flex-col items-center justify-center gap-y-1 text-sm"
                activeClassName="text-gold font-bold"
              >
                <BsChat className="h-4 w-4" />
                Chat
              </NavLink>
            </li>
            <li>
              <NavLink
                href={routes.CART}
                className="flex flex-col items-center justify-center gap-y-1 text-sm"
                activeClassName="text-gold font-bold"
              >
                <LucideShoppingCart className="h-5 w-5" />
                Cart
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </footer>
  );
}
