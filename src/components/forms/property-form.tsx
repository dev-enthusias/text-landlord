"use client";

import TextInput from "../ui/text-input";
import SelectInput from "../ui/select-input";
import { ImagesIcon } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddPropertyDataType, Country, LocationList } from "@/definition";
import { PropertyMetadataResponseDataType } from "@/definition";
import { zodResolver } from "@hookform/resolvers/zod";
import { addPropertySchema } from "@/lib/schema";
import { useEffect, useState } from "react";
import { useGlobalStore } from "@/stores/global-store";
import { addProperty, getCities, getStates } from "@/api/services/property";
import SubmitButton from "./submit-button";

export default function PropertyForm({
  categories,
  country,
  types,
}: {
  categories: PropertyMetadataResponseDataType["categories"];
  types: PropertyMetadataResponseDataType["type"];
  country: Country[];
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const countryId = useGlobalStore((state) => state.countryId);
  const stateId = useGlobalStore((state) => state.stateId);
  const [states, setStates] = useState<LocationList[]>([]);
  const [cities, setCities] = useState<LocationList[]>([]);

  useEffect(() => {
    const fetchStatesAndCities = async () => {
      if (!countryId) {
        setStates([{ id: 0, name: "Select a country first" }]);
      } else {
        const states = (await getStates(countryId)) as LocationList[];
        setStates(states);
      }
      if (!stateId) {
        setCities([{ id: 0, name: "Select a state first" }]);
      } else {
        const cities = (await getCities(stateId)) as LocationList[];
        setCities(cities);
      }
    };

    fetchStatesAndCities();
  }, [countryId, stateId]);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<AddPropertyDataType>({
    resolver: zodResolver(addPropertySchema),
  });

  const onSubmit: SubmitHandler<AddPropertyDataType> = async (data) => {
    const res = await addProperty({
      ...data,
      post_code: "12234",
    });

    console.log(res);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Set the FileList value in the form
      setValue("default_image", event.target.files as FileList, {
        shouldValidate: true,
      });
      setSelectedImage(URL.createObjectURL(file));
    }
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
          options={types}
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
          name="address"
          label="Property Address"
          error={errors.address?.message}
          required
        />
        <SelectInput
          control={control}
          name="country_id"
          label=""
          options={country}
          placeholder="Country"
          error={errors.country_id?.message}
        />
        <SelectInput
          label=""
          control={control}
          name="state_id"
          options={states}
          placeholder="State"
          error={errors.state_id?.message}
        />
        <SelectInput
          label=""
          options={cities}
          control={control}
          name="city_id"
          placeholder="City"
          error={errors.city_id?.message}
        />
        <div className="flex flex-col gap-y-1">
          <p className="mb-1 block font-semibold text-gray-600">Image</p>
          <div className="grid grid-cols-3 gap-x-2">
            <label
              htmlFor="image"
              className={`relative flex h-28 w-full cursor-pointer items-center justify-center gap-x-1 rounded-md border border-dashed border-gray-300 bg-white py-3 pl-4 pr-10 text-left text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${selectedImage ? "col-span-2" : "col-span-3"}`}
            >
              <input
                type="file"
                id="image"
                accept="image/jpeg,image/jpg,image/png,image/webp"
                className="hidden"
                onChange={handleFileChange}
              />

              <>
                <ImagesIcon size={16} />
                {selectedImage ? "Change image" : "Select property image"}
              </>
            </label>
            {selectedImage && (
              <div className="relative col-span-1 h-28 w-full">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>
          {errors.default_image?.message && (
            <div className="mt-1 text-xs text-red-600">
              <p>{errors.default_image?.message}</p>
            </div>
          )}
        </div>
        <SubmitButton isSubmitting={isSubmitting} text="SAVE" />
      </fieldset>
    </form>
  );
}
