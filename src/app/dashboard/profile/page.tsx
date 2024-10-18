import { profileInfo } from "@/constants/data";
import { USERROLE } from "@/utils/role";
import Image from "next/image";

export default function Profile() {
  return (
    <>
      <header className="relative mb-20 h-28 w-full border-b border-gray-200 bg-primary px-3 py-5 lg:mb-5 lg:h-auto lg:border-none lg:bg-transparent lg:py-0">
        <div className="absolute -bottom-1/2 left-5 h-28 w-28 overflow-hidden rounded-full border-4 border-white lg:relative lg:left-0">
          <Image
            src="/images/profile-img.jpeg"
            alt=""
            fill
            sizes="112px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </header>

      <main className="pb-10">
        <section className="border-b px-5 pb-6 lg:border-none">
          <div className="mb-2 space-y-1">
            <h1 className="flex items-center gap-x-2 text-[22px] font-semibold">
              Antonio Griexmansh{" "}
              <span className="inline-block rounded bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                {USERROLE === "tenant"
                  ? "Tenant"
                  : USERROLE === "landlord"
                    ? "Landlord"
                    : "Agent"}
              </span>
            </h1>
            <p className="font-medium opacity-70">antoniogreix@gmail.com</p>
            <p className="font-medium opacity-70">09080010168</p>
          </div>
          <address className="not-italic opacity-50">
            Summer City, Santababra, Santiago Virrela
          </address>
        </section>

        <section className="px-5">
          {profileInfo.map(({ value, title }, i) => (
            <div
              key={i}
              className="flex justify-between border-b border-b-gray-200 py-4"
            >
              <h3 className="opacity-50">{title}</h3>
              <p className="font-semibold">{value}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
