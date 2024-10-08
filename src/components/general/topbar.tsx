import { routes } from "@/constants/routes";
import { LucideBellRing, LucideShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-50 flex h-16 justify-between overflow-hidden border bg-white px-3">
      <Link href={routes.HOME}>
        <Image
          src="/logos/logo-transparent.png"
          alt="Oga landlord logo"
          width={96}
          height={96}
          priority
          className="-mt-2 h-24 w-24"
        />
      </Link>

      <div className="flex items-center gap-x-4">
        <Link href={routes.DASHBOARDNOTIFICATIONS}>
          <LucideBellRing />
        </Link>
        <Link href={routes.DASHBOARDCART}>
          <LucideShoppingCart />
        </Link>
        <Link href={routes.DASHBOARDPROFILE}>
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-300">
            <Image
              src="/images/profile-img.jpeg"
              alt="Tenant profile photo"
              fill
              sizes="40px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </Link>
      </div>
    </header>
  );
}
