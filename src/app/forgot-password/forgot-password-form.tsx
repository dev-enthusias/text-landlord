"use client";

import CustomCheckbox from "@/components/auth/custome-checkbox";
import TextInput from "@/components/auth/text-input";
import { routes } from "@/constants/routes";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordForm() {
  const [checked, setChecked] = useState(true);

  return (
    <form className="w-full max-w-[480px]">
      <section>
        <div className="mb-6 text-center">
          <h2 className="text-gray- mb-1 text-3xl font-bold">
            Forgot Password?
          </h2>
          <p className="text-gray-500">
            No worries we would help you reset your password.
          </p>
        </div>

        <div className="mb-10">
          <TextInput label="Email" required />
        </div>

        <button
          type="submit"
          className="bg-primary hover:bg-primary/80 w-full rounded-lg py-3 font-semibold transition-colors duration-300 ease-out"
        >
          RESET
        </button>
      </section>
    </form>
  );
}
