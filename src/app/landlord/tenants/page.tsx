"use client";

import Link from "next/link";
import Image from "next/image";
import TenantCard from "@/components/ui/tenant-card";
import AddTenantBtn from "@/components/ui/add-tenant-btn";
import OccupiedPropertyAccordion from "@/components/ui/accordion";
import { BsChat } from "react-icons/bs";
import { routes } from "@/constants/routes";
import EditTenantBtn from "@/components/ui/edit-tenant";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Tenants() {
  const searchparam = useSearchParams();
  const tenantState = searchparam.get("state");
  const [activeTab, setActiveTab] = useState(tenantState);

  useEffect(() => {
    setActiveTab(tenantState);
  }, [tenantState]);

  return (
    <main className="mb-20 flex items-start px-10 pt-7 lg:gap-x-8 xl:gap-x-10">
      <div className="no-scrollbar max-h-[calc(100vh-108px)] grow overflow-y-auto">
        <section className="mb-6 px-3">
          <div className="mb-4 flex flex-col gap-3 lg:flex-row">
            <div className="flex w-full items-center justify-between">
              <h1 className="text-2xl font-semibold text-black">Tenants</h1>
              <AddTenantBtn />
            </div>
          </div>
          <div className="flex items-end justify-between gap-x-10 xl:gap-x-20">
            <div className="flex grow gap-x-4 border-b border-gray-300">
              <Link
                href={routes.TENANTS + "?state=active"}
                className={`border-b-2 ${activeTab === "active" ? "border-b-gold font-bold text-gold" : "border-b-gray-300"} px-2 text-lg`}
              >
                Active
              </Link>
              <Link
                href={routes.TENANTS + "?state=inactive"}
                className={`border-b-2 ${activeTab === "inactive" ? "border-b-gold font-bold text-gold" : "border-b-gray-300"} px-2 text-lg`}
              >
                Inactive
              </Link>
            </div>
            <input
              type="search"
              className="custom-shadow w-full rounded border-b-gold bg-white px-4 py-2 text-sm text-black focus:border-b-2 focus:bg-white focus:outline-none lg:max-w-[240px] xl:max-w-[340px]"
              placeholder="Search for tenants..."
            />
          </div>
        </section>

        <section className="grid grid-cols-3 justify-between gap-4 px-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          <TenantCard />
          <TenantCard />
          <TenantCard />
          <TenantCard />
          <TenantCard />
          <TenantCard />
          <TenantCard />
          <TenantCard />
          <TenantCard />
        </section>
      </div>

      <TenantDetails />
    </main>
  );
}

function TenantDetails() {
  return (
    <div className="no-scrollbar max-h-[calc(100vh-80px)] shrink-0 overflow-hidden overflow-y-auto rounded-lg bg-gold/10 p-5 lg:w-[440px]">
      <section className="flex items-center gap-x-4">
        <div className="relative h-20 w-20 overflow-hidden rounded">
          <Image
            src="/images/profile-img.jpeg"
            fill
            alt="Property image"
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="font-semibold text-gray-800">Anotion Markiwa</h1>
          <p className="text-sm">broski@ogalandlords.com</p>
          <p className="text-sm">09080010168</p>
        </div>
      </section>

      <section className="my-2 flex items-center gap-x-6">
        <EditTenantBtn />
        <button className="flex items-center gap-x-2 rounded bg-white px-6 py-2 text-sm font-semibold text-gold">
          <BsChat size={14} />
          Chat
        </button>
        <button className="rounded bg-red-600 px-6 py-2 text-sm font-bold text-white">
          Delete
        </button>
      </section>

      <section className="mt-6">
        <h2 className="mb-2 font-semibold text-black">Occupied properties</h2>
        <div className="space-y-2">
          <OccupiedPropertyAccordion />
          <OccupiedPropertyAccordion />
          <OccupiedPropertyAccordion />
        </div>
      </section>
    </div>
  );
}
