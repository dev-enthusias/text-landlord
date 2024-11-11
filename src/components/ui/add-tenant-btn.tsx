"use client";

import { useState } from "react";
import ModalLayout from "./modal-layout";
import AddEditTenant from "./add-edit-tenant";
import { IoMdAdd } from "react-icons/io";

export default function AddTenantBtn() {
  const [isAddTenantModalOpen, setAddTenantModal] = useState(false);

  return (
    <>
      <button
        className="flex items-center gap-x-1 rounded bg-gold px-4 py-2 text-sm font-bold tracking-wide text-black hover:bg-gold/80"
        onClick={() => setAddTenantModal(true)}
      >
        <IoMdAdd /> Add Tenant
      </button>

      {isAddTenantModalOpen && (
        <ModalLayout>
          <AddEditTenant setAddTenantModal={setAddTenantModal} />
        </ModalLayout>
      )}
    </>
  );
}
