import { z } from "zod";
import { Path, UseFormRegister } from "react-hook-form";
import {
  addGalleryPhotoSchema,
  addPropertySchema,
  addTenantSchema,
  basicPropertyInfoSchema,
  changePasswordSchema,
  forgotPasswordSchema,
  loginSchema,
  profileSchema,
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
  disabled?: boolean;
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
export type AddPropertyDataType = z.infer<typeof addPropertySchema>;
export type AddGalleryPhotoDataType = z.infer<typeof addGalleryPhotoSchema>;
export type AddTenantDataType = z.infer<typeof addTenantSchema>;
export type ProfileFormData = z.infer<typeof profileSchema>;
export type BasicPropertyInfoDataType = z.infer<typeof basicPropertyInfoSchema>;

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
  price: string;
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
  title: string;
  property: {
    id: number;
    name: string;
    image: string;
    deal_type: "Rent";
    type: "Commercial" | "Residential";
    completion: "Under Construction" | "Completed";
    total_unit: number | null;
    total_occupied: number | null;
    total_rent: number | null;
    total_sell: number | null;
    address: string;
    city: string | null;
    country: string;
    zip_code: string | null;
    size: number | null;
    dining_combined: string;
    bedroom: number | null;
    bathroom: number | null;
    rent_amount: number;
    flat_no: string | null;
    description: string | null;
  };
  current_tenant: any[];
  previous_tenants: any[];
  facilities: any[];
  gallery: {
    id: number;
    title: string;
    path: string;
    original_path: string;
  }[];
  floor_plans: any[];
  location: {
    id: number;
    property_id: number;
    user_id: number;
    address: string;
    country_id: number;
    state_id: number;
    city_id: number | null;
    division_id: number | null;
    district_id: number | null;
    upazila_id: number | null;
    post_code: string | null;
    latitude: number | null;
    longitude: number | null;
    status: number;
    created_at: string;
    updated_at: string;
    city: {
      id: number;
      name: string;
      state_id: number;
      state_code: string;
      country_id: number;
      country_code: string;
      latitude: string;
      longitude: string;
      created_at: string;
      updated_at: string | null;
      flag: number;
      wikiDataId: string | null;
    };
    country: {
      id: number;
      name: string;
      iso3: string;
      numeric_code: string;
      iso2: string;
      phonecode: string;
      capital: string;
      currency: string;
      currency_name: string;
      currency_symbol: string;
      tld: string;
      native: string;
      region: string;
      subregion: string;
      timezones: string;
      translations: string;
      latitude: string;
      longitude: string;
      emoji: string;
      emojiU: string;
      created_at: string;
      updated_at: string;
      flag: number;
      status: number;
    };
  };
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

export interface PropertyMetadataResponseDataType {
  messages: string;
  deal_type: Record<string, string>;
  type: string[];
  completion: string[];
  facilities: Array<{
    id: number;
    name: string;
    image: string;
  }>;
  categories: Array<{
    id: number;
    name: string;
  }>;
}

export interface LandlordTenantType {
  id: number;
  name: string;
  email: string;
  date_of_birth: string;
  join_date: string;
  gender: string | null;
  phone: string;
  country: string;
  address: string | null;
  occupation: string;
  blood_group: string;
  avater: string;
}

export interface LandlordTenantsResponseType {
  list: LandlordTenantType[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  pagination: {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
  };
}

export type NotificationType = {
  id: number;
  title: string;
  message: string;
  sender_id: number;
  receiver_id: number;
  is_read: number;
  read_at: string;
  created_by: number;
  created_at: string;
  updated_at: string;
};

export interface NotificationResponseType {
  notifications: Array<NotificationType>;
}

export interface UserDetailsResponseDataType {
  messages: string;
  profile_info: {
    id: number;
    name: string;
    email: string;
    phone: string;
    occupation: string;
    institution: string;
    gender: string;
    date_of_birth: string;
    join_date: string;
    nid: string;
    passport: string;
    designation: string;
    role_id: number;
    user_image: string;
  };
}

export interface Country {
  id: number;
  code: string;
  name: string;
  status: number;
}

export interface LocationList {
  id: number;
  name: string;
}
