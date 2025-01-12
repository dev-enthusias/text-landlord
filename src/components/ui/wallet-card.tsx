"use client";

import { useState } from "react";
import { AccountType } from "@/definition";
import { LandmarkIcon } from "lucide-react";

import { setAsDefault } from "@/api/services/account";
import { toast } from "sonner";
import LoadingSpinner from "./loading-spinner";
import revalidate from "@/utils/revalidate";
import CustomCheckbox from "./custome-checkbox";

export default function WalletCard({ data }: { data: AccountType }) {
  const [isSettingDefault, setIsSettingDefault] = useState(false);
  const [isChecked, setIsChecked] = useState(data.status === 1);

  const setDefaultAccount = async () => {
    try {
      setIsSettingDefault(true);
      const res = await setAsDefault(data.id);

      if (res.status) {
        toast.success("Success", { description: res.message });
        revalidate("/landlord/accounts");
        setIsChecked(true);
      }
    } catch (error) {
      console.error("Error setting default account:", error);
      toast.error("Error setting default account");
      setIsChecked(false);
    } finally {
      setIsSettingDefault(false);
    }
  };

  const handleCheckboxChange = () => {
    if (!isChecked) {
      setDefaultAccount();
    }
  };

  return (
    <section className="custom-shadow max-w-[540px] rounded-lg bg-white p-3">
      <article className="mb-2 flex items-center justify-between border-b border-dashed border-gray-200 pb-2">
        <div className="flex items-center space-x-2">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10">
            <LandmarkIcon className="text-gold" size={15} />
          </div>
          <div>
            <h3 className="text-[14px] font-medium">Bank Transfer</h3>
            <p className="text-xs">Add money via mobile or internet banking</p>
          </div>
        </div>
        <form className="flex items-center gap-x-1 text-[14px]">
          <div className="flex items-center gap-x-1">
            {isSettingDefault ? (
              <LoadingSpinner />
            ) : (
              <CustomCheckbox
                id={`checkbox-${data.id}`}
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            )}
            {isChecked ? (
              <p className="font-bold">Default Account</p>
            ) : (
              <p>Set as default</p>
            )}
          </div>
        </form>
      </article>

      <ul className="mb-4 space-y-3">
        <li>
          <h4 className="text-sm">Account Number</h4>
          <p className="text-2xl font-medium text-black">
            {data.account_number}
          </p>
        </li>
        <li>
          <h4 className="text-sm leading-none">Account Name</h4>
          <p className="text font-medium">{data.account_name}</p>
        </li>
        <li>
          <h4 className="text-sm leading-none">Bank Name</h4>
          <p className="text font-medium capitalize">{data.name}</p>
        </li>
      </ul>

      <div className="mb-1 flex justify-between gap-x-4">
        <button className="w-full rounded-full bg-gold/10 py-3 text-sm font-semibold text-gold">
          Copy Number
        </button>
        <button className="w-full rounded-full bg-gold py-3 text-sm font-semibold text-white">
          Share Details
        </button>
      </div>
    </section>
  );
}
