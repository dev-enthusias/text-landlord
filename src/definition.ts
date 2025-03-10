import { z } from "zod";
import { Path, UseFormRegister } from "react-hook-form";
import {
  addAccountSchema,
  addAgentSchema,
  addGalleryPhotoSchema,
  addPropertySchema,
  addTenantSchema,
  basicPropertyInfoSchema,
  bookAppointmentSchema,
  changePasswordSchema,
  createAdvertSchema,
  forgotPasswordSchema,
  loginSchema,
  profileSchema,
  registerFormSchema,
  waitListSchema,
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
  maxLength?: number;
  placeholder?: string;
  register: UseFormRegister<any>;
}

export type TenantPropertyCardTypes<T> = {
  type?: "order" | "rent" | "wishlist";
  roleid?: number;
  data: T;
};

export type LoginDataType = z.infer<typeof loginSchema>;
export type ForgotPasswordDataType = z.infer<typeof forgotPasswordSchema>;
export type ChangePasswordDataType = z.infer<typeof changePasswordSchema>;
export type FormOneDataType = z.infer<typeof registerFormSchema>;
export type AddPropertyDataType = z.infer<typeof addPropertySchema>;
export type BookAppointmentDataType = z.infer<typeof bookAppointmentSchema>;
export type AddGalleryPhotoDataType = z.infer<typeof addGalleryPhotoSchema>;
export type AddTenantDataType = z.infer<typeof addTenantSchema>;
export type AddAgentDataType = z.infer<typeof addAgentSchema>;
export type ProfileFormData = z.infer<typeof profileSchema>;
export type WaitListDataType = z.infer<typeof waitListSchema>;
export type BasicPropertyInfoDataType = z.infer<typeof basicPropertyInfoSchema>;
export type CreateAdvertDataType = z.infer<typeof createAdvertSchema>;
export type AddAccountDataType = z.infer<typeof addAccountSchema>;

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

