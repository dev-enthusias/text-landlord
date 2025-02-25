"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import SubmitButton from "./submit-button";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import TextInput from "../ui/text-input";
import { addAgentSchema } from "@/lib/schema";
import { AddAgentDataType } from "@/definition";
import { addAgent, searchAgentByEmail } from "@/api/services/agent";
import { useState } from "react";
import { z } from "zod";
import LoadingSpinner from "../ui/loading-spinner";

export default function AgentForm({ properties }: { properties: any }) {
  const [agentName, setAgentName] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [commission, setCommission] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<AddAgentDataType>({
    resolver: zodResolver(addAgentSchema),
  });

  const onSubmit: SubmitHandler<AddAgentDataType> = async (data) => {
    console.log(data);
    const result = await addAgent(data);

    console.log(result);

    if (!result.success) {
      toast.error(result.error);
    } else {
      toast.success("Agent added successfully");
    }
  };

  const handleAgentSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const emailSchema = z.string().email();

    if (emailSchema.safeParse(email).success) {
      setIsSearching(true); // Start loading
      const result = await searchAgentByEmail(email);
      setIsSearching(false); // End loading

      if (result.success) {
        setAgentName(result.data.name);
        setValue("agent_id", result.data.user_id);
      } else {
        setAgentName("Agent not found");
      }
    }
  };

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Remove currency symbol, commas, and other non-numeric characters
    value = value.replace(/[^0-9]/g, "");

    if (!value) {
      setValue("commission", "");
      setCommission("");
      return;
    }

    const numericValue = parseFloat(value);

    // Update the actual form value with the numeric string
    setValue("commission", numericValue.toString(), { shouldValidate: true });

    // Update the display value with the formatted string
    setCommission("₦" + numericValue.toLocaleString("en-NG"));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="space-y-4">
        <div className="space-y-1">
          <label
            htmlFor="agent"
            className="mb-1 block text-sm font-semibold text-gray-600"
          >
            Agent Email
            <span className="font-bold text-red-500"> *</span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="agent"
              className="relative w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-3 shadow-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              placeholder="Enter agent email"
              onChange={handleAgentSearch}
            />
          </div>

          {agentName && isSearching ? (
            <LoadingSpinner />
          ) : (
            <p className="text-sm font-semibold uppercase">{agentName}</p>
          )}

          {errors.agent_id && (
            <div className="mt-1 text-xs text-red-600">
              <p>{errors.agent_id.message}</p>
            </div>
          )}
        </div>

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
          {errors?.property_id?.message && (
            <p className="mt-1 text-xs text-red-600">
              {errors.property_id.message}
            </p>
          )}
        </div>

        <div>
          <div className="space-y-1">
            <label
              htmlFor="commission"
              className="mb-1 block text-sm font-semibold text-gray-600"
            >
              Commission
              <span className="font-bold text-red-500"> *</span>
            </label>
            <div className="relative">
              <input
                id="commission"
                name="commission"
                value={commission}
                onChange={handleAmount}
                className="relative w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-3 shadow-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
            {errors.commission?.message && (
              <div className="mt-1 text-xs text-red-600">
                <p>{errors.commission?.message}</p>
              </div>
            )}
          </div>
        </div>

        <TextInput
          register={register}
          name="end_date"
          label="End Date"
          required
          type="date"
          error={errors?.end_date?.message}
        />

        <SubmitButton isSubmitting={isSubmitting} text="Add" />
      </fieldset>
    </form>
  );
}
