import React from "react";
import CarouselBanner from "./pages/Home/Banner";
import NoticeSection from "./pages/Home/NoticeSection";
import ServicesSection from "./pages/Home/ServicesSection";
import StudentLifeSection from "./pages/Home/StudentLifeSection";
import AdmissionsSection from "./pages/Home/AdmissionsSection";
import ImageGallery from "./pages/Home/ImageGallery";
import VideoGallery from "./pages/Home/VideoGallery";

export default function Home() {
  return (
    <div>
      <CarouselBanner />
      <NoticeSection />
      <ServicesSection />
      <StudentLifeSection />
      <AdmissionsSection />
      <ImageGallery />
      <VideoGallery />
    </div>
  );
}
