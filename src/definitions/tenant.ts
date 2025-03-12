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
