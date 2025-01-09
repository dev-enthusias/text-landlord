"use client";

import TextInput from "@/components/ui/text-input";
import { ProfileFormData, UserDetailsResponseDataType } from "@/definition";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import SelectInput from "../ui/select-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema } from "@/lib/schema";
import { updateProfile } from "@/api/services/profile";

export default function ProfileForm({
  data,
}: {
  data: UserDetailsResponseDataType;
}) {
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: data.profile_info.name,
      email: data.profile_info.email,
      phone: data.profile_info.phone,
      date_of_birth: data.profile_info.date_of_birth,
      occupation: data.profile_info.occupation,
      passport: data.profile_info.passport,
      designation: data.profile_info.designation,
      institution: data.profile_info.institution,
      nid: data.profile_info.nid,
    },
  });

  const onSubmit: SubmitHandler<ProfileFormData> = async (data) => {
    const res = await updateProfile(data);

    console.log(res);
    setIsEditing(false);
    toast.success("Profile updated successfully");
  };

  const defaultGenderValue =
    data.profile_info.gender !== null &&
    data.profile_info.gender?.toLowerCase() === "male"
      ? [{ id: "male", name: "Male" }]
      : data.profile_info.gender?.toLowerCase() === "male"
        ? [{ id: "female", name: "Female" }]
        : [];

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex justify-end">
          {!isEditing ? (
            <div
              onClick={() => setIsEditing(true)}
              className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Edit Profile
            </div>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 disabled:bg-green-300"
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
          )}
        </div>

        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
          <TextInput
            label="Name"
            name="name"
            register={register}
            disabled={!isEditing}
            error={errors.name?.message}
          />
          <TextInput
            label="Email"
            name="email"
            register={register}
            disabled={true}
            error={errors.email?.message}
          />
          <TextInput
            label="Phone Number"
            type="tel"
            name="phone"
            register={register}
            disabled={!isEditing}
            error={errors.phone?.message}
          />
          <SelectInput
            control={control}
            name="gender"
            label="Gender"
            options={[
              { id: "male", name: "Male" },
              { id: "female", name: "Female" },
            ]}
            placeholder="Choose an option"
            required
            defaultValue={defaultGenderValue[0]?.id}
            error={errors.gender?.message}
          />
          <TextInput
            label="Date of Birth"
            type="date"
            name="date_of_birth"
            register={register}
            disabled={!isEditing}
            error={errors.date_of_birth?.message}
          />
          <TextInput
            label="Company Name"
            name="institution"
            register={register}
            disabled={!isEditing}
            error={errors.institution?.message}
          />
          <TextInput
            label="Occupation"
            register={register}
            name="occupation"
            disabled={!isEditing}
            error={errors.occupation?.message}
          />
          <TextInput
            label="Passport/ID No"
            name="passport"
            register={register}
            disabled={!isEditing}
            error={errors.passport?.message}
          />
          <TextInput
            label="National ID"
            name="nid"
            register={register}
            disabled={!isEditing}
            error={errors.nid?.message}
          />
          <TextInput
            label="Address"
            name="designation"
            register={register}
            disabled={!isEditing}
            error={errors.designation?.message}
          />
        </div>
      </form>
    </div>
  );
}
