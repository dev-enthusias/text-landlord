import DashboardLayout from "@/components/layout/dashboard-layout";
import { routes } from "@/constants/routes";
import {
  HistoryIcon,
  LayoutDashboardIcon,
  LucideHousePlus,
  LucideSettings,
  MessageCircleMoreIcon,
} from "lucide-react";

const tenantSidebarLinks = [
  {
    name: "Home",
    icon: <LayoutDashboardIcon size={14} />,
    href: routes.TENANT_DASHBOARD,
  },
  {
    name: "Properties",
    icon: <LucideHousePlus size={14} />,
    href: routes.TENANT_DASHBOARD_PROPERTIES,
  },
  {
    name: "Transaction History",
    icon: <HistoryIcon size={14} />,
    href: routes.TENANT_DASHBOARD_PAYMENT_HISTORY,
  },
  {
    name: "Chat",
    icon: <MessageCircleMoreIcon size={14} />,
    href: routes.TENANT_DASHBOARD_CHAT,
  },
  {
    name: "Settings",
    icon: <LucideSettings size={14} />,
    href: routes.TENANT_DASHBOARD_SETTINGS,
  },
];

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout navlinks={tenantSidebarLinks}>{children}</DashboardLayout>
  );
}
