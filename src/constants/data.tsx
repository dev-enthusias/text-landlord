import {
  HousePlus,
  UserRoundPlus,
  UsersRound,
  WalletCards,
} from "lucide-react";
import { routes } from "./routes";

export const landloardQuickActionData = [
  { icons: <HousePlus />, title: "Add Property", id: 0 },
  { icons: <UserRoundPlus />, title: "Add Tenants", id: 2 },
  { icons: <UsersRound />, title: "Assign Agents", id: 4 },
  { icons: <WalletCards />, title: "Bill Management", id: 5 },
];

export const ROLE_ROUTES = {
  4: "/landlord",
  5: "/tenant",
  7: "/agent",
};

export const tenantTopbarLinks = [
  { link: "/tenant", name: "Home", exact: true },
  { link: routes.TENANT_PROPERTIES, name: "Properties" },
  { link: routes.FUND_WALLET, name: "Fund Wallet" },
];

export const landlordTopbarLinks = [
  { link: "/landlord", name: "Home", exact: true },
  { link: routes.LANDLORD_PROPERTIES, name: "Properties" },
  { link: routes.TENANTS, name: "Tenants" },
  { link: routes.BILL_MANAGEMENT, name: "Bill Management" },
];

export const agentTopbarLinks = [
  { link: "/landlord", name: "Home", exact: true },
  { link: routes.LANDLORD_PROPERTIES, name: "Properties" },
  { link: routes.TENANTS, name: "Tenants" },
  { link: routes.BILL_MANAGEMENT, name: "Bill Management" },
];

export const howItWorks = [
  {
    title: "Search for a Property",
    description:
      "Easily browse thousands of properties across Nigeria, filter by your preferences (location, budget, size), and save your favorites for later",
  },
  {
    title: "Schedule an Appointment or Chat with the Property Owner",
    description:
      "Connect directly with landlords or property managers through in-app messaging or schedule convenient viewing appointments.",
  },
  {
    title: "Secure Your Rental Online",
    description:
      "Effortlessly secure your preferred property with our secure online payment system and digital documentation.",
  },
  {
    title: "Move In and Enjoy",
    description:
      "Settle into your new home with peace of mind. Our platform provides ongoing support to ensure a smooth and enjoyable rental experience.",
  },
];
