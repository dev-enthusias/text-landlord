import { getBanks } from "@/api/services/account";
import AddAccount from "@/components/modals/add-account";
import PrevPageButton from "@/components/ui/prev-page";

export default async function Accounts() {
  const banks = await getBanks("nigeria");

  return (
    <section>
      <header className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5">
        <div className="flex gap-x-2">
          <PrevPageButton className="text-black" />
          <h1 className="text-xl font-semibold text-black">Accounts</h1>
        </div>
      </header>

      <div className="px-5 py-7 lg:px-10">
        <div className="flex justify-end">
          <AddAccount banks={banks} />
        </div>
      </div>
    </section>
  );
}
