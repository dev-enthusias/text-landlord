"use client";

import TextInput from "../ui/text-input";
import SelectInput from "../ui/select-input";
import { ImagesIcon } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddPropertyDataType } from "@/definition";
import { zodResolver } from "@hookform/resolvers/zod";
import { addPropertySchema } from "@/lib/schema";
import { useState } from "react";
import { addProperty } from "@/api/services/property";
import SubmitButton from "./submit-button";

export default function FloorPlanForm() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