export interface Property {
  id: number;
  name: string;
  image: string;
  deal_type: "Rent";
  type: "Commercial";
  completion: "Completed";
  status: "pending" | "approved";
  total_unit: number | string | null;
  total_occupied: number | string | null;
  total_rent: number | string | null;
  total_sell: number | string | null;
  price: string;
  address: string;
  bathroom: number;
  bedroom: number;
  city: string;
  country: string;
  description: string;
  dining_combined: number | string | null;
  flat_no: number | string | null;
  rent_amount: number;
  size: string;
  zip_code: string;
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

export type ChatMessage = {
  createdAt: number;
  type: "text";
  status: "seen" | "sent";
  author: { id: string };
  id: string;
  text: string;
  height?: number;
  metadata?: { base64image: string };
  name: string;
  size: number;
  uri: string;
  width: number;
};

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
    status: "pending" | "approved";
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

export interface BankType {
  active: boolean;
  code: string;
  country: string;
  createdAt: string;
  currency: string;
  gateway: string;
  id: number;
  is_deleted: boolean;
  longcode: string;
  name: string;
  pay_with_bank: boolean;
  slug: string;
  supports_transfer: boolean;
  type: string;
  updatedAt: string;
}

export interface AccountType {
  id: number;
  user_id: number;
  name: string;
  branch: null | string;
  account_number: string;
  account_name: string;
  route_number: string;
  branch_address: null | string;
  sub_account_id: null | string;
  sub_account: string;
  status: number;
  split_id: string;
  split_name: string;
  split_code: string;
  created_at: string;
  updated_at: string;
}

export interface AdvertisementListResponse {
  current_page: number;
  data: {
    advertisement_type: number;
    approval_status: number;
    approved_at: null | string | number;
    approved_by: null | string | number;
    booking_amount: null | string | number;
    caretaker_duration: null | string | number;
    created_at: string;
    id: number;
    lease_amount: null | string | number;
    lease_duration: null | string | number;
    max_member: null | string | number;
    mortgage_amount: null | string | number;
    mortgage_duration: null | string | number;
    negotiable: number;
    property_creator_id: number;
    property_id: number;
    rent_amount: number;
    rent_end_date: null | string | number;
    rent_start_date: null | string | number;
    rent_type: number;
    sell_amount: null | number | string;
    sell_start_date: null | string;
    status: number;
    terms_condition: string;
    updated_at: string;
    user_id: number;
  }[];
  first_page_url: string;
  from: null | string;
  last_page: number;
  last_page_url: string;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
  next_page_url: null | string;
  path: string;
  per_page: number;
  prev_page_url: null | string;
  to: null | string | number;
  total: number;
}

export interface TenantAdvertisedProperties {
  id: number;
  advertise_id: number;
  name: string;
  slug: string;
  address: {
    address: string;
    address_lat: string;
    address_long: string;
    city: string;
    city_lat: string;
    city_long: string;
    state: string;
    state_lat: string;
    state_long: string;
    zip: string;
    country: string;
  };
  bedrooms: number;
  bathrooms: number;
  size: string;
  booking_amount: string;
  price: string;
  discount_amount: string;
  discount_type: string;
  rent_type: null | string;
  image: string;
  type: string;
  vacant: string;
  flat_no: string | null;
  completion: string;
  deal_type: string;
  category: string;
}

export interface TenantAdvertisedPropertyDetails {
  advertisement: {
    id: number;
    property_id: number;
    property_creator_id: number;
    advertisement_type: number;
    booking_amount: number | null;
    rent_amount: number;
    rent_type: number;
    rent_start_date: string | null;
    rent_end_date: string | null;
    max_member: number | null;
    lease_amount: number | null;
    lease_duration: string | null;
    caretaker_duration: string | null;
    terms_condition: string;
  };
  property: {
    id: number;
    name: string;
    image: string;
    type: string | null;
    completion: string;
    total_unit: number | null;
    total_occupied: number | null;
    total_rent: number | null;
    total_sell: number | null;
    size: string;
    dining_combined: string | null;
    bedroom: number;
    bathroom: number;
    rent_type: string | null;
    amount: number;
    discount_amount: number;
    discount_type: string;
    booking_amount: number | null;
    flat_no: string | null;
    description: string;
    category: string;
    user_email: string;
    user_phone: string;
    wishlist: boolean;
  };
  address: {
    id: number;
    country: string;
    latitude: number | null;
    longitude: number | null;
    address: string;
  };
  galleries: Array<{
    id: number;
    name: string;
    image: string;
  }>;
  floorPlans: {
    [key: string]: {
      id: number;
      name: string;
      image: string;
    };
  };
  user: {
    id: number;
    name: string;
    photo: string;
  };
  facilities: [];
  category: { id: number; name: string };
  property_reviews: [];
  ratting: { "1": number; "2": number; "3": number; "4": number; "5": number };
  agvRating: number;
}

export interface WishlistProperty {
  status: boolean;
  message: string;
  data: {
    list: Array<{
      id: number;
      created_at: string;
      property: {
        id: number;
        advertisement: {
          id: number;
          user_id: number;
          property_id: number;
          property_creator_id: number;
          advertisement_type: number;
          booking_amount: number | null;
          rent_amount: number;
          rent_type: number;
          rent_start_date: string | null;
          rent_end_date: string | null;
          max_member: number | null;
          mortgage_amount: number | null;
          mortgage_duration: string | null;
          lease_amount: number | null;
          lease_duration: string | null;
          caretaker_duration: string | null;
          sell_amount: number | null;
          sell_start_date: string | null;
          negotiable: number;
          status: number;
          approval_status: number;
          approved_by: number | null;
          approved_at: string | null;
          terms_condition: string;
          created_at: string;
          updated_at: string;
        };
        name: string;
        slug: string;
        address: string | null;
        bedrooms: number;
        bathrooms: number;
        size: string;
        price: string;
        image: string;
        type: number;
        vacant: string;
        flat_no: string | null;
        completion: string;
        deal_type: string;
        category: string;
      };
    }>;
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
  };
}

export interface CartProperty {
  status: boolean;
  message: string;
  data: Array<{
    id: number;
    tenant_id: number;
    property_id: number;
    advertisement_id: number;
    discount_amount: string;
    amount: string;
    start_date: string | null;
    end_date: string | null;
    type: string | null;
    durations: number;
    created_at: string;
    updated_at: string;
    property: {
      id: number;
      name: string;
      slug: string;
      size: string;
      dining_combined: string | null;
      bedroom: number;
      bathroom: number;
      rent_amount: number;
      price_range: string | null;
      flat_no: string;
      description: string;
      vacant: string;
      completion: number;
      deal_type: number;
      status: string;
      type: number;
      total_unit: number | null;
      total_occupied: number | null;
      total_rent: number | null;
      total_sell: number | null;
      discount_type: string;
      discount_amount: number;
      user_id: number;
      default_image: number;
      property_category_id: number;
      video_verification: string | null;
      video_verification_status: number;
      created_at: string;
      updated_at: string;
      is_trending: number;
      is_populer: number;
      is_recommended: number;
      is_most_populer: number;
      type_id: number;
    };
  }>;
}

export interface SplitDetailsType {
  status: boolean;
  message: string;
  data: {
    user_id: number;
    sub_account_id: number | null;
    sub_account: string;
    split_id: number | null;
    split_code: string | null;
    split_name: string | null;
  };
}

export interface Order {
  id: number;
  invoice_no: string;
  tenant_id: number;
  billing_address_id: number | null;
  date: string;
  subtotal: string;
  discount_amount: string;
  coupon_amount: string;
  grand_total: string;
  paid_amount: string;
  due_amount: string;
}

export interface OrdersDataType {
  status: boolean;
  message: string;
  data: {
    list: Array<Order>;
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
  };
}

export interface OrderDetailsDataType {
  status: boolean;
  message: string;
  data: {
    list: {
      id: number;
      order_id: number;
      property_id: number;
      advertisement_id: number;
      start_date: string | null;
      end_date: string | null;
      price: string;
      discount_amount: string;
      total_amount: string;
      payment_status: string;
      status: string;
      property: {
        id: number;
        name: string;
        slug: string;
        image: string;
      };
    }[];
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
  };
}

export interface AppointmentType {
  id: number;
  name: string;
  email: string;
  phone: string;
  property_address: string;
  message: string;
  date: string;
  time: string;
}

export interface AppointmentDataType {
  status: true;
  message: "successful";
  data: {
    list: AppointmentType[];
    pagination: {
      total: number;
      count: number;
      per_page: number;
      current_page: number;
      total_pages: number;
    };
  };
}

export interface TrxResponseDT {
  list: [];
  links: {
    first: string;
    last: string;
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
}

export interface PropertyFieldsResponseDT {
  status: boolean;
  message: string;
  data: {
    search: string;
    price: string;
    baths: string[];
    beds: string[];
    categories: {
      id: number;
      name: string;
    }[];
    types: {
      id: number;
      name: string;
    }[];
    sqfts: string[];
    filters: {
      is_trending: string;
      is_recommended: string;
      discounted: string;
    };
  };
}
