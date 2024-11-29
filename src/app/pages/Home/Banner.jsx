"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "tailwindcss/tailwind.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKNIzsa6dGOfAWIsMh-QhYq80_BDwnYHqQZA&s",
    title: "Explore the World",
    description: "Discover new places and unique experiences.",
    buttonText: "Learn More",
  },
  {
    bg: "https://picsum.photos/1024/480/?image=54",
    title: "Adventure Awaits",
    description: "Step out and embark on exciting journeys.",
    buttonText: "Start Now",
  },
  {
    bg: "https://wowslider.com/sliders/demo-93/data1/images/landscape.jpg",
    title: "Nature's Beauty",
    description: "Embrace the breathtaking views and serenity.",
    buttonText: "View More",
  },
  {
    bg: "https://www.w3.org/TR/2019/NOTE-wai-aria-practices-1.1-20190207/examples/carousel/carousel-1/images/lands-endslide__800x600.jpg",
    title: "Urban Wonders",
    description: "Dive into the vibrant energy of cityscapes.",
    buttonText: "Explore",
  },
];

const CarouselBanner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => {
      emblaApi.scrollNext();
    };

    const interval = setInterval(autoplay, 4000);

    emblaApi.on("select", () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    });

    return () => clearInterval(interval);
  }, [emblaApi]);

  const handlePrev = () => emblaApi?.scrollPrev();
  const handleNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative w-full">
      {/* Embla Carousel Container */}
      <div
        ref={emblaRef}
        className="overflow-hidden h-[450px] flex justify-center items-center sm:h-[600px] bg-black"
      >
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] flex flex-col justify-center items-center bg-cover bg-center text-white h-full"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.693),rgba(0, 0, 0, 0.614)),url(${slide.bg})`,
              }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-lg sm:text-xl mb-6">{slide.description}</p>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-800 rounded text-white">
                {slide.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={handlePrev}
          className="text-white bg-black/50 hover:bg-black/80 p-2 rounded-full"
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="text-white bg-black/50 hover:bg-black/80 p-2 rounded-full"
        >
          <FaArrowRight size={20} />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselBanner;
