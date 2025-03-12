"use client";

import { useState } from "react";
import { toast } from "sonner";
import { MapPin } from "lucide-react";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import LoadingSpinner from "./loading-spinner";
import { deleteAppointment } from "@/api/services/appointment";
import revalidate from "@/utils/revalidate";
import { formatDateToLong } from "@/utils/formatDate";
import { AppointmentType } from "@/definition";
import ModalLayout from "./modal-layout";
import AppointmentForm from "../forms/appointment-form";

export default function AppointmentCard({ data }: { data: AppointmentType }) {
  const [isDeleting, setDeleting] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const formatTime = (date: string) => {
    const hrMinSec = date.includes("-") ? date.split("-") : date.split(":");
    const amOrPm = +hrMinSec[0] >= 12 ? "PM" : "AM";
    const hrIn12Format = +hrMinSec[0] - 12;
    const newHr = hrIn12Format === 0 ? "12" : String(hrIn12Format);
    hrMinSec[0] = newHr;

    return `${hrMinSec[0]}:${hrMinSec[1]} ${amOrPm}`;
  };

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

  return (
    <>
      <article className="custom-shadow relative rounded-lg px-3 pb-3 pt-4">
        <section className="mb-2">
          <h3 className="mb-1 text-base font-bold text-gray-800">
            {data.name}
          </h3>
          <p className="text-sm">{data.message}</p>
        </section>

        <section className="mb-1 flex items-center gap-x-1.5 text-sm font-medium capitalize text-gray-700">
          <FaRegCalendarAlt />
          <div className="flex grow justify-between gap-x-2">
            <p>{formatDateToLong(data.date)}</p>
            <p className="flex items-center gap-x-1">
              <FaRegClock /> {formatTime(data.time)}
            </p>
          </div>
        </section>
        <section className="flex items-center gap-x-1.5 text-sm font-medium capitalize text-gray-700">
          <MapPin size={16} />
          <p>{data.property_address}</p>
        </section>

        <section className="mt-3 grid grid-cols-2 gap-x-2 text-sm">
          <button
            onClick={() => setIsEditFormOpen(true)}
            className="flex items-center justify-center gap-x-2 rounded-lg bg-black py-3 font-semibold text-[#f3f3f3] transition-all duration-300 hover:bg-black/90"
          >
            Edit
          </button>

          <button
            onClick={handleDeleteAppointment}
            className="flex items-center justify-center gap-x-2 rounded-lg bg-accent/20 py-3 font-semibold text-accent transition-all duration-300 hover:bg-accent/15"
          >
            Delete {isDeleting && <LoadingSpinner />}
          </button>
        </section>
      </article>

      {isEditFormOpen && (
        <ModalLayout>
          <AppointmentForm
            closeModal={setIsEditFormOpen}
            method="put"
            defaultValues={{ ...data, property_id: 0, property_owner_id: 0 }} // Only pre-fill location
          />
        </ModalLayout>
      )}
    </>
  );
}
