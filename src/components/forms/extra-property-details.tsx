"use client";

import TextInput from "../ui/text-input";
import SelectInput from "../ui/select-input";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  BasicPropertyInfoDataType,
  PropertyMetadataResponseDataType,
} from "@/definition";
import { zodResolver } from "@hookform/resolvers/zod";
import { basicPropertyInfoSchema } from "@/lib/schema";
import { addPropertyBasicInfo } from "@/api/services/property";
import SubmitButton from "./submit-button";
import TextareaInput from "../ui/text-area";
import { toast } from "sonner";
import revalidate from "@/utils/revalidate";
import { useState, useEffect } from "react";

export default function ExtraPropertyDetailsForm({
  type,
  name,
  propertyType,
  id,
  rent,
  setEditPropertyModal,
}: {
  id: number;
  name: string;
  rent: number;
  propertyType: PropertyMetadataResponseDataType["type"];
  type: {
    id: number;
    name: string;
  }[];
  setEditPropertyModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<BasicPropertyInfoDataType>({
    resolver: zodResolver(basicPropertyInfoSchema),
    defaultValues: {
      name: name,
      rent_amount: rent.toString(),
    },
  });

  const [rentAmount, setRentAmount] = useState(
    `₦${rent.toLocaleString("en-NG")}`,
  );

  useEffect(() => {
    setValue("rent_amount", rent.toString());
  }, [rent, setValue]);

  const onSubmit: SubmitHandler<BasicPropertyInfoDataType> = async (data) => {
    const newData = { ...data, completion: 0 };
    const res = await addPropertyBasicInfo(newData, id);

    if (res.status) {
      reset();
      toast.success("Success", { description: res.message });
      setEditPropertyModal(false);
      revalidate(`/landlord/properties/${id}`);
    }
  };

  const defaultPropertyType = type.find(
    (type) => type.name === propertyType[0],
  );

  const handleRentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Remove currency symbol, commas, and other non-numeric characters
    value = value.replace(/[^0-9]/g, "");

    if (!value) {
      setValue("rent_amount", "");
      setRentAmount("");
      return;
    }

    const numericValue = parseFloat(value);

    // Update the actual form value with the numeric string
    setValue("rent_amount", numericValue.toString(), { shouldValidate: true });

    // Update the display value with the formatted string
    setRentAmount("₦" + numericValue.toLocaleString("en-NG"));
  };

  const formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  console.log(errors);
  const rentPlusPlatformFee = formatter.format(+rent + Number(rent) * 0.05);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="space-y-4">
        <TextInput
          register={register}
          name="name"
          label="Property Name"
          error={errors.name?.message}
          required
        />
        <SelectInput
          label="Property type"
          control={control}
          name="type"
          options={type}
          placeholder="choose a property type"
          error={errors.type?.message}
          defaultValue={defaultPropertyType?.id}
        />
        <TextInput
          register={register}
          name="bedroom"
          label="How may bedrooms are in the property?"
          error={errors.bedroom?.message}
        />
        <TextInput
          register={register}
          name="bathroom"
          label="How many bathrooms are in the property?"
          error={errors.bathroom?.message}
        />
        <TextInput
          register={register}
          name="size"
          label="How many square feet is the property?"
          error={errors.size?.message}
          required
        />
        <div>
          <div className="space-y-1">
            <label
              htmlFor="rent_amount"
              className="mb-1 block text-sm font-semibold text-gray-600"
            >
              Rent Amount
              <span className="font-bold text-red-500"> *</span>
            </label>
            <div className="relative">
              <input
                id="rent_amount"
                name="rent_amount"
                value={rentAmount}
                onChange={handleRentChange}
                className="relative w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-3 shadow-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
            {errors.rent_amount?.message && (
              <div className="mt-1 text-xs text-red-600">
                <p>{errors.rent_amount?.message}</p>
              </div>
            )}
          </div>
          {rent && (
            <strong className="mt-1 inline-block text-xs font-semibold text-gray-500">
              {`Note: A total of ${rentPlusPlatformFee} (₦${rent} + 5% platform fee) will be displayed as rent amount`}
            </strong>
          )}
        </div>
        <TextInput
          register={register}
          name="flat_no"
          label="Flat number (if it is a flat)"
          error={errors.flat_no?.message}
        />
        <TextareaInput
          register={register}
          name="description"
          label="Description of property"
          error={errors.description?.message}
          required
        />

        <SubmitButton isSubmitting={isSubmitting} text="SAVE" />
      </fieldset>
    </form>
  );
}
