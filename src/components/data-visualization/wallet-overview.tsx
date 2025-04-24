"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { EyeIcon, EyeOffIcon, ShieldCheckIcon } from "lucide-react";
import { routes } from "@/constants/routes";
import LoadingSpinner from "../ui/loading-spinner";
import { LuShieldCheck } from "react-icons/lu";

export function WalletOverview() {
  const [isVisible, setVisibility] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedVisibility = localStorage.getItem("walletBalanceVisibility");
      setVisibility(
        savedVisibility === null ? true : savedVisibility === "true",
      );
    }
  }, []);

  const toggleVisibility = () => {
    if (isVisible === undefined) return; // Prevent toggling before state is set
    const newVisibility = !isVisible;
    setVisibility(newVisibility);
    localStorage.setItem("walletBalanceVisibility", newVisibility.toString());
  };

  return (
    <section className="flex w-full items-start justify-between rounded-lg bg-gold px-4 py-3 text-black">
      <div>
        <div className="mb-4 flex items-center gap-x-2">
          <p className="flex items-center gap-x-1 text-sm">
            <ShieldCheckIcon size={14} />
            <LuShieldCheck />
            Available balance
          </p>
          <button
            onClick={toggleVisibility}
            disabled={isVisible === undefined}
            className={`${isVisible === undefined && "hidden"}`}
          >
            {isVisible ? <EyeIcon size={14} /> : <EyeOffIcon size={14} />}
          </button>
        </div>
        <div className="text-xl font-semibold lg:text-2xl xl:text-3xl">
          {isVisible === undefined ? (
            <LoadingSpinner />
          ) : isVisible ? (
            "₦0"
          ) : (
            "****"
          )}
        </div>
      </div>

      <Link
        href={routes.FUND_WALLET}
        className="rounded-full bg-black px-3 py-2 text-xxs text-white xl:text-xs"
      >
        <span className="">+</span> Fund Wallet
      </Link>
    </section>
  );
}
