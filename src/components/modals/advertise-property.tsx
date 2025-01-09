"use client";

import { useState } from "react";
import ModalLayout from "../ui/modal-layout";
import { X } from "lucide-react";
import AdvertisePropertyForm from "../forms/advertise-property-form";

export default function AdvertisePropertyBtn({ id }: { id: number }) {
  const [isEditPropertyModalOpen, setEditPropertyModal] = useState(false);

  return (
    <>
      <button
        className="flex items-center gap-x-1 rounded bg-accent px-4 py-3 text-sm font-bold tracking-wide text-white hover:bg-accent/80"
        onClick={() => setEditPropertyModal(true)}
      >
        Advertise Property
      </button>

      {isEditPropertyModalOpen && (
        <ModalLayout>
          <article className="no-scrollbar max-h-[80vh] w-[95%] max-w-[640px] overflow-y-auto rounded-xl bg-white pb-5 lg:max-h-[90vh]">
            <header className="sticky top-0 z-50 mb-4 flex items-center justify-between border-b bg-white p-5 text-black">
              <h3 className="text-lg font-semibold">Advertise Property</h3>
              <button
                className="rounded p-1 transition-colors duration-200 hover:bg-gray-200"
                onClick={() => setEditPropertyModal(false)}
              >
                <X size={20} />
              </button>
            </header>

            <main className="px-5">
              <AdvertisePropertyForm
                id={id}
                setEditPropertyModal={setEditPropertyModal}
              />
            </main>
          </article>
        </ModalLayout>
      )}
    </>
  );
}
