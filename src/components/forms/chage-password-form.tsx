"use client";

import TextInput from "@/components/ui/text-input";
import { ChangePasswordDataType } from "@/definition";
import { changePasswordSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

export function ChangePasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ChangePasswordDataType>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit: SubmitHandler<ChangePasswordDataType> = async (data) => {
    // const res = await authenticate(data);

    // if (res && typeof res === "string") {
    //   toast.error("Error", { description: res });
    // }

    console.log(data);
  };

  return (
    <section className="max-w-[540px] lg:p-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6 space-y-5">
          <TextInput
            register={register}
            name="email"
            label="Old Password"
            error={errors.old_password?.message}
            required
          />
          <TextInput
            register={register}
            name="email"
            label="New Password"
            error={errors.new_password?.message}
            required
          />
          <TextInput
            register={register}
            name="email"
            label="Confirm Password"
            error={errors.confirm_password?.message}
            required
          />
        </div>
        <button className="w-full rounded-lg bg-gold py-3 font-semibold text-white transition-colors duration-300 ease-out hover:bg-gold/80">
          Reset Password
        </button>
      </form>
    </section>
  );
}
