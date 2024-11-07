import {
  BotMessageSquareIcon,
  HeartIcon,
  HomeIcon,
  HousePlus,
  ListOrderedIcon,
  LockKeyholeIcon,
  MapPinnedIcon,
  OctagonAlert,
  UserRoundPlus,
  UsersRound,
  WalletCards,
  WalletIcon,
} from "lucide-react";
import { routes } from "./routes";

export const tenantSettingLinksDesktop = [
  {
    name: "Profile",
    icon: <WalletIcon className="text-primary-dark" size={18} />,
    link: routes.TENANT_DASHBOARD_SETTINGS + "?path=profile",
  },
  {
    name: "Fund wallet",
    icon: <WalletIcon className="text-primary-dark" size={18} />,
    link: routes.TENANT_DASHBOARD_SETTINGS + "?path=wallet",
  },
  {
    name: "Change password",
    icon: <LockKeyholeIcon className="text-primary-dark" size={18} />,
    link: routes.TENANT_DASHBOARD_SETTINGS + "?path=password",
  },
  {
    name: "Orders",
    icon: <ListOrderedIcon className="text-primary-dark" size={18} />,
    link: routes.TENANT_DASHBOARD_SETTINGS + "?path=order",
  },
  {
    name: "Pay Rent",
    icon: <HomeIcon className="text-primary-dark" size={18} />,
    link: routes.TENANT_DASHBOARD_SETTINGS + "?path=properties",
  },
  {
    name: "Wishlist",
    icon: <HeartIcon className="text-primary-dark" size={18} />,
    link: routes.TENANT_DASHBOARD_SETTINGS + "?path=wishlist",
  },
  {
    name: "Appointments",
    icon: <MapPinnedIcon className="text-primary-dark" size={18} />,
    link: "",
  },
  {
    name: "Support",
    icon: <BotMessageSquareIcon className="text-primary-dark" size={18} />,
    link: "",
  },
];

export const landlordSettingsLinksDesktop = [
  {
    name: "Profile",
    icon: <WalletIcon className="text-primary-dark" size={18} />,
    link: routes.LANDLORD_DASHBOARD_SETTINGS + "?path=profile",
  },
  {
    name: "Account",
    icon: <WalletIcon className="text-primary-dark" size={18} />,
    link: routes.LANDLORD_DASHBOARD_SETTINGS + "?path=account",
  },
  {
    name: "Change password",
    icon: <LockKeyholeIcon className="text-primary-dark" size={18} />,
    link: routes.LANDLORD_DASHBOARD_SETTINGS + "?path=password",
  },
  {
    name: "Orders",
    icon: <ListOrderedIcon className="text-primary-dark" size={18} />,
    link: routes.LANDLORD_DASHBOARD_SETTINGS + "?path=order",
  },
  {
    name: "Property Category",
    icon: <HomeIcon className="text-primary-dark" size={18} />,
    link: routes.LANDLORD_DASHBOARD_SETTINGS + "?path=category",
  },
  {
    name: "Property Facility Type",
    icon: <HeartIcon className="text-primary-dark" size={18} />,
    link: routes.LANDLORD_DASHBOARD_SETTINGS + "?path=facility",
  },
  {
    name: "Appointments",
    icon: <MapPinnedIcon className="text-primary-dark" size={18} />,
    link: "",
  },
];

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
  4: "/dashboard/landlord",
  5: "/dashboard/tenant",
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
  { link: "/", name: "Home", exact: true },
  { link: "/properties", name: "Properties" },
  { link: routes.FUND_WALLET, name: "Fund Wallet" },
];
