"use client";

import { cn } from "@/utils/cn";
import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PrevPageButton({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className={cn(className)}>
      <ChevronLeftIcon size={30} />
    </button>
  );
}
