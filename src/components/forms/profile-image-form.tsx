"use client";

import Image from "next/image";
import { PiPencilCircleDuotone } from "react-icons/pi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

// Define the form schema
const imageFormSchema = z.object({
  image: z
    .custom<FileList>()
    .transform((list) => list.item(0))
    .refine((file) => file !== null, "Image is required")
    .refine(
      (file) => file && file.size <= MAX_FILE_SIZE,
      "Max image size is 5MB",
    )
    .refine(
      (file) => file && ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported",
    ),
});

type ImageFormValues = z.infer<typeof imageFormSchema>;

export default function ProfileImageForm({
  imgUrl,
  name,
}: {
  imgUrl: string;
  name: string;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentImageUrl] = useState(imgUrl);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ImageFormValues>({
    resolver: zodResolver(imageFormSchema),
  });

  const onSubmit = async (data: ImageFormValues) => {
    try {
      const file = data.image as File;
      const formData = new FormData();
      formData.append("image", file);

      // TODO: Add your API call here to upload the image
      // const response = await fetch('/api/upload', {
      //   method: 'POST',
      //   body: formData,
      // });

      // If successful, update the image preview
      // const { imageUrl } = await response.json();
      // setCurrentImageUrl(imageUrl);

      setIsEditing(false);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleCancel = () => {
    reset();
    setIsEditing(false);
  };

  return (
    <div className="relative">
      <div className="relative border-black bg-black">
        <div className="relative h-24 w-24 overflow-hidden rounded-full">
          {imgUrl ? (
            <Image
              src={currentImageUrl}
              alt="Tenant profile photo"
              fill
              quality={100}
              sizes="130px"
              style={{ objectFit: "cover" }}
              className="custom-shadow-sm"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-300 font-bold">
              {name[0]}
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={() => setIsEditing(true)}
          className="absolute bottom-0 right-0 rounded-full bg-white p-1.5 shadow-md hover:bg-gray-100"
        >
          <PiPencilCircleDuotone className="h-4 w-4 bg-red-500 text-black" />
        </button>
      </div>

      {isEditing && (
        <div className="absolute mt-2 w-64 rounded-lg bg-white p-4 shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-1">
              <input
                {...register("image")}
                type="file"
                accept={ACCEPTED_IMAGE_TYPES.join(",")}
                className="w-full rounded border p-2 text-sm file:mr-4 file:rounded file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
              />
              {errors.image && (
                <p className="text-sm text-red-500">{errors.image.message}</p>
              )}
            </div>
            <div className="mt-2 flex gap-2">
              <button
                type="submit"
                className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="rounded bg-gray-200 px-3 py-1 hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
