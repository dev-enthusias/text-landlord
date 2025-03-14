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
