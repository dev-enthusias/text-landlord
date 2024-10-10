"use client";

import { useState } from "react";
import { getTrackBackground, Range } from "react-range";

export default function PriceRangeSlider() {
  const MIN = 0;
  const MAX = 5000000;
  const [values, setValues] = useState([MIN, MAX]);

  return (
    <div>
      <h2 className="mb-1 text-center">
        ₦{values[0]} - ${values[1].toLocaleString("en-NG")}
      </h2>
      <Range
        step={100000} // Adjust the step size here
        min={MIN}
        max={MAX}
        values={values}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              backgroundColor: "#087c7c20",
              background: getTrackBackground({
                values: values,
                colors: ["#087c7c20", "#087c7c", "#087c7c20"], // Color segments (before, between, and after the thumbs)
                min: MIN,
                max: MAX,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              backgroundColor: "#087c7c",
              borderRadius: "50%",
            }}
          />
        )}
      />
      <p className="mt-2 flex justify-between text-[#087c7c90]">
        <span>₦0</span>
        <span>₦{MAX.toLocaleString("en-NG")}</span>
      </p>
    </div>
  );
}
