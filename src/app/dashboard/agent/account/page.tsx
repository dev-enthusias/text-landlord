"use client";

import Topbar from "@/components/layout/topbar";
import Menu from "@/components/layout/footer-menu";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import AddAccountListBtn from "@/components/ui/add-account-list";
import AddAccountCategoryBtn from "@/components/ui/add-account-category";

const buttons = ["Account list", "Account category"];

export default function Account() {
  const [activeBtn, setActiveBtn] = useState(0);

  return (
    <>
      <div className="lg:hidden">
        <Topbar />
      </div>

      <main className="pb-24 pt-5">
        <section className="z-50 mb-10 px-3">
          <div className="mb-4 flex flex-col items-center justify-between gap-3 lg:flex-row">
            <h1 className="flex items-center text-xl font-semibold lg:text-3xl">
              Account
            </h1>

            {activeBtn === 0 ? (
              <AddAccountListBtn />
            ) : (
              <AddAccountCategoryBtn />
            )}
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
          <section className="grid grid-cols-2 justify-between gap-6 px-3">
            <AccountListCard />
            <AccountListCard />
            <AccountListCard />
            <AccountListCard />
          </section>
        )}

        {activeBtn === 1 && (
          <section className="grid grid-cols-2 justify-between gap-6 px-3">
            <AccountCategoryCard />
            <AccountCategoryCard />
            <AccountCategoryCard />
            <AccountCategoryCard />
          </section>
        )}
      </main>

      <Menu />
    </>
  );
}

function AccountListCard() {
  return (
    <article className="custom-shadow rounded-lg bg-white p-4 text-[14px]">
      <h3 className="text-lg font-medium">David Jega</h3>
      <p>9080010168</p>
      <div className="flex justify-between">
        <p className="mt-2 inline-block rounded-full bg-accent px-2 py-0.5 text-sm text-white">
          Income
        </p>

        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
          <Trash2 size={14} />
        </button>
      </div>
    </article>
  );
}

function AccountCategoryCard() {
  return (
    <article className="custom-shadow rounded-lg bg-white p-4 text-[14px]">
      <h3 className="text-lg font-medium">Income category</h3>
      <p>Active</p>
      <div className="flex justify-between">
        <p className="mt-2 inline-block rounded-full bg-accent px-2 py-0.5 text-sm text-white">
          Credit
        </p>

        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
          <Trash2 size={14} />
        </button>
      </div>
    </article>
  );
}
