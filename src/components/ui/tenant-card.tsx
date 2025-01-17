import Link from "next/link";
import Image from "next/image";

export default function TenantCard() {
  return (
    <Link href={""} className={"block"}>
      <article className="overflow-hidden rounded-b rounded-t-lg border border-[#A0A2B333]">
        <div className="relative h-36">
          <Image
            src="/images/profile-img.jpeg"
            alt="Name of client photo"
            fill
            style={{ objectFit: "cover" }}
            sizes="113.87px"
            priority
          />
        </div>

        <div className="py-1.5 text-center">
          <h3 className="font-medium text-gray-800">Alice Green</h3>
          <div className="text-[11px]">
            <p>Occupies 3 properties</p>
            <p>Been a tenant for 3 years</p>
          </div>
        </div>
      </article>
    </Link>
  );
}
