import { routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "./login-form";

export default function Login() {
  return (
    <main className="flex h-screen max-h-dvh overflow-hidden p-4">
      <section className="hidden shrink-0 rounded-lg lg:block">
        <Sidebar />
      </section>

      <section className="no-scrollbar relative flex grow flex-col items-center justify-center overflow-y-auto py-10">
        <Link href={routes.HOME} className="block">
          <div className="relative mx-auto h-20 w-28">
            <Image
              src="/logos/logo.svg"
              alt="Oga landlord logo"
              fill
              sizes="160px"
              className="object-cover"
            />
          </div>
        </Link>

        <div className="p-1 lg:p-0">
          <LoginForm />
        </div>

        <p className="py-10 text-center text-[14px]">
          <span className="block lg:mr-2 lg:inline-block">New User?</span>{" "}
          <Link
            href={routes.REGISTERASLANDLORD}
            className="mr-2 text-base font-semibold underline opacity-80 hover:opacity-100"
          >
            Become Landlord
          </Link>
          <span className="mr-2">or</span>
          <Link
            href={routes.REGISTERASTENANT}
            className="text-base font-semibold underline opacity-80 hover:opacity-100"
          >
            Become Tenant
          </Link>
        </p>
      </section>
    </main>
  );
}

function Sidebar() {
  return (
    <aside className="relative h-full w-[630px] rounded-xl bg-gray-200 px-5 py-10"></aside>
  );
}
