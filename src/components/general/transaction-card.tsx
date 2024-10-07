import { MapPin, MoveDownIcon, MoveUpIcon } from "lucide-react";

export default function TransactionCard({
  status,
}: {
  status: "credit" | "debit";
}) {
  return (
    <article className="flex justify-between gap-x-1 border-b border-b-gray-200 pb-3 last:border-none">
      <div className="flex grow items-center gap-x-2 truncate">
        <div className="text-primary-dark flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
          {status === "credit" ? (
            <MoveDownIcon size={20} />
          ) : (
            <MoveUpIcon size={20} />
          )}
        </div>
        <div>
          <h3 className="font-semibold">Emperica in Dazil, Villa</h3>
          <p className="text-medium flex items-center gap-x-0.5 text-sm">
            <MapPin size={10} />
            Palaxisto Emeriando Plaza Road
          </p>
          <p className="text-xs font-normal text-gray-500">
            18th August, 12:17 PM
          </p>
        </div>
      </div>
      <div className="shrink-0 text-right font-bold">
        <p>{status === "debit" && "-"}₦650,000</p>
      </div>
    </article>
  );
}
