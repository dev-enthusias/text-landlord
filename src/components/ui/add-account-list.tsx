"use client";

import SelectInput from "@/components/ui/select-input";
import { X } from "lucide-react";
import { useState } from "react";
import ModalLayout from "./modal-layout";
import TextInput from "@/components/ui/text-input";
import CustomCheckbox from "@/components/ui/custome-checkbox";

export default function AddAccountListBtn() {
  const [propertyType, setPropertyType] = useState("");
  const [checked, setChecked] = useState(false);
  const [isGenerateBillModalOpen, setGenerateBillModal] = useState(false);

  return (
    <>
      <button
        className="rounded bg-primary-dark px-4 py-2 font-semibold"
        onClick={() => setGenerateBillModal(true)}
      >
        Add account
      </button>

      {isGenerateBillModalOpen && (
        <ModalLayout>
          <article className="no-scrollbar max-h-[95vh] w-[95%] max-w-[640px] overflow-y-auto rounded-lg bg-white pb-5">
            <header className="sticky top-0 z-50 mb-4 flex justify-between border-b bg-white p-5">
              <h3 className="text-lg font-semibold">Add Account</h3>
              <button className="" onClick={() => setGenerateBillModal(false)}>
                <X size={20} />
              </button>
            </header>
            <main className="px-5">
              <fieldset className="space-y-4">
                <SelectInput
                  label="Account category"
                  options={[{ value: "land", label: "Land" }]}
                  value={propertyType}
                  onChange={setPropertyType}
                  placeholder="--Select--"
                />
                <TextInput name="" label="Account number" />
                <TextInput name="" label="Account holder" />
                <CustomCheckbox
                  id="disabled"
                  checked={checked}
                  label="Set as default"
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
