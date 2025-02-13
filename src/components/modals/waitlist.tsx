"use client";

import { useEffect, useState } from "react";
import TextInput from "../ui/text-input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { waitListSchema } from "@/lib/schema";
import { WaitListDataType } from "@/definition";
import { toast } from "sonner";
import { joinWaitList } from "@/api/services/waitlist";
import SubmitButton from "../forms/submit-button";
import { X } from "lucide-react";

export default function WaitlistModal() {
  const [isTimeout, setIsTimeOut] = useState(false);

  useEffect(() => {
    const hasSubmitted = localStorage.getItem("waitlistSubmitted");

    if (hasSubmitted === "true") {
      return; // Never show again if successfully submitted
    }

    const lastShown = localStorage.getItem("waitlistLastShown");
    const today = new Date().toDateString();

    if (lastShown !== today) {
      localStorage.setItem("waitlistLastShown", today); // Update last shown date
      setTimeout(() => setIsTimeOut(true), 5000);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WaitListDataType>({
    resolver: zodResolver(waitListSchema),
  });

  const onSubmit: SubmitHandler<WaitListDataType> = async (data) => {
    const { phone } = data;

    const formattedNumber = phone.startsWith("+234")
      ? phone
      : "+234" + phone.substring(1);

    const newData = { ...data, phone: formattedNumber };
    const res = await joinWaitList(newData);

    if (res.status) {
      toast.success("You have successfully joined the waitlist");
      localStorage.setItem("waitlistSubmitted", "true");

      setIsTimeOut(false);
    }

    if (!res.status) {
      toast.error(res.message);
    }
  };

  return (
    isTimeout && (
      <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/40 px-5">
        <article className="w-full max-w-[540px] rounded-lg bg-white px-5 py-8">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#1e1e1e]">
                Join Our Waitlist
              </h2>
              <p>Join our waitlist to be amongst our prioritised landlords</p>
            </div>
            <button
              className="rounded p-1 transition-colors duration-200 hover:bg-gray-200"
              onClick={() => setIsTimeOut(false)}
            >
              <X size={20} />
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid gap-y-5">
            <TextInput
              name="first_name"
              placeholder="John"
              label="First Name"
              register={register}
              error={errors.first_name?.message}
            />
            <TextInput
              name="last_name"
              placeholder=""
              label="Last Name"
              register={register}
              error={errors.last_name?.message}
            />
            <TextInput
              name="email"
              placeholder=""
              label="Email"
              register={register}
              error={errors.email?.message}
            />
            <TextInput
              name="phone"
              placeholder=""
              label="Phone Number"
              register={register}
              error={errors.phone?.message}
            />

            <SubmitButton isSubmitting={isSubmitting} text="Join Waitlist" />
          </form>
        </article>
      </div>
    )
  );
}
