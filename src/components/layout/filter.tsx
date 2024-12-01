"use client";

import { useState } from "react";
import CustomCheckbox from "../ui/custome-checkbox";
import { propertyCategories, propertyTypes } from "@/constants/data";
import { X } from "lucide-react";

export default function Filter({
  setFilterModal,
}: {
  setFilterModal?: (bool: boolean) => void;
}) {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <header className="mb-4 flex items-center justify-between">
        <h2 className="font-semibold text-black">Filters</h2>
        <div className="flex items-center gap-x-2">
          <button>
            <span className="text-xs underline">Reset Filters</span>{" "}
            <span className="ml-0.5 rounded bg-gold/60 px-1 py-0.5 text-xxs font-semibold text-black">
              3
            </span>
          </button>
          <button
            className="rounded bg-gray-200 p-1"
            onClick={() => setFilterModal && setFilterModal(false)}
          >
            <X size={20} />
          </button>
        </div>
      </header>

      <div className="space-y-6">
        <section>
          <h3 className="mb-2 text-sm font-medium text-gray-700">
            Property Type
          </h3>
          <ul className="space-y-2 text-gray-600">
            {propertyCategories.map((category, i) => (
              <li key={i} className="text-xs tracking-wide">
                <CustomCheckbox
                  id="disabled"
                  checked={checked}
                  label={category.title}
                  onChange={() => setChecked(!checked)}
                />
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="mb-2 text-sm font-medium text-gray-700">
            Property Category
          </h3>
          <ul className="space-y-2 text-gray-600">
            {propertyTypes.map((types, i) => (
              <li key={i} className="text-xs tracking-wide">
                <CustomCheckbox
                  id="disabled"
                  checked={checked}
                  label={types}
                  onChange={() => setChecked(!checked)}
                />
              </li>
            ))}
          </ul>
        </section>

        <div className="grid grid-cols-2 gap-x-5">
          <section>
            <h3 className="mb-2 text-sm font-medium text-gray-700">
              Min. Price
            </h3>
            <select className="w-full rounded-full border border-gray-300 px-3 py-2 text-xs text-gray-600 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold">
              <option value="any">150,000</option>
              <option value="any">250,000</option>
              <option value="any">350,000</option>
              <option value="any">450,000</option>
              <option value="any">550,000</option>
            </select>
          </section>
          <section>
            <h3 className="mb-2 text-sm font-medium text-gray-700">
              Max. Price
            </h3>
            <select className="w-full rounded-full border border-gray-300 px-3 py-2 text-xs text-gray-600 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold">
              <option value="any">150,000</option>
              <option value="any">250,000</option>
              <option value="any">350,000</option>
              <option value="any">450,000</option>
              <option value="any">550,000</option>
            </select>
          </section>
        </div>

        <div className="grid grid-cols-2 gap-x-5">
          <section>
            <h3 className="mb-2 text-sm font-medium text-gray-700">Bedroom</h3>
            <select className="w-full rounded-full border border-gray-300 px-3 py-2 text-xs text-gray-600 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold">
              <option value="any">Any</option>
              <option value="any">1</option>
              <option value="any">2</option>
              <option value="any">3</option>
              <option value="any">4</option>
              <option value="any">5+</option>
            </select>
          </section>
          <section>
            <h3 className="mb-2 text-sm font-medium text-gray-700">Bathroom</h3>
            <select className="w-full rounded-full border border-gray-300 px-3 py-2 text-xs text-gray-600 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold">
              <option value="any">Any</option>
              <option value="any">1</option>
              <option value="any">2</option>
              <option value="any">3</option>
              <option value="any">4</option>
              <option value="any">5+</option>
            </select>
          </section>
        </div>

        <div className="grid grid-cols-2 gap-x-5">
          <section>
            <h3 className="mb-2 text-sm font-medium text-gray-700">
              Size (Min)
            </h3>
            <select className="w-full rounded-full border border-gray-300 px-3 py-2 text-xs text-gray-600 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold">
              <option value="any">Any</option>
              <option value="any">1</option>
              <option value="any">2</option>
              <option value="any">3</option>
              <option value="any">4</option>
              <option value="any">5+</option>
            </select>
          </section>
          <section>
            <h3 className="mb-2 text-sm font-medium text-gray-700">
              Size (Max)
            </h3>
            <select className="w-full rounded-full border border-gray-300 px-3 py-2 text-xs text-gray-600 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold">
              <option value="any">Any</option>
              <option value="any">1</option>
              <option value="any">2</option>
              <option value="any">3</option>
              <option value="any">4</option>
              <option value="any">5+</option>
            </select>
          </section>
        </div>
      </div>
    </>
  );
}
