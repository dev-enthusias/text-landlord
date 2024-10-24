"use client";

import PrevPageButton from "@/components/ui/prev-page";
import {
  BathIcon,
  BedIcon,
  HeartIcon,
  MapPin,
  MessageCircleIcon,
  RulerIcon,
} from "lucide-react";
import ImageSlider from "../../client-component";
import { useSearchParams } from "next/navigation";
import { routes } from "@/constants/routes";
import Link from "next/link";
import { getRole } from "@/utils/role";

export default function PropertyDetails() {
  const USERROLE = getRole();
  const searchParam = useSearchParams();
  const propertyStatus = searchParam.get("property-status");

  return (
    <>
      <section className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5 lg:top-20">
        <div className="flex gap-x-4">
          <PrevPageButton />
          <h1 className="text-xl font-semibold">Emperica Dazil, Villa</h1>
        </div>
      </section>

      <main className="gap-x-5 p-3 pb-28 lg:grid lg:grid-cols-3 lg:px-10 lg:pt-5">
        <div className="lg:col-span-2">
          <ImageSlider />

          <div className="lg:hidden">
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
              <h3 className="mb-1 text-[14px] leading-none opacity-50">
                Price
              </h3>
              <p className="text-2xl font-semibold">₦10,000,000</p>
            </div>
          </div>

          <section className="lg:mt-5">
            <h3 className="mb-2 text-[14px] leading-none opacity-50">
              Description
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              doloremque asperiores impedit, mollitia voluptas exercitationem
              corrupti. Enim facere quam eum? Impedit officiis porro cupiditate
              nostrum tempore veniam earum? Doloremque quod eaque consectetur
              ipsa rem quae perspiciatis, cupiditate necessitatibus, vero ex vel
              accusamus veritatis deserunt atque officiis voluptates eligendi
              ratione autem!
            </p>
          </section>
        </div>
        <div className="hidden lg:block">
          <section className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-accent">Apartment</p>
              <h2 className="text-lg font-semibold">Emperica Dazil, Villa</h2>
              <p className="flex items-center gap-x-1 text-[14px]">
                <MapPin size={13} /> Palaxisto Emeriando Plaza Road
              </p>
            </div>
            {USERROLE === "tenant" && <HeartIcon />}
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

          {USERROLE === "landlord" && (
            <div className="mb-6 grid grid-cols-2 gap-y-2">
              <div>
                <h3 className="mb-2 text-[14px] leading-none opacity-50">
                  Down Payment
                </h3>
                <p>₦500,000</p>
              </div>
              <div>
                <h3 className="mb-2 text-[14px] leading-none opacity-50">
                  Payment Plan
                </h3>
                <p>₦500,000</p>
              </div>
              <div>
                <h3 className="mb-2 text-[14px] leading-none opacity-50">
                  Handover
                </h3>
                <p>St. Paulinus Avatar</p>
              </div>
            </div>
          )}

          <div className="mb-6 flex items-center gap-x-5">
            <div>
              <p className="text-2xl font-semibold">₦10,000,000</p>
            </div>

            {USERROLE === "landlord" ? (
              <button className="w-full rounded-lg bg-primary py-3 text-lg font-semibold text-black">
                Edit
              </button>
            ) : (
              <button className="w-full rounded-lg bg-primary py-3 text-lg font-semibold text-black">
                {propertyStatus === "rent" ? "Pay Rent" : "Add to Cart"}
              </button>
            )}
          </div>

          {USERROLE === "tenant" && (
            <div className="rounded-lg border border-accent p-5">
              <h3 className="mb-4 font-semibold">Property Lister</h3>

              <p className="text-[14px] font-medium">Melissa Monroe</p>
              <p className="mb-4 text-[14px] opacity-70">
                Somewhere in bgbadagri, Kondovo
              </p>

              <Link
                href={routes.DASHBOARDCHAT}
                className="flex w-fit items-center gap-x-2 rounded border-2 border-accent px-4 py-1 font-medium"
              >
                <MessageCircleIcon size={20} /> Message
              </Link>
            </div>
          )}
        </div>
      </main>

      <footer className="fixed bottom-0 flex w-full items-center justify-between space-x-6 border-t border-t-gray-300 bg-white px-6 pb-8 pt-4 lg:hidden">
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
