"use client";

import TextInput from "../ui/text-input";
import SelectInput from "../ui/select-input";
import { ImagesIcon } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddPropertyDataType } from "@/definition";
import { useEffect, useState } from "react";
import { PropertyMetadataResponseDataType } from "@/definition";
import { propertyService } from "@/api/services/property";

export default function PropertyForm() {
  const [categories, setCategories] =
    useState<PropertyMetadataResponseDataType["categories"]>();
  const [types, setTypes] =
    useState<PropertyMetadataResponseDataType["type"]>();

  useEffect(() => {
    const fetchMetadata = async () => {
      const res = await propertyService.getPropertyMetadata();
      setCategories(res?.data?.categories);
      setTypes(res?.data?.type);
    };
    fetchMetadata();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AddPropertyDataType>({});

  const onSubmit: SubmitHandler<AddPropertyDataType> = async (data) => {
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
          name="name"
          label="Property Name"
          error={errors.name?.message}
          required
        />
        <SelectInput
          control={control}
          name="type"
          label="Property Type"
          options={types ?? []}
          placeholder="Choose an option"
          required
          error={errors.type?.message}
        />
        <SelectInput
          control={control}
          name="property_category_id"
          label="Property Category"
          options={categories ?? []}
          placeholder="Choose an option"
          required
          error={errors.property_category_id?.message}
        />
        <TextInput
          register={register}
          name="Property Address"
          label="Property Address"
          error={errors.address?.message}
          required
        />
        <SelectInput
          control={control}
          name="name"
          label=""
          options={[{ id: "land", name: "Land" }]}
          placeholder="Country"
          error={errors.name?.message}
        />
        <SelectInput
          label=""
          control={control}
          name="country_id"
          options={[{ id: "land", name: "Land" }]}
          placeholder="State"
          error={errors.name?.message}
        />
        <SelectInput
          label=""
          options={[{ id: "land", name: "Land" }]}
          control={control}
          name="country_id"
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
