"use client";

import Link from "next/link";
import { useState } from "react";
import SelectInput from "@/components/ui/select-input";
import TextInput from "@/components/ui/text-input";
import { routes } from "@/constants/routes";
import { X } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";

const maritalOptions = [
  { value: "divorced", label: "Divorce" },
  { value: "married", label: "Married" },
  { value: "single", label: "Single" },
];

const religionOptions = [
  { value: "christian", label: "Christian" },
  { value: "muslim", label: "Muslim" },
];

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const propertyOwnerOptions = [
  { value: "individual", label: "Individual" },
  { value: "organization", label: "Organization" },
  { value: "joint", label: "Joint" },
];

export default function EditProfileForm({
  setAddTenantModal,
}: {
  setAddTenantModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [selectedValueMarriage, setSelectedValueMarriage] = useState("");
  const [selectedValueReligion, setSelectedValueReligion] = useState("");
  const [selectedValueGender, setSelectedValueGender] = useState("");
  const [selectedValuePropertyOwner, setSelectedValuePropertyOwner] =
    useState("");

  const {
    register,
    handleSubmit,
    // formState: { errors, isSubmitting },
  } = useForm<any>({
    // resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log(data);
  };

  return (
    <article className="no-scrollbar max-h-[95vh] w-[95%] max-w-[640px] overflow-y-auto bg-white pb-10">
      <header className="sticky top-0 z-50 mb-4 flex justify-between border-b bg-white p-5">
        <h3 className="text-lg font-semibold">Edit Profile</h3>
        <button className="" onClick={() => setAddTenantModal(false)}>
          <X size={20} />
        </button>
      </header>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid w-full gap-y-5 px-5"
      >
        <TextInput
          register={register}
          name="email"
          label="Full Name"
          // error={errors.email?.message}
          required
        />
        <TextInput
          register={register}
          name="email"
          label="Email"
          // error={errors.email?.message}
          required
        />
        <TextInput
          register={register}
          name="email"
          label="Phone"
          // error={errors.email?.message}
          required
        />
        <TextInput
          register={register}
          name="email"
          label="Occupation"
          // error={errors.email?.message}
          required
        />
        <SelectInput
          label="Marital Status"
          options={maritalOptions}
          value={selectedValueMarriage}
          onChange={setSelectedValueMarriage}
          placeholder="Choose an option"
        />
        <SelectInput
          label="Religion"
          options={religionOptions}
          value={selectedValueReligion}
          onChange={setSelectedValueReligion}
          placeholder="Choose an option"
        />
        <div className="flex gap-5 lg:flex-row">
          <div className="grow lg:w-1/2">
            <TextInput
              register={register}
              name="email"
              label="Date of Birth"
              // error={errors.email?.message}
              required
            />
          </div>
          <div className="grow lg:w-1/2">
            <SelectInput
              label="Gender"
              options={genderOptions}
              value={selectedValueGender}
              onChange={setSelectedValueGender}
              placeholder="Choose an option"
            />
          </div>
        </div>

        <TextInput
          register={register}
          name="email"
          label="Current Address"
          // error={errors.email?.message}
          required
        />
        <SelectInput
          label="Property Owner"
          options={propertyOwnerOptions}
          value={selectedValuePropertyOwner}
          onChange={setSelectedValuePropertyOwner}
          placeholder="Choose an option"
        />
        <TextInput
          register={register}
          name="email"
          label="Passport/ID Number"
          // error={errors.email?.message}
          required
        />

        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="lg:w-1/2">
            <TextInput
              register={register}
              name="email"
              label="TIN Number"
              // error={errors.email?.message}
              required
            />
          </div>
          <div className="lg:w-1/2">
            <TextInput
              register={register}
              name="email"
              label="SSNIT Number"
              // error={errors.email?.message}
              required
            />
          </div>
        </div>

        {/* Change this later */}
        {/* <button
            type="submit"
            className="w-full rounded-lg bg-primary py-3 font-semibold transition-colors duration-300 ease-out hover:bg-primary/80"
          >
            Continue
          </button> */}
        <Link
          href={routes.LOGIN}
          className="block w-full rounded-lg bg-primary py-3 text-center font-semibold transition-colors duration-300 ease-out hover:bg-primary/80"
        >
          Update
        </Link>
      </form>
    </article>
  );
}
