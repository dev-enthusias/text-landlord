"use client";

import { useState } from "react";

interface DropdownProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
}

export default function Dropdown({ trigger, content }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 100); // Small delay to allow moving cursor to dropdown
  };

  return (
    <div>
      {/* Trigger element */}
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {trigger}
      </div>

      {/* Dropdown content */}
      {isOpen && (
        <div
          className="no-scrollbar custom-shadow absolute right-0 top-full z-50 mt-4 w-60 rounded-md bg-white px-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {content}
        </div>
      )}
    </div>
  );
}
