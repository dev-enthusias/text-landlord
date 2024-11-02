import FundWalletPage from "@/components/pages/fund-wallet";
import PrevPageButton from "@/components/ui/prev-page";

export default function FundWallet() {
  return (
    <div>
      <header className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-3 py-5">
        <div className="flex gap-x-2">
          <PrevPageButton className="text-black" />
          <h1 className="text-xl font-semibold text-black">Add Fund</h1>
        </div>
      </header>

      <main className="p-5">
        <FundWalletPage />
      </main>
    </div>
  );
}
