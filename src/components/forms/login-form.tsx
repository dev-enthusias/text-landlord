"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import Link from "next/link";
import { permanentRedirect, RedirectType } from "next/navigation";
import { toast } from "sonner";
import TextInput from "@/components/ui/text-input";
import CustomCheckbox from "@/components/ui/custome-checkbox";
import SubmitButton from "@/components/forms/submit-button";
import { authenticate } from "@/lib/actions";
import { routes } from "@/constants/routes";

const authenticateWithToastAndRedirect = async (
  prevState: any,
  formData: FormData,
) => {
  const result = await authenticate(prevState, formData);
  if (result && typeof result === "string") {
    toast.error("Error", { description: result });
  }
  permanentRedirect(routes.DASHBOARD, RedirectType.replace);
};

export default function LoginForm() {
  const [checked, setChecked] = useState(true);
  const [errorMessage, dispatch] = useFormState(
    authenticateWithToastAndRedirect,
    undefined,
  );

  return (
    <form className="w-full max-w-[480px]" action={dispatch}>
      <section className="mb-6 text-center">
        <h2 className="text-gray- mb-1 text-3xl font-bold">Welcome Back</h2>
        <p className="text-gray-500">
          Enter credentials to see your listing or rented properties.
        </p>
      </section>

      <section className="mb-10 space-y-5">
        <TextInput name="email" label="Email" error={errorMessage} required />
        <div>
          <TextInput
            name="password"
            label="Password"
            error={errorMessage}
            required
          />
          <div className="mt-2 flex items-center justify-between text-[14px] font-semibold">
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
      </section>

      <SubmitButton text="LOGIN" />
    </form>
  );
}
