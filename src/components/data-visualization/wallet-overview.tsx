"use client";

import { useState } from "react";
import Link from "next/link";
import { EyeIcon, EyeOffIcon, ShieldCheckIcon } from "lucide-react";
import { routes } from "@/constants/routes";

export function WalletOverview() {
  const [isVisible, setVisibility] = useState(true);

  return (
    <section className="flex w-full items-start justify-between rounded-lg bg-primary px-4 py-3">
      <div>
        <div className="mb-4 flex items-center gap-x-4">
          <p className="flex items-center gap-x-1 text-sm">
            <ShieldCheckIcon size={14} />
            Available balance
          </p>
          <button onClick={() => setVisibility(!isVisible)}>
            {isVisible ? <EyeIcon size={14} /> : <EyeOffIcon size={14} />}
          </button>
        </div>
        <p className="text-xl font-semibold lg:text-2xl xl:text-3xl">
          {isVisible ? "₦10,000,000" : "****"}
        </p>
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
