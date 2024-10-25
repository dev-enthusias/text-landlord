"use client";

import { useState } from "react";
import ModalLayout from "./modal-layout";
import AddEditTenant from "./add-edit-tenant";

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
          <AddEditTenant setAddTenantModal={setAddTenantModal} />
        </ModalLayout>
      )}
    </>
  );
}
