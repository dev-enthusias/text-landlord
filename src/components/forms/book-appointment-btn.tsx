"use client";

import { useState } from "react";
import ModalLayout from "../ui/modal-layout";
import AppointmentForm from "./appointment-form";

export default function BookAppointment({
  data,
}: {
  data: {
    name: string;
    phone: string;
    email: string;
    property_address: string;
    property_id: number;
    property_owner_id: number;
  };
}) {
  const [isBooking, setIsBooking] = useState(false);

  return (
    <>
      <button
        type="button"
        className="flex items-center justify-center gap-x-2 rounded-full bg-black px-6 py-3 text-sm font-bold text-[#f3f3f3]"
        onClick={() => setIsBooking(true)}
      >
        Book Appointment
      </button>

      {isBooking && (
        <ModalLayout>
          <AppointmentForm
            method="post"
            closeModal={setIsBooking}
            defaultValues={data}
          />
        </ModalLayout>
      )}
    </>
  );
}
