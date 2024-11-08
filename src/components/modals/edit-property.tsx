"use client";

import { useState } from "react";
import ModalLayout from "../ui/modal-layout";
import PropertyForm from "../forms/property-form";
import { X } from "lucide-react";

export default function EditPropertyBtn() {
  const [isEditPropertyModalOpen, setEditPropertyModal] = useState(false);

  return (
    <>
      <button
        className="flex items-center gap-x-1 rounded bg-gold px-4 py-2 text-sm font-bold tracking-wide text-black hover:bg-gold/80"
        onClick={() => setEditPropertyModal(true)}
      >
        Edit Property
      </button>

      {isEditPropertyModalOpen && (
        <ModalLayout>
          <article className="no-scrollbar max-h-[95vh] w-[95%] max-w-[640px] overflow-y-auto rounded-xl bg-white pb-10">
            <header className="sticky top-0 z-50 mb-4 flex items-center justify-between border-b bg-white p-5 text-black">
              <h3 className="text-lg font-semibold">Edit Property</h3>
              <button
                className="rounded p-1 transition-colors duration-200 hover:bg-gray-200"
                onClick={() => setEditPropertyModal(false)}
              >
                <X size={20} />
              </button>
            </header>

            <main className="px-5">
              <PropertyForm />
            </main>
          </article>
        </ModalLayout>
      )}
    </>
  );
}
