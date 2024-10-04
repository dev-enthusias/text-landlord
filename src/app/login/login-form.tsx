"use client";

import CustomCheckbox from "@/components/auth/custome-checkbox";
import TextInput from "@/components/auth/text-input";
import { routes } from "@/constants/routes";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [checked, setChecked] = useState(true);

  return (
    <form className="w-full max-w-[480px]">
      <section>
        <div className="mb-6 text-center">
          <h2 className="text-gray- mb-1 text-3xl font-bold">Welcome Back</h2>
          <p className="text-gray-500">
            Enter your credentials to see for listing or rented properties.
          </p>
        </div>

        <div className="mb-10 space-y-5">
          <TextInput label="Email" required />
          <div>
            <TextInput label="Password" required />
            <div className="mt-2 flex items-center justify-between text-sm font-semibold">
              <div className="flex items-center gap-x-1">
                <CustomCheckbox
                  id="disabled"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <p>Remember me</p>
              </div>
              <Link
                href={routes.FORGOTPASSWORD}
                className="opacity-80 hover:opacity-100"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary hover:bg-primary/80 w-full rounded-lg py-3 font-semibold transition-colors duration-300 ease-out"
        >
          LOGIN
        </button>
      </section>
    </form>
  );
}
