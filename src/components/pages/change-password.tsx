import PrevPageButton from "@/components/ui/prev-page";
import { ChangePasswordForm } from "../forms/chage-password-form";

export default function ChangePasswordPage() {
  return (
    <>
      <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5">
        <div className="flex gap-x-4">
          <PrevPageButton />
          <h1 className="text-xl font-semibold">Change Password</h1>
        </div>
      </header>

      <main className="p-5">
        <ChangePasswordForm />
      </main>
    </>
  );
}
