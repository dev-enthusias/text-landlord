import {
  HomeIcon,
  HousePlus,
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

export const tenantTopbarLinks = [
  { link: "/tenant", name: "Home", exact: true },
  { link: routes.TENANT_PROPERTIES, name: "Properties" },
  { link: routes.FUND_WALLET, name: "Fund Wallet" },
];

export const landlordTopbarLinks = [
  { link: "/landlord", name: "Home", exact: true },
  { link: routes.LANDLORD_PROPERTIES, name: "Properties" },
  { link: routes.TENANTS, name: "Tenants" },
  { link: routes.AGENTS, name: "Agents" },
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

export const trendingProperties = [
  {
    id: 1,
    name: "Luxury Haven Duplex",
    image: "/images/tp-1.jpg",
    price: "₦80,000,000",
    location: "Abuja",
    bedrooms: 4,
    bathrooms: 3,
    size: "3,500 ft",
  },
  {
    id: 2,
    name: "Coastal View Apartment",
    image: "/images/tp-2.jpg",
    price: "₦35,000,000",
    location: "Port Harcourt",
    bedrooms: 3,
    bathrooms: 2,
    size: "2,200 ft",
  },
  {
    id: 3,
    name: "Ikoyi Prestige Villa",
    image: "/images/tp-3.jpeg",
    price: "₦60,000,000",
    location: "Ikoyi, Lagos",
    bedrooms: 5,
    bathrooms: 5,
    size: "4,500 ft",
  },
  {
    id: 4,
    name: "Banana Island Mansion",
    image: "/images/tp-4.jpeg",
    price: "₦120,000,000",
    location: "Banana Island, Lagos",
    bedrooms: 6,
    bathrooms: 7,
    size: "6,000 ft",
  },
];

export const apartments = [
  {
    id: 1,
    name: "Elegant City View Apartment",
    image: "/images/a-1.jpg",
    price: "₦25,000,000",
    location: "Victoria Island, Lagos",
    bedrooms: 3,
    bathrooms: 2,
    size: "1,500 ft",
  },
  {
    id: 2,
    name: "Modern Urban Retreat",
    image: "/images/a-2.jpg",
    price: "₦1,500,000",
    location: "Awka, Anambra",
    bedrooms: 2,
    bathrooms: 2,
    size: "1,200 ft",
  },
  {
    id: 3,
    name: "Sleek Contemporary Apartment",
    image: "/images/a-3.jpeg",
    price: "₦20,000,000",
    location: "Abuja",
    bedrooms: 6,
    bathrooms: 3,
    size: "1,000 ft",
  },
  {
    id: 4,
    name: "Luxury Penthouse Suite",
    image: "/images/a-4.jpg",
    price: "₦50,000,000",
    location: "Ikoyi, Lagos",
    bedrooms: 4,
    bathrooms: 3,
    size: "2,200 ft",
  },
];

export const rooms = [
  {
    id: 1,
    name: "Opulent Suite Room",
    image: "/images/r-1.jpg",
    price: "₦5,000,000",
    location: "Victoria Island, Lagos",
    bedrooms: 1,
    bathrooms: 1,
    size: "450 ft",
  },
  {
    id: 2,
    name: "Grand Deluxe Room",
    image: "/images/r-2.jpg",
    price: "₦18,000,000",
    location: "Lekki, Lagos",
    bedrooms: 1,
    bathrooms: 1,
    size: "400 ft",
  },
  {
    id: 3,
    name: "Prestigious Executive Room",
    image: "/images/r-3.jpg",
    price: "₦30,000,000",
    location: "Abuja",
    bedrooms: 1,
    bathrooms: 1,
    size: "500 ft",
  },
  {
    id: 4,
    name: "Regal Chamber Suite",
    image: "/images/r-4.jpeg",
    price: "₦22,000,000",
    location: "Ikoyi, Lagos",
    bedrooms: 1,
    bathrooms: 1,
    size: "420 ft",
  },
];

export const offices = [
  {
    id: 1,
    name: "Prestige Corporate Office",
    image: "/images/o-1.jpg",
    price: "₦42,000,000",
    location: "Victoria Island, Lagos",
    meetingRooms: 2,
    restrooms: 2,
    size: "2,500 ft",
  },
  {
    id: 2,
    name: "Executive Business Center",
    image: "/images/o-2.webp",
    price: "₦57,000,000",
    location: "Central Business District, Abuja",
    meetingRooms: 3,
    restrooms: 3,
    size: "3,000 ft",
  },
  {
    id: 3,
    name: "Modern Office Hub",
    image: "/images/o-3.avif",
    price: "₦38,000,000",
    location: "Trans-Amadi, Port Harcourt",
    meetingRooms: 1,
    restrooms: 1,
    size: "1,800 ft",
  },
  {
    id: 4,
    name: "Luxury Executive Suites",
    image: "/images/o-4.webp",
    price: "₦68,000,000",
    location: "New Haven, Enugu",
    meetingRooms: 4,
    restrooms: 3,
    size: "3,500 ft",
  },
];

export const shops = [
  {
    id: 1,
    name: "Budget Retail Space",
    image: "/images/s-1.jpg",
    price: "₦4,000,000",
    location: "Ikeja, Lagos",
    size: "800 ft",
  },
  {
    id: 4,
    name: "Compact Shop Space",
    image: "/images/s-4.jpeg",
    price: "₦800,000",
    location: "Port Harcourt, Rivers State",
    size: "700 ft",
  },
  {
    id: 2,
    name: "Affordable Storefront",
    image: "/images/s-2.jpg",
    price: "₦3,500,000",
    location: "Wuse, Abuja",
    size: "600 ft",
  },
  {
    id: 3,
    name: "Economy Commercial Outlet",
    image: "/images/s-3.jpeg",
    price: "₦1,200,000",
    location: "Oredo, Benin City",
    size: "750 ft",
  },
];

export const flats = [
  {
    id: 1,
    name: "Modern Urban Flat",
    image: "/images/f-1.jpeg",
    price: "₦4,500,000",
    location: "Warri, Delta State",
    bedrooms: 2,
    bathrooms: 2,
    size: "1,100 ft",
  },
  {
    id: 2,
    name: "Contemporary Comfort Flat",
    image: "/images/f-2.jpeg",
    price: "₦3,000,000",
    location: "Kaduna, Kaduna State",
    bedrooms: 2,
    bathrooms: 1,
    size: "1,000 ft",
  },
  {
    id: 3,
    name: "Cozy Family Flat",
    image: "/images/f-3.jpeg",
    price: "₦5,000,000",
    location: "Awka, Anambra State",
    bedrooms: 3,
    bathrooms: 2,
    size: "1,300 ft",
  },
  {
    id: 4,
    name: "Elegant City Flat",
    image: "/images/f-4.jpeg",
    price: "₦6,500,000",
    location: "Uyo, Akwa Ibom State",
    bedrooms: 3,
    bathrooms: 2,
    size: "1,400 ft",
  },
];

export const shortlets = [
  {
    id: 1,
    name: "Downtown Executive Shortlet",
    image: "/images/sl-1.jpeg",
    price: "₦7,500,000",
    location: "Lekki Phase 1, Lagos",
    bedrooms: 2,
    bathrooms: 2,
    size: "1,200 ft",
  },
  {
    id: 2,
    name: "Cozy Central Shortlet",
    image: "/images/sl-2.jpeg",
    price: "₦5,000,000",
    location: "Maitama, Abuja",
    bedrooms: 1,
    bathrooms: 1,
    size: "800 ft",
  },
  {
    id: 3,
    name: "Modern Shortlet Retreat",
    image: "/images/sl-3.jpeg",
    price: "₦6,500,000",
    location: "Old GRA, Port Harcourt",
    bedrooms: 1,
    bathrooms: 1,
    size: "900 ft",
  },
  {
    id: 4,
    name: "Luxury Shortlet Suite",
    image: "/images/sl-4.jpeg",
    price: "₦9,000,000",
    location: "Uyo, Akwa Ibom",
    bedrooms: 2,
    bathrooms: 2,
    size: "1,400 ft",
  },
];

export const lands = [
  {
    id: 1,
    name: "Prime Commercial Plot",
    image: "/images/l-1.jpeg",
    price: "₦18,000,000",
    location: "Ikeja, Lagos",
    size: "5,000 ft",
  },
  {
    id: 2,
    name: "Residential Plot in Gated Estate",
    image: "/images/l-2.jpg",
    price: "₦16,000,000",
    location: "Garki, Abuja",
    size: "4,000 ft",
  },
  {
    id: 3,
    name: "Farmland Opportunity",
    image: "/images/l-3.jpeg",
    price: "₦10,000,000",
    location: "Diobu, Port Harcourt",
    size: "8,000 ft",
  },
  {
    id: 4,
    name: "Development Opportunity Plot",
    image: "/images/l-4.jpeg",
    price: "₦12,000,000",
    location: "Ilesa, Osun State",
    size: "3,500 ft",
  },
];

export const buildings = [
  {
    id: 1,
    name: "Iconic Commercial Tower",
    image: "/images/b-1.jpg",
    price: "₦120,000,000",
    location: "Ikeja, Lagos",
    floors: 10,
    size: "15K ft",
  },
  {
    id: 2,
    name: "Modern Mixed-use Complex",
    image: "/images/b-2.jpg",
    price: "₦95,000,000",
    location: "Jabi, Abuja",
    floors: 8,
    size: "12K ft",
  },
  {
    id: 3,
    name: "High-end Residential Building",
    image: "/images/b-3.jpeg",
    price: "₦80,000,000",
    location: "Sango, Ibadan",
    floors: 5,
    size: "10K ft",
  },
  {
    id: 4,
    name: "Prestigious Office Building",
    image: "/images/b-4.webp",
    price: "₦150,000,000",
    location: "GRA, Kano",
    floors: 12,
    size: "20K ft",
  },
];
