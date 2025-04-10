"use client";

import TextInput from "../ui/text-input";
import SelectInput from "../ui/select-input";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  BasicPropertyInfoDataType,
  PropertyFieldsResponseDT,
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
  categories,
  propertyType,
  id,
  rent,
  cautionFee,
  gracePeriod,
  bedroom,
  bathroom,
  description,
  flatNo,
  size,
  setEditPropertyModal,
}: {
  id: number;
  name: string;
  rent: number;
  propertyType: PropertyMetadataResponseDataType["type"];
  categories: PropertyFieldsResponseDT["data"]["categories"];
  cautionFee: string;
  gracePeriod: number;
  description: string | null;
  bathroom: number | null;
  bedroom: number | null;
  flatNo: string | null;
  size: string | null;
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
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<BasicPropertyInfoDataType>({
    resolver: zodResolver(basicPropertyInfoSchema),
    defaultValues: {
      name: name,
      rent_amount: rent.toString(),
      caution_fee: cautionFee.toString(),
      grace_period: gracePeriod,
      bedroom: bedroom !== null ? bedroom : null,
      bathroom: bathroom || null,
      flat_no: flatNo || null,
      description: description || "",
      size: size !== null ? +size : null,
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

  const cautionFeeVal = watch("caution_fee");

  const cautionAmount = formatter.format(
    (parseFloat(String(rent)) || 0) *
      ((parseInt(String(cautionFeeVal)) || 0) / 100),
  );

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
        <SelectInput
          label="Property type"
          control={control}
          name="type"
          options={categories}
          placeholder="select a category"
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
        <SelectInput
          control={control}
          name="grace_period"
          label="Grace Period"
          options={[
            { id: 1, name: "1 week" },
            { id: 2, name: "2 weeks" },
            { id: 3, name: "3 weeks" },
            { id: 4, name: "4 weeks" },
          ]}
          placeholder="Select a grace period"
          required
          error={errors.grace_period?.message}
        />
        <div>
          <TextInput
            register={register}
            name="caution_fee"
            label="Refundable Caution Fee (%)"
            error={errors.caution_fee?.message}
            placeholder="eg: 10%"
            required
          />
          {cautionFee && (
            <strong className="mt-1 inline-block text-xs font-semibold text-gray-500">
              {`Note: The ${parseInt(String(cautionFee)) || "0"}% (${cautionAmount}) caution fee will be added to your transaction.`}
            </strong>
          )}
        </div>
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
