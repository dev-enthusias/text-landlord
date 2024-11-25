import { z } from "zod";
import { Path, UseFormRegister } from "react-hook-form";
import {
  changePasswordSchema,
  forgotPasswordSchema,
  loginSchema,
  registerFormSchema,
} from "./lib/schema";

export type SidebarNavLinks = {
  name: string;
  icon: JSX.Element;
  href: string;
  exact: boolean;
}[];

export type TrxButtonProps = {
  text: string;
  link: string;
  type: string;
}[];

export type RoleType = {
  role: "landlord" | "agent" | "tenant";
};

export interface TextInputProps {
  label: string;
  name: Path<any>;
  required?: boolean;
  type?: string;
  error?: string;
  register: UseFormRegister<any>;
}

export type TenantPropertyCardTypes = {
  type?: "order" | "rent" | "wishlist";
  roleid?: number;
  data: Property;
};

export type LoginDataType = z.infer<typeof loginSchema>;
export type ForgotPasswordDataType = z.infer<typeof forgotPasswordSchema>;
export type ChangePasswordDataType = z.infer<typeof changePasswordSchema>;
export type FormOneDataType = z.infer<typeof registerFormSchema>;

export interface LandlordDashboardStatisticResponseDataType {
  total_properties: number;
  total_vacant: number;
  total_occupied: number;
  properties: {
    id: number;
    name: string;
    image: string;
    deal_type: "Rent";
    type: "Commercial";
    completion: "Completed";
    status: "pending";
  }[];
  transactions: [];
}

interface Property {
  id: number;
  name: string;
  image: string;
  deal_type: "Rent";
  type: "Commercial";
  completion: "Completed";
  status: "pending";
  total_unit: null;
  total_occupied: null;
  total_rent: null;
  total_sell: null;
}

export interface LandlordPropertiesResponseDataType {
  statistics: {
    total: number;
    vacant: number;
    occupied: number;
  };
  properties: {
    list: Property[];
    links: {
      first: "http://api.ogalandlords.com/api/private/v1/property/list?page=1";
      last: "http://api.ogalandlords.com/api/private/v1/property/list?page=1";
      prev: null;
      next: null;
    };
    pagination: {
      total: number;
      count: number;
      per_page: number;
      current_page: number;
      total_pages: number;
    };
  };
}

export interface LandlordPropertyDetailsResponseDataType {
  title: "Tenant";
  property: {
    id: 4;
    name: "Duplex at lekki";
    image: "http://api.ogalandlords.com/backend/uploads/properties/1729074446.jpg";
    deal_type: "Rent";
    type: "Residential";
    completion: "Completed";
    total_unit: null;
    total_occupied: null;
    total_rent: null;
    total_sell: null;
    address: "lagos state";
    city: null;
    country: "American Samoa";
    zip_code: null;
    size: null;
    dining_combined: null;
    bedroom: null;
    bathroom: null;
    rent_amount: null;
    flat_no: null;
    description: null;
  };
  current_tenant: [];
  previous_tenants: [];
  facilities: [];
  gallery: [];
  floor_plans: [];
}

export interface RegisterDataType {
  name: string;
  password: string;
  type: string;
  email: string;
}

export interface ProfileDetailsRDT {
  id: number;
  name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  join_date: string;
  nid: string;
  passport: string;
  occupation: string;
  institution: string;
  designation: string;
  gender: string;
  role_id: number;
}
