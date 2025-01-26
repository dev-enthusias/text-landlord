import { z } from "zod";
import { Path, UseFormRegister } from "react-hook-form";
import {
  addAccountSchema,
  addGalleryPhotoSchema,
  addPropertySchema,
  addTenantSchema,
  basicPropertyInfoSchema,
  changePasswordSchema,
  createAdvertSchema,
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
  maxLength?: number;
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

export interface AllAdvertsListType {
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
  bedrooms: string | null;
  bathrooms: string | null;
  size: null | string;
  booking_amount: string;
  price: string;
  discount_amount: string;
  discount_type: string;
  rent_type: null | string;
  image: string;
  type: string;
  vacant: string;
  flat_no: null | string;
  completion: string;
  deal_type: string;
  category: string;
}

export interface TenantAdvertisedPropertyDetails {
  advertisement: {
    id: number;
    user_id: number;
    property_id: number;
    property_creator_id: number;
    advertisement_type: number;
    booking_amount: number;
    rent_amount: number;
    rent_type: number;
    rent_start_date: string;
    rent_end_date: string;
    max_member: number;
    mortgage_amount: null;
    mortgage_duration: null;
    lease_amount: null;
    lease_duration: null;
    caretaker_duration: null;
    negotiable: number;
    status: number;
    approval_status: number;
    approved_by: null;
    approved_at: null;
    terms_condition: string;
    created_at: string;
    updated_at: string;
    property: {
      id: number;
      name: string;
      slug: string;
      size: string;
      dining_combined: string;
      bedroom: number;
      bathroom: number;
      rent_amount: number;
      price_range: null;
      flat_no: string;
      description: null | string;
      vacant: string;
      completion: number;
      deal_type: number;
      status: "approved";
      type: number;
      total_unit: null;
      total_occupied: null;
      total_rent: null;
      discount_type: string;
      discount_amount: number;
      user_id: number;
      default_image: {
        id: number;
        path: string;
        created_at: string;
        updated_at: string;
      };
      property_category_id: number;
      video_verification: null;
      video_verification_status: number;
      created_at: string;
      updated_at: string;
      is_trending: string;
      is_populer: string;
      is_recommended: string;
      is_most_populer: string;
      type_id: string;
      facilities: [];
      property_type: {
        id: string;
        name: string;
        slug: string;
        icon: string;
        image_id: null;
        serial: null;
        status: string;
        is_featured: 1;
        created_at: string;
        updated_at: string;
      };
      category: {
        id: number;
        name: string;
        slug: string;
        icon_class: string;
        image_id: number;
        serial: null;
        status: string;
        is_featured: number;
        parent_id: null;
        created_at: string;
        updated_at: string;
      };
      user: {
        id: number;
        name: string;
        email: string;
        date_of_birth: string;
        join_date: null;
        gender: null;
        email_verified_at: string;
        token: null;
        phone: string;
        alt_phone: string;
        new_password: null;
        confirm_password: null;
        permanent_address: null;
        present_address: null;
        institution: null;
        country_id: string;
        city_id: string;
        state_id: string;
        zip_code: string;
        address: string;
        per_country_id: null;
        per_city_id: null;
        per_state_id: null;
        per_zip_code: null;
        per_address: null;
        occupation: string;
        nid: string;
        social_security_number: string;
        passport: string;
        nationality: string;
        blood_group: string;
        tax_certificate: string;
        lang: null;
        property_count: number;
        otp: number;
        permissions: string[];
        status: number;
        image_id: number;
        document_id: null;
        role_id: number;
        designation_id: number;
        department_id: null;
        address_verify: number;
        req_address_verify: number;
        address_details: null;
        created_at: string;
        updated_at: string;
        active_status: number;
        avatar: string;
        dark_mode: number;
        messenger_color: null;
        property_owner: null;
        tin_number: null;
        marital_status: null;
        religion: null;
        firebase_key: null;
      };
      location: {
        id: number;
        property_id: number;
        user_id: number;
        address: string;
        country_id: number;
        state_id: number;
        city_id: number;
        division_id: null;
        district_id: null;
        upazila_id: null;
        post_code: null;
        latitude: string;
        longitude: null;
        status: number;
        created_at: string;
        updated_at: string;
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
          timezones: {
            zoneName: string;
            gmtOffset: number;
            gmtOffsetName: string;
            abbreviation: string;
            tzName: string;
          }[];
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
      galleries: [
        {
          id: 1;
          type: "gallery";
          title: null;
          property_id: 1;
          image_id: 41;
          status: 1;
          is_default: 0;
          serial: 1;
          created_at: "2024-09-27T21:05:41.000000Z";
          updated_at: "2024-09-27T21:05:41.000000Z";
          image: {
            id: 41;
            path: "backend/uploads/properties/1727471141.jpg";
            created_at: "2024-09-27T21:05:41.000000Z";
            updated_at: "2024-09-27T21:05:41.000000Z";
          };
        },
        {
          id: 2;
          type: "gallery";
          title: null;
          property_id: 1;
          image_id: 42;
          status: 1;
          is_default: 0;
          serial: 2;
          created_at: "2024-09-27T21:05:55.000000Z";
          updated_at: "2024-09-27T21:05:55.000000Z";
          image: {
            id: 42;
            path: "backend/uploads/properties/1727471155.jpg";
            created_at: "2024-09-27T21:05:55.000000Z";
            updated_at: "2024-09-27T21:05:55.000000Z";
          };
        },
      ];
      floor_plans: [
        {
          id: 1;
          type: "gallery";
          title: null;
          property_id: 1;
          image_id: 41;
          status: 1;
          is_default: 0;
          serial: 1;
          created_at: "2024-09-27T21:05:41.000000Z";
          updated_at: "2024-09-27T21:05:41.000000Z";
        },
        {
          id: 2;
          type: "gallery";
          title: null;
          property_id: 1;
          image_id: 42;
          status: 1;
          is_default: 0;
          serial: 2;
          created_at: "2024-09-27T21:05:55.000000Z";
          updated_at: "2024-09-27T21:05:55.000000Z";
        },
      ];
      tenants: [];
      document: null;
    };
  };
  property: {
    id: 1;
    name: "Duplex";
    image: "https://api.ogalandlords.com/backend/uploads/properties/1727470731.jpg";
    deal_type: "Rent";
    type: "Residential";
    completion: "Completed";
    total_unit: null;
    total_occupied: null;
    total_rent: null;
    total_sell: null;
    size: "1000";
    dining_combined: "1";
    bedroom: 3;
    bathroom: 3;
    rent_type: null;
    amount: 1500000;
    discount_amount: 0;
    discount_type: "fixed";
    booking_amount: 2000;
    flat_no: "1";
    description: null;
    category: "Building";
    user_email: "ben360degree@gmail.com";
    user_phone: "08012345678";
    wishlist: true;
  };
  address: {
    id: 1;
    country: "Nigeria";
    latitude: "161";
    longitude: null;
    address: "35 Association Avenue, Ilupeju";
  };
  galleries: [
    {
      id: 1;
      name: null;
      image: "https://api.ogalandlords.com/backend/uploads/properties/1727471141.jpg";
    },
    {
      id: 2;
      name: null;
      image: "https://api.ogalandlords.com/backend/uploads/properties/1727471155.jpg";
    },
  ];
  floorPlans: [];
  user: {
    id: 1;
    name: "Engr. Idowu Okegbenro";
    email: "ben360degree@gmail.com";
    phone: "08012345678";
  };
  tenants: [];
  facilities: [];
  category: {
    id: 2;
    name: "Building";
  };
  document: null;
  property_reviews: [];
  ratting: {
    "1": 0;
    "2": 0;
    "3": 0;
    "4": 0;
    "5": 0;
  };
  agvRating: 0;
}
