"use client";

import { useState } from "react";
import { TextInputProps } from "@/definition";

export default function TextareaInput({
  label,
  name,
  register,
  required,
  error,
  disabled,
}: TextInputProps) {
  const [charCount, setCharCount] = useState(0);
  const maxLength = 1200;

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(event.target.value.length);
  };

  return (
    <div className="space-y-1">
      <div className="flex items-end justify-between">
        <label
          htmlFor={label}
          className="mb-1 block text-sm font-semibold text-gray-600"
        >
          {label}{" "}
          {required && <span className="font-bold text-red-500">*</span>}
        </label>
        <div className="text-right text-xs text-gray-600">
          {maxLength - charCount} characters left
        </div>
      </div>

      <div className="relative">
        <textarea
          id={name}
          {...register(name)}
          className="relative w-full resize-none rounded-md border border-gray-300 bg-white px-4 py-3 shadow-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          disabled={disabled}
          maxLength={maxLength}
          onChange={handleInputChange}
        />
      </div>

      {error && (
        <div className="text-xs text-red-600">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
