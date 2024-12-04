import { logout } from "@/api/services/auth";
import NavLink from "@/components/ui/navlink";
import { routes } from "@/constants/routes";
import { getRole } from "@/lib/actions";
import Image from "next/image";
import React from "react";
import { BsBank, BsHousesFill } from "react-icons/bs";
import { FaPowerOff, FaRegUserCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuHistory } from "react-icons/lu";
import { MdCategory } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

export default async function Settings() {
  const roleid = await getRole();

  const path = {
    profile:
      roleid === 5
        ? routes.TENANT_PROFILE
        : roleid === 4
          ? routes.LANDLORD_PROFILE
          : routes.AGENT_PROFILE,
    order:
      roleid === 5
        ? routes.TENANT_ORDERS
        : roleid === 4
          ? routes.LANDLORD_ORDERS
          : routes.AGENT_ORDERS,
    "change-password":
      roleid === 5
        ? routes.TENANT_CHANGE_PASSWORD
        : roleid === 4
          ? routes.LANDLORD_CHANGE_PASSWORD
          : routes.AGENT_CHANGE_PASSWORD,
  };

  return (
    <div className="px-5 py-10">
      <section className="relative mb-10 flex flex-col items-center justify-center gap-2 bg-white">
        <div className="relative h-24 w-24 overflow-hidden rounded-full">
          <Image
            src="/images/profile-img.jpeg"
            alt="Profile photo of tenant"
            fill
            quality={100}
            sizes="130px"
            className="object-cover"
          />
        </div>
        <div className="flex items-center gap-x-4">
          <p className="text-xl font-bold text-black">Anotion Markiwa</p>
          <p className="bg-accent/10 px-2 text-xs text-accent">
            {roleid === 5 ? "Tenant" : roleid === 4 ? "Landlord" : "Agent"}
          </p>
        </div>
      </section>

      <section className="mb-10 flex flex-col rounded-2xl border border-gray-300 bg-gray-50 p-5">
        <NavLink
          href={path.profile}
          exact
          className="flex w-full items-center justify-between border-b border-b-gray-300 pb-3 tracking-wide text-black"
        >
          <div className="flex items-center gap-x-2">
            <FaRegUserCircle size={18} />
            Profile
          </div>
          <FaArrowRightLong className="text-sm text-gray-400" />
        </NavLink>
        <NavLink
          href={routes.ACCOUNTS}
          className="flex w-full items-center justify-between border-b border-b-gray-300 py-3 tracking-wide text-black"
        >
          <div className="flex items-center gap-x-2">
            <BsBank size={16} />
            Accounts
          </div>
          <FaArrowRightLong className="text-sm text-gray-400" />
        </NavLink>
        <NavLink
          href={routes.LANDLORD_CHANGE_PASSWORD}
          className="flex w-full items-center justify-between pt-3 tracking-wide text-black"
        >
          <div className="flex items-center gap-x-2">
            <RiLockPasswordFill size={20} />
            Change Password
          </div>
          <FaArrowRightLong className="text-sm text-gray-400" />
        </NavLink>
      </section>

      <section className="mb-3 flex flex-col rounded-2xl border border-gray-300 bg-gray-50 p-5">
        <NavLink
          href={routes.PROPERTY_CATEGORY}
          className="flex w-full items-center justify-between border-b border-b-gray-300 pb-3 tracking-wide text-black"
        >
          <div className="flex items-center gap-x-2">
            <MdCategory size={18} />
            Property Category
          </div>
          <FaArrowRightLong className="text-sm text-gray-400" />
        </NavLink>
        <NavLink
          href={routes.PROPERTY_FACILITIES}
          className="flex w-full items-center justify-between border-b border-b-gray-300 py-3 tracking-wide text-black"
        >
          <div className="flex items-center gap-x-2">
            <BsHousesFill size={20} />
            Property Facility Type
          </div>
          <FaArrowRightLong className="text-sm text-gray-400" />
        </NavLink>
        <NavLink
          href={routes.TRANSACTION_HISTORY}
          className="flex w-full items-center justify-between pt-3 tracking-wide text-black"
        >
          <div className="flex items-center gap-x-2">
            <LuHistory size={20} />
            Transaction History
          </div>
          <FaArrowRightLong className="text-sm text-gray-400" />
        </NavLink>
      </section>

      <form action={logout}>
        <button className="flex w-full items-center gap-x-2 rounded px-4 py-2 text-lg font-semibold hover:text-gold">
          <FaPowerOff className="mt-1" size={14} /> Logout
        </button>
      </form>
    </div>
  );
}
