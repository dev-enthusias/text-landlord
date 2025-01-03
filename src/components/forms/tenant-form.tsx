"use client";

import TextInput from "../ui/text-input";
import { SubmitHandler, useForm } from "react-hook-form";
import SubmitButton from "./submit-button";
import { AddTenantDataType } from "@/definition";
import { zodResolver } from "@hookform/resolvers/zod";
import { addTenantSchema } from "@/lib/schema";
import SelectInput from "../ui/select-input";

export default function TenantForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm<AddTenantDataType>({
    resolver: zodResolver(addTenantSchema),
  });

  const onSubmit: SubmitHandler<AddTenantDataType> = async (data) => {
    // const res = await addTenant(data);
    // console.log(res);
    // if (res && !res.status) {
    //   // toast.error("Error", { description: res.message });
    // }
    // if (res && res.status) {
    //   // toast.success("Success", { description: res.message });
    // }
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <fieldset className="space-y-4">
        <TextInput
          register={register}
          name="email"
          label="Email"
          required
          error={errors?.email?.message}
        />
        <SelectInput
          label=""
          options={[{ id: "land", name: "Land" }]}
          control={control}
          name="country_id"
          placeholder="City"
        />
        <SubmitButton isSubmitting={isSubmitting} text="Save" />
      </fieldset>
    </form>
  );
}
