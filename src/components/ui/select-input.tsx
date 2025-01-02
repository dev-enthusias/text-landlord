"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { useController, Control } from "react-hook-form";
import { useGlobalStore } from "@/stores/global-store";

type Option = {
  id: number | string;
  name: string;
};

export default function SelectInput({
  options: rawOptions,
  name,
  control,
  label,
  required,
  placeholder = "Select an option",
  error,
}: {
  options: string[] | Option[];
  name: string;
  control: Control<any>;
  label: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
}) {
  const updateCountryId = useGlobalStore((state) => state.updateCountryId);
  const updateStateId = useGlobalStore((state) => state.updateStateId);
  const [isOpen, setIsOpen] = useState(false);

  // Transform either format to Option array
  const options =
    Array.isArray(rawOptions) && typeof rawOptions[0] === "string"
      ? (rawOptions as string[]).map((item) => ({
          id: item,
          name: item,
        }))
      : (rawOptions as Option[]);

  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    // rules: { required },
  });

  const selectedOption = options.find((opt) => opt.id === value);

  const handleOptionClick = (optionId: string | number) => {
    onChange(optionId);
    setIsOpen(false);
    if (name === "country_id") {
      updateCountryId(optionId);
    }
    if (name === "state_id") {
      updateStateId(optionId);
    }
  };

  return (
    <div className="relative w-full">
      <p className="mb-1 block text-sm font-semibold text-gray-600">
        {label} {required && <span className="font-bold text-red-500">*</span>}
      </p>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-3 pl-4 pr-10 text-left shadow-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
      >
        <span className="block truncate">
          {selectedOption ? selectedOption.name : placeholder}
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronDown
            className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
              isOpen ? "rotate-180 transform" : ""
            }`}
          />
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-gray-300 focus:outline-none sm:text-sm">
          {options.map((option) => (
            <button
              key={option.id}
              className={`${
                value && option.id === value
                  ? "bg-gold text-black"
                  : "text-gray-900 hover:bg-gold/20"
              } group flex w-full items-center px-3 py-2 text-left`}
              onClick={() => handleOptionClick(option.id)}
            >
              <span className="flex-grow truncate">{option.name}</span>
              {option.id === value && <Check className="ml-2 h-4 w-4" />}
            </button>
          ))}
        </div>
      )}

      {error && (
        <div className="mt-1 text-xs text-red-600">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
