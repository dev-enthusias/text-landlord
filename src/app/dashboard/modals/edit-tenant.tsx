"use client";

import { useState } from "react";
import ModalLayout from "./modal-layout";
import AddEditTenantForm from "@/components/general/forms/add-edit-tenant-form";

export default function EditTenantBtn() {
  const [isAddTenantModalOpen, setAddTenantModal] = useState(false);

  return (
    <>
      <button
        className="rounded bg-primary-dark px-5 py-1 font-semibold"
        onClick={() => setAddTenantModal(true)}
      >
        EDIT PROFILE
      </button>

      {isAddTenantModalOpen && (
        <ModalLayout>
          <AddEditTenantForm
            setAddTenantModal={setAddTenantModal}
            title="Edit"
          />
        </ModalLayout>
      )}
    </>
  );
}
