"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import TextInput from "../ui/text-input";
import TextareaInput from "../ui/text-area";
import { useState } from "react";
import ModalLayout from "../ui/modal-layout";
import { X } from "lucide-react";
import SubmitButton from "./submit-button";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookAppointmentSchema } from "@/lib/schema";
import { BookAppointmentDataType } from "@/definition";
import { postAppointment } from "@/api/services/appointment";

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

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<BookAppointmentDataType>({
    resolver: zodResolver(bookAppointmentSchema),
    defaultValues: {
      name: data.name,
      phone: data.phone,
      email: data.email,
      property_address: data.property_address,
      message: "",
      property_id: data.property_id,
      property_owner_id: data.property_owner_id,
    },
  });

  const onSubmit: SubmitHandler<BookAppointmentDataType> = async (data) => {
    const response = await postAppointment(data);

    if (response.status) {
      toast.success("Success", {
        description: "You have successfully booked an appointment 🙂 ",
      });
      setIsBooking(false);
    }
  };

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
          <article className="no-scrollbar max-h-[95vh] w-[95%] max-w-[640px] overflow-y-auto rounded-lg bg-white pb-5">
            <header className="sticky top-0 z-50 mb-4 flex justify-between border-b bg-white p-5">
              <h3 className="text-lg font-semibold">Add Category</h3>
              <button
                className="rounded p-1 transition-colors duration-200 hover:bg-gray-200"
                onClick={() => setIsBooking(false)}
              >
                <X size={20} />
              </button>
            </header>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-4">
              <input type="hidden" {...register("property_id")} />
              <input type="hidden" {...register("property_owner_id")} />
              <input type="hidden" {...register("email")} />
              <input type="hidden" {...register("name")} />

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
                  {" "}
                  <strong>Note:</strong> You can chat the property owner to meet
                  at a different location.
                </p>
              </div>

              <TextInput
                register={register}
                name="date"
                label="Date"
                type="date"
                error={errors.date?.message}
                required
              />
              <TextInput
                register={register}
                name="time"
                label="Time"
                type="time"
                error={errors.time?.message}
                required
              />
              <TextareaInput
                register={register}
                name="message"
                label="Message"
                placeholder="E.g: Hi, I am interested in this property. Can we meet to inspect the property?"
                error={errors.message?.message}
                required
              />

              <SubmitButton
                isSubmitting={isSubmitting}
                text="Book Appointment"
              />
            </form>
          </article>
        </ModalLayout>
      )}
    </>
  );
}
