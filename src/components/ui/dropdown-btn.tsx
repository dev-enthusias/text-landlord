"use client";

import { useState, useRef, useEffect, ReactElement } from "react";

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownButtonProps {
  title: string;
  items: DropdownItem[];
}

export default function DropdownButton({
  title,
  items,
}: DropdownButtonProps): ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-x-0.5 rounded px-4 py-2 text-white/80 hover:text-white"
      >
        {title}
        <svg
          className={`ml-1 inline-block h-4 w-4 ${isOpen ? "rotate-180" : ""} transition-all duration-300 ease-out`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <ul
          ref={dropdownRef}
          className="absolute left-0 z-10 mt-2 w-48 rounded border border-gray-200 bg-white shadow-md"
        >
          {items.map((item, index) => (
            <li key={index} className="px-4 py-2 hover:bg-gray-100">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
