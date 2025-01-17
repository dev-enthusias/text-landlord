import { logout } from "@/api/services/auth";
import ProfileImageForm from "@/components/forms/profile-image-form";
import NavLink from "@/components/ui/navlink";
import { routes } from "@/constants/routes";
import { getRole } from "@/lib/actions";
import React from "react";
import { FaHeart, FaPowerOff, FaRegUserCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { LuHistory } from "react-icons/lu";
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
        <ProfileImageForm imgUrl={""} name={""} />
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
          href={routes.FUND_WALLET}
          className="flex w-full items-center justify-between border-b border-b-gray-300 py-3 tracking-wide text-black"
        >
          <div className="flex items-center gap-x-2">
            <GiReceiveMoney size={24} />
            Fund Wallet
          </div>
          <FaArrowRightLong className="text-sm text-gray-400" />
        </NavLink>
        <NavLink
          href={routes.PAY_RENT}
          className="flex w-full items-center justify-between border-b border-b-gray-300 py-3 tracking-wide text-black"
        >
          <div className="flex items-center gap-x-2">
            <GiPayMoney size={24} />
            Pay Rent
          </div>
          <FaArrowRightLong className="text-sm text-gray-400" />
        </NavLink>
        <NavLink
          href={routes.TENANT_CHANGE_PASSWORD}
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
          href={routes.WISHLIST}
          className="flex w-full items-center justify-between border-b border-b-gray-300 pb-3 tracking-wide text-black"
        >
          <div className="flex items-center gap-x-2">
            <FaHeart size={18} />
            Wishlist
          </div>
          <FaArrowRightLong className="text-sm text-gray-400" />
        </NavLink>
        <NavLink
          href={routes.TENANT_ORDERS}
          className="flex w-full items-center justify-between border-b border-b-gray-300 py-3 tracking-wide text-black"
        >
          <div className="flex items-center gap-x-2">
            <LuHistory size={20} />
            Orders
          </div>
          <FaArrowRightLong className="text-sm text-gray-400" />
        </NavLink>
        <NavLink
          href={routes.PAYMENT_HISTORY}
          className="flex w-full items-center justify-between pt-3 tracking-wide text-black"
        >
          <div className="flex items-center gap-x-2">
            <LuHistory size={20} />
            Payment History
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
