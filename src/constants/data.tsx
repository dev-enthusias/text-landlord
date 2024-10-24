import {
  BotMessageSquareIcon,
  CircleAlertIcon,
  HeartIcon,
  HistoryIcon,
  HomeIcon,
  ListOrderedIcon,
  LockKeyholeIcon,
  MapPinnedIcon,
  NotebookTextIcon,
  ShieldAlertIcon,
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

export const settings = {
  general: [
    {
      name: "Fund wallet",
      icon: <WalletIcon className="text-primary-dark" size={18} />,
      link: routes.DASHBOARDADDMONEY,
    },
    {
      name: "Transaction history",
      icon: <HistoryIcon className="text-primary-dark" size={18} />,
      link: routes.DASHBOARDHISTORY,
    },
    {
      name: "Change password",
      icon: <LockKeyholeIcon className="text-primary-dark" size={18} />,
      link: routes.DASHBOARDCHANGEPASSWORD,
    },
  ],

  generallandlord: [
    {
      name: "Profile",
      icon: <WalletIcon className="text-primary-dark" size={18} />,
      link: routes.TENANT_DASHBOARD_SETTINGS + "?path=profile",
    },
    {
      name: "Account",
      icon: <WalletIcon className="text-primary-dark" size={18} />,
      link: routes.DASHBOARDSETTINGS + "?path=account",
    },
    {
      name: "Change password",
      icon: <LockKeyholeIcon className="text-primary-dark" size={18} />,
      link: routes.DASHBOARDSETTINGS + "?path=password",
    },
    {
      name: "Orders",
      icon: <ListOrderedIcon className="text-primary-dark" size={18} />,
      link: routes.DASHBOARDSETTINGS + "?path=order",
    },
    {
      name: "Property Category",
      icon: <HomeIcon className="text-primary-dark" size={18} />,
      link: routes.DASHBOARDSETTINGS + "?path=category",
    },
    {
      name: "Property Facility Type",
      icon: <HeartIcon className="text-primary-dark" size={18} />,
      link: routes.DASHBOARDSETTINGS + "?path=facility",
    },
    {
      name: "Appointments",
      icon: <MapPinnedIcon className="text-primary-dark" size={18} />,
      link: "",
    },
  ],
  general2: [
    {
      name: "Orders",
      icon: <ListOrderedIcon className="text-primary-dark" size={18} />,
      link: routes.DASHBOARDORDER,
    },
    {
      name: "Rented properties",
      icon: <HomeIcon className="text-primary-dark" size={18} />,
      link: routes.DASHBOARDRENTEDPROPERTIES,
    },
    {
      name: "Wishlist",
      icon: <HeartIcon className="text-primary-dark" size={18} />,
      link: routes.DASHBOARDWISHLIST,
    },
    {
      name: "Appointments",
      icon: <MapPinnedIcon className="text-primary-dark" size={18} />,
      link: "",
    },
  ],

  legal: [
    {
      name: "Support",
      icon: <BotMessageSquareIcon className="text-primary-dark" size={18} />,
      link: "",
    },
    {
      name: "Terms and condition",
      icon: <NotebookTextIcon className="text-primary-dark" size={18} />,
      link: "",
    },
    {
      name: "Privacy policy",
      icon: <ShieldAlertIcon className="text-primary-dark" size={18} />,
      link: "",
    },
    {
      name: "About",
      icon: <CircleAlertIcon className="text-primary-dark" size={18} />,
      link: "",
    },
  ],
};

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
  { title: "Rent", icon: <HomeIcon />, number: 10 },
  { title: "Sale", icon: <HomeIcon />, number: 10 },
  { title: "Recommended Properties", icon: <HomeIcon />, number: 10 },
  { title: "Trending Properties", icon: <HomeIcon />, number: 10 },
  { title: "Discounted Properties", icon: <HomeIcon />, number: 10 },
];

export const landloardQuickActionData = [
  { icons: <HomeIcon />, title: "Add Property" },
  { icons: <HomeIcon />, title: "Tenants" },
  { icons: <HomeIcon />, title: "Add Tenants" },
  { icons: <HomeIcon />, title: "Reports" },
  { icons: <HomeIcon />, title: "Assign Agents" },
  { icons: <HomeIcon />, title: "Bill Management" },
];

export const ROLE_ROUTES = {
  4: "/dashboard/landlord",
  5: "/dashboard/tenant",
};
