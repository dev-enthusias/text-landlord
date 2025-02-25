"use client";

import { useState } from "react";
import ModalLayout from "./modal-layout";
import AddTenant from "./add-tenant";
import { IoMdAdd } from "react-icons/io";

export default function AddTenantBtn({ properties }: { properties: any }) {
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
          <AddTenant
            setAddTenantModal={setAddTenantModal}
            properties={properties}
          />
        </ModalLayout>
      )}
    </>
  );
}
