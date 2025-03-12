import { AppointmentSchema } from "@/lib/schema";
import { z } from "zod";

type PaginationType = {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
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
