"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "@/components/ui/text-input";
import CustomCheckbox from "@/components/ui/custome-checkbox";
import SubmitButton from "@/components/forms/submit-button";
import { routes } from "@/constants/routes";
import { authenticate } from "@/lib/actions";
import { loginSchema } from "@/lib/schema";
import { LoginDataType } from "@/definition";

export default function LoginForm() {
  const [checked, setChecked] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginDataType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginDataType> = async (data) => {
    const res = await authenticate(data);

    if (res && typeof res === "string") {
      toast.error("Error", { description: res });
    }
  };

  return (
    <form
      className="mx-auto w-full max-w-[480px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <section className="mb-6 text-center">
        <h2 className="text-gray- mb-1 text-3xl font-bold text-gray-900">
          Welcome Back
        </h2>
        <p className="text-gray-500">
          Enter credentials to see your listing or rented properties.
        </p>
      </section>

      <section className="mb-10 space-y-5">
        <TextInput
          register={register}
          name="email"
          label="Email"
          error={errors.email?.message}
          required
        />
        <div>
          <TextInput
            register={register}
            name="password"
            label="Password"
            type="password"
            error={errors.password?.message}
            required
          />
          <div className="mt-2 flex items-center justify-between text-[14px] font-semibold">
            <div className="flex items-center gap-x-1">
              <CustomCheckbox
                id="disabled"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <p>Remember me</p>
            </div>
            <Link href={routes.FORGOTPASSWORD} className="hover:text-gray-600">
              Forgot Password?
            </Link>
          </div>
        </div>
      </section>

      <SubmitButton isSubmitting={isSubmitting} text="LOGIN" />
    </form>
  );
}
