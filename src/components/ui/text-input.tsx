"use client";

import { useTogglePassword } from "@/hooks/useToggleVisibility";
import { Eye, EyeOff } from "lucide-react";
import { TextInputProps } from "@/definition";

export default function TextInput({
  label,
  name,
  register,
  required,
  error,
  type = "text",
  disabled,
}: TextInputProps) {
  const { isVisible, toggleVisibility } = useTogglePassword();

  return (
    <div className="space-y-1">
      <label
        htmlFor={label}
        className="mb-1 block text-sm font-semibold text-gray-600"
      >
        {label} {required && <span className="font-bold text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          type={type === "password" && isVisible ? "text" : type}
          id={name}
          {...register(name)}
          className="relative w-full rounded-md border border-gray-300 bg-white px-4 py-3 shadow-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          disabled={disabled}
        />

        {type === "password" && (
          <button
            type="button"
            className="absolute right-3.5 top-1/2 -translate-y-1/2"
            onClick={() => toggleVisibility()}
          >
            {isVisible ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        )}
      </div>

      {error && (
        <div className="mt-1 text-xs text-red-600">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
