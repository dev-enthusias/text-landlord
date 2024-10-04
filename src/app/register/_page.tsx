"use client";

import { Arrow } from "@/components/svg";
import { routes } from "@/constants/routes";
import Link from "next/link";
import RegisterationForm from "./register-form";
import {
  FormStepStoreProvider,
  useFormStepStore,
} from "@/providers/register-form-step-store-provider";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <FormStepStoreProvider>
      <main className="flex h-screen max-h-screen overflow-hidden p-4">
        <section className="shrink-0 rounded-lg">
          <Sidebar />
        </section>

        <section className="no-scrollbar relative flex grow flex-col items-center overflow-y-auto py-10">
          {/* <Indicator /> */}

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

          <RegisterationForm />
        </section>
      </main>
    </FormStepStoreProvider>
  );
}

// prettier-ignore
const authSidebar = [
  { title: "Basic Information", details: "Provide your name and email" },
  { title: "Personal Details", details: "Provide your personal information" },
  { title: "Additional Information", details: "Provide your means of identification" },
  { title: "Security", details: "Create password and accept terms" },
];

function Sidebar() {
  const { step, updateStep } = useFormStepStore((state) => state);

  return (
    <aside className="relative h-full w-96 rounded-xl bg-gray-200 px-5 py-10">
      <Link href={routes.HOME} className="mb-10 block">
        <div className="relative h-28 w-40">
          <Image
            src="/logos/logo-transparent.png"
            alt=""
            fill
            sizes="160px"
            className="object-cover"
          />
        </div>
      </Link>

      <ol className="space-y-10">
        {authSidebar.map(({ title, details }, i) => (
          <li
            key={i}
            className={`flex cursor-pointer items-center gap-x-4 ${step === i ? "opacity-100" : "opacity-70"}`}
            onClick={() => updateStep(i)}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded border-2 ${step === i ? "bg-primary border-black font-bold" : "border-gray-300 bg-white"} `}
            >
              {i + 1}
            </div>
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm">{details}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="absolute bottom-10 left-0 flex w-full items-center justify-between px-5 font-semibold">
        <Link href={routes.HOME} className="group flex items-center gap-x-1">
          <Arrow className="h-4 w-4 duration-300 group-hover:-translate-x-1" />
          Back to home
        </Link>
        <Link href={routes.LOGIN}>Login</Link>
      </div>
    </aside>
  );
}

// function Indicator() {
//   const { step, updateStep } = useFormStepStore((state) => state);

//   const IndicatorLine = ({ index }: { index: number }) => {
//     return (
//       <div
//         className={`h-1 w-24 cursor-pointer rounded-full ${step === index ? "bg-primary" : "bg-gray-200"}`}
//         onClick={() => updateStep(index)}
//       />
//     );
//   };

//   const renderedLines = Array(4)
//     .fill("")
//     .map((_, i) => <IndicatorLine key={i} index={i} />);

//   return (
//     <div className="absolute top-2 z-50 flex gap-x-4">{renderedLines}</div>
//   );
// }
