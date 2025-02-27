
import Image from "next/image";

export default function ChatHeader({ data }: { data: any }) {
  return (
    <header className="mb-4 flex items-center gap-x-4 bg-gold/20 px-7 py-5 lg:ml-0.5 lg:border lg:py-3">
      <div className="relative h-[58px] w-[58px] overflow-hidden rounded-[9px]">
        <Image
          src={data?.user_image}
          alt={`${data?.name} profile photo`}
          fill
          sizes="58px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div>
        <h3 className="mb-2 text-lg font-semibold text-[#09132C]">{data?.name}</h3>
        <p className="flex items-center gap-x-1 text-sm text-[#6E7FA9]">
          {data?.role_id === 5
            ? "Tenant"
            : data?.role_id === 4
              ? "Landlord"
              : "Agent"}
        </p>
      </div>
    </header>
  );
}
