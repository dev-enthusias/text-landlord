"use client";

import { useState } from "react";
import ModalLayout from "./modal-layout";
import AddEditTenantForm from "./add-edit-tenant";

export default function EditTenantBtn() {
  const [isAddTenantModalOpen, setAddTenantModal] = useState(false);

  return (
    <>
      <button
        className="rounded bg-gold px-5 py-2 text-sm font-semibold text-black"
        onClick={() => setAddTenantModal(true)}
      >
        Edit Profile
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
