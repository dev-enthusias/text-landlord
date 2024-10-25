import {
  LucideHousePlus,
  LucideLayoutDashboard,
  LucideSettings,
  MessageCircleMoreIcon,
} from "lucide-react";
import NavLink from "../ui/navlink";

export default function Menu() {
  return (
    <footer className="lg:hidden">
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
            href="/dashboard/chat"
            className="flex flex-col items-center justify-center gap-y-1 text-sm"
            activeClassName="text-primary font-bold"
          >
            <MessageCircleMoreIcon className="h-5 w-5" />
            Chat
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
}
