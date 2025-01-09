"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import revalidate from "@/utils/revalidate";
import { FaUserEdit } from "react-icons/fa";
import LoadingSpinner from "../ui/loading-spinner";
import { updateProfilePhoto } from "@/api/services/profile";

export default function UpdateProfilePhoto() {
  const [isSubmitting, setSubmitting] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const formData = new FormData();
      formData.append("image", files[0]); // Single file upload

      setSubmitting(true);

      try {
        const res = await updateProfilePhoto(formData);
        if (res.result) {
          toast.success("Success", { description: res.message });
          revalidate(`/landlord/profile`, "layout");
        } else {
          toast.error("Error", { description: res.message });
        }
      } catch (error) {
        toast.error("Error", { description: "Something went wrong" });
      }

      setSubmitting(false);
    }
  };

  return (
    <form>
      <label className="absolute bottom-1 right-1 flex items-center gap-x-1 rounded-full bg-gold/70 p-1 text-sm text-black">
        {isSubmitting ? <LoadingSpinner /> : <FaUserEdit />}
        <input
          type="file"
          name="image"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
      </label>
    </form>
  );
}
