"use client";

import CustomCheckbox from "@/components/auth/custome-checkbox";
import SelectInput from "@/components/auth/select-input";
import TextInput from "@/components/auth/text-input";
import { routes } from "@/constants/routes";
import { useFormStepStore } from "@/providers/register-form-step-store-provider";
import Link from "next/link";
import { useState } from "react";

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

  return (
    <form className="w-full max-w-[480px]">
      {step === 0 && (
        <section>
          <div className="mb-6 text-center">
            <h2 className="text-gray- mb-1 text-3xl font-bold">
              Create new account
            </h2>
            <p className="text-gray-500">
              Setup an account to be eligible to list and rent properties.
            </p>
          </div>

          <div className="mb-6 space-y-5">
            <TextInput label="Full Name" required />
            <TextInput label="Email" required />
            <TextInput label="Phone" required />
          </div>

          <button
            type="button"
            className="w-full rounded-lg bg-primary py-3 font-semibold transition-colors duration-300 ease-out hover:bg-primary/80"
            onClick={nextStep}
          >
            Continue
          </button>
        </section>
      )}

      {step === 1 && (
        <section className="">
          <div className="mb-6 text-center">
            <h2 className="text-gray- mb-1 text-3xl font-bold">
              Personal Details
            </h2>
            <p className="text-gray-500">
              Please fill in all the required fields.
            </p>
          </div>

          <div className="mb-6 space-y-5">
            <TextInput label="Occupation" required />
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
                <TextInput label="Date of Birth" required />
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
            className="w-full rounded-lg bg-primary py-3 font-semibold transition-colors duration-300 ease-out hover:bg-primary/80"
            onClick={nextStep}
          >
            Continue
          </button>
        </section>
      )}

      {step === 2 && (
        <section>
          <div className="mb-6 text-center">
            <h2 className="text-gray- mb-1 text-3xl font-bold">
              Additional Information
            </h2>
            <p className="text-gray-500">Fill in the required fields</p>
          </div>

          <div className="mb-6 space-y-5">
            <TextInput label="Current Address" required />
            <SelectInput
              label="Property Owner"
              options={propertyOwnerOptions}
              value={selectedValuePropertyOwner}
              onChange={setSelectedValuePropertyOwner}
              placeholder="Choose an option"
            />
            <TextInput label="Passport/ID Card No" required />
            <div className="flex flex-col gap-5 lg:flex-row">
              <div className="lg:w-1/2">
                <TextInput label="Tin Number" required />
              </div>
              <div className="lg:w-1/2">
                <TextInput label="SSNIT Number" required />
              </div>
            </div>
          </div>

          <button
            type="button"
            className="w-full rounded-lg bg-primary py-3 font-semibold transition-colors duration-300 ease-out hover:bg-primary/80"
            onClick={nextStep}
          >
            Continue
          </button>
        </section>
      )}

      {step === 3 && (
        <section>
          <div className="mb-6 text-center">
            <h2 className="text-gray- mb-1 text-3xl font-bold">
              Setup your password
            </h2>
            <p className="text-gray-500">setup your password</p>
          </div>

          <div className="mb-6 space-y-5">
            <TextInput label="Password" required />
            <TextInput label="Confirm Password" required />
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
            className="block w-full rounded-lg bg-primary py-3 text-center font-semibold transition-colors duration-300 ease-out hover:bg-primary/80"
          >
            Register
          </Link>
        </section>
      )}
    </form>
  );
}
