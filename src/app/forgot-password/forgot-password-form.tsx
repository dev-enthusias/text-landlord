"use client";

import TextInput from "@/components/ui/text-input";

export default function ForgotPasswordForm() {
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
          className="w-full rounded-lg bg-primary py-3 font-semibold transition-colors duration-300 ease-out hover:bg-primary/80"
        >
          RESET
        </button>
      </section>
    </form>
  );
}
