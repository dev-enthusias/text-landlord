"use client";

import Image from "next/image";
import { AppointmentType } from "@/definition";
import { CiEdit } from "react-icons/ci";
import { MapPin } from "lucide-react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { formatDateToLong } from "@/utils/formatDate";
import { useState } from "react";
import LoadingSpinner from "./loading-spinner";
import {
  cancelAppointment,
  deleteAppointment,
} from "@/api/services/appointment";
import { toast } from "sonner";
import revalidate from "@/utils/revalidate";

export default function AppointmentCard({ data }: { data: AppointmentType }) {
  const [isDeleting, setDeleting] = useState(false);
  const [isCanceling, setCanceling] = useState(false);

  const handleDeleteAppointment = async () => {
    setDeleting(true);
    try {
      const res = await deleteAppointment(data.id);
      if (res.status) {
        toast.success("Appointment successfully deleted");
        revalidate("/tenant/appointments");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setDeleting(false);
    }
  };

  const handleCancelAppointment = async () => {
    setCanceling(true);
    try {
      const res = await cancelAppointment(data.id);
      if (res.status) {
        toast.success("Appointment successfully cancelled");
        revalidate("/tenant/appointments");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setCanceling(false);
    }
  };

  return (
    <article className="custom-shadow relative space-y-3 rounded-lg px-3 py-4">
      <section className="flex items-center gap-x-2">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image
            src="/images/profile-img.jpeg"
            alt=""
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-800">
            Advertisement Owner
          </h3>
          <p className="text-xs">Landlord</p>
        </div>

        <button className="absolute right-3 top-4 rounded-full bg-gray-200 p-1">
          <CiEdit size={20} />
        </button>
      </section>
      <section className="flex items-center gap-x-1.5 text-sm font-medium capitalize text-gray-700">
        <MapPin size={16} />
        <p>{data.property_address}</p>
      </section>
      <section className="flex items-center gap-x-1.5 text-sm font-medium capitalize text-gray-700">
        <FaRegCalendarAlt />
        <div>
          <p>{formatDateToLong(data.date)}</p>
          <p>{data.time}</p>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-x-2">
        <button
          onClick={handleCancelAppointment}
          className="flex items-center justify-center gap-x-2 rounded-lg bg-black py-3 font-semibold text-[#f3f3f3] transition-all duration-300 hover:bg-black/90"
        >
          Cancel{" "}
          {isCanceling && (
            <LoadingSpinner className="border-white border-t-transparent" />
          )}
        </button>
        <button
          onClick={handleDeleteAppointment}
          className="flex items-center justify-center gap-x-2 rounded-lg bg-accent/20 py-3 font-semibold text-accent transition-all duration-300 hover:bg-accent/15"
        >
          Delete {isDeleting && <LoadingSpinner />}
        </button>
      </section>
    </article>
  );
}
