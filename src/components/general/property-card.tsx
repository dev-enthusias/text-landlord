import { routes } from "@/constants/routes";
import { BathIcon, BedIcon, MapPin, RulerIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PropertyCard() {
  return (
    <Link href={routes.DASHBOARDPROPERTIESDETAILS} className="block">
      <article>
        <div className="relative h-36 w-64 overflow-hidden rounded-lg">
          <Image
            src="/images/duplex.webp"
            alt="property display photo"
            fill
            sizes="384px"
            className="object-cover"
          />
        </div>
        <div className="border-b border-b-gray-300 py-4">
          <p className="text-primary-dark flex items-center gap-x-1 text-lg font-bold">
            ₦5,000,000{" "}
            <span className="text-base font-medium text-foreground opacity-50">
              /Year
            </span>
          </p>

          <div className="mb-3 mt-1">
            <h3 className="text-lg font-semibold">Emperica in Dazil, Villa</h3>
            <p className="text-medium flex items-center gap-x-0.5 text-sm">
              <MapPin size={10} /> Palaxisto Emeriando Plaza Road
            </p>
          </div>

          <ul className="flex items-center justify-between">
            <li className="flex w-1/3 items-center justify-start gap-x-1 text-sm font-semibold">
              <BedIcon className="text-primary-dark" size={18} />
              <span className="opacity-50">6 bd</span>
            </li>
            <li className="flex w-1/3 items-center justify-center gap-x-1 border-x border-x-gray-300 text-sm font-semibold">
              <BathIcon className="text-primary-dark" size={18} />
              <span className="opacity-50">6 bt</span>
            </li>
            <li className="flex w-1/3 items-center justify-end gap-x-1 text-sm font-semibold">
              <RulerIcon className="text-primary-dark" size={18} />
              <span className="opacity-50">2.62ft</span>
            </li>
          </ul>
        </div>
      </article>
    </Link>
  );
}
