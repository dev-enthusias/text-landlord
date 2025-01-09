import Link from "next/link";
import Image from "next/image";
import NotificationBtn from "../ui/notification-btn";
import { routes } from "@/constants/routes";
import { LucideShoppingCart } from "lucide-react";
import {
  agentTopbarLinks,
  landlordTopbarLinks,
  tenantTopbarLinks,
} from "@/constants/data";
import NavLink from "../ui/navlink";
import { PiHeart } from "react-icons/pi";
import { BsChat } from "react-icons/bs";
import Dropdown from "../ui/dropdown";
import { FaPowerOff } from "react-icons/fa";
import { getRole } from "@/lib/actions";
import { logout } from "@/api/services/auth";
import { notificationEndpoints } from "@/api/endpoints";
import { apiPost } from "@/api/config";
import {
  NotificationResponseType,
  UserDetailsResponseDataType,
} from "@/definition";
import { getProfileDetails } from "@/api/services/profile";

async function getNotifications() {
  const res = await apiPost<NotificationResponseType, any>(
    notificationEndpoints.GET_NOTIFICATIONS,
    {},
    "notifications",
  );

  return res.data;
}

export default async function Topbar() {
  const roleid = await getRole();
  const notifications = (await getNotifications()) as NotificationResponseType;
  const profileDetails =
    (await getProfileDetails()) as UserDetailsResponseDataType;

  const topbarLinks =
    roleid === 5
      ? tenantTopbarLinks
      : roleid === 7
        ? agentTopbarLinks
        : landlordTopbarLinks;

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
    settings:
      roleid === 5
        ? routes.TENANT_SETTINGS
        : roleid === 4
          ? routes.LANDLORD_SETTINGS
          : routes.AGENT_SETTINGS,
  };

  return (
    <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center justify-between bg-white px-5 lg:h-20 lg:px-10">
      <Link href={""} className="relative h-28 w-28">
        <Image
          src="/logos/logo-transparent.png"
          alt="Oga landlord logo"
          priority
          fill
          className="mt-3 h-28 w-28"
        />
      </Link>

      <div className="hidden gap-x-6 sm:flex">
        {topbarLinks.map((l, i) => (
          <NavLink
            key={i}
            href={l.link}
            exact={l.exact}
            activeClassName="font-bold text-black"
          >
            {l.name}
          </NavLink>
        ))}
      </div>

      <div className="relative flex items-center gap-x-4 lg:gap-x-5">
        {roleid === 5 && (
          <Link
            href={routes.WISHLIST}
            className="hidden items-center justify-center rounded-full p-2 transition-colors hover:bg-gray-100 lg:flex"
          >
            <PiHeart className="h-5 w-5" />
          </Link>
        )}

        <Link
          href={routes.CHAT}
          className="hidden items-center justify-center rounded-full p-2 transition-colors hover:bg-gray-100 lg:flex"
        >
          <BsChat className="h-4 w-4" />
        </Link>

        <NotificationBtn notifications={notifications} />

        {roleid === 5 && (
          <Link
            href={routes.CART}
            className="hidden items-center justify-center rounded-full p-2 transition-colors hover:bg-gray-100 lg:flex"
          >
            <LucideShoppingCart className="h-5 w-5" />
          </Link>
        )}

        <Dropdown
          trigger={roleid && <ProfileTopbar roleid={roleid} />}
          content={
            <div className="space-y-3 py-2">
              <Link
                href={path?.profile}
                className="hover:text-semibold block rounded px-4 py-2 hover:bg-gold/20 hover:text-black"
              >
                Profile
              </Link>
              {roleid === 5 && (
                <Link
                  href={routes.FUND_WALLET}
                  className="hover:text-semibold block rounded px-4 py-2 hover:bg-gold/20 hover:text-black"
                >
                  Fund Wallet
                </Link>
              )}
              {roleid !== 5 && (
                <Link
                  href={routes.ACCOUNTS}
                  className="hover:text-semibold block rounded px-4 py-2 hover:bg-gold/20 hover:text-black"
                >
                  Accounts
                </Link>
              )}
              {roleid === 5 && (
                <Link
                  href={routes.TENANT_ORDERS}
                  className="hover:text-semibold block rounded px-4 py-2 hover:bg-gold/20 hover:text-black"
                >
                  Orders
                </Link>
              )}
              {roleid === 4 && (
                <Link
                  href={routes.TRANSACTION_HISTORY}
                  className="hover:text-semibold block rounded px-4 py-2 hover:bg-gold/20 hover:text-black"
                >
                  Transaction History
                </Link>
              )}
              <form action={logout}>
                <button className="flex w-full items-center gap-x-2 rounded px-4 py-2 font-semibold hover:text-gold">
                  <FaPowerOff className="mt-1" size={14} /> Logout
                </button>
              </form>
            </div>
          }
        />

        <article>
          <Link
            href={path?.settings}
            className="relative block h-8 w-8 overflow-hidden rounded-full bg-gray-300 lg:hidden"
          >
            {profileDetails?.profile_info.user_image ? (
              <Image
                src={profileDetails?.profile_info.user_image ?? ""}
                alt="Tenant profile photo"
                fill
                sizes="36px, (min-width: 1024px) 40px"
                style={{ objectFit: "cover" }}
                className="custom-shadow-sm"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-300 font-bold">
                {profileDetails?.profile_info.name[0]}
              </div>
            )}
          </Link>
        </article>
      </div>
    </header>
  );
}

async function ProfileTopbar({ roleid }: { roleid: number }) {
  const profileDetails = await getProfileDetails();

  return (
    <article className="hidden items-center gap-x-2 lg:flex">
      <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gray-300 lg:h-10 lg:w-10">
        {profileDetails?.profile_info.user_image ? (
          <Image
            src={profileDetails?.profile_info.user_image ?? ""}
            alt="Tenant profile photo"
            fill
            sizes="36px, (min-width: 1024px) 40px"
            style={{ objectFit: "cover" }}
            className="custom-shadow-sm"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-300 font-bold">
            {profileDetails?.profile_info.name[0]}
          </div>
        )}
      </div>
      <div className="hidden md:block">
        <h3 className="text-sm font-semibold text-gray-600">
          {profileDetails?.profile_info.name}
        </h3>
        <p className="text-xs">
          {roleid === 5 ? "Tenant" : roleid === 4 ? "Landlord" : "Agent"}
        </p>
      </div>
    </article>
  );
}
