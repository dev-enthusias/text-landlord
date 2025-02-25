"use client";

import TextInput from "../ui/text-input";
import { SubmitHandler, useForm } from "react-hook-form";
import SubmitButton from "./submit-button";
import { AddTenantDataType } from "@/definition";
import { zodResolver } from "@hookform/resolvers/zod";
import { addTenantSchema } from "@/lib/schema";
import { addTenant } from "@/api/services/tenant";
import { toast } from "sonner";

export default function TenantForm({ properties }: { properties: any }) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<AddTenantDataType>({
    resolver: zodResolver(addTenantSchema),
  });

  const onSubmit: SubmitHandler<AddTenantDataType> = async (data) => {
    const result = await addTenant(data);

    if (!result.success) {
      toast.error(result.error);
    } else {
      toast.success("Tenant added successfully");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <fieldset className="space-y-4">
        <TextInput
          register={register}
          name="email"
          label="Email"
          required
          placeholder="Enter tenant email"
          error={errors?.email?.message}
        />

        <div className="space-y-2">
          <p className="mb-1 block text-sm font-semibold text-gray-600">
            Select Property <span className="font-bold text-red-500">*</span>
          </p>
          <div className="no-scrollbar grid h-44 gap-4 overflow-y-auto rounded-lg border p-2.5 lg:grid-cols-2 lg:p-4">
            {properties.properties.list.map((property: any) => (
              <label
                key={property.id}
                className="flex cursor-pointer items-center space-x-2"
              >
                <input
                  type="radio"
                  value={property.id}
                  {...register("property_id", { required: true })}
                  className="form-radio"
                />
                <img
                  src={property.image}
                  alt={property.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{property.name}</p>
                  <p className="text-sm text-gray-600">{property.address}</p>
                </div>
              </label>
            ))}
          </div>
          {errors.property_id && (
            <p className="mt-1 text-xs text-red-600">
              {errors.property_id.message}
            </p>
          )}
        </div>

        <SubmitButton isSubmitting={isSubmitting} text="Save" />
      </fieldset>
    </form>
  );
}
