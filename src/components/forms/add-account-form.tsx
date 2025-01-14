"use client";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import TextInput from "../ui/text-input";
import SelectInput from "../ui/select-input";
import SubmitButton from "./submit-button";
import {
  addAccountToOgaLandlord,
  checkIfSubAccountExists,
  createSubAccount,
  resolveAccount,
} from "@/api/services/account";
import { addAccountSchema } from "@/lib/schema";
import { AddAccountDataType, BankType } from "@/definition";
import revalidate from "@/utils/revalidate";

export default function AddAccountForm({
  banks,
  setModalVisibility,
}: {
  banks: BankType[];
  setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [validatingAccount, setValidatingAccount] = useState(false);
  const [accountName, setAccountName] = useState("");
  const [selectedBankName, setSelectedBankName] = useState("");

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<AddAccountDataType>({
    resolver: zodResolver(addAccountSchema),
    mode: "onChange", // ensures form values are watched immediately
  });

  const onSubmit: SubmitHandler<AddAccountDataType> = async (data) => {
    if (!accountName) return;

    const existingSubAccount = await checkIfSubAccountExists();

    console.log(existingSubAccount);

    if (existingSubAccount.status) {
      console.log("sub account exists");
      const res = await addAccountToOgaLandlord({
        name: selectedBankName,
        sub_account: existingSubAccount.data.sub_account,
        account_number: data.account_number,
        account_name: accountName,
      });

      if (res.status) {
        reset();
        toast.success("Success", {
          description: res.message,
        });
        setModalVisibility(false);
        revalidate(`/landlord/accounts`);
      }
    } else {
      console.log("sub account doesnt exists");
      const res = await createSubAccount(data);

      if (res.status) {
        const res2 = await addAccountToOgaLandlord({
          name: res.data.settlement_bank,
          sub_account: res.data.subaccount_code,
          account_number: res.data.account_number,
          account_name: res.data.account_name,
        });

        reset();
        toast.success("Success", {
          description: res2.message,
        });
        setModalVisibility(false);
        revalidate(`/landlord/accounts`);
      }
    }
  };

  const bankOptions = banks.map((bank) => ({
    id: bank.code,
    name: bank.name,
  }));

  const accountNumber = watch("account_number");
  const bankCode = watch("bank_code");

  // Validate account number
  useEffect(() => {
    if (bankCode) {
      const selectedBank = bankOptions.find((bank) => bank.id === bankCode);
      setSelectedBankName(selectedBank?.name || "");
    }

    let isMounted = true; // Add mounted check

    const validateAccount = async () => {
      if (accountNumber?.length === 10 && bankCode) {
        setValidatingAccount(true);

        try {
          const res = await resolveAccount(bankCode, accountNumber);

          console.log(res);

          if (isMounted) {
            // Only update state if component is mounted
            if (res.status) {
              setAccountName(res.data.account_name);
            } else {
              toast.error("Error", { description: res.message });
              setAccountName("");
            }
          }
        } catch (error) {
          if (isMounted) {
            console.error("Error validating account number:", error);
            toast.error(
              "Something went wrong. Check your internet connection and try again",
            );
            setAccountName("");
          }
        } finally {
          if (isMounted) {
            setValidatingAccount(false);
          }
        }
      } else {
        setAccountName("");
      }
    };

    validateAccount();

    return () => {
      isMounted = false;
    };
  }, [accountNumber, bankCode]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="space-y-4">
        <TextInput
          register={register}
          name="business_name"
          label="Business Name"
          error={errors.business_name?.message}
          required
        />

        <SelectInput
          label="Bank Name"
          control={control}
          name="bank_code"
          options={bankOptions}
          placeholder="Select Bank"
          required
          error={errors.bank_code?.message}
        />

        <div>
          <TextInput
            register={register}
            name="account_number"
            label="Account Number"
            error={errors.account_number?.message}
            maxLength={10}
            required
          />
          <div
            className={`border-b py-1 text-right ${
              accountNumber?.length === 10 || accountName ? "block" : "hidden"
            }`}
          >
            {validatingAccount ? (
              <p className="text-sm">Verifying Beneficiary...</p>
            ) : (
              <p className="font-semibold uppercase">{accountName}</p>
            )}
          </div>
        </div>

        <SubmitButton
          disabled={accountName ? false : true}
          isSubmitting={isSubmitting}
          text="SAVE"
        />
      </fieldset>
    </form>
  );
}
