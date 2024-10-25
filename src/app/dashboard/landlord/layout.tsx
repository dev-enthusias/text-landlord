import DashboardLayout from "@/components/layout/dashboard-layout";
import { routes } from "@/constants/routes";
import {
  HistoryIcon,
  LayoutDashboardIcon,
  LucideHousePlus,
  LucideSettings,
  MessageCircleMoreIcon,
} from "lucide-react";

const landlordSidebarLinks = [
  {
    name: "Home",
    icon: <LayoutDashboardIcon size={22} />,
    href: routes.LANDLORD_DASHBOARD,
    exact: true,
  },
  {
    name: "Properties",
    icon: <LucideHousePlus size={22} />,
    href: routes.LANDLORD_DASHBOARD_PROPERTIES,
    exact: false,
  },
  {
    name: "Tenants",
    icon: <LucideHousePlus size={22} />,
    href: routes.LANDLORD_DASHBOARD_TENANTS,
    exact: false,
  },
  {
    name: "Chat",
    icon: <MessageCircleMoreIcon size={22} />,
    href: routes.LANDLORD_DASHBOARD_CHAT,
    exact: false,
  },
  {
    name: "Reports",
    icon: <MessageCircleMoreIcon size={22} />,
    href: routes.LANDLORD_DASHBOARD_REPORTS,
    exact: false,
  },
  {
    name: "Bills Management",
    icon: <MessageCircleMoreIcon size={22} />,
    href: routes.LANDLORD_DASHBOARD_BILLS,
    exact: false,
  },
  {
    name: "Transaction History",
    icon: <HistoryIcon size={22} />,
    href: routes.LANDLORD_DASHBOARD_TRANSACTION_HISTORY,
    exact: false,
  },
  {
    name: "Settings",
    icon: <LucideSettings size={22} />,
    href: routes.LANDLORD_DASHBOARD_SETTINGS,
    exact: false,
  },
];

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout navlinks={landlordSidebarLinks}>
      {children}
    </DashboardLayout>
  );
}
