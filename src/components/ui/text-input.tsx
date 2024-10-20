"use client";

import React, { useEffect, useState } from "react";

export default function TextInput({
  label,
  name,
  required,
  error,
}: {
  label: string;
  name: string;
  required?: boolean;
  error?: any;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);

  // Reset hasChanged when new errors are received from validation
  useEffect(() => {
    if (error && error[name]?.length > 0) {
      setHasChanged(false); // Reset so that the new error can show
    }
  }, [error, name]);

  const hasError = error && error[name]?.length > 0;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setIsFocused(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!hasChanged) {
      setHasChanged(true); // Mark as changed to avoid showing the error after input change
    }
  };

  return (
    <div className="space-y-1">
      <label htmlFor={label} className="block font-semibold text-gray-600">
        {label} {required && <span className="font-bold text-red-500">*</span>}
      </label>
      <input
        type="text"
        name={name}
        className="relative w-full rounded-md border border-gray-300 bg-white px-4 py-3 shadow-sm hover:border-primary hover:ring-1 hover:ring-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        onFocus={handleFocus}
        onBlur={(e) => handleBlur(e)}
        onChange={(e) => handleChange(e)}
      />

      {!isFocused && !hasChanged && hasError && (
        <p className="mt-1 text-sm text-red-600">{error[name][0]}</p>
      )}
    </div>
  );
}
