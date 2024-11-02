import Image from "next/image";
import Link from "next/link";

export default function ProfileTopbar() {
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
