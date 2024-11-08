import {
  HomeIcon,
  HousePlus,
  OctagonAlert,
  UserRoundPlus,
  UsersRound,
  WalletCards,
} from "lucide-react";
import { routes } from "./routes";

export const profileInfo = [
  { title: "Religion", value: "Santorian" },
  { title: "Gender", value: "Male" },
  { title: "DOB", value: "11th March, 1900" },
  { title: "Marital Status", value: "Single" },
  { title: "Occupation", value: "Software Engineer" },
  { title: "Property Owner", value: "Organization" },
  { title: "Passport/ID no", value: "489519345GH" },
  { title: "TIN", value: "398dbfa0e3489" },
  { title: "SIN", value: "edfan9e9r9dbfaifb" },
];

export const propertyCategories = [
  { title: "Residential", icon: <HomeIcon />, number: 10 },
  { title: "Commercial", icon: <HomeIcon />, number: 10 },
  { title: "Industrial", icon: <HomeIcon />, number: 10 },
  { title: "Land", icon: <HomeIcon />, number: 10 },
];

export const landloardQuickActionData = [
  { icons: <HousePlus />, title: "Add Property", id: 0 },
  // { icons: <UsersRound />, title: "Tenants" },
  { icons: <UserRoundPlus />, title: "Add Tenants", id: 2 },
  { icons: <OctagonAlert />, title: "Reports", id: 3 },
  { icons: <UsersRound />, title: "Assign Agents", id: 4 },
  { icons: <WalletCards />, title: "Bill Management", id: 5 },
];

export const ROLE_ROUTES = {
  4: "/landlord",
  5: "/tenant",
  7: "/agent",
};

export const propertyTypes = [
  "Apartment",
  "Building",
  "Flat",
  "Land",
  "Office",
  "Room",
  "Shop",
  "Shortlet",
];

export const topbarLinks = [
  { link: "/tenant", name: "Home", exact: true },
  { link: routes.TENANT_PROPERTIES, name: "Properties" },
  { link: routes.FUND_WALLET, name: "Fund Wallet" },
];
