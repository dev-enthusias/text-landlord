import TextInput from "@/components/ui/text-input";

export function ChangePasswordForm() {
  return (
    <section className="max-w-[540px] lg:p-3">
      <form>
        <div className="mb-6 space-y-5">
          <TextInput name="" label="Old Password" />
          <TextInput name="" label="New Password" />
          <TextInput name="" label="Confirm Password" />
        </div>
        <button className="w-full rounded-lg bg-gold py-3 font-semibold text-white transition-colors duration-300 ease-out hover:bg-gold/80">
          Reset Password
        </button>
      </form>
    </section>
  );
}
