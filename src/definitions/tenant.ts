import { AppointmentSchema } from "@/lib/schema";
import { z } from "zod";

type PaginationType = {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
};

type LinksType = {
  first: string;
  last: string | null;
  prev: null | string;
  next: string | null;
};

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

export interface AppointmentRDT {
  status: true;
  message: string;
  data: {
    list: AppointmentType[];
    pagination: PaginationType;
  };
}

export type AppointmentFDT = z.infer<typeof AppointmentSchema>;

export interface OrderRDT {
  status: boolean;
  message: string;
  data: {
    list: {
      id: number;
      invoice_no: string;
      tenant_id: number;
      billing_address_id: null | string;
      date: string;
      subtotal: string;
      discount_amount: string;
      coupon_amount: string;
      grand_total: string;
      paid_amount: string;
      due_amount: string;
      grace_period: number;
      caution_fee: string;
    }[];
    links: LinksType;
    pagination: PaginationType;
  };
}

export interface OrderDetailsRDT {
  status: boolean;
  message: string;
  data: {
    list: {
      id: number;
      order_id: number;
      property_id: number;
      advertisement_id: number;
      start_date: null | string;
      end_date: null | string;
      price: string;
      discount_amount: string;
      total_amount: string;
      payment_status: "unpaid" | "paid";
      status: "completed" | "pending";
      property: {
        id: number;
        name: string;
        slug: string;
        image: string;
      };
    }[];
    links: LinksType;
    pagination: PaginationType;
  };
}

export type MergedOrder = OrderRDT["data"]["list"][0] &
  OrderDetailsRDT["data"]["list"][0];

export interface AdvertisedPropertiesRDT {
  status: boolean;
  message: string;
  data: {
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
    grace_period: number;
    caution_fee: string;
    discount_amount: string;
    discount_type: "fixed";
    rent_type: null | string;
    image: string;
    type: string;
    vacant: string;
    flat_no: string;
    completion: string;
    deal_type: string;
    category: string;
  }[];
}

export interface AdvertisedPropertyDetailsRDT {
  status: boolean;
  message: string;
  data: {
    advertisement: {
      id: number;
      property_id: number;
      property_creator_id: number;
      advertisement_type: number;
      booking_amount: null;
      rent_amount: number;
      rent_type: number;
      rent_start_date: null;
      rent_end_date: null;
      max_member: null;
      lease_amount: null;
      lease_duration: null;
      caretaker_duration: null;
      terms_condition: "ok";
    };
    property: {
      id: number;
      name: string;
      image: string;
      type: string;
      completion: string;
      total_unit: null;
      total_occupied: null;
      total_rent: null;
      total_sell: null;
      size: string;
      dining_combined: null;
      bedroom: number;
      bathroom: number;
      rent_type: null;
      amount: number;
      grace_period: number;
      caution_fee: string;
      discount_amount: number;
      discount_type: "fixed";
      booking_amount: null;
      flat_no: string;
      description: string;
      category: string;
      user_email: string;
      user_phone: string;
      wishlist: boolean;
    };
    address: {
      id: 67;
      country: string;
      latitude: null;
      longitude: null;
      address: string;
    };
    galleries: {
      "1": {
        id: number;
        name: string;
        image: string;
      };
    };
    floorPlans: [
      {
        id: number;
        name: string;
        image: string;
      },
    ];
    user: {
      id: number;
      name: string;
      photo: string;
    };
    facilities: {
      id: number;
      name: string;
      content: string;
      icon: string;
    }[];
    category: { id: number; name: string };
    property_reviews: [];
    ratting: {
      "1": number;
      "2": number;
      "3": number;
      "4": number;
      "5": number;
    };
    agvRating: number;
  };
}

// export interface AdvertisedPropertyDetailsRDT {
//   status: boolean;
//   message: string;
//   data: {
//     id: number;
//     user_id: number;
//     property_id: number;
//     property_creator_id: number;
//     advertisement_type: number;
//     booking_amount: null;
//     rent_amount: number;
//     rent_type: number;
//     rent_start_date: null;
//     rent_end_date: null;
//     max_member: null;
//     mortgage_amount: null;
//     mortgage_duration: null;
//     lease_amount: null;
//     lease_duration: null;
//     caretaker_duration: null;
//     sell_amount: null;
//     sell_start_date: null;
//     negotiable: number;
//     status: number;
//     approval_status: number;
//     approved_by: null;
//     approved_at: null;
//     terms_condition: string;
//     created_at: string;
//     updated_at: string;
//   };
// }

export interface PropertySearchFieldsRDT {
  status: boolean;
  message: string;
  data: {
    search: string;
    price: string;
    baths: string[];
    beds: string[];
    categories: { id: number; name: string }[];
    types: { id: number; name: string }[];
    sqfts: string[];
    filters: {
      is_trending: string;
      is_recommended: string;
      discounted: string;
    };
  };
}
