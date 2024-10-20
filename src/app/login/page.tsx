import Link from "next/link";
import LoginForm from "../../components/forms/login-form";
import AuthLogo from "@/components/ui/auth-logo";
import AuthLeftHandSide from "@/components/layout/auth-sidebar";
import { routes } from "@/constants/routes";

export default function Login() {
  return (
    <main className="flex overflow-hidden p-4 lg:h-dvh lg:max-h-dvh">
      <AuthLeftHandSide />

      <section className="no-scrollbar relative flex h-full grow flex-col items-center justify-center overflow-y-auto py-10">
        <AuthLogo />

        <div className="p-1 lg:p-0">
          <LoginForm />
        </div>

        <div className="py-10 text-center text-[14px]">
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
          <span className="mx-2">or</span>
          <Link
            href={routes.REGISTERASAGENT}
            className="block text-base font-semibold underline opacity-80 hover:opacity-100"
          >
            Become Agent
          </Link>
        </div>
      </section>
    </main>
  );
}
