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
      <section className="sticky top-0 w-full border-b border-gray-200 bg-white px-3 py-5 lg:top-[72px] lg:px-10">
        <div className="mb-10 flex items-center gap-x-8 lg:hidden">
          <PrevPageButton />
          <h1 className="text-xl font-semibold">Transaction History</h1>
        </div>

        <h1 className="mb-4 flex items-center text-xl font-semibold lg:text-xl xl:text-2xl">
          Transaction History
        </h1>

        <div className="no-scrollbar overflow-x-auto">
          <div className="flex space-x-4">
            {btns.map(({ text, link, type }, i) => (
              <Link
                key={i}
                href={link}
                className={`shrink-0 whitespace-nowrap rounded-lg px-4 py-[3px] font-medium ${trxType === type || (type === "all" && trxType === null) ? "bg-primary text-black" : "bg-primary/20 text-black/60"}`}
              >
                {text}
              </Link>
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
          </div>
        </section>
      </section>
    </>
  );
}
