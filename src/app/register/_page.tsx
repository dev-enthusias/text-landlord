"use client";

import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { routes } from "@/constants/routes";
import RegisterationForm from "../../components/forms/register-form";
import { FormStepStoreProvider } from "@/providers/register-form-step-store-provider";
import AuthLeftHandSide from "@/components/layout/auth-sidebar";

export default function RegisterPage() {
  return (
    <FormStepStoreProvider>
      <main className="flex h-screen max-h-dvh overflow-hidden bg-white p-4">
        <AuthLeftHandSide />

        <section className="no-scrollbar relative flex grow flex-col items-center overflow-y-auto py-10">
          <Link href={routes.HOME} className="block">
            <div className="relative mx-auto h-20 w-28">
              <Image
                src="/logos/logo.svg"
                alt=""
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
          </Link>

          <div className="w-full px-1 lg:px-0">
            <Suspense fallback={<div>Loading...</div>}>
              <RegisterationForm />
            </Suspense>
          </div>
        </section>
      </main>
    </FormStepStoreProvider>
  );
}
