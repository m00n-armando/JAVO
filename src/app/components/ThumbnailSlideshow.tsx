"use client";

import { useState, useEffect } from 'react';
import Image from "next/legacy/image";

interface ThumbnailSlideshowProps {
  images: string[];
}

const ThumbnailSlideshow: React.FC<ThumbnailSlideshowProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return; // No need for slideshow if 0 or 1 image

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={src}
            alt={`Thumbnail image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default ThumbnailSlideshow;