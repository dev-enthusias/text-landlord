"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import PrevPageButton from "@/components/ui/prev-page";
import ImageSlider from "@/components/ui/image-slider";
import { HeartSolid, HeartStroke } from "@/components/svg";
import { routes } from "@/constants/routes";
import {
  BathIcon,
  BedIcon,
  Boxes,
  Handshake,
  HomeIcon,
  MapPin,
  MessageCircleIcon,
  RulerIcon,
} from "lucide-react";

export default function PropertyDetailsPage() {
  return (
    <>
      <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5 lg:top-20">
        <div className="flex gap-x-4">
          <PrevPageButton />
          <h1 className="text-xl font-semibold">Emperica Dazil, Villa</h1>
        </div>
      </header>

      <main className="gap-x-5 p-3 pb-28 lg:grid lg:grid-cols-3 lg:px-10 lg:pt-5">
        <section className="lg:col-span-2">
          <ImageSlider />

          <div className="lg:hidden">
            <PropertyName />
            <PropertyPricingDetails />
            <PropertyFeatures />
            <PropertyPricing />
          </div>

          <PropertyDescription />

          <div className="lg:hidden">
            <PropertyListerContact />
          </div>
        </section>

        <section className="hidden lg:block">
          <PropertyName />
          <PropertyPricingDetails />
          <PropertyFeatures />
          <PropertyPricing />
          <PropertyListerContact />
        </section>
      </main>

      <footer className="fixed bottom-0 flex w-full items-center justify-between space-x-6 border-t border-t-gray-300 bg-white px-6 pb-8 pt-4 lg:hidden">
        <button className="w-full rounded-lg border-t border-gray-300 bg-foreground py-3 text-lg font-semibold text-white">
          Get in touch
        </button>
        <PayRentOrAddToCartBtn />
      </footer>
    </>
  );
}

function PropertyName() {
  const [favProperty, setFavProperty] = useState(false);

  return (
    <section className="mb-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-accent">Apartment</p>
        <button onClick={() => setFavProperty(!favProperty)}>
          {!favProperty ? <HeartStroke /> : <HeartSolid />}
        </button>
      </div>
      <h2 className="font-semibold xl:text-lg">Emperica Dazil, Villa</h2>
      <p className="flex items-center gap-x-1 text-sm xl:text-[14px]">
        <MapPin className="h-3 w-3" /> Palaxisto Emeriando Plaza Road
      </p>
    </section>
  );
}

function PropertyFeatures() {
  return (
    <ul className="mb-6 mt-4 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-gray-200 bg-black/[1%] px-3 py-2">
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
  );
}

function PropertyPricingDetails() {
  return (
    <article className="mb-4 flex flex-wrap justify-between gap-x-5 gap-y-2">
      <div className="flex flex-col items-start">
        <h3 className="mb-1 flex items-center justify-center gap-x-1 text-[14px]">
          <HomeIcon size={16} className="text-primary-dark" />
          <span className="opacity-50">Type</span>
        </h3>
        <p className="text-[14px] font-medium">Residential</p>
      </div>
      <div className="flex flex-col items-start">
        <h3 className="mb-1 flex items-center justify-center gap-x-1 text-[14px]">
          <Boxes size={16} className="text-primary-dark" />
          <span className="opacity-50">Category</span>
        </h3>
        <p className="text-[14px] font-medium">Building</p>
      </div>
      <div className="flex flex-col items-start">
        <h3 className="mb-1 flex items-center justify-center gap-x-1 text-[14px]">
          <Handshake size={16} className="text-primary-dark" />
          <span className="opacity-50">Down Payment</span>
        </h3>
        <p className="text-[14px] font-medium">₦1,000,000</p>
      </div>
    </article>
  );
}

function PropertyPricing() {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-x-5 gap-y-2">
      <div>
        <p className="text-2xl font-semibold">₦10,000,000</p>
      </div>

      <PayRentOrAddToCartBtn />
    </div>
  );
}

function PropertyListerContact() {
  return (
    <article className="rounded-lg border border-accent lg:p-3 xl:p-5">
      <h3 className="mb-4 text-sm font-medium">Property Lister</h3>

      <p className="font-semibold">Melissa Monroe</p>
      <p className="mb-4 opacity-70 lg:text-xs xl:text-[14px]">
        Somewhere in bgbadagri, Kondovo
      </p>

      <Link
        href={routes.DASHBOARDCHAT}
        className="flex w-fit items-center gap-x-2 rounded border-2 border-accent px-4 py-1 font-medium"
      >
        <MessageCircleIcon size={20} /> Message
      </Link>
    </article>
  );
}

function PropertyDescription() {
  return (
    <section className="lg:mt-5">
      <h3 className="mb-2 text-[14px] leading-none opacity-50">Description</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque asperiores impedit, mollitia voluptas exercitationem
        corrupti. Enim facere quam eum? Impedit officiis porro cupiditate
        nostrum tempore veniam earum? Doloremque quod eaque consectetur ipsa rem
        quae perspiciatis, cupiditate necessitatibus, vero ex vel accusamus
        veritatis deserunt atque officiis voluptates eligendi ratione autem!
      </p>
      <PayRentOrAddToCartBtn />
    </section>
  );
}

function PayRentOrAddToCartBtn() {
  const searchParam = useSearchParams();
  const propertyStatus = searchParam.get("property-status");

  return (
    <button className="mt-4 hidden w-fit rounded-lg bg-primary px-10 py-3 text-lg font-semibold text-black lg:block">
      {propertyStatus === "rent" ? "Pay Rent" : "Add to Cart"}
    </button>
  );
}
