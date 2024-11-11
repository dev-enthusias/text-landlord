"use client";

import React, { useState } from "react";
import TextInput from "../ui/text-input";
import SelectInput from "../ui/select-input";
import { ImagesIcon } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function PropertyForm() {
  const [propertyType, setPropertyType] = useState("");

  const { register, handleSubmit } = useForm<any>({});

  const onSubmit: SubmitHandler<any> = async (data) => {
    // const res = await authenticate(data);

    // if (res && typeof res === "string") {
    //   toast.error("Error", { description: res });
    // }
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="space-y-4">
        <TextInput
          register={register}
          name="Property Name"
          label="Email"
          // error={errors.email?.message}
          required
        />

        <SelectInput
          label="Property Type"
          options={[{ value: "land", label: "Land" }]}
          value={propertyType}
          onChange={setPropertyType}
          placeholder="Choose an option"
        />
        <SelectInput
          label="Property Category"
          options={[{ value: "land", label: "Land" }]}
          value={propertyType}
          onChange={setPropertyType}
          placeholder="Choose an option"
        />
        <TextInput
          register={register}
          name="Property Address"
          label="Property Address"
          // error={errors.email?.message}
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
        <div className="flex flex-col gap-y-1">
          <p className="mb-1 block font-semibold text-gray-600">Image</p>
          <label
            htmlFor="image"
            className="relative flex h-20 w-full cursor-pointer items-center justify-center gap-x-1 rounded-md border border-dashed border-gray-300 bg-white py-3 pl-4 pr-10 text-left text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <input type="file" id="image" className="hidden" multiple />
            <ImagesIcon size={16} />
            Select property images
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-gold py-3 font-semibold text-white transition-colors duration-300 ease-out hover:bg-gold/80"
        >
          Save
        </button>
      </fieldset>
    </form>
  );
}
