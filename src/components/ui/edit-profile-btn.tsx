"use client";

import { useState } from "react";
import ModalLayout from "./modal-layout";
import EditProfileForm from "../forms/profile-form";

export default function EditProfileBtn() {
  const [isAddTenantModalOpen, setAddTenantModal] = useState(false);

  return (
    <>
      <button
        className="shrink-0 rounded bg-primary-dark px-5 py-1 font-semibold"
        onClick={() => setAddTenantModal(true)}
      >
        EDIT PROFILE
      </button>

      {isAddTenantModalOpen && (
        <ModalLayout>
          <EditProfileForm setAddTenantModal={setAddTenantModal} />
        </ModalLayout>
      )}
    </>
  );
}
