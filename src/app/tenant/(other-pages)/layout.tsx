import Image from "next/image";
import NavLink from "@/components/ui/navlink";
import { routes } from "@/constants/routes";
import { FaHeart, FaRegUserCircle } from "react-icons/fa";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { LuHistory } from "react-icons/lu";
import { RiLockPasswordFill } from "react-icons/ri";
import { getProfileDetails } from "@/api/services/profile";
import UpdateProfilePhoto from "@/components/forms/update-profile";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profileDetails = await getProfileDetails();

  return (
    <section className="flex items-start gap-x-10 py-7 lg:px-20 lg:pb-20">
      <div className="custom-shadow mt-10 hidden w-[320px] shrink-0 space-y-5 overflow-hidden rounded-t-xl text-sm lg:block">
        <section className="relative flex flex-col items-center justify-center gap-2 bg-white pb-5 pt-5">
          <div className="relative h-28 w-28 overflow-hidden">
            {profileDetails?.profile_info.user_image ? (
              <Image
                src={profileDetails?.profile_info.user_image ?? ""}
                alt="Your profile photo"
                fill
                quality={100}
                sizes="130px"
                className="custom-shadow rounded-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-300 text-5xl font-bold">
                {profileDetails?.profile_info.name[0]}
              </div>
            )}
            <UpdateProfilePhoto />
          </div>

          <p className="text-lg font-semibold text-black">
            {profileDetails?.profile_info.name}
          </p>
          <p className="absolute left-0 top-0 bg-accent/10 px-2 py-1 text-accent">
            Tenant
          </p>
        </section>

        <section className="bg-white">
          <NavLink
            href={routes.TENANT_PROFILE}
            exact
            className="flex w-full items-center gap-x-2 border-b border-gray-300 px-4 py-3 tracking-wide text-black last:border-gray-300 hover:bg-gold/30"
            activeClassName="bg-gold/50 text-black font-semibold hover:bg-gold/50"
          >
            <FaRegUserCircle size={20} />
            PROFILE
          </NavLink>
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
            href={routes.TENANT_CHANGE_PASSWORD}
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
            href={routes.TENANT_ORDERS}
            className="flex w-full items-center gap-x-2 border-b border-gray-300 px-4 py-3 tracking-wide text-black last:border-gray-300 hover:bg-gold/30"
            activeClassName="bg-gold/50 text-black font-semibold hover:bg-gold/50"
          >
            <LuHistory size={20} />
            Orders
          </NavLink>
          <NavLink
            href={routes.APPOINTMENTS}
            className="flex w-full items-center gap-x-2 border-b border-gray-300 px-4 py-3 tracking-wide text-black last:border-gray-300 hover:bg-gold/30"
            activeClassName="bg-gold/50 text-black font-semibold hover:bg-gold/50"
          >
            <LuHistory size={20} />
            Appointment
          </NavLink>
        </section>
      </div>

      <div className="w-full grow overflow-hidden rounded-xl bg-white">
        {children}
      </div>
    </section>
  );
}
