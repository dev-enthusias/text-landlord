"use client";

import Topbar from "@/components/layout/topbar";
import Menu from "@/components/layout/footer-menu";
import { CalendarDays, Trash2, WalletMinimal } from "lucide-react";
import { useState } from "react";

const buttons = ["Payment Reports", "Tenant Reports"];

export default function Reports() {
  const [activeBtn, setActiveBtn] = useState(0);

  return (
    <>
      <div className="lg:hidden">
        <Topbar />
      </div>

      <main className="pb-24 pt-5">
        <section className="z-50 px-3 lg:px-10">
          <div className="mb-4 flex flex-col gap-3 lg:flex-row">
            <h1 className="flex items-center text-xl font-semibold lg:text-3xl">
              Reports
            </h1>
          </div>

          <div className="no-scrollbar overflow-x-auto">
            <div className="flex space-x-4">
              {buttons.map((btnText, i) => (
                <button
                  key={i}
                  className={`shrink-0 whitespace-nowrap rounded-lg px-4 py-[3px] font-medium ${activeBtn === i ? "bg-primary text-black" : "bg-primary/20 text-black/60"}`}
                  onClick={() => setActiveBtn(i)}
                >
                  {btnText}
                </button>
              ))}
            </div>
          </div>
        </section>

        {activeBtn === 0 && (
          <section className="grid grid-cols-2 justify-between gap-6 px-3 md:grid-cols-3 lg:grid-cols-3 lg:p-10">
            <PaymentReportCard />
            <PaymentReportCard />
            <PaymentReportCard />
            <PaymentReportCard />
          </section>
        )}

        {activeBtn === 1 && (
          <section className="grid grid-cols-2 justify-between gap-6 px-3 md:grid-cols-3 lg:grid-cols-3 lg:p-10">
            <TenantReportCard />
            <TenantReportCard />
            <TenantReportCard />
            <TenantReportCard />
          </section>
        )}
      </main>

      <Menu />
    </>
  );
}

function PaymentReportCard() {
  return (
    <article className="custom-shadow rounded-lg bg-white p-4 text-[14px]">
      <h3 className="font-semibold">Peace Apartement Lakowe</h3>
      <p>Amaranwe amakwe Isoion Avenue</p>
      <p>John Joshua</p>
      <p className="text-xl font-semibold">₦1000000</p>

      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-x-5">
          <p className="flex items-center gap-x-1">
            <CalendarDays size={13} />
            16 March, 2024
          </p>
          <p className="flex items-center gap-x-1">
            <WalletMinimal size={13} />
            Paystack
          </p>
        </div>
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
          <Trash2 size={14} />
        </button>
      </div>
    </article>
  );
}

function TenantReportCard() {
  return (
    <article className="custom-shadow rounded-lg bg-white p-4 text-[14px]">
      <h3 className="font-semibold">Peace Apartement Lakowe</h3>
      <p>John Joshua</p>
      <p>jonhdoe@gmail.com</p>
      <p className="mt-2 inline-block rounded-full bg-accent px-2 py-0.5 text-sm text-white">
        Active
      </p>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-x-1.5">
          <p className="flex items-center gap-x-1">
            <CalendarDays size={13} />
            16 March, 2024
          </p>
          <span>-</span>
          <p className="flex items-center gap-x-1">
            <CalendarDays size={13} />
            16 March, 2025
          </p>
        </div>
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
          <Trash2 size={14} />
        </button>
      </div>
    </article>
  );
}
