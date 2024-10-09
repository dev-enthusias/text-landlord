import Menu from "@/components/general/footer-menu";
import PrevPageButton from "@/components/general/prev-page";
import { settings } from "@/constants/data";
import { routes } from "@/constants/routes";
import { ChevronRight, ChevronRightIcon, LogOutIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Settings() {
  return (
    <>
      <header className="sticky top-0 w-full border-b border-gray-200 bg-primary px-3 py-5">
        <div className="flex flex-col gap-y-4">
          <PrevPageButton className="-ml-2" />
          <h1 className="text-xl font-semibold">Settings</h1>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <Profile />
          <Link href={routes.DASHBOARDPROFILE}>
            <ChevronRightIcon />
          </Link>
        </div>
      </header>

      <main className="space-y-4 px-3 pb-24 pt-3">
        <section>
          <h2 className="mb-1 font-semibold">General</h2>
          <div className="space-y-4 rounded-lg border bg-white p-4">
            {settings.general.map(({ name, icon, link }, i) => (
              <Link
                key={i}
                href={link}
                className="flex items-center justify-between py-1"
              >
                <div className="flex items-center gap-x-4">
                  {icon}
                  {name}
                </div>
                <ChevronRight />
              </Link>
            ))}
          </div>
        </section>

        <section>
          <div className="space-y-4 rounded-lg border bg-white p-4">
            {settings.general2.map(({ name, icon, link }, i) => (
              <Link
                key={i}
                href={link}
                className="flex items-center justify-between py-1"
              >
                <div className="flex items-center gap-x-4">
                  {icon}
                  {name}
                </div>
                <ChevronRight />
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-1 font-semibold">Legal</h2>
          <div className="space-y-4 rounded-lg border bg-white p-4">
            {settings.legal.map(({ name, icon, link }, i) => (
              <Link
                key={i}
                href={link}
                className="flex items-center justify-between py-1"
              >
                <div className="flex items-center gap-x-4">
                  {icon}
                  {name}
                </div>
                <ChevronRight />
              </Link>
            ))}
          </div>
        </section>

        <form>
          <button className="flex gap-x-2 px-1 font-bold text-red-600">
            <LogOutIcon className="-rotate-180" />
            Logout
          </button>
        </form>
      </main>
      <Menu />
    </>
  );
}

function Profile() {
  return (
    <article className="flex items-center gap-x-2">
      <div className="relative h-16 w-16 overflow-hidden rounded-full bg-gray-500">
        <Image
          src="/images/profile-img.jpeg"
          alt="User profile image"
          fill
          sizes="64px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div>
        <h3 className="font-bold">Tenant Homme</h3>
        <p className="text-sm">tenanthomme@gmail.com</p>
      </div>
    </article>
  );
}
