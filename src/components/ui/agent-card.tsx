import Link from "next/link";
import Image from "next/image";

export default function AgentCard() {
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
            <p>
              Assigned <span className="font-semibold text-black">3</span>{" "}
              properties
            </p>
            <p>
              Been your agent for{" "}
              <span className="font-semibold text-black">2 yrs</span>
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
