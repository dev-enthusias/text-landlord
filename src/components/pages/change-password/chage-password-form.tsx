import TextInput from "@/components/ui/text-input";

export function ChangePasswordForm() {
  return (
    <section className="max-w-[540px] lg:p-3">
      <div className="mb-5">
        <h2 className="text-xl font-semibold">Create new password</h2>
        <p className="opacity-50">
          Your new password must be different from previous used password.
        </p>
      </div>
      <form>
        <div className="mb-6 space-y-5">
          <TextInput label="Password" />
          <TextInput label="Confirm Password" />
        </div>
        <button className="w-full rounded-lg bg-primary py-3 font-semibold transition-colors duration-300 ease-out hover:bg-primary/80">
          Reset Password
        </button>
      </form>
    </section>
  );
}
