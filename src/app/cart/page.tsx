"use client";

import PageLayout from "@/components/layout/page-layout";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";

export default function Cart() {
  return (
    <PageLayout>
      <main className="grid grid-cols-5 items-start gap-x-5 px-40 py-7 pb-20">
        <section className="col-span-3 space-y-4 rounded-lg bg-white p-3 shadow-lg lg:p-0">
          <div className="border-b px-3 py-5 text-xl font-bold text-black">
            Cart (6)
          </div>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </section>
        <div className="col-span-2 hidden rounded-lg border bg-white lg:block">
          <section className="border-b p-5">
            <h3 className="mb-6 font-medium text-black">Order Summary</h3>
            <div className="space-y-1">
              <div className="text-14 flex items-center justify-between">
                <div className="flex gap-x-4">
                  <p>x3</p>
                  <p>Acen-Fighting Toner</p>
                </div>
                <p className="text-gray-700">$14.25</p>
              </div>
            </div>
          </section>

          <section className="border-b p-5">
            <div className="flex justify-between">
              <p className="">Amount</p>
              <p className="font-bold text-black">$100,000</p>
            </div>
          </section>

          <section className="p-5">
            <button
              type="submit"
              className="w-full rounded-lg bg-gold py-3 font-semibold text-white transition-colors duration-300 ease-out hover:bg-gold/80"
            >
              Checkout
            </button>
          </section>
        </div>
      </main>
    </PageLayout>
  );
}

function CartItem() {
  return (
    <article className="relative flex items-start gap-x-2 border-b border-gray-300 p-3">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
        <Image
          src="/images/duplex.webp"
          alt="Display photo of the building"
          fill
          style={{ objectFit: "cover" }}
          sizes="80px"
        />
      </div>
      <div className="grow">
        <div className="mb-2">
          <h3 className="text-sm text-gray-600">Emperica in Dazil, Villa</h3>
          <p className="text-xs tracking-wide">
            Palaxisto Emeriando Plaza Road
          </p>
        </div>
        <p className="flex items-center gap-x-1 text-lg font-bold text-accent">
          ₦5,000,000{" "}
          <span className="text-xs font-medium text-gray-500 opacity-80">
            / year
          </span>
        </p>
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-x-1 font-semibold text-gold">
            <AiOutlineDelete />
            Remove
          </button>
          <div className="flex items-center justify-end gap-x-5">
            <button className="flex h-8 w-8 items-center justify-center rounded bg-gold font-bold text-white hover:bg-gold/80">
              -
            </button>
            <span className="font-bold">{1}</span>
            <button className="flex h-8 w-8 items-center justify-center rounded bg-gold font-bold text-white hover:bg-gold/80">
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
