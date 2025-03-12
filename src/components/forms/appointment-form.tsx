"use client";

import React, { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { X } from "lucide-react";
import TextInput from "../ui/text-input";
import TextareaInput from "../ui/text-area";
import SubmitButton from "./submit-button";
import { postAppointment, updateAppointment } from "@/api/services/appointment";
import { AppointmentFDT } from "@/definitions/tenant";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppointmentSchema } from "@/lib/schema";

interface AppointmentFormProps {
  closeModal: Dispatch<SetStateAction<boolean>>;
  method: "post" | "put";
  defaultValues?: {
    property_id?: number;
    property_owner_id?: number;
    email?: string;
    name?: string;
    phone?: string;
    property_address?: string;
    date?: string;
    time?: string;
    message?: string;
  };
}

export default function AppointmentForm({
  closeModal,
  defaultValues = {}, // Empty by default for posting scenario
  method,
}: AppointmentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(AppointmentSchema),
    defaultValues: {
      property_id: defaultValues.property_id || 0,
      property_owner_id: defaultValues.property_owner_id || 0,
      email: defaultValues.email || "",
      name: defaultValues.name || "",
      property_address: defaultValues.property_address || "",
      date: defaultValues.date || "",
      time: defaultValues.time || "",
      message: defaultValues.message || "",
      phone: defaultValues.phone || "",
    },
  });

  const onSubmit: SubmitHandler<AppointmentFDT> = async (data) => {
    if (method === "post") {
      const response = await postAppointment(data);

      if (response.status) {
        toast.success("Success", {
          description: "You have successfully booked an appointment 🙂 ",
        });
        closeModal(false);
      }
    } else {
      const response = await updateAppointment(data);
      console.log(response)

      if (response.status) {
        toast.success("Success", {
          description: "You have successfully updated an appointment 🙂 ",
        });
        closeModal(false);
      }
    }
  };

  return (
    <article className="no-scrollbar max-h-[95vh] w-[95%] max-w-[640px] overflow-y-auto rounded-lg bg-white pb-5">
      <header className="sticky top-0 z-50 mb-4 flex justify-between border-b bg-white p-5">
        <h3 className="text-lg font-semibold">
          {method === "put" ? "Update Appointment" : "Book Appointment"}
        </h3>
        <button
          className="rounded p-1 transition-colors duration-200 hover:bg-gray-200"
          onClick={() => closeModal(false)}
        >
          <X size={20} />
        </button>
      </header>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-4 px-4">
        {/* Hidden Inputs */}
        <input type="hidden" {...register("property_id")} />
        <input type="hidden" {...register("property_owner_id")} />
        <input type="hidden" {...register("email")} />
        <input type="hidden" {...register("name")} />

        {/* Property Address */}
        <div>
          <TextInput
            register={register}
            name="property_address"
            label="Property Address"
            disabled={true}
            error={errors.property_address?.message}
            required
          />
          <p className="mt-1 text-sm tracking-wide text-black">
            <strong>Note:</strong> You can chat with the property owner to meet
            at a different location.
          </p>
        </div>

        {/* Message */}
        <TextareaInput
          register={register}
          name="message"
          label="Message"
          placeholder="E.g: Hi, I am interested in this property. Can we meet to inspect the property?"
          error={errors.message?.message}
          required
        />

        {/* Date and Time */}
        <div className="mb-2 flex flex-col lg:flex-row w-full gap-4">
          <div className="w-full">
            <TextInput
              register={register}
              name="date"
              label="Date"
              type="date"
              error={errors.date?.message}
              required
            />
          </div>
          <div className="w-full">
            <TextInput
              register={register}
              name="time"
              label="Time"
              type="time"
              error={errors.time?.message}
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <SubmitButton
          isSubmitting={isSubmitting}
          text={method === "put" ? "Update Appointment" : "Book Appointment"}
        />
      </form>
    </article>
  );
}
