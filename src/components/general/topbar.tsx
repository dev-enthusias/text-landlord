import { routes } from "@/constants/routes";
import { LucideBellRing, LucideShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-50 flex h-16 justify-between overflow-hidden border bg-white px-5">
      <Image
        src="/logos/logo-transparent.png"
        alt="Oga landlord logo"
        width={96}
        height={96}
        priority
        className="-mt-2 h-24 w-24"
      />

      <div className="flex items-center gap-x-4">
        <Link href={routes.DASHBOARDNOTIFICATIONS}>
          <LucideBellRing />
        </Link>
        <Link href="">
          <LucideShoppingCart />
        </Link>
        <Link href="">
          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
        </Link>
      </div>
    </header>
  );
}
