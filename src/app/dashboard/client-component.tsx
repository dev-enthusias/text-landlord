"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { routes } from "@/constants/routes";
import { EyeIcon, EyeOffIcon, ShieldCheckIcon } from "lucide-react";
import { useSwipeable } from "react-swipeable";

export function WalletOverview() {
  const [isVisible, setVisibility] = useState(true);

  return (
    <section className="flex w-full items-start justify-between rounded-lg bg-primary px-4 py-3">
      <div>
        <div className="mb-4 flex items-center gap-x-4">
          <p className="flex items-center gap-x-1 text-sm">
            <ShieldCheckIcon size={14} />
            Available balance
          </p>
          <button onClick={() => setVisibility(!isVisible)}>
            {isVisible ? <EyeIcon size={14} /> : <EyeOffIcon size={14} />}
          </button>
        </div>
        <p className="text-xl lg:text-3xl font-semibold">
          {isVisible ? "₦10,000,000" : "****"}
        </p>
      </div>
      <Link
        href={routes.DASHBOARDADDMONEY}
        className="rounded-full bg-black px-3 py-2 text-xs text-white"
      >
        <span className="">+</span> Add Money
      </Link>
    </section>
  );
}

const images = [
  "/images/duplex.webp",
  "/images/image-2.jpeg",
  "/images/image-3.jpeg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  // Handle swipe gestures
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true, // Prevent swiping on touch slide
    trackMouse: true, // Enables swipe with the mouse for testing on desktops
  });

  // Auto-slide functionality (move to the next slide every 3 seconds)
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="relative mx-auto flex h-[30vh] w-full items-center justify-center"
        {...handlers} // Attach swipe handlers
      >
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 hidden rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75"
        >
          ❮
        </button>

        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="w-full object-cover"
            priority
          />
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 hidden rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75"
        >
          ❯
        </button>
      </div>

      <div className="mt-2 flex justify-center space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            className={`h-1.5 rounded bg-accent ${currentIndex === i ? "w-8 bg-accent" : "w-1.5 bg-accent/40"}`}
          ></button>
        ))}
      </div>
    </>
  );
};

export default ImageSlider;
