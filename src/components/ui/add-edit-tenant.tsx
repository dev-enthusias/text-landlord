"use client";

import { X } from "lucide-react";
import TenantForm from "../forms/tenant-form";

export default function AddEditTenant({
  setAddTenantModal,
  title = "Add",
}: {
  title?: string;
  setAddTenantModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <article className="no-scrollbar max-h-[80vh] w-[95%] max-w-[640px] overflow-y-auto rounded-xl bg-white pb-5 lg:max-h-[90vh]">
      <header className="sticky top-0 z-50 mb-4 flex items-center justify-between border-b bg-white p-5 text-black">
        <h3 className="text-lg font-semibold">{title} Tenant</h3>
        <button
          className="rounded p-1 transition-colors duration-200 hover:bg-gray-200"
          onClick={() => setAddTenantModal(false)}
        >
          <X size={20} />
        </button>
      </header>

      <main className="px-5">
        <TenantForm />
      </main>
    </article>
  );
}
