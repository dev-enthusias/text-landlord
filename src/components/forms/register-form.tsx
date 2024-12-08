"use client";

import SubmitButton from "./submit-button";
import TextInput from "@/components/ui/text-input";
import { routes } from "@/constants/routes";
import { FormOneDataType } from "@/definition";
import { registerUser } from "@/api/services/auth";
import { registerFormSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function RegisterationForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type") as string;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormOneDataType>({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit: SubmitHandler<any> = async (data) => {
    const { name, email, password } = data;
    const res = await registerUser({
      name,
      email,
      password,
      type,
    });

    if (res && res.status) {
      toast.success("Success", { description: res.message });
      router.push(routes.LOGIN);
    }

    if (res && !res.status) {
      toast.error("Error", { description: res.message });
    }
  };

  return (
    <div className="mx-auto w-full max-w-[480px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto mb-6 max-w-[90%] text-center">
          <h2 className="mb-1 text-3xl font-bold text-gray-800">
            Create new account
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
    </div>
  );
}
