"use client";

import TextInput from "../ui/text-input";
import SelectInput from "../ui/select-input";
import { ImagesIcon } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddPropertyDataType, Country, LocationList } from "@/definition";
import { PropertyMetadataResponseDataType } from "@/definition";
import { zodResolver } from "@hookform/resolvers/zod";
import { addPropertySchema } from "@/lib/schema";
import { SetStateAction, useEffect, useState } from "react";
import { useGlobalStore } from "@/stores/global-store";
import { addProperty, getCities, getStates } from "@/api/services/property";
import SubmitButton from "./submit-button";
import { toast } from "sonner";
import revalidate from "@/utils/revalidate";

export default function AddPropertyForm({
  categories,
  country,
  types,
  isAddPropertyModalOpen,
}: {
  categories: PropertyMetadataResponseDataType["categories"];
  types: PropertyMetadataResponseDataType["type"];
  country: Country[];
  isAddPropertyModalOpen?: React.Dispatch<SetStateAction<boolean>>;
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const countryId = useGlobalStore((state) => state.countryId);
  const stateId = useGlobalStore((state) => state.stateId);
  const [states, setStates] = useState<LocationList[]>([]);
  const [cities, setCities] = useState<LocationList[]>([]);
  const [rentAmount, setRentAmount] = useState("");

  useEffect(() => {
    const fetchStatesAndCities = async () => {
      if (!countryId) {
        setStates([{ id: 0, name: "Select a country first" }]);
      } else {
        const states = (await getStates(countryId)) as LocationList[];
        setStates(states);
      }
      if (!stateId) {
        setCities([{ id: 0, name: "Select a state first" }]);
      } else {
        const cities = (await getCities(stateId)) as LocationList[];
        setCities(cities);
      }
    };

    fetchStatesAndCities();
  }, [countryId, stateId]);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<AddPropertyDataType>({
    resolver: zodResolver(addPropertySchema),
  });

  const onSubmit: SubmitHandler<AddPropertyDataType> = async (data) => {
    const res = await addProperty({
      ...data,
      caution_fee: parseInt(String(data.caution_fee)),
      rent_amount: rentPlusPlatformFee,
      post_code: "12234",
    });

    if (res.result && isAddPropertyModalOpen) {
      isAddPropertyModalOpen(false);
      toast.success("Success", { description: res.message });
      revalidate("/landlord/properties");
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Set the FileList value in the form
      setValue("default_image", event.target.files as FileList, {
        shouldValidate: true,
      });
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const formattedTypes = types.map((type, index) => ({
    id: index + 1,
    name: type,
  }));

  const cautionFee = watch("caution_fee");
  const rent = watch("rent_amount");
  const formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  const cautionAmount = formatter.format(
    (parseFloat(rent) || 0) * ((parseInt(String(cautionFee)) || 0) / 100),
  );

  const rentPlusPlatformFee = formatter.format(+rent + Number(rent) * 0.05);

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
          control={control}
          name="type_id"
          label="Property Type"
          options={formattedTypes}
          placeholder="Choose an option"
          required
          error={errors.type_id?.message}
        />
        <SelectInput
          control={control}
          name="property_category_id"
          label="Property Category"
          options={categories ?? []}
          placeholder="Choose an option"
          required
          error={errors.property_category_id?.message}
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
              {`Note: A total of ${rentPlusPlatformFee} (+5% platform fee) will be displayed as rent amount`}
            </strong>
          )}
        </div>
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
        <TextInput
          register={register}
          name="address"
          label="Property Address"
          error={errors.address?.message}
          required
        />
        <SelectInput
          control={control}
          name="country_id"
          label=""
          options={country}
          placeholder="Select a country"
          error={errors.country_id?.message}
        />
        <SelectInput
          label=""
          control={control}
          name="state_id"
          options={states}
          placeholder="Select a state"
          error={errors.state_id?.message}
        />
        <SelectInput
          label=""
          options={cities}
          control={control}
          name="city_id"
          placeholder="Select a city"
          error={errors.city_id?.message}
        />
        <div className="flex flex-col gap-y-1">
          <p className="mb-1 block font-semibold text-gray-600">Image</p>
          <div className="grid grid-cols-3 gap-x-2">
            <label
              htmlFor="image"
              className={`relative flex h-28 w-full cursor-pointer items-center justify-center gap-x-1 rounded-md border border-dashed border-gray-300 bg-white py-3 pl-2 pr-2 text-left text-xs shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:pl-4 sm:pr-10 sm:text-sm ${
                selectedImage ? "col-span-1" : "col-span-3"
              }`}
            >
              <input
                type="file"
                id="image"
                accept="image/jpeg,image/jpg,image/png,image/webp"
                className="hidden"
                onChange={handleFileChange}
              />

              <>
                <ImagesIcon size={16} className="shrink-0" />
                {selectedImage ? "Change image" : "Select property image"}
              </>
            </label>
            {selectedImage && (
              <div className="relative col-span-2 h-28 w-full">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>
          {errors.default_image?.message && (
            <div className="mt-1 text-xs text-red-600">
              <p>{errors.default_image?.message}</p>
            </div>
          )}
        </div>
        <SubmitButton isSubmitting={isSubmitting} text="SAVE" />
      </fieldset>
    </form>
  );
}
