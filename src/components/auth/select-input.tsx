"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

export default function SelectInput({
  options,
  value,
  label,
  onChange,
  required,
  placeholder = "Select an option",
}: {
  options: { value: string; label: string }[];
  value: string;
  label: string;
  required?: boolean;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative w-full">
      <p className="mb-1 block font-semibold text-gray-600">
        {label} {required && <span className="font-bold text-red-500">*</span>}
      </p>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="focus:border-primary focus:ring-primary relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-3 pl-4 pr-10 text-left shadow-sm focus:outline-none focus:ring-1"
      >
        <span className="block truncate">
          {selectedOption ? selectedOption.label : placeholder}
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
              key={option.value}
              className={` ${
                option.value === value
                  ? "bg-primary text-black"
                  : "hover:bg-primary/20 text-gray-900"
              } group flex w-full items-center px-3 py-2 text-left`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              <span className="flex-grow truncate">{option.label}</span>
              {option.value === value && <Check className="ml-2 h-4 w-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
