import Link from "next/link";
import Image from "next/image";
import NotificationBtn from "../ui/notification-btn";
import { routes } from "@/constants/routes";
import { LucideBellRing, LucideShoppingCart } from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-50 flex h-16 justify-between border-b bg-white px-5 lg:h-20 lg:justify-end lg:px-10">
      <Link href={routes.HOME} className="lg:hidden">
        <Image
          src="/logos/logo-transparent.png"
          alt="Oga landlord logo"
          width={96}
          height={96}
          priority
          className="-mt-2 h-24 w-24"
        />
      </Link>

      <div className="flex items-center gap-x-4 lg:gap-x-10">
        <Link href={routes.DASHBOARDNOTIFICATIONS} className="lg:hidden">
          <LucideBellRing />
        </Link>

        <NotificationBtn />

        <Link
          href={routes.DASHBOARDCART}
          className="hidden items-center justify-center rounded-full p-2 transition-colors hover:bg-gray-100 lg:flex"
        >
          <LucideShoppingCart className="h-5 w-5" />
        </Link>

        <Link href={routes.TENANT_DASHBOARD_SETTINGS} className="lg:hidden">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-300 lg:h-12 lg:w-12">
            <Image
              src="/images/profile-img.jpeg"
              alt="Tenant profile photo"
              fill
              sizes="40px, (min-width: 1024px) 48px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </Link>

        <Link
          href={routes.TENANT_DASHBOARD_SETTINGS + "?path=profile"}
          className="hidden lg:block"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-300 lg:h-12 lg:w-12">
            <Image
              src="/images/profile-img.jpeg"
              alt="Tenant profile photo"
              fill
              sizes="40px, (min-width: 1024px) 48px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </Link>
      </div>
    </header>
  );
}
