"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  "https://i.imgur.com/7PgTlAd.jpeg",
  "https://i.imgur.com/yGZ7qU0.jpeg",
  "https://i.imgur.com/7wipxnd.jpeg"
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {images.map((src, index) => (
        <div
          key={index}
          className={`slideshow-slide ${index === currentIndex ? 'active' : ''}`}
        >
          <Image
            src={src}
            alt={`Slideshow image ${index + 1}`}
            fill
            sizes="100vw"
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
