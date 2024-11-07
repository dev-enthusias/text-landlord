import Image from "next/image";
import PageLayout from "@/components/layout/page-layout";
import NavLink from "@/components/ui/navlink";
import { routes } from "@/constants/routes";
import { FaHeart, FaRegUserCircle } from "react-icons/fa";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { LuHistory } from "react-icons/lu";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout>
      <section className="flex items-start gap-x-10 px-20 py-7 pb-20">
        <div className="custom-shadow mt-10 w-[320px] shrink-0 space-y-5 overflow-hidden rounded-t-xl text-sm">
          <section className="pt relative flex flex-col items-center justify-center gap-2 bg-white pt-5">
            <div className="relative h-28 w-28 overflow-hidden rounded-full">
              <Image
                src="/images/profile-img.jpeg"
                alt="Profile photo of tenant"
                fill
                quality={100}
                sizes="130px"
                className="object-cover"
              />
            </div>
            <p className="text-lg text-black">Anotion Markiwa</p>
            <p className="absolute right-0 top-0 bg-accent/10 px-2 py-1 text-accent">
              Tenant
            </p>
            <NavLink
              href={routes.PROFILE}
              exact
              className="flex w-full items-center gap-x-2 border-t border-gray-300 px-4 py-3 tracking-wide text-black last:border-gray-300 hover:bg-gold/30"
              activeClassName="bg-gold/50 text-black font-semibold hover:bg-gold/50"
            >
              <FaRegUserCircle size={20} />
              PROFILE
            </NavLink>
          </section>

          <section className="bg-white">
            <NavLink
              href={routes.FUND_WALLET}
              className="flex w-full items-center gap-x-2 border-b border-gray-300 px-4 py-3 tracking-wide text-black last:border-gray-300 hover:bg-gold/30"
              activeClassName="bg-gold/50 text-black font-semibold hover:bg-gold/50"
            >
              <GiReceiveMoney size={24} />
              Fund Wallet
            </NavLink>
            <NavLink
              href={routes.PAY_RENT}
              className="flex w-full items-center gap-x-2 border-b border-gray-300 px-4 py-3 tracking-wide text-black last:border-gray-300 hover:bg-gold/30"
              activeClassName="bg-gold/50 text-black font-semibold hover:bg-gold/50"
            >
              <GiPayMoney size={24} />
              Pay Rent
            </NavLink>
            <NavLink
              href={routes.CHANGE_PASSWORD}
              className="flex w-full items-center gap-x-2 border-b border-gray-300 px-4 py-3 tracking-wide text-black last:border-gray-300 hover:bg-gold/30"
              activeClassName="bg-gold/50 text-black font-semibold hover:bg-gold/50"
            >
              <RiLockPasswordFill size={20} />
              Change Password
            </NavLink>
          </section>

          <section className="bg-white">
            <NavLink
              href={routes.WISHLIST}
              className="flex w-full items-center gap-x-2 border-b border-gray-300 px-4 py-3 tracking-wide text-black last:border-gray-300 hover:bg-gold/30"
              activeClassName="bg-gold/50 text-black font-semibold hover:bg-gold/50"
            >
              <FaHeart size={18} />
              Wishlist
            </NavLink>
            <NavLink
              href={routes.ORDERS}
              className="flex w-full items-center gap-x-2 border-b border-gray-300 px-4 py-3 tracking-wide text-black last:border-gray-300 hover:bg-gold/30"
              activeClassName="bg-gold/50 text-black font-semibold hover:bg-gold/50"
            >
              <LuHistory size={20} />
              Orders
            </NavLink>
            <NavLink
              href={routes.PAYMENT_HISTORY}
              className="flex w-full items-center gap-x-2 border-b border-gray-300 px-4 py-3 tracking-wide text-black last:border-gray-300 hover:bg-gold/30"
              activeClassName="bg-gold/50 text-black font-semibold hover:bg-gold/50"
            >
              <LuHistory size={20} />
              Payment History
            </NavLink>
          </section>
        </div>

        <div className="w-full grow overflow-hidden rounded-xl bg-white">
          {children}
        </div>
      </section>
    </PageLayout>
  );
}
