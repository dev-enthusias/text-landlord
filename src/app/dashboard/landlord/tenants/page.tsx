import Topbar from "@/components/layout/topbar";
import Menu from "@/components/layout/footer-menu";
import AddTenantBtn from "../modals/add-tenant-btn";
import Image from "next/image";
import {
  Edit2Icon,
  HomeIcon,
  MapPin,
  MessageCircle,
  PhoneCall,
  Trash2,
} from "lucide-react";
import Link from "next/link";

export default function Tenants() {
  return (
    <>
      <div className="lg:hidden">
        <Topbar />
      </div>

      <main className="pb-24 pt-5">
        <section className="z-50 px-3 lg:px-10">
          <div className="mb-4 flex flex-col gap-3 lg:flex-row">
            <div className="flex w-full items-center justify-between">
              <h1 className="flex items-center text-xl font-semibold lg:text-3xl">
                Tenants
              </h1>

              <AddTenantBtn />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-x-4">
            <div className="flex flex-col items-center rounded-lg bg-black py-4 text-background">
              <span className="text-xl font-bold">4</span>
              <h3 className="mt-2 font-semibold opacity-80">Total</h3>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-primary-dark py-4 text-black">
              <span className="text-xl font-bold">10</span>
              <h3 className="mt-2 font-semibold opacity-80">Active</h3>
            </div>
            <div className="custom-shadow flex flex-col items-center rounded-lg bg-white py-4 text-foreground">
              <span className="text-xl font-bold">2</span>
              <h3 className="mt-2 font-semibold opacity-80">Inactive</h3>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 justify-between gap-x-4 gap-y-8 px-3 md:grid-cols-3 lg:grid-cols-4 lg:p-10">
          <TenantCard />
          <TenantCard />
          <TenantCard />
          <TenantCard />
        </section>
      </main>

      <Menu />
    </>
  );
}

function TenantCard() {
  return (
    <Link href="/dashboard/tenants/id">
      <article className="custom-shadow flex cursor-pointer flex-col items-center rounded-xl px-3 pt-5">
        <div className="relative mb-2 h-20 w-20 overflow-hidden rounded-full">
          <Image
            src="/images/profile-img.jpeg"
            alt=""
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>

        <div className="text-center text-sm font-medium lg:text-[14px]">
          <h3 className="text-lg font-semibold">Mara Juice</h3>
          <p className="flex items-center justify-center gap-x-1 opacity-80">
            <HomeIcon size={13} />
            Marculey Avenue Lounge
          </p>
          <p className="flex items-center justify-center gap-x-1 truncate opacity-80">
            <MapPin size={13} className="shrink-0" /> Emeritus express road,
            Abuja
          </p>
        </div>

        <div className="mt-4 flex w-full items-center justify-around gap-x-7 border-t py-3 lg:justify-end lg:px-5">
          <button>
            <PhoneCall size={18} className="opacity-80" />
          </button>
          <button>
            <MessageCircle size={18} className="opacity-80" />
          </button>
          <button>
            <Edit2Icon size={18} className="opacity-80" />
          </button>
          <button>
            <Trash2 size={18} className="opacity-80" />
          </button>
        </div>
      </article>
    </Link>
  );
}
