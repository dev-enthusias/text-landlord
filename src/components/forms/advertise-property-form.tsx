"use client";

import SelectInput from "../ui/select-input";
import { SubmitHandler, useForm } from "react-hook-form";
import { CreateAdvertDataType } from "@/definition";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAdvertSchema } from "@/lib/schema";
import { createAdvert } from "@/api/services/property";
import SubmitButton from "./submit-button";
import { toast } from "sonner";
import revalidate from "@/utils/revalidate";

export default function AdvertisePropertyForm({
  id,
  setEditPropertyModal,
}: {
  id: number;
  setEditPropertyModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateAdvertDataType>({
    resolver: zodResolver(createAdvertSchema),
  });

  const onSubmit: SubmitHandler<CreateAdvertDataType> = async (data) => {
    const newData = {
      ...data,
      property_id: id,
      rent_amount: 10000,
      terms_condition: "ok",
      negotiable: true,
    };
    const res = await createAdvert(newData);

    if (res.status) {
      reset();
      toast.success("Success", { description: res.message });
      setEditPropertyModal(false);
      revalidate(`/landlord/properties/${id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="space-y-4">
        <SelectInput
          label="Advertisement type"
          control={control}
          name="advertisement_type"
          options={[
            { id: 1, name: "Rent" },
            { id: 4, name: "Sale" },
          ]}
          placeholder="choose advertisement type"
          error={errors.advertisement_type?.message}
        />
        <SelectInput
          label="Rent type"
          control={control}
          name="rent_type"
          options={[
            { id: 1, name: "Monthly" },
            { id: 2, name: "Yearly" },
          ]}
          placeholder="choose rent type"
          error={errors.rent_type?.message}
        />

        <SubmitButton isSubmitting={isSubmitting} text="Advertise Property" />
      </fieldset>
    </form>
  );
}
