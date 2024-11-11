"use client";

import Image from "next/image";
import { useState } from "react";
import { FaCircleChevronDown } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

export default function OccupiedPropertyAccordion() {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <article className="group cursor-pointer rounded-lg bg-gold/10 p-2 text-gray-800">
      <section
        className="flex items-center justify-between"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        <div className="flex items-center gap-x-2">
          <div className="relative h-14 w-14 overflow-hidden rounded-lg">
            <Image
              src="/images/duplex.webp"
              alt="Image of property"
              fill
              sizes="90px"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-black">Duplex</h3>
            <p className="text-sm">Lekki, Lagos</p>
          </div>
        </div>
        <button
          onClick={() => setShowDropDown(!showDropDown)}
          className={`transition-all duration-300 ease-in-out ${showDropDown ? "rotate-180" : ""}`}
        >
          <FaCircleChevronDown className="h-5 w-5 text-[#b59410]" />
        </button>
      </section>
      <AnimatePresence>
        {showDropDown && (
          <motion.section
            initial={{ opacity: 0, marginTop: 0, paddingTop: 0 }}
            animate={{ opacity: 1, marginTop: 8, paddingTop: 8 }}
            exit={{ opacity: 0, marginTop: 0, paddingTop: 0 }}
            transition={{ ease: "easeInOut", duration: 0.1 }}
            className="border-t border-gold px-3 cursor-default"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0 } }}
              className="mb-3 flex justify-between"
            >
              <div>
                <h3 className="text-xs font-semibold">
                  Rent{" "}
                  <span className="ml-1 text-right font-semibold text-orange-700">
                    (overdue)
                  </span>
                </h3>
                <p className="font-bold">&#8358;500,000</p>
              </div>
              <div className="mb-3">
                <h3 className="text-xs font-semibold">Moved In</h3>
                <p>2023-03-15</p>
              </div>
              <div className="mb-3">
                <h3 className="text-xs font-semibold">Due Date</h3>
                <p>2024-03-15</p>
              </div>
            </motion.div>
            <div>
              <h3 className="mb-1 text-xs font-semibold">Rent History</h3>
              <div className="space-y-2">
                <article className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">&#8358;500,000</p>
                    <p className="text-xs">2024-03-15</p>
                  </div>
                  <p className="rounded-full bg-green-700/20 px-4 py-0.5 text-xs font-bold text-green-700">
                    Paid
                  </p>
                </article>
                <article className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">&#8358;500,000</p>
                    <p className="text-xs">2024-03-15</p>
                  </div>
                  <p className="rounded-full bg-green-700/20 px-4 py-0.5 text-xs font-bold text-green-700">
                    Paid
                  </p>
                </article>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </article>
  );
}
