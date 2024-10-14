import { ChevronRightIcon, LandmarkIcon } from "lucide-react";

export default function AddMoneyCard() {
  return (
    <section className="custom-shadow max-w-[540px] rounded-lg bg-white p-3">
      <article className="mb-2 flex items-center justify-between border-b border-dashed border-gray-200 pb-2">
        <div className="flex items-center space-x-2">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-dark/10">
            <LandmarkIcon className="text-primary-dark" size={15} />
          </div>
          <div>
            <h3 className="text-[14px] font-medium">Bank Transfer</h3>
            <p className="text-xs">Add money via mobile or internet banking</p>
          </div>
        </div>
        <button>
          <ChevronRightIcon />
        </button>
      </article>

      <ul className="mb-4 space-y-3">
        <li>
          <h4 className="text-[14px] opacity-50">Account Number</h4>
          <p className="text-2xl font-medium">9080010168</p>
        </li>
        <li>
          <h4 className="text-[14px] leading-none opacity-50">Account Name</h4>
          <p className="text font-medium">Anakor Joshua Arinze</p>
        </li>
        <li>
          <h4 className="text-[14px] leading-none opacity-50">Bank Name</h4>
          <p className="text font-medium">Opay</p>
        </li>
      </ul>

      <div className="mb-1 flex justify-between gap-x-4">
        <button className="w-full rounded-full bg-primary-dark/10 py-3 text-[14px] font-semibold text-primary-dark">
          Copy Number
        </button>
        <button className="w-full rounded-full bg-primary py-3 text-[14px] font-semibold">
          Share Details
        </button>
      </div>
    </section>
  );
}
