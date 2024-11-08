import { ChangePasswordForm } from "@/components/forms/chage-password-form";
import PrevPageButton from "@/components/ui/prev-page";

export default function ChangePassword() {
  return (
    <section>
      <header className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5">
        <div className="flex gap-x-2">
          <PrevPageButton className="text-black" />
          <h1 className="text-xl font-semibold text-black">Change Password</h1>
        </div>
      </header>

      <div className="px-10 py-7">
        <ChangePasswordForm />
      </div>
    </section>
  );
}
