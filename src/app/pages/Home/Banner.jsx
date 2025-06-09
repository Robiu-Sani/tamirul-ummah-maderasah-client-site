"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "tailwindcss/tailwind.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useAxiousSource from "../../_DefaultsComponent/useAxiousSource";

const CarouselBanner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carousel, setCarousel] = useState(null);
  const axiosSource = useAxiousSource();

  useEffect(() => {
    // Fetch data on mount
    axiosSource
      .get(`/slide`)
      .then((response) => setCarousel(response.data.data[0]))
      .catch((err) => console.error(err));
  }, [axiosSource]);

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

  if (!carousel) return <p></p>;

  const slides = [
    {
      bg: carousel.images.slide1,
      title: carousel.slide1Title,
      description: carousel.slide1Description,
    },
    {
      bg: carousel.images.slide2,
      title: carousel.slide2Title,
      description: carousel.slide2Description,
    },
    {
      bg: carousel.images.slide3,
      title: carousel.slide3Title,
      description: carousel.slide3Description,
    },
    {
      bg: carousel.images.slide4,
      title: carousel.slide4Title,
      description: carousel.slide4Description,
    },
  ];

  return (
    <div className="relative w-full">
      {/* Embla Carousel Container */}
      <div
        ref={emblaRef}
        className="overflow-hidden  h-[450px] flex justify-center items-center sm:h-[600px] bg-black"
      >
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] p-5 flex flex-col justify-center items-center bg-cover bg-center text-white h-full"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.6)),url(${slide.bg})`,
              }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-lg sm:text-xl mb-6 text-center max-w-2xl">
                {slide.description}
              </p>
              {/* <Link
                href={`/pages/admition`}
                className="px-6 py-2 bg-green-500  z-[99999999] hover:bg-green-600 rounded text-white"
              >
                ভর্তি ফরম
              </Link> */}
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
