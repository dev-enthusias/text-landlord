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
    <section className="flex items-start gap-x-10 border-t-2 border-t-gray-200 lg:px-20 lg:py-7 lg:pb-20">
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
          {[
            {
              id: 1,
              path: routes.TENANT_PROFILE,
              icon: <FaRegUserCircle size={20} />,
              name: "PROFILE",
            },
            {
              id: 2,
              path: routes.FUND_WALLET,
              icon: <GiReceiveMoney size={24} />,
              name: " Fund Wallet",
            },
            {
              id: 3,
              path: routes.PAY_RENT,
              icon: <GiPayMoney size={24} />,
              name: "Pay Rent",
            },
            {
              id: 4,
              path: routes.TENANT_CHANGE_PASSWORD,
              icon: <RiLockPasswordFill size={20} />,
              name: "Change Password",
            },
          ].map((obj) => (
            <NavLink
              href={obj.path}
              className="flex w-full items-center gap-x-2 border-b border-gray-300 px-4 py-3 tracking-wide text-black last:border-gray-300 hover:bg-gold/30"
              activeClassName="bg-gold/50 text-black font-semibold hover:bg-gold/50"
            >
              {obj.icon}
              {obj.name}
            </NavLink>
          ))}
        </section>

        <section className="bg-white">
          {[
            {
              id: 1,
              path: routes.WISHLIST,
              icon: <FaHeart size={18} />,
              name: "Wishlist",
            },
            {
              id: 2,
              path: routes.TENANT_ORDERS,
              icon: <LuHistory size={20} />,
              name: "Orders",
            },
            {
              id: 3,
              path: routes.APPOINTMENTS,
              icon: <LuHistory size={20} />,
              name: "Appointment",
            },
          ].map((obj) => (
            <NavLink
              href={obj.path}
              className="flex w-full items-center gap-x-2 border-b border-gray-300 px-4 py-3 tracking-wide text-black last:border-gray-300 hover:bg-gold/30"
              activeClassName="bg-gold/50 text-black font-semibold hover:bg-gold/50"
            >
              {obj.icon}
              {obj.name}
            </NavLink>
          ))}
        </section>
      </div>

      <div className="w-full grow overflow-hidden rounded-xl bg-white">
        {children}
      </div>
    </section>
  );
}
