"use client";

import PrevPageButton from "@/components/general/prev-page";
import { BathIcon, BedIcon, HeartIcon, MapPin, RulerIcon } from "lucide-react";
import ImageSlider from "../../client-component";
import { useSearchParams } from "next/navigation";

export default function PropertyDetails() {
  const searchParam = useSearchParams();
  const propertyStatus = searchParam.get("property-status");

  return (
    <>
      <section className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5">
        <div className="flex gap-x-4">
          <PrevPageButton />
          <h1 className="text-xl font-semibold">Emperica Dazil, Villa</h1>
        </div>
      </section>

      <main className="p-3 pb-28">
        <ImageSlider />

        <section className="mb-4 flex items-center justify-between pt-4">
          <div>
            <p className="text-sm font-semibold text-accent">Apartment</p>
            <h2 className="text-lg font-semibold">Emperica Dazil, Villa</h2>
            <p className="flex items-center gap-x-1 text-[14px]">
              <MapPin size={13} /> Palaxisto Emeriando Plaza Road
            </p>
          </div>
          <HeartIcon />
        </section>

        <ul className="mb-6 mt-4 flex items-center justify-between rounded-lg border border-gray-200 bg-black/[1%] px-3 py-2">
          <li className="flex items-center gap-x-1 text-[14px] font-semibold">
            <BedIcon className="text-primary-dark" size={18} />
            <span className="opacity-50">6 bedroom</span>
          </li>
          <li className="flex items-center gap-x-1 text-[14px] font-semibold">
            <BathIcon className="text-primary-dark" size={18} />
            <span className="opacity-50">6 bathroom</span>
          </li>
          <li className="flex items-center gap-x-1 text-[14px] font-semibold">
            <RulerIcon className="text-primary-dark" size={18} />
            <span className="opacity-50">2.62 sq ft</span>
          </li>
        </ul>

        <div className="mb-6">
          <h3 className="mb-1 text-[14px] leading-none opacity-50">Price</h3>
          <p className="text-2xl font-semibold">₦10,000,000</p>
        </div>

        <section>
          <h3 className="mb-2 text-[14px] leading-none opacity-50">
            Description
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            doloremque asperiores impedit, mollitia voluptas exercitationem
            corrupti. Enim facere quam eum? Impedit officiis porro cupiditate
            nostrum tempore veniam earum? Doloremque quod eaque consectetur ipsa
            rem quae perspiciatis, cupiditate necessitatibus, vero ex vel
            accusamus veritatis deserunt atque officiis voluptates eligendi
            ratione autem!
          </p>
        </section>
      </main>

      <footer className="fixed bottom-0 flex w-full items-center justify-between space-x-6 border-t border-t-gray-300 bg-white px-6 pb-8 pt-4">
        <button className="w-full rounded-lg border-t border-gray-300 bg-foreground py-3 text-lg font-semibold text-white">
          Get in touch
        </button>
        <button className="w-full rounded-lg bg-primary py-3 text-lg font-semibold text-black">
          {propertyStatus === "rent" ? "Pay Rent" : "Add to Cart"}
        </button>
      </footer>
    </>
  );
}
