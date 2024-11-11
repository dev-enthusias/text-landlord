import Link from "next/link";
import Image from "next/image";
import { FaCircleChevronDown } from "react-icons/fa6";
import { routes } from "@/constants/routes";

export default function AssignedPropertyCard() {
  return (
    <Link href={routes.LANDLORD_PROPERTIES + "/1"} className="block">
      <article className="group rounded-lg bg-gold/10 p-2 pr-3 text-gray-800">
        <section className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div className="relative h-14 w-14 overflow-hidden rounded-lg">
              <Image
                src="/images/duplex.webp"
                alt="Image of property"
                fill
                sizes="90px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-black">Duplex</h3>
              <p className="text-sm">Lekki, Lagos</p>
            </div>
          </div>
          <FaCircleChevronDown className="h-5 w-5 -rotate-90 text-gold transition duration-300 group-hover:translate-x-1" />
        </section>
      </article>
    </Link>
  );
}
