import { useState } from "react";

export const useSlider = (length: number, sliderWidth: number) => {
  const CARD_WIDTH = 150;
  const imagesPerSlide = Math.floor(sliderWidth / CARD_WIDTH);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = currentIndex + imagesPerSlide;
    if (newIndex < length) {
      setCurrentIndex(newIndex);
    }
  };

  const prevSlide = () => {
    const newIndex = currentIndex - imagesPerSlide;
    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
    }
  };

  const currentSlide = currentIndex / imagesPerSlide;

  const slidesCount = Math.ceil(length / imagesPerSlide);

  return {
    imagesPerSlide,
    currentIndex,
    currentSlide,
    prevSlide,
    nextSlide,
    slidesCount,
    leftLimit: currentIndex - imagesPerSlide < 0,
    rightLimit: currentIndex + imagesPerSlide >= length,
  };
};
