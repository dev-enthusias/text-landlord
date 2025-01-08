"use client";

import { useState } from "react";
import ModalLayout from "../ui/modal-layout";
import { X } from "lucide-react";
import ExtraPropertyDetailsForm from "../forms/extra-property-details";
import GalleryForm from "../forms/gallery-form";
import FloorPlanForm from "../forms/floor-plan-form";
import { PropertyMetadataResponseDataType } from "@/definition";

export default function UpdatePropertyBtn({
  type,
  completion,
  name,
  propertyType,
  id,
}: {
  name: string;
  id: number;
  propertyType: string;
  type: { id: number; name: string }[];
  completion: PropertyMetadataResponseDataType["completion"];
}) {
  const [isEditPropertyModalOpen, setEditPropertyModal] = useState(false);
  const [activeForm, setActiveForm] = useState<"extra" | "gallery" | "floor">(
    "extra",
  );

  return (
    <>
      <button
        className="flex items-center gap-x-1 rounded bg-gold px-4 py-2 text-sm font-bold tracking-wide text-black hover:bg-gold/80"
        onClick={() => setEditPropertyModal(true)}
      >
        Update Property Details
      </button>

      {isEditPropertyModalOpen && (
        <ModalLayout>
          <article className="no-scrollbar max-h-[80vh] w-[95%] max-w-[640px] overflow-y-auto rounded-xl bg-white pb-5 lg:max-h-[90vh]">
            <header className="sticky top-0 z-50 mb-4 flex items-center justify-between border-b bg-white p-5 text-black">
              <h3 className="text-lg font-semibold">Update Property Details</h3>
              <button
                className="rounded p-1 transition-colors duration-200 hover:bg-gray-200"
                onClick={() => setEditPropertyModal(false)}
              >
                <X size={20} />
              </button>
            </header>

            <main className="px-5">
              <div className="no-scrollbar mb-4 flex w-fit items-center gap-x-2 overflow-y-auto rounded-full border border-gray-200 bg-gray-100 p-1 sm:mx-0 sm:rounded-lg sm:border-none sm:bg-transparent sm:p-0">
                <button
                  className={`${
                    activeForm === "extra"
                      ? "shrink-0 rounded-full bg-black px-4 py-2 text-white lg:rounded-lg"
                      : "shrink-0 rounded-full bg-gray-200 px-4 py-2 lg:rounded-lg"
                  }`}
                  onClick={() => setActiveForm("extra")}
                >
                  Extra Details
                </button>
                <button
                  className={`${
                    activeForm === "gallery"
                      ? "shrink-0 rounded-full bg-black py-2 text-white lg:rounded-lg lg:px-4"
                      : "shrink-0 rounded-full bg-gray-200 px-4 py-2 lg:rounded-lg"
                  }`}
                  onClick={() => setActiveForm("gallery")}
                >
                  Gallery
                </button>
                <button
                  className={`${
                    activeForm === "floor"
                      ? "shrink-0 rounded-full bg-black py-2 text-white lg:rounded-lg lg:px-4"
                      : "shrink-0 rounded-full bg-gray-200 px-4 py-2 lg:rounded-lg"
                  }`}
                  onClick={() => setActiveForm("floor")}
                >
                  Floor Plan
                </button>
              </div>
              {activeForm === "extra" && (
                <ExtraPropertyDetailsForm
                  type={type}
                  completion={completion}
                  name={name}
                  propertyType={[propertyType]}
                  id={id}
                  setEditPropertyModal={setEditPropertyModal}
                />
              )}
              {activeForm === "gallery" && <GalleryForm />}
              {activeForm === "floor" && <FloorPlanForm />}
            </main>
          </article>
        </ModalLayout>
      )}
    </>
  );
}
