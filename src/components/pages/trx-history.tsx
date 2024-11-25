"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import PrevPageButton from "@/components/ui/prev-page";
import TransactionCard from "@/components/ui/transaction-card";
import { TrxButtonProps } from "@/definition";

export default function PaymentHistoryPage({ btns }: { btns: TrxButtonProps }) {
  const searchParam = useSearchParams();
  const trxType = searchParam.get("trx-type");

  return (
    <>
      <section>
        <header className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5">
          <div className="flex gap-x-2">
            <PrevPageButton className="text-black" />
            <h1 className="text-xl font-semibold text-black">
              Payment History
            </h1>
          </div>
        </header>

        <div className="no-scrollbar mt-7 overflow-x-auto px-5 lg:px-10">
          <div className="flex space-x-4">
            {btns.map(({ text, link, type }, i) => (
              <Link
                key={i}
                href={link}
                className={`shrink-0 whitespace-nowrap rounded-lg px-4 py-[3px] font-medium ${trxType === type || (type === "all" && trxType === null) ? "bg-gold text-white" : "bg-gold/20 text-black"}`}
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-4 lg:px-10">
        <section className="mb-4">
          <div className="mb-2 flex items-center gap-x-1">
            <h2 className="text-xs font-semibold text-gray-700">NOVEMBER</h2>
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
            <h2 className="text-xs font-semibold text-gray-700">DECEMBER</h2>
            <hr className="h-[1px] grow border-none bg-gray-100" />
          </div>
          <div className="space-y-5">
            <TransactionCard status="credit" />
            <TransactionCard status="debit" />
            <TransactionCard status="credit" />
            <TransactionCard status="debit" />
          </div>
        </section>
      </section>
    </>
  );
}
