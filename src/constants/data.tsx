import {
  BotMessageSquareIcon,
  CircleAlertIcon,
  HeartIcon,
  HistoryIcon,
  ListOrderedIcon,
  LockKeyholeIcon,
  MapPinnedIcon,
  NotebookTextIcon,
  ShieldAlertIcon,
  WalletIcon,
} from "lucide-react";
import { routes } from "./routes";

export const settings = {
  general: [
    {
      name: "Fund Wallet",
      icon: <WalletIcon className="text-primary-dark" size={18} />,
      link: "",
    },
    {
      name: "Transaction History",
      icon: <HistoryIcon className="text-primary-dark" size={18} />,
      link: routes.DASHBOARDHISTORY,
    },
    {
      name: "Change Password",
      icon: <LockKeyholeIcon className="text-primary-dark" size={18} />,
      link: "",
    },
  ],
  general2: [
    {
      name: "Orders",
      icon: <ListOrderedIcon className="text-primary-dark" size={18} />,
      link: "",
    },
    {
      name: "Wishlist",
      icon: <HeartIcon className="text-primary-dark" size={18} />,
      link: "",
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
  ],
  legal: [
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
