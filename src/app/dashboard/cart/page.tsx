"use client";

import PrevPageButton from "@/components/general/prev-page";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Cart() {
  return (
    <>
      <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5">
        <div className="flex gap-x-4">
          <PrevPageButton />
          <h1 className="text-xl font-semibold">My Cart</h1>
        </div>
        <button className="text-[14px] font-semibold text-accent">
          Select all
        </button>
      </header>

      <main className="pb-28">
        <section className="space-y-4 p-3">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </section>
      </main>

      <footer className="fixed bottom-0 z-50 flex w-full items-center justify-between border-t bg-white px-6 py-4 pb-8 shadow-xl shadow-black">
        <div>
          <p className="text-[14px] leading-none opacity-50">Total</p>
          <p className="text-[24px] font-semibold">₦10,000,000</p>
        </div>
        <button
          type="submit"
          className="w-fit shrink-0 rounded-lg bg-primary px-8 py-4 text-lg font-semibold transition-colors duration-300 ease-out hover:bg-primary/80"
        >
          Checkout
        </button>
      </footer>
    </>
  );
}

function CartItem() {
  const [selectedItem, setSelectedItem] = useState(true);

  return (
    <article className="relative flex items-start gap-x-4 rounded-lg border border-gray-300 p-3">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
        <Image
          src="/images/duplex.webp"
          alt="Display photo of the building"
          fill
          style={{ objectFit: "cover" }}
          sizes="80px"
        />
      </div>
      <div>
        <h3 className="font-medium">Havilla Specitazio</h3>
        <p className="w-[calc(100vw-144px)] truncate text-[14px] opacity-50">
          Menitalio Espressito Avalanche Street
        </p>
        <p className="my-1 text-lg font-bold text-primary-dark">
          ₦700,000{" "}
          <span className="text-base font-normal text-foreground opacity-50">
            /Month
          </span>
        </p>
        <div className="flex items-center justify-between">
          <button className="text-[14px] font-medium text-red-600">
            Remove
          </button>
          <div className="flex items-center justify-end gap-x-5">
            <button className="flex h-8 w-8 items-center justify-center rounded border border-accent/20 font-bold text-accent">
              -
            </button>
            <span className="font-bold">{1}</span>
            <button className="flex h-8 w-8 items-center justify-center rounded border border-accent/20 font-bold text-accent">
              +
            </button>
          </div>
        </div>

        <button
          className={`absolute right-3 top-3 flex h-4 w-4 items-center justify-center rounded border-2 border-accent/20 font-bold text-accent ${selectedItem ? "bg-accent" : "bg-transparent"}`}
          onClick={() => setSelectedItem(!selectedItem)}
        >
          {selectedItem && <CheckIcon className="h-2 w-2 text-white" />}
        </button>
      </div>
    </article>
  );
}
