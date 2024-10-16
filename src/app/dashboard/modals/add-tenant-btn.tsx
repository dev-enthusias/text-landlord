"use client";

import { useState } from "react";
import ModalLayout from "./modal-layout";
import AddEditTenantForm from "@/components/general/forms/add-edit-tenant-form";

export default function AddTenantBtn() {
  const [isAddTenantModalOpen, setAddTenantModal] = useState(false);

  return (
    <>
      <button
        className="rounded bg-primary-dark px-4 py-2 font-semibold"
        onClick={() => setAddTenantModal(true)}
      >
        + Add Tenant
      </button>

      {isAddTenantModalOpen && (
        <ModalLayout>
          <AddEditTenantForm setAddTenantModal={setAddTenantModal} />
        </ModalLayout>
      )}
    </>
  );
}
