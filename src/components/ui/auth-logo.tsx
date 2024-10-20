import { routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

export default function AuthLogo() {
  return (
    <Link href={routes.HOME} className="block">
      <div className="relative mx-auto h-20 w-28">
        <Image
          src="/logos/logo.svg"
          alt="Oga landlord logo"
          fill
          sizes="160px"
          className="object-cover"
        />
      </div>
    </Link>
  );
}
