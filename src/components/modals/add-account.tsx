"use client";

import { useState } from "react";
import ModalLayout from "../ui/modal-layout";
import { X } from "lucide-react";
import { IoMdAdd } from "react-icons/io";
import AddAccountForm from "../forms/add-account-form";
import { BankType } from "@/definition";

export default function AddAccount({ banks }: { banks: BankType[] }) {
  const [isModalOpen, setModalVisibility] = useState(false);

  return (
    <>
      <button
        className="rounded-lx flex items-center gap-x-1 rounded bg-gold px-4 py-2 text-sm font-bold tracking-wide text-black hover:bg-gold/80"
        onClick={() => setModalVisibility(true)}
      >
        <IoMdAdd /> Add Account
      </button>

      {isModalOpen && (
        <ModalLayout>
          <article className="no-scrollbar max-h-[95vh] w-[95%] max-w-[640px] overflow-y-auto rounded-xl bg-white pb-5">
            <header className="sticky top-0 z-50 mb-4 flex justify-between border-b bg-white p-5">
              <h3 className="text-lg font-semibold">Add Account</h3>
              <button
                className="rounded p-1 transition-colors duration-200 hover:bg-gray-200"
                onClick={() => setModalVisibility(false)}
              >
                <X size={20} />
              </button>
            </header>
            <main className="px-5">
              <AddAccountForm
                banks={banks}
                setModalVisibility={setModalVisibility}
              />
            </main>
          </article>
        </ModalLayout>
      )}
    </>
  );
}
