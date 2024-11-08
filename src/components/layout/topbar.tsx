import Link from "next/link";
import Image from "next/image";
import NotificationBtn from "../ui/notification-btn";
import { routes } from "@/constants/routes";
import { LucideShoppingCart } from "lucide-react";
import { topbarLinks } from "@/constants/data";
import NavLink from "../ui/navlink";
import { PiHeart } from "react-icons/pi";
import { BsChat } from "react-icons/bs";
import Dropdown from "../ui/dropdown";
import { FaPowerOff } from "react-icons/fa";
import { logout } from "@/lib/actions";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between bg-white px-5 lg:h-20 lg:px-10">
      <Link href={"/"} className="relative h-28 w-28">
        <Image
          src="/logos/logo-transparent.png"
          alt="Oga landlord logo"
          priority
          fill
          className="mt-3 h-28 w-28"
        />
      </Link>

      <div className="flex gap-x-4">
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
        <Link
          href={routes.WISHLIST}
          className="items-center justify-center rounded-full p-2 transition-colors hover:bg-gray-100 lg:flex"
        >
          <PiHeart className="h-5 w-5" />
        </Link>

        <Link
          href={routes.CHAT}
          className="items-center justify-center rounded-full p-2 transition-colors hover:bg-gray-100 lg:flex"
        >
          <BsChat className="h-4 w-4" />
        </Link>

        <NotificationBtn />

        <Link
          href={routes.CART}
          className="items-center justify-center rounded-full p-2 transition-colors hover:bg-gray-100 lg:flex"
        >
          <LucideShoppingCart className="h-5 w-5" />
        </Link>

        <Dropdown
          trigger={<ProfileTopbar />}
          content={
            <div className="space-y-3 py-2">
              <Link
                href={routes.PROFILE}
                className="hover:text-semibold block rounded px-4 py-2 hover:bg-gold/20 hover:text-black"
              >
                Profile
              </Link>
              <Link
                href={routes.FUND_WALLET}
                className="hover:text-semibold block rounded px-4 py-2 hover:bg-gold/20 hover:text-black"
              >
                Fund Wallet
              </Link>
              <Link
                href={routes.ORDERS}
                className="hover:text-semibold block rounded px-4 py-2 hover:bg-gold/20 hover:text-black"
              >
                Orders
              </Link>
              <form action={logout}>
                <button className="flex w-full items-center gap-x-2 rounded px-4 py-2 font-semibold hover:text-gold">
                  <FaPowerOff className="mt-1" size={14} /> Logout
                </button>
              </form>
            </div>
          }
        />
      </div>
    </header>
  );
}

function ProfileTopbar() {
  return (
    <Link href="" className="hidden items-center gap-x-2 lg:flex">
      <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gray-300 lg:h-10 lg:w-10">
        <Image
          src="/images/profile-img.jpeg"
          alt="Tenant profile photo"
          fill
          sizes="36px, (min-width: 1024px) 40px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-600">Schawn Homme</h3>
        <p className="text-xs">Tenant</p>
      </div>
    </Link>
  );
}
