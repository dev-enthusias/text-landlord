"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import TextInput from "@/components/ui/text-input";
import SubmitButton from "@/components/forms/submit-button";
import { ForgotPasswordDataType } from "@/definition";
import { forgotPasswordSchema } from "@/lib/schema";

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordDataType>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit: SubmitHandler<ForgotPasswordDataType> = async (data) => {
    // const res = await authenticate(data);

    // if (res && typeof res === "string") {
    //   toast.error("Error", { description: res });
    // }

    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-[480px] shrink-0"
    >
      <section>
        <div className="mb-6 text-center">
          <h2 className="text-gray- mb-1 text-3xl font-bold text-gray-800">
            Forgot Password?
          </h2>
          <p className="text-gray-500">
            No worries we would help you reset your password.
          </p>
        </div>

        <div className="mb-10">
          <TextInput
            register={register}
            name="email"
            label="Email"
            error={errors.email?.message}
            required
          />
        </div>

        <SubmitButton text="RESET" isSubmitting={isSubmitting} />
      </section>
    </form>
  );
}
