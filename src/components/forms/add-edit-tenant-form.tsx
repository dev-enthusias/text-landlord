"use client";

import SelectInput from "@/components/ui/select-input";
import TextInput from "@/components/ui/text-input";
import { X } from "lucide-react";
import { useState } from "react";

export default function AddEditTenantForm({
  setAddTenantModal,
  title = "Add",
}: {
  title?: string;
  setAddTenantModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [propertyType, setPropertyType] = useState("");

  return (
    <article className="no-scrollbar max-h-[95vh] w-[95%] max-w-[640px] overflow-y-auto bg-white pb-10">
      <header className="sticky top-0 z-50 mb-4 flex justify-between border-b bg-white p-5">
        <h3 className="text-lg font-semibold">{title} Tenant</h3>
        <button className="" onClick={() => setAddTenantModal(false)}>
          <X size={20} />
        </button>
      </header>
      <main className="px-5">
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
      </main>
    </article>
  );
}
