"use client";

import Image from "next/image";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Gallery({
  displayPhoto,
  gallery,
}: {
  displayPhoto: string;
  gallery: any[];
}) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Add ref to store timer
  const timerRef = React.useRef<NodeJS.Timeout>();

  // Reset timer function
  const resetTimer = React.useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  }, []);

  // Initial timer setup
  React.useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [resetTimer]);

  // Update navigation button handlers
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    resetTimer(); // Reset timer after manual navigation
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    resetTimer(); // Reset timer after manual navigation
  };

  const images = [displayPhoto, ...gallery];

  // Add window width state
  const [windowWidth, setWindowWidth] = React.useState(1100); // Default to desktop size

  // Add effect to update window width
  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    setWindowWidth(window.innerWidth);

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate the visible images based on currentIndex
  const getVisibleThumbnails = () => {
    const numVisible = windowWidth < 1100 ? 5 : 4;
    const mainImageIndex = currentIndex;
    let thumbnails = [...images];

    // Rotate array so current image is first
    thumbnails = [
      ...thumbnails.slice(mainImageIndex),
      ...thumbnails.slice(0, mainImageIndex),
    ];

    return thumbnails.slice(0, numVisible);
  };

  const visibleImages = getVisibleThumbnails();
  // Calculate remaining images (subtract 5 for mobile, 4 for desktop)
  const remainingCount = Math.max(
    0,
    images.length - (windowWidth < 1100 ? 5 : 4),
  );

  return (
    <section className="mb-6 grid h-[50vh] grid-cols-4 grid-rows-4 gap-2 lg:h-[80vh] lg:grid-rows-3 lg:gap-5">
      {visibleImages.map((image, index) => (
        <React.Fragment key={index}>
          {index === 0 && (
            <div
              className={`relative col-span-4 row-span-3 overflow-hidden rounded-xl border border-gray-200 lg:row-span-4 ${images.length <= 1 ? "lg:col-span-4" : "lg:col-span-3"}`}
            >
              <Image
                src={images[currentIndex]}
                alt="Photo of apartment"
                fill
                sizes="100vw"
                quality={100}
                priority={true}
                className="h-full w-full object-cover"
              />
              {images.length > 1 && (
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button
                    onClick={handlePrev}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-white shadow-lg hover:bg-gold/90"
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-white shadow-lg hover:bg-gold/90"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              )}
            </div>
          )}
          {index !== 0 && (
            <div
              className={`relative h-full overflow-hidden rounded-xl ${
                (currentIndex + index) % images.length === currentIndex
                  ? "ring-2 ring-gold"
                  : ""
              }`}
            >
              <Image
                src={image}
                alt="photo of apartment"
                fill
                className={`object-cover ${
                  (currentIndex + index) % images.length === currentIndex
                    ? "opacity-90"
                    : ""
                }`}
              />
              {/* Show overlay on 5th image for mobile, 4th for desktop */}
              {((windowWidth < 1100 && index === 4) ||
                (windowWidth >= 1100 && index === 3)) &&
                remainingCount > 0 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
                    <span className="text-xl font-bold">+{remainingCount}</span>
                  </div>
                )}
            </div>
          )}
        </React.Fragment>
      ))}
    </section>
  );
}
