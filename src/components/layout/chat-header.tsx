import Image from "next/image";

export default function ChatHeader() {
  return (
    <header className="mb-4 flex items-center gap-x-4 bg-gold/20 px-7 py-5 lg:ml-0.5 lg:border lg:py-3">
      <div className="relative h-[58px] w-[58px] overflow-hidden rounded-[9px]">
        <Image
          src="/images/profile-img.jpeg"
          alt="name of user photo"
          fill
          sizes="58px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div>
        <h3 className="mb-2 text-lg font-medium text-[#09132C]">Jane Cooper</h3>
        <p className="flex items-center gap-x-1 text-sm text-[#6E7FA9]">
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          Online
        </p>
      </div>
    </header>
  );
}
