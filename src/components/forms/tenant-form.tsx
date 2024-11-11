"use client";

import { useState } from "react";
import SelectInput from "../ui/select-input";
import TextInput from "../ui/text-input";
import { SubmitHandler, useForm } from "react-hook-form";
import SubmitButton from "./submit-button";

export default function TenantForm() {
  const [propertyType, setPropertyType] = useState("");

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<any>({
    // resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <fieldset className="space-y-4">
        <TextInput
          register={register}
          name="email"
          label="First Name"
          required
        />
        <TextInput
          register={register}
          name="email"
          label="Last Name"
          required
        />
        <TextInput register={register} name="email" label="Email" required />
        <TextInput register={register} name="email" label="Phone" required />
        <TextInput
          register={register}
          name="email"
          label="Occupation"
          required
        />

        <SelectInput
          label="Location"
          options={[{ value: "land", label: "Land" }]}
          value={propertyType}
          onChange={setPropertyType}
          placeholder="Country"
        />
        <SelectInput
          label=""
          options={[{ value: "land", label: "Land" }]}
          value={propertyType}
          onChange={setPropertyType}
          placeholder="State"
        />
        <SelectInput
          label=""
          options={[{ value: "land", label: "Land" }]}
          value={propertyType}
          onChange={setPropertyType}
          placeholder="City"
        />
        <TextInput register={register} name="email" label="Address" required />

        <SubmitButton isSubmitting={isSubmitting} text="Save" />
      </fieldset>
    </form>
  );
}
