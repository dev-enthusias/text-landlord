"use client";

import { useState } from "react";
import PrevPageButton from "@/components/general/prev-page";
import TransactionCard from "@/components/general/transaction-card";

const buttons = ["All", "Income", "Expense", "Bank Payment"];

export default function History() {
  const [activeBtn, setActiveBtn] = useState(0);

  return (
    <>
      <section className="sticky top-[72px] w-full border-b border-gray-200 bg-white px-3 py-5 lg:px-10">
        <div className="mb-10 flex items-center gap-x-8 lg:hidden">
          <PrevPageButton />
          <h1 className="text-xl font-semibold">Transaction History</h1>
        </div>

        <h1 className="mb-4 flex items-center text-xl font-semibold lg:text-2xl">
          Transaction History
        </h1>

        <div className="no-scrollbar overflow-x-auto">
          <div className="flex space-x-4">
            {buttons.map((btnText, i) => (
              <button
                key={i}
                className={`shrink-0 whitespace-nowrap rounded-full px-4 py-[3px] font-bold ${activeBtn === i ? "bg-primary text-black" : "bg-primary/20 text-black/60"}`}
                onClick={() => setActiveBtn(i)}
              >
                {btnText}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 py-4 lg:px-10">
        <section className="mb-4">
          <div className="mb-2 flex items-center gap-x-1">
            <h2 className="text-sm font-bold">NOVEMBER</h2>
            <hr className="h-[1px] grow border-none bg-gray-100" />
          </div>
          <div className="space-y-5">
            <TransactionCard status="credit" />
            <TransactionCard status="debit" />
            <TransactionCard status="credit" />
          </div>
        </section>

        <section>
          <div className="mb-2 flex items-center gap-x-1">
            <h2 className="text-sm font-bold">DECEMBER</h2>
            <hr className="h-[1px] grow border-none bg-gray-100" />
          </div>
          <div className="space-y-5">
            <TransactionCard status="credit" />
            <TransactionCard status="debit" />
            <TransactionCard status="credit" />
            <TransactionCard status="debit" />
            <TransactionCard status="debit" />
            <TransactionCard status="credit" />
          </div>
        </section>
      </section>
    </>
  );
}
