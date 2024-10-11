"use client";

import PriceRangeSlider from "@/components/general/pricerange-slider";
import { FilterIcon, XCircle } from "lucide-react";
import { useState } from "react";

export default function FilterModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="mb-3 ml-auto flex w-full items-center justify-between rounded-lg border bg-gray-50 px-4 py-3 lg:w-[420px]"
      >
        <span className="text-xs">Filter by categories, beds, baths, area</span>
        <FilterIcon size={16} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[1000000000] flex items-center justify-center bg-black bg-opacity-50">
          <article className="relative mx-auto w-[95%] max-w-[440px] rounded-t-2xl bg-white lg:rounded-b-2xl">
            <button
              onClick={handleClose}
              className="absolute right-5 top-5 text-xl"
            >
              <XCircle />
            </button>

            <h2 className="mb-4 border-b p-5 pb-3 text-center text-lg font-bold">
              Filters
            </h2>

            <section className="space-y-8 px-5 pb-6 lg:space-y-12">
              <div>
                <h3 className="mb-2 font-semibold lg:font-medium">Bed Rooms</h3>
                <ul className="flex gap-x-4">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <li
                        key={i}
                        className="custom-shadow-sm w-full rounded py-1 text-center font-medium"
                      >
                        {i === 4 ? "5+" : i + 1}
                      </li>
                    ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-semibold lg:font-medium">
                  Bath Rooms
                </h3>
                <ul className="flex gap-x-4">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <li
                        key={i}
                        className="custom-shadow-sm w-full rounded py-1 text-center font-medium"
                      >
                        {i === 4 ? "5+" : i + 1}
                      </li>
                    ))}
                </ul>
              </div>

              <div>
                <h3 className="mb- font-semibold lg:font-medium">Price</h3>
                <PriceRangeSlider />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-accent py-3 font-semibold text-white transition-colors duration-300 ease-out hover:bg-accent/80"
              >
                Apply Filter
              </button>
            </section>
          </article>
        </div>
      )}
    </>
  );
}
