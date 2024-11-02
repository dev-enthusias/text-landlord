"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useTogglePassword } from "@/hooks/useToggleVisibility";
import { Eye, EyeOff } from "lucide-react";
import { TextInputProps } from "@/definition";

export default function TextInput({
  label,
  name,
  required,
  error,
  type = "text",
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);
  const { isVisible, toggleVisibility } = useTogglePassword();

  // Get error messages safely
  const getErrorMessages = useCallback((): string[] => {
    return error?.[name] || [];
  }, [error, name]);

  // Reset hasChanged when new errors are received from validation
  useEffect(() => {
    if (getErrorMessages().length > 0) {
      setHasChanged(false); // Reset so that the new error can show
    }
  }, [error, name, getErrorMessages]);

  const hasError = getErrorMessages().length > 0;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = () => {
    if (!hasChanged) {
      setHasChanged(true); // Mark as changed to avoid showing the error after input change
    }
  };

  return (
    <div className="space-y-1">
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-600"
      >
        {label} {required && <span className="font-bold text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          type={type === "password" && isVisible ? "text" : type}
          name={name}
          className="a relative w-full rounded-md border border-gray-300 bg-white px-4 py-3 shadow-sm"
          onFocus={handleFocus}
          onBlur={() => handleBlur()}
          onChange={() => handleChange()}
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

      {!isFocused && !hasChanged && hasError && (
        <p className="mt-1 text-sm text-red-600">
          {error !== undefined && error[name]![0]}
        </p>
      )}
    </div>
  );
}
