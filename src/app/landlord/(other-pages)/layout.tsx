import Image from "next/image";
import NavLink from "@/components/ui/navlink";
import { routes } from "@/constants/routes";
import { FaRegUserCircle } from "react-icons/fa";
import { LuHistory } from "react-icons/lu";
import { RiLockPasswordFill } from "react-icons/ri";
import { getProfileDetails, getRole } from "@/lib/actions";
import { MdCategory } from "react-icons/md";
import { BsBank, BsHousesFill } from "react-icons/bs";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profileDetails = await getProfileDetails();

  return (
    <section className="flex items-start gap-x-10 py-7 lg:px-20 lg:pb-20">
      <div className="custom-shadow mt-10 hidden w-[320px] shrink-0 space-y-5 overflow-hidden text-sm lg:block lg:rounded-t-xl">
        <section className="relative flex flex-col items-center justify-center gap-2 bg-white pb-5 pt-5">
          <div className="relative h-28 w-28 overflow-hidden rounded-full">
            {profileDetails?.profile_info.user_image ? (
              <Image
                src={profileDetails?.profile_info.user_image ?? ""}
                alt="Landlord profile photo"
                fill
                quality={100}
                sizes="130px"
                className="custom-shadow object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-300 font-bold">
                {profileDetails?.profile_info.name[0]}
              </div>
            )}
          </div>
          <p className="text-lg font-semibold text-black">
            {profileDetails?.profile_info.name}
          </p>
          <p className="absolute right-0 top-0 bg-accent/10 px-2 py-1 text-accent">
            Landlord
          </p>
        </section>

        <section className="bg-white">
          <NavLink
            href={routes.LANDLORD_PROFILE}
            exact
            className="flex w-full items-center gap-x-2 border-t border-gray-300 px-4 py-3 tracking-wide text-black last:border-gray-300 hover:bg-gold/30"
            activeClassName="bg-gold/50 text-black font-semibold hover:bg-gold/50"
          >
            <FaRegUserCircle size={20} />
            Profile
          </NavLink>
          <NavLink
            href={routes.ACCOUNTS}
            className="flex w-full items-center gap-x-2 border-b border-gray-300 px-4 py-3 tracking-wide text-black last:border-gray-300 hover:bg-gold/30"
            activeClassName="bg-gold/50 text-black font-semibold hover:bg-gold/50"
          >
            <BsBank size={18} />
            Accounts
          </NavLink>
          <NavLink
            href={routes.LANDLORD_CHANGE_PASSWORD}
            className="flex w-full items-center gap-x-2 border-b border-gray-300 px-4 py-3 tracking-wide text-black last:border-gray-300 hover:bg-gold/30"
            activeClassName="bg-gold/50 text-black font-semibold hover:bg-gold/50"
          >
            <RiLockPasswordFill size={20} />
            Change Password
          </NavLink>
        </section>

        <section className="bg-white">
          <NavLink
            href={routes.PROPERTY_CATEGORY}
            className="flex w-full items-center gap-x-2 border-b border-gray-300 px-4 py-3 tracking-wide text-black last:border-gray-300 hover:bg-gold/30"
            activeClassName="bg-gold/50 text-black font-semibold hover:bg-gold/50"
          >
            <MdCategory size={18} />
            Property Category
          </NavLink>
          <NavLink
            href={routes.PROPERTY_FACILITIES}
            className="flex w-full items-center gap-x-2 border-b border-gray-300 px-4 py-3 tracking-wide text-black last:border-gray-300 hover:bg-gold/30"
            activeClassName="bg-gold/50 text-black font-semibold hover:bg-gold/50"
          >
            <BsHousesFill size={20} />
            Property Facility Type
          </NavLink>
          <NavLink
            href={routes.TRANSACTION_HISTORY}
            className="flex w-full items-center gap-x-2 border-b border-gray-300 px-4 py-3 tracking-wide text-black last:border-gray-300 hover:bg-gold/30"
            activeClassName="bg-gold/50 text-black font-semibold hover:bg-gold/50"
          >
            <LuHistory size={20} />
            Transaction History
          </NavLink>
        </section>
      </div>

      <div className="w-full grow overflow-hidden rounded-xl bg-white">
        {children}
      </div>
    </section>
  );
}
