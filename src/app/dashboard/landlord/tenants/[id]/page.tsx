import EditTenantBtn from "@/components/ui/edit-tenant";
import { routes } from "@/constants/routes";
import { HomeIcon, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TenantDetails() {
  return (
    <main className="px-3 py-5 lg:px-10">
      <Link
        href={routes.LANDLORD_DASHBOARD_TENANTS}
        className="mb-4 inline-block font-medium opacity-60"
      >
        {"<"} Tenants
      </Link>
      <section>
        <div className="mb-5 flex items-center justify-between">
          <p className="text-[14px] font-medium opacity-80">PROFILE</p>
          <EditTenantBtn />
        </div>

        <div className="mb-5 flex items-center gap-x-8">
          <div className="relative h-40 w-40 overflow-hidden rounded-lg">
            <Image
              fill
              src="/images/profile-img.jpeg"
              alt=""
              sizes="160px"
              className="object-cover"
            />
          </div>

          <section>
            <div className="mb-5 px-1">
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-[14px] opacity-80">Nigerian</p>
            </div>

            <div className="flex gap-x-5">
              <div className="rounded-full border px-4 py-1">
                <p className="text-xxs font-bold uppercase tracking-wider">
                  Join Date
                </p>
                <p className="text-xxs">10th September, 2024</p>
              </div>
              <div className="rounded-full border px-3 py-1">
                <p className="text-xxs font-bold uppercase tracking-wider">
                  Expiry Date
                </p>
                <p className="text-xxs">10th September, 2025</p>
              </div>
              <div className="rounded-full border px-3 py-1">
                <p className="text-xxs font-bold uppercase tracking-wider">
                  Grace Period
                </p>
                <p className="text-xxs">2 weeks</p>
              </div>
            </div>
          </section>
        </div>

        <section className="mb-5">
          <p className="flex items-center gap-x-1 text-lg font-semibold opacity-80">
            <HomeIcon size={13} />
            Marculey Avenue Lounge
          </p>
          <p className="flex items-center gap-x-1 truncate text-[14px] opacity-80">
            <MapPin size={12} className="shrink-0" /> Emeritus express road,
            Abuja
          </p>
        </section>

        <section className="border-y py-10 pr-10">
          <p className="mb-5 text-[14px] font-medium opacity-80">
            CONTACT DETAILS
          </p>

          <div className="flex gap-x-20">
            <div>
              <p className="text-lg font-semibold">esomchi@gmail.com</p>
              <h3 className="text-sm font-semibold opacity-70">
                EMAIL ADDRESS
              </h3>
            </div>
            <div>
              <p className="text-lg font-semibold">+234908000108</p>
              <h3 className="text-sm font-semibold opacity-70">PHONE NUMBER</h3>
            </div>
            <div className="flex items-center gap-x-5">
              <button className="flex h-12 w-12 items-center justify-center rounded-full border bg-accent text-white lg:hidden">
                <PhoneCall size={24} className="opacity-80" />
              </button>
              <Link
                href={routes.LANDLORD_DASHBOARD_CHAT + "/0"}
                className="flex h-12 w-12 items-center justify-center rounded-full border bg-accent text-white"
              >
                <MessageCircle size={24} className="opacity-80" />
              </Link>
            </div>
          </div>
        </section>

        <section className="W-fit py-10">
          <p className="mb-5 text-[14px] font-medium opacity-80">
            OTHER DETAILS
          </p>

          <div className="flex gap-x-20">
            <div>
              <p className="text-lg font-semibold">Software Engineer</p>
              <h3 className="text-sm font-semibold opacity-70">OCCUPATION</h3>
            </div>
            <div>
              <p className="text-lg font-semibold">Akara Joint</p>
              <h3 className="text-sm font-semibold opacity-70">DESIGNATION</h3>
            </div>
            <div>
              <p className="text-lg font-semibold">Obaseki Uni</p>
              <h3 className="text-sm font-semibold opacity-70">INSTITUTION</h3>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
