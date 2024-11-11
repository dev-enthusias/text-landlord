"use client";

import CustomCheckbox from "@/components/ui/custome-checkbox";
import SelectInput from "@/components/ui/select-input";
import TextInput from "@/components/ui/text-input";
import { routes } from "@/constants/routes";
import { useFormStepStore } from "@/providers/register-form-step-store-provider";
import Link from "next/link";
import { useState } from "react";
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

export default function RegisterationForm() {
  const { step, nextStep } = useFormStepStore((state) => state);
  const [checked, setChecked] = useState(true);
  const [selectedValueMarriage, setSelectedValueMarriage] = useState("");
  const [selectedValueReligion, setSelectedValueReligion] = useState("");
  const [selectedValueGender, setSelectedValueGender] = useState("");
  const [selectedValuePropertyOwner, setSelectedValuePropertyOwner] =
    useState("");

  const { register, handleSubmit } = useForm<any>({
    // resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-[480px]"
    >
      {step === 0 && (
        <section>
          <div className="mb-6 text-center">
            <h2 className="text-gray- mb-1 text-3xl font-bold text-gray-800">
              Create new account
            </h2>
            <p className="text-gray-500">
              Setup an account to be eligible to list and rent properties.
            </p>
          </div>

          <div className="mb-6 space-y-5">
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
          </div>

          <button
            type="button"
            className="w-full rounded-lg bg-gold py-3 font-semibold text-white transition-colors duration-300 ease-out hover:bg-gold/80"
            onClick={nextStep}
          >
            Continue
          </button>
        </section>
      )}

      {step === 1 && (
        <section className="">
          <div className="mb-6 text-center">
            <h2 className="mb-1 text-3xl font-bold text-gray-800">
              Personal Details
            </h2>
            <p className="text-gray-500">
              Please fill in all the required fields.
            </p>
          </div>

          <div className="mb-6 space-y-5">
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
          </div>

          <button
            type="button"
            className="w-full rounded-lg bg-gold py-3 font-semibold text-white transition-colors duration-300 ease-out hover:bg-gold/80"
            onClick={nextStep}
          >
            Continue
          </button>
        </section>
      )}

      {step === 2 && (
        <section>
          <div className="mb-6 text-center">
            <h2 className="text-gray- mb-1 text-3xl font-bold text-gray-800">
              Additional Information
            </h2>
            <p className="text-gray-500">Fill in the required fields</p>
          </div>

          <div className="mb-6 space-y-5">
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
              label="Passport/ID Card No"
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
                <TextInput
                  register={register}
                  name="email"
                  label="SSNIT Number"
                  // error={errors.email?.message}
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            className="w-full rounded-lg bg-gold py-3 font-semibold text-white transition-colors duration-300 ease-out hover:bg-gold/80"
            onClick={nextStep}
          >
            Continue
          </button>
        </section>
      )}

      {step === 3 && (
        <section className="w-full">
          <div className="mb-6 text-center">
            <h2 className="mb-1 text-3xl font-bold text-gray-800">
              Setup your password
            </h2>
            <p className="text-gray-500">setup your password</p>
          </div>

          <div className="mb-6 w-full space-y-5">
            <TextInput
              register={register}
              name="email"
              label="Password"
              // error={errors.email?.message}
              required
            />
            <TextInput
              register={register}
              name="email"
              label="Confirm Password"
              // error={errors.email?.message}
              required
            />
            <div className="flex items-center gap-x-1">
              <CustomCheckbox
                id="disabled"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <p>I agree to all the terms and privacy policy</p>
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
            className="block w-full rounded-lg bg-gold py-3 text-center font-semibold text-white transition-colors duration-300 ease-out hover:bg-gold/80"
          >
            Register
          </Link>
        </section>
      )}
    </form>
  );
}
