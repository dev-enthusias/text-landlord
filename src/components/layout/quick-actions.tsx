"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ModalLayout from "../ui/modal-layout";
import { landloardQuickActionData } from "@/constants/data";
import { X } from "lucide-react";
import { routes } from "@/constants/routes";
import PropertyForm from "../forms/property-form";
import AgentForm from "../forms/agent-form";
import TenantForm from "../forms/tenant-form";
import { getToken } from "@/lib/actions";

async function getPropertyTypeAndCategory() {
  const token = await getToken();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/private/v1/property/create`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await res.json();
  const { type, categories } = data.data;
  return { type, categories };
}

export default async function QuickActions() {
  const router = useRouter();
  const [isAddPropertyModalOpen, setAddPropertyModal] = useState(false);
  const [isAddTenantModalOpen, setAddTenantModal] = useState(false);
  const [isAddAgentModalOpen, setAddAgentModal] = useState(false);

  const { type, categories } = await getPropertyTypeAndCategory();

  const handleQuickAction = (id: number) => {
    switch (id) {
      case 0:
        setAddPropertyModal(true);
        break;
      case 1:
        router.push(routes.TENANTS);
        break;
      case 2:
        setAddTenantModal(true);
        break;
      case 3:
        router.push(routes.REPORTS);
        break;
      case 4:
        setAddAgentModal(true);
        break;
      case 5:
        router.push(routes.BILL_MANAGEMENT);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="grid grid-cols-3 flex-wrap justify-between gap-5 text-sm md:grid-cols-5 lg:text-base">
        {landloardQuickActionData.map((data, i) => (
          <article
            key={i}
            className="custom-shadow group flex flex-col items-center justify-center gap-y-3 rounded-lg bg-white py-5 text-center transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-accent/10 hover:shadow-none"
            onClick={() => handleQuickAction(data.id)}
          >
            <div className="group-hover:text-accent">{data.icons}</div>
            <h3 className="text-[14px] font-medium transition-all duration-300 group-hover:font-semibold group-hover:text-accent xl:text-base">
              {data.title}
            </h3>
          </article>
        ))}
      </div>

      {isAddPropertyModalOpen && (
        <ModalLayout>
          <article className="no-scrollbar max-h-[95vh] w-[95%] max-w-[640px] overflow-y-auto bg-white pb-10">
            <header className="sticky top-0 z-50 mb-4 flex justify-between border-b bg-white p-5">
              <h3 className="text-lg font-semibold">Add Property</h3>
              <button className="" onClick={() => setAddPropertyModal(false)}>
                <X size={20} />
              </button>
            </header>

            <main className="px-5">
              <PropertyForm types={type} categories={categories} />
            </main>
          </article>
        </ModalLayout>
      )}

      {isAddTenantModalOpen && (
        <ModalLayout>
          <article className="no-scrollbar max-h-[95vh] w-[95%] max-w-[640px] overflow-y-auto bg-white pb-10">
            <header className="sticky top-0 z-50 mb-4 flex justify-between border-b bg-white p-5">
              <h3 className="text-lg font-semibold">Add Tenant</h3>
              <button className="" onClick={() => setAddTenantModal(false)}>
                <X size={20} />
              </button>
            </header>
            <main className="px-5">
              <TenantForm />
            </main>
          </article>
        </ModalLayout>
      )}

      {isAddAgentModalOpen && (
        <ModalLayout>
          <article className="no-scrollbar max-h-[95vh] w-[95%] max-w-[640px] overflow-y-auto bg-white pb-5">
            <header className="sticky top-0 z-50 mb-4 flex justify-between border-b bg-white p-5">
              <h3 className="text-lg font-semibold">Assign Agent</h3>
              <button className="" onClick={() => setAddAgentModal(false)}>
                <X size={20} />
              </button>
            </header>
            <main className="px-5">
              <AgentForm />
            </main>
          </article>
        </ModalLayout>
      )}
    </>
  );
}
