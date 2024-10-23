"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";


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
        className="relative mx-auto flex h-[30vh] w-full items-center justify-center lg:h-[60vh]"
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
