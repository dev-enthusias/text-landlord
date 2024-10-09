import { routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import ForgotPasswordForm from "./forgot-password-form";
import { Arrow } from "@/components/svg";

export default function ForgotPassword() {
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
          <ForgotPasswordForm />
        </div>

        <Link
          href={routes.LOGIN}
          className="group mt-10 flex items-center gap-x-1.5 font-semibold text-gray-600 hover:text-gray-800"
        >
          <Arrow className="h-4 w-4 transition-all duration-300 group-hover:-translate-x-1" />
          Back to Login
        </Link>
      </section>
    </main>
  );
}

function Sidebar() {
  return (
    <aside className="relative h-full w-[630px] rounded-xl bg-gray-200 px-5 py-10"></aside>
  );
}
