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
    <article className="no-scrollbar max-h-[95vh] w-[95%] max-w-[640px] overflow-y-auto bg-white pb-10">
      <header className="sticky top-0 z-50 mb-4 flex justify-between border-b bg-white p-5">
        <h3 className="text-lg font-semibold">{title} Tenant</h3>
        <button className="" onClick={() => setAddTenantModal(false)}>
          <X size={20} />
        </button>
      </header>
      <main className="px-5">
        <TenantForm />
      </main>
    </article>
  );
}
