"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const photos = [
  "/images/duplex.webp",
  "/images/tp-4.jpeg",
  "/images/r-4.jpeg",
  "/images/a-1.jpg",
  "/images/sl-2.jpeg",
];

const ImageSlider = ({ images = photos }: { images?: string[] }) => {
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
    const interval = setInterval(nextSlide, 2000);

    return () => clearInterval(interval);
  }, []);

  // relative mx-auto flex h-full w-full items-center justify-center h-[30vh] lg:h-[60vh]
  return (
    <>
      <div
        className="relative mx-auto flex h-full w-full items-center justify-center"
        {...handlers} // Attach swipe handlers
      >
        {/* <button
          onClick={prevSlide}
          className="absolute left-1 z-10 hidden h-8 w-8 items-center justify-center rounded-full bg-primary p-2 text-black hover:bg-opacity-75 lg:flex"
        >
          ❮
        </button> */}

        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <Image
            src={images[currentIndex]}
            alt={``}
            fill
            className="w-full object-cover"
            priority
          />
        </div>

        {/* <button
          onClick={nextSlide}
          className="absolute right-1 z-10 hidden h-8 w-8 items-center justify-center rounded-full bg-primary p-2 text-black hover:bg-opacity-75 lg:flex"
        >
          ❯
        </button> */}
      </div>

      {/* <div className="mt-2 flex justify-center space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            className={`h-1.5 rounded bg-accent ${currentIndex === i ? "w-8 bg-accent" : "w-1.5 bg-accent/40"}`}
          ></button>
        ))}
      </div> */}
    </>
  );
};

export default ImageSlider;
