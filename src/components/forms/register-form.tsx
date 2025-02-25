"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "./submit-button";
import TextInput from "@/components/ui/text-input";
import { routes } from "@/constants/routes";
import { FormOneDataType } from "@/definition";
import { registerUser } from "@/api/services/auth";
import { registerFormSchema } from "@/lib/schema";
import { toast } from "sonner";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/api/services/firebase";

export default function RegistrationForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  // Registration form using react-hook-form with Zod
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormOneDataType>({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit: SubmitHandler<FormOneDataType> = async (data) => {
    const { name, email, password } = data;

    if (!type) return;

    const res = await registerUser({
      name,
      email,
      password,
      type,
    });

    if (res && res.status) {
      // set firebase chat users
      await setDoc(doc(db, "users", res.data.id), res.data);

      // set firebase chat rooms
      await setDoc(doc(db, "rooms", res.data.id), {
        messages: [],
      });
      toast.success("Success", { description: res.message });
      router.push(routes.LOGIN);
    } else if (res && !res.status) {
      toast.error("Error", { description: res.message });
    }
  };

  return (
    <div className="mx-auto w-full max-w-[480px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto mb-6 max-w-[90%] text-center">
          <h2 className="mb-1 text-3xl font-bold text-gray-800">
            Create New Account
          </h2>
          <p className="text-gray-500">
            Setup an account to be eligible to list and rent properties.
          </p>
        </div>

        <div className="mb-6 space-y-5">
          <TextInput
            register={register}
            name="name"
            label="Full Name"
            error={errors.name?.message}
          />
          <TextInput
            register={register}
            name="email"
            label="Email"
            error={errors.email?.message}
          />
          <TextInput
            register={register}
            name="password"
            label="Password"
            type="password"
            error={errors.password?.message}
          />
          <TextInput
            register={register}
            name="confirm_password"
            label="Confirm Password"
            type="password"
            error={errors.confirm_password?.message}
          />
        </div>

        <SubmitButton isSubmitting={isSubmitting} text="CONTINUE" />
      </form>

      {!type && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="mx-auto w-full max-w-[420px] rounded-lg bg-white p-6 px-5 text-center shadow-md">
            <h2 className="text-xl font-bold text-black">
              Select Account Type
            </h2>
            <p className="mb-4">Please select an account type to continue</p>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => {
                  router.push(`?type=landlord`);
                }}
                className="rounded bg-gold px-4 py-2 text-white hover:bg-gold/80"
              >
                Landlord
              </button>
              <button
                onClick={() => {
                  router.push(`?type=tenant`);
                }}
                className="rounded bg-accent px-4 py-2 text-white hover:bg-accent/80"
              >
                Tenant
              </button>
              <button
                onClick={() => {
                  router.push(`?type=agent`);
                }}
                className="rounded bg-black px-4 py-2 text-white hover:bg-black/80"
              >
                Agent
              </button>
            </div>
            <div className="mt-4">
              <button
                onClick={() => router.push(routes.HOME)}
                className="text-sm text-gray-500 underline"
              >
                Go back to Home Page
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
