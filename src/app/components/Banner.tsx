"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex rounded-lg items-center justify-center w-full h-96 mt-8">
      <button
        onClick={prevImage}
        className="left-0 top-1/2 font-bold bg-slate-300   px-4 py-2 rounded-full text-purple-700 mx-4"
      >
        {"<"}
      </button>
      <div className="relative w-full h-96">
        <Image
          src={images[currentIndex]}
          alt={`Banner ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <button
        onClick={nextImage}
        className="right-0 top-1/2 font-bold bg-slate-300   px-4 py-2 rounded-full text-purple-700 mx-4"
      >
        {">"}
      </button>
    </div>
  );
}
