"use client";

import { cn } from "@/utils/cn";
import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { FiChevronLeft } from "react-icons/fi";

export default function PrevPageButton({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className={cn(className)}>
      <ChevronLeftIcon size={30} />
    </button>
  );
}

export function BackButton({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <button
      className={cn(
        "group flex items-center gap-x-2 rounded-full bg-gray-100 px-4 py-2 font-medium text-gray-700 transition-all duration-300 hover:bg-gray-200 hover:text-black",
        className,
      )}
      onClick={() => router.back()}
    >
      <FiChevronLeft className="duraton-300 transition-transform ease-out group-hover:-translate-x-1" />
      Back
    </button>
  );
}
