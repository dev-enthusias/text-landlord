"use client";

import { routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsChat } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdDelete } from "react-icons/md";

export default function TenantList({
  status,
  tenant_status,
}: {
  status: "overdue" | "current" | "upcoming";
  tenant_status?: "active" | "inactive";
}) {
  const [showActions, setShowActions] = useState(false);

  return (
    <article
      role="row"
      className="grid grid-cols-10 items-center gap-x-3 border-b border-b-gray-200 px-5 pb-2 text-gray-800 last:border-none"
    >
      <div role="gridcell" className="col-span-2 flex items-center gap-x-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image
            src="/images/profile-img.jpeg"
            fill
            alt="profile image"
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-700">
            Markiwa Anotion
          </h3>
          <p className="text-medium flex items-center gap-x-0.5 text-xs">
            zaminastadium@gmail.com
          </p>
          <p className="text-medium flex items-center gap-x-0.5 text-xs">
            09080010168
          </p>
        </div>
      </div>
      <div role="gridcell" className="col-span-2">
        <h3 className="text-sm font-semibold text-gray-700">
          Emperica in Dazil, Villa
        </h3>
        <p className="text-medium flex items-center gap-x-0.5 text-xs">
          Palaxisto Emeriando Plaza Road
        </p>
        <Link
          href={routes.LANDLORD_PROPERTIES + "/0"}
          className="inline-block text-xs underline"
        >
          View Property
        </Link>
      </div>
      <div role="gridcell">12/12/2023</div>
      <div role="gridcell">12/12/2024</div>
      <div role="gridcell">₦650,000</div>
      <div role="gridcell">
        <span
          className={`rounded-full px-2 py-1 ${status === "overdue" ? "bg-[#D32F2F]/10 text-[#D32F2F]" : status === "upcoming" ? "bg-[#D4A017]/10 text-[#D4A017]" : "bg-green-600/10 text-green-600"}`}
        >
          {status === "overdue"
            ? "overdue"
            : status === "upcoming"
              ? "upcoming"
              : "current"}
        </span>
      </div>
      <div
        role="gridcell"
        className={`${tenant_status !== "active" ? "text-[#D32F2F]" : "text-green-600"}`}
      >
        {tenant_status === "active" ? "active" : "inactive"}
      </div>
      <div role="gridcell">
        <div className="relative inline-block text-center">
          <button
            className="shrink-0 px-3 py-1 text-2xl font-bold"
            onClick={() => setShowActions(!showActions)}
          >
            ...
          </button>
        </div>
        {showActions && (
          <div className="absolute right-4 z-10 mt-2 w-44 origin-top-right space-y-2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div
              className="px-2 py-2"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <button
                className="mb-2 flex w-full items-center justify-center gap-x-2 rounded bg-gold px-6 py-2 text-sm font-semibold text-white"
                role="menuitem"
              >
                <BsChat size={14} />
                Chat
              </button>
              <button
                className="flex w-full items-center justify-center gap-x-2 rounded bg-red-600 px-6 py-2 text-sm font-bold text-white"
                role="menuitem"
              >
                <MdDelete /> Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export function TenantListMobile({
  status,
  tenant_status,
}: {
  status: "overdue" | "current" | "upcoming";
  tenant_status?: "active" | "inactive";
}) {
  return (
    <article className="space-y-3 bg-white px-5 py-3 sm:rounded-xl sm:border sm:border-gray-300">
      <p className="flex items-center gap-x-2 border-b border-b-gray-300 pb-2 text-black">
        18th Aug, 2020{" "}
        <span>
          <FaLongArrowAltRight />
        </span>{" "}
        18th Aug, 2021
      </p>

      <div className="flex items-center justify-between">
        <div className="col-span-2 flex items-center gap-x-1">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="/images/profile-img.jpeg"
              fill
              alt="profile image"
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700">
              Markiwa Anotion
            </h3>
            <p className="text-medium flex items-center gap-x-0.5 text-xs">
              zaminastadium@gmail.com
            </p>
          </div>
        </div>
        <div>
          <span
            className={`rounded-full px-2 py-1 capitalize ${status === "overdue" ? "bg-[#D32F2F]/10 text-[#D32F2F]" : status === "upcoming" ? "bg-[#D4A017]/10 text-[#D4A017]" : "bg-green-600/10 text-green-600"}`}
          >
            {status === "overdue"
              ? "overdue"
              : status === "upcoming"
                ? "upcoming"
                : "current"}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between rounded-lg bg-gray-100 px-3 py-3">
        <div>
          <h3 className="text-sm font-semibold text-gray-700">
            Emperica in Dazil, Villa
          </h3>
          <p className="text-medium flex items-center gap-x-0.5 text-xs">
            Palaxisto Emeriando Plaza Road
          </p>
        </div>
        <Link
          href={routes.LANDLORD_PROPERTIES + "/0"}
          className="inline-block text-xs underline"
        >
          View Property
        </Link>
      </div>
      <div className="flex items-center justify-between rounded-lg px-3">
        <p className="text-sm">Rent Amount</p>
        <p className="font-semibold text-black">₦650,000</p>
      </div>
      <div className="flex items-center justify-between rounded-lg bg-gray-100 px-3 py-3">
        <p className="text-sm">Tenant Status</p>
        <div
          role="gridcell"
          className={`${tenant_status !== "active" ? "text-[#D32F2F]" : "text-green-600"}`}
        >
          {tenant_status === "active" ? "active" : "inactive"}
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <Link
          href={`tel:${"09080010168"}`}
          className="flex w-full items-center justify-center gap-x-2 rounded bg-blue-600 px-6 py-2 font-bold text-white"
          role="menuitem"
        >
          <IoMdCall />
          Call
        </Link>
        <Link
          href={routes.LANDLORD_PROPERTIES + "/0"}
          className="flex w-full items-center justify-center gap-x-2 rounded bg-gold px-6 py-2 font-semibold text-white"
        >
          <BsChat size={14} />
          Chat
        </Link>
        <Link
          href={routes.LANDLORD_PROPERTIES + "/0"}
          className="flex w-full items-center justify-center gap-x-2 rounded bg-gray-600 px-6 py-2 font-bold text-white"
          role="menuitem"
        >
          <MdDelete />
          Delete
        </Link>
      </div>
    </article>
  );
}
