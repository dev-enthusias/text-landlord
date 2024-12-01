"use client";

import { useState } from "react";
import { IoFilter } from "react-icons/io5";
import ModalLayout from "../ui/modal-layout";
import Filter from "../layout/filter";

export default function FilterBtn() {
  const [isFilterModalOpen, setFilterModal] = useState(false);

  return (
    <>
      <button
        className="flex items-center gap-x-4 rounded-md border bg-gold/50 px-3 py-2 text-sm font-medium text-black lg:hidden"
        onClick={() => setFilterModal(true)}
      >
        <IoFilter /> Filter
      </button>

      {isFilterModalOpen && (
        <ModalLayout>
          <div className="h-full max-h-[80vh] w-[90%] overflow-y-scroll rounded-lg bg-white px-5 py-4">
            <Filter setFilterModal={setFilterModal} />
          </div>
        </ModalLayout>
      )}
    </>
  );
}
