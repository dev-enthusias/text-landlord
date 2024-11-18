import Image from "next/image";
import NavLink from "@/components/ui/navlink";
import { routes } from "@/constants/routes";
import { FaRegUserCircle } from "react-icons/fa";
import { LuHistory } from "react-icons/lu";
import { RiLockPasswordFill } from "react-icons/ri";
import { getRole } from "@/lib/actions";
import { MdCategory } from "react-icons/md";
import { BsBank, BsHousesFill } from "react-icons/bs";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
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
            {roleid === 5 ? "Tenant" : roleid === 4 ? "Landlord" : "Agent"}
          </p>
          <NavLink
            href={path.profile}
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
