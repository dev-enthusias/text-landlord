"use client";

import { useState } from "react";
import SelectInput from "../ui/select-input";
import TextInput from "../ui/text-input";

export default function TenantForm() {
  const [propertyType, setPropertyType] = useState("");

  return (
    <form>
      <fieldset className="space-y-4">
        <TextInput name="" label="First Name" />
        <TextInput name="" label="Last Name" />
        <TextInput name="" label="Email" />
        <TextInput name="" label="Phone" />
        <TextInput name="" label="Occupation" />
        <SelectInput
          label="Location"
          options={[{ value: "land", label: "Land" }]}
          value={propertyType}
          onChange={setPropertyType}
          placeholder="Country"
        />
        <SelectInput
          label=""
          options={[{ value: "land", label: "Land" }]}
          value={propertyType}
          onChange={setPropertyType}
          placeholder="State"
        />
        <SelectInput
          label=""
          options={[{ value: "land", label: "Land" }]}
          value={propertyType}
          onChange={setPropertyType}
          placeholder="City"
        />
        <TextInput name="" label="Address" />
        <button
          type="submit"
          className="w-full rounded-lg bg-primary py-3 font-semibold transition-colors duration-300 ease-out hover:bg-primary/80"
        >
          Save
        </button>
      </fieldset>
    </form>
  );
}
