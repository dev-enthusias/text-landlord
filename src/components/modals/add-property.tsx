"use client";

import { useState } from "react";
import ModalLayout from "../ui/modal-layout";
import AddPropertyForm from "../forms/add-property-form";
import { X } from "lucide-react";
import { IoMdAdd } from "react-icons/io";
import {
  Country,
  PropertyFieldsResponseDT,
  PropertyMetadataResponseDataType,
} from "@/definition";
import Link from "next/link";

export default function AddPropertyBtn({
  categories,
  types,
  country,
  checkDefaultAccount,
}: {
  categories: PropertyMetadataResponseDataType["categories"];
  types: PropertyFieldsResponseDT["data"]["types"];
  country: Country[];
  checkDefaultAccount: any;
}) {
  const [isAddPropertyModalOpen, setAddPropertyModal] = useState(false);

  return (
    <>
      <button
        className="flex items-center gap-x-1 rounded bg-gold px-4 py-2 text-sm font-bold tracking-wide text-black hover:bg-gold/80"
        onClick={() => setAddPropertyModal(true)}
      >
        <IoMdAdd /> Add Property
      </button>

      {isAddPropertyModalOpen && (
        <ModalLayout>
          <article className="no-scrollbar max-h-[80vh] w-[95%] max-w-[640px] overflow-y-auto rounded-xl bg-white pb-5 lg:max-h-[90vh]">
            <header className="sticky top-0 z-50 mb-4 flex items-center justify-between border-b bg-white p-5 text-black">
              <h3 className="text-lg font-semibold">Add Property</h3>
              <button
                className="rounded p-1 transition-colors duration-200 hover:bg-gray-200"
                onClick={() => setAddPropertyModal(false)}
              >
                <X size={20} />
              </button>
            </header>

            <main className="px-5">
              {checkDefaultAccount.status ? (
                <AddPropertyForm
                  categories={categories}
                  types={types}
                  country={country}
                  isAddPropertyModalOpen={setAddPropertyModal}
                />
              ) : (
                <div className="text-center">
                  <h3 className="text-lg font-semibold">
                    Default Account Required
                  </h3>
                  <p className="mt-2 text-sm">
                    <span>
                      You need to have a default bank account to add a property.
                    </span>
                    <span className="block">
                      Please set a default account to continue.
                    </span>
                  </p>
                  <Link
                    href="/landlord/accounts"
                    className="mt-4 inline-block rounded-lg bg-gold px-5 py-2.5 font-bold text-black"
                  >
                    Add Account
                  </Link>
                </div>
              )}
            </main>
          </article>
        </ModalLayout>
      )}
    </>
  );
}
