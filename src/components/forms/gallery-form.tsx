"use client";

import { ImagesIcon } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddGalleryPhotoDataType } from "@/definition";
import { zodResolver } from "@hookform/resolvers/zod";
import { addGalleryPhotoSchema } from "@/lib/schema";
import React, { useState } from "react";
import { addGalleryPhoto } from "@/api/services/property";
import SubmitButton from "./submit-button";
import { toast } from "sonner";
import revalidate from "@/utils/revalidate";

const MAX_IMAGES = 5;

export default function GalleryForm({
  gallery,
  id,
  setEditPropertyModal,
}: {
  gallery: string[];
  id: number | string;
  setEditPropertyModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const {
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<AddGalleryPhotoDataType>({
    resolver: zodResolver(addGalleryPhotoSchema),
  });

  const onSubmit: SubmitHandler<AddGalleryPhotoDataType> = async (data) => {
    const newData = { ...data, title: "Gallery photo", property_id: id };

    const res = await addGalleryPhoto(newData);

    if (res.status) {
      toast.success("Success", { description: res.message });
      revalidate(`/landlord/properties/${id}`);
      setEditPropertyModal(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      const fileArray = Array.from(files);
      const newImageUrls = fileArray.map((file) => URL.createObjectURL(file));

      if (
        gallery.length + selectedImages.length + fileArray.length >
        MAX_IMAGES
      ) {
        toast.error(`You can only upload up to ${MAX_IMAGES} images.`);
        return;
      }

      setSelectedImages((prev) => [...prev, ...newImageUrls]);

      // Set the FileList value in the form
      setValue("image", files as FileList, { shouldValidate: true });
    }
  };

  const handleRemoveImage = (index: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="space-y-4">
        <div className="flex flex-col gap-y-1">
          <div>
            <p className="block font-semibold text-gray-600">Property Photos</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <label
              htmlFor="image"
              className="relative col-span-3 flex h-28 w-full cursor-pointer items-center justify-center gap-1 rounded-md border border-dashed border-gray-300 bg-white py-3 pl-4 pr-10 text-left text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <input
                type="file"
                id="image"
                accept="image/jpeg,image/jpg,image/png,image/webp"
                className="hidden"
                multiple // Allows multiple file selection
                onChange={handleFileChange}
              />

              <div className="flex flex-col items-center justify-center gap-1">
                <div className="flex items-center gap-x-1">
                  <ImagesIcon size={16} />
                  Select property images
                </div>
                <p className="text-sm">
                  You can add at most, five of your best property photos
                </p>
              </div>
            </label>

            {/* Display selected images */}
            {selectedImages.map((image, index) => (
              <div
                key={`selected-${index}`}
                className="relative col-span-1 h-28 w-full border-2 border-blue-500"
              >
                <img
                  src={image}
                  alt="Selected"
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-1 top-1 rounded bg-blue-600 px-2 py-1 text-xs text-white">
                  New
                </span>
                <button
                  type="button"
                  className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white"
                  onClick={() => handleRemoveImage(index)}
                >
                  &times;
                </button>
              </div>
            ))}

            {/* Display existing gallery images */}
            {gallery.map((image, index) => (
              <div
                key={`gallery-${index}`}
                className="relative col-span-1 h-28 w-full border-2 border-gray-500"
              >
                <img
                  src={image}
                  alt={`Gallery ${index}`}
                  className="h-28 w-full object-cover"
                />
                <span className="absolute left-1 top-1 rounded bg-gray-700 px-2 py-1 text-xs text-white">
                  Gallery
                </span>
              </div>
            ))}
          </div>

          {errors.image?.message && (
            <div className="mt-1 text-xs text-red-600">
              <p>{errors.image?.message}</p>
            </div>
          )}
        </div>
        <SubmitButton isSubmitting={isSubmitting} text="SAVE" />
      </fieldset>
    </form>
  );
}
