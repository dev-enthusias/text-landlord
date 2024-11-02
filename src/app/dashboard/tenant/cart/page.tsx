"use client";

import PrevPageButton from "@/components/ui/prev-page";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Cart() {
  return (
    <>
      <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5 lg:top-20">
        <div className="flex gap-x-4">
          <PrevPageButton />
          <h1 className="text-xl font-semibold">My Cart</h1>
        </div>
        <button className="text-[14px] font-semibold text-accent lg:text-base">
          Select all <span className="hidden lg:inline-block">items</span>
        </button>
      </header>

      <main className="lg:px-10 lg:py-5">
        <div className="grid-cols-5 items-start gap-x-10 lg:grid">
          <section className="space-y-4 p-3 lg:col-span-3 lg:p-0">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </section>

          <div className="col-span-2 hidden rounded-lg border bg-white lg:block">
            <section className="border-b p-5">
              <h3 className="text-medium mb-6 text-lg font-medium">
                Order Summary
              </h3>
              <div className="space-y-1">
                <div className="text-14 flex items-center justify-between opacity-80">
                  <div className="flex gap-x-4">
                    <p>x3</p>
                    <p>Acen-Fighting Toner</p>
                  </div>
                  <p>$14.25</p>
                </div>
                <div className="text-14 flex items-center justify-between opacity-80">
                  <div className="flex gap-x-4">
                    <p>x3</p>
                    <p>Acen-Fighting Toner</p>
                  </div>
                  <p>$14.25</p>
                </div>
                <div className="text-14 flex items-center justify-between opacity-80">
                  <div className="flex gap-x-4">
                    <p>x3</p>
                    <p>Acen-Fighting Toner</p>
                  </div>
                  <p>$14.25</p>
                </div>
              </div>
            </section>

            <section className="border-b p-5">
              <div className="flex justify-between">
                <p className="opacity-80">Amount</p>
                <p className="font-bold">$100,000</p>
              </div>
            </section>

            <section className="p-5">
              <button
                type="submit"
                className="w-full rounded-lg bg-primary py-3 font-semibold transition-colors duration-300 ease-out hover:bg-primary/80"
              >
                Checkout
              </button>
            </section>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 z-50 flex w-full items-center justify-between border-t bg-white px-6 py-4 shadow-xl shadow-black lg:hidden">
        <div>
          <p className="text-[14px] leading-none opacity-50">Total</p>
          <p className="text-2xl font-semibold">₦10,000,000</p>
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
    <article className="relative flex max-w-[440px] items-start gap-x-4 rounded-lg border border-gray-300 p-3">
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
        <h3 className="font-medium">Havilla Specitazio</h3>
        <p className="w-[calc(100vw-144px)] truncate text-[14px] opacity-50 lg:w-full">
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
