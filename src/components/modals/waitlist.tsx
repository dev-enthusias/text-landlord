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

export default function WaitlistModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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
      setTimeout(() => setIsTimeOut(true), 3000);
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
    <>
      {(isTimeout || isOpen) && (
        <div className="no-scrollbar fixed left-0 top-0 z-[1000] flex h-screen w-screen items-center justify-center overflow-y-auto bg-black/40">
          <article className="w-full max-w-[540px] rounded-lg bg-white px-5 py-6">
            <div className="flex items-start justify-between border-b pb-1">
              <div>
                <h2 className="text-xl font-bold text-[#1e1e1e]">
                  Join Our Waitlist Today!
                </h2>
                <p className="text-sm text-[#1e1e1e]/80">
                  {" "}
                  Be the first to know when we launch{" "}
                </p>
              </div>
              <button
                className="rounded bg-gray-100 p-1 transition-colors duration-200 hover:bg-gray-200"
                onClick={() => {
                  setIsTimeOut(false);
                  setIsOpen(false);
                }}
              >
                <X size={20} />
              </button>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 grid gap-y-3"
            >
              <p className="text-center text-black">Please Enlist Me</p>
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

              <div className="mt-2">
                <SubmitButton
                  isSubmitting={isSubmitting}
                  text="Join Waitlist"
                />
              </div>
            </form>
          </article>
        </div>
      )}
    </>
  );
}
