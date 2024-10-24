import { MoveDownIcon, MoveUpIcon } from "lucide-react";

export default function TransactionCard({
  status,
}: {
  status: "credit" | "debit";
}) {
  return (
    <article className="flex justify-between gap-x-1 border-b border-b-gray-200 pb-3 last:border-none">
      <div className="flex grow items-center gap-x-2 truncate">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary-dark lg:h-8 lg:w-8">
          {status === "credit" ? (
            <MoveDownIcon className="h-3 w-3" />
          ) : (
            <MoveUpIcon className="h-3 w-3" />
          )}
        </div>
        <div>
          <h3 className="text-[14px] font-semibold lg:text-base">
            Emperica in Dazil, Villa
          </h3>
          <p className="text-medium flex items-center gap-x-0.5 text-xs lg:text-sm">
            Palaxisto Emeriando Plaza Road
          </p>
          <p className="text-xxs font-normal text-gray-500">
            18th August, 12:17 PM
          </p>
        </div>
      </div>
      <div className="shrink-0 text-right text-[14px] font-bold lg:text-base">
        <p>{status === "debit" && "-"}₦650,000</p>
        <p
          className={`font-normal text-xs ${status === "debit" ? "text-red-600" : "text-green-600"}`}
        >
          {status === "debit" ? "Debit" : "Credit"}
        </p>
      </div>
    </article>
  );
}
