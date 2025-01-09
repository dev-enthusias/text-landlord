"use client";

import TextInput from "@/components/ui/text-input";
import { ChangePasswordDataType } from "@/definition";
import { changePasswordSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import SubmitButton from "./submit-button";
import { changePassword } from "@/api/services/auth";
import { toast } from "sonner";

export function ChangePasswordForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ChangePasswordDataType>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit: SubmitHandler<ChangePasswordDataType> = async (data) => {
    const res = await changePassword(data);

    console.log(res);

    reset();
    toast.success("Success", { description: res.message });
  };

  return (
    <section className="max-w-[540px] lg:p-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6 space-y-5">
          <TextInput
            register={register}
            name="password"
            type="password"
            label="Old Password"
            error={errors.password?.message}
            required
          />
          <TextInput
            register={register}
            name="new_password"
            type="password"
            label="New Password"
            error={errors.new_password?.message}
            required
          />
          <TextInput
            register={register}
            name="confirm_password"
            type="password"
            label="Confirm Password"
            error={errors.confirm_password?.message}
            required
          />
        </div>
        <SubmitButton isSubmitting={isSubmitting} text="Reset Password" />
      </form>
    </section>
  );
}
