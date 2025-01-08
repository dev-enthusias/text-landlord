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

export default function ExtraPropertyDetailsForm({
  type,
  completion,
  name,
  propertyType,
  id,
  setEditPropertyModal,
}: {
  id: number;
  name: string;
  propertyType: PropertyMetadataResponseDataType["type"];
  type: {
    id: number;
    name: string;
  }[];
  completion: PropertyMetadataResponseDataType["completion"];
  setEditPropertyModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BasicPropertyInfoDataType>({
    resolver: zodResolver(basicPropertyInfoSchema),
    defaultValues: {
      name: name,
    },
  });

  const onSubmit: SubmitHandler<BasicPropertyInfoDataType> = async (data) => {
    const res = await addPropertyBasicInfo(data, id);

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
          label="Property completion"
          control={control}
          name="completion"
          options={completion}
          placeholder="choose property completion status"
          error={errors.completion?.message}
        />
        <TextInput
          register={register}
          name="bedroom"
          label="How may bedrooms are in the property?"
          error={errors.bedroom?.message}
          required
        />
        <TextInput
          register={register}
          name="bathroom"
          label="How many bathrooms are in the property?"
          error={errors.bathroom?.message}
          required
        />
        <TextInput
          register={register}
          name="size"
          label="How many square feet is the property?"
          error={errors.size?.message}
          required
        />
        <TextInput
          register={register}
          name="rent_amount"
          label="How much is the rent for the property?"
          error={errors.rent_amount?.message}
          required
        />
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
