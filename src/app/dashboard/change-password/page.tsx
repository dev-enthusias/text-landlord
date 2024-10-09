import TextInput from "@/components/auth/text-input";
import PrevPageButton from "@/components/general/prev-page";

export default function ChangePassword() {
  return (
    <>
      <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5">
        <div className="flex gap-x-4">
          <PrevPageButton />
          <h1 className="text-xl font-semibold">Change Password</h1>
        </div>
      </header>

      <main className="p-5">
        <section>
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
      </main>
    </>
  );
}
