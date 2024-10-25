"use client";

import SelectInput from "@/components/ui/select-input";
import { X } from "lucide-react";
import { useState } from "react";
import ModalLayout from "./modal-layout";
import TextInput from "@/components/ui/text-input";
import CustomCheckbox from "@/components/ui/custome-checkbox";

export default function AddPropertyCategoryBtn() {
  const [propertyType, setPropertyType] = useState("");
  const [isGenerateBillModalOpen, setGenerateBillModal] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <>
      <button
        className="rounded bg-primary-dark px-4 py-2 font-semibold"
        onClick={() => setGenerateBillModal(true)}
      >
        Add Category
      </button>

      {isGenerateBillModalOpen && (
        <ModalLayout>
          <article className="no-scrollbar max-h-[95vh] w-[95%] max-w-[640px] overflow-y-auto rounded-lg bg-white pb-5">
            <header className="sticky top-0 z-50 mb-4 flex justify-between border-b bg-white p-5">
              <h3 className="text-lg font-semibold">Add Category</h3>
              <button className="" onClick={() => setGenerateBillModal(false)}>
                <X size={20} />
              </button>
            </header>
            <main className="px-5">
              <fieldset className="space-y-4">
                <TextInput name="" label="Name" />
                <SelectInput
                  label="Parent Category"
                  options={[{ value: "land", label: "Land" }]}
                  value={propertyType}
                  onChange={setPropertyType}
                  placeholder="--Select--"
                />
                <SelectInput
                  label="Status"
                  options={[{ value: "land", label: "Land" }]}
                  value={propertyType}
                  onChange={setPropertyType}
                  placeholder="--Select--"
                />
                <CustomCheckbox
                  id="disabled"
                  checked={checked}
                  label="is featured?"
                  onChange={() => setChecked(!checked)}
                />

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary py-3 font-semibold transition-colors duration-300 ease-out hover:bg-primary/80"
                >
                  Save
                </button>
              </fieldset>
            </main>
          </article>
        </ModalLayout>
      )}
    </>
  );
}
