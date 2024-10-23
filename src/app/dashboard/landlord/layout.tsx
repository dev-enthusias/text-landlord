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
  },
  {
    name: "Properties",
    icon: <LucideHousePlus size={22} />,
    href: routes.LANDLORD_DASHBOARD_PROPERTIES,
  },
  {
    name: "Tenants",
    icon: <LucideHousePlus size={22} />,
    href: routes.LANDLORD_DASHBOARD_TENANTS,
  },
  {
    name: "Transaction History",
    icon: <HistoryIcon size={22} />,
    href: routes.LANDLORD_DASHBOARD_TRANSACTION_HISTORY,
  },
  {
    name: "Reports",
    icon: <MessageCircleMoreIcon size={22} />,
    href: routes.LANDLORD_DASHBOARD_REPORTS,
  },
  {
    name: "Bills Management",
    icon: <MessageCircleMoreIcon size={22} />,
    href: routes.LANDLORD_DASHBOARD_BILLS,
  },
  {
    name: "Chat",
    icon: <MessageCircleMoreIcon size={22} />,
    href: routes.LANDLORD_DASHBOARD_CHAT,
  },
  {
    name: "Properties",
    icon: <LucideSettings size={22} />,
    href: routes.LANDLORD_DASHBOARD_SETTINGS,
  },
];

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout navlinks={landlordSidebarLinks}>
      {children}
    </DashboardLayout>
  );
}
