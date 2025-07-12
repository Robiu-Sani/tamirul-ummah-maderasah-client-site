import React from "react";
import CarouselBanner from "./pages/Home/Banner";
import NoticeSection from "./pages/Home/NoticeSection";
import ServicesSection from "./pages/Home/ServicesSection";
import StudentLifeSection from "./pages/Home/StudentLifeSection";
import AdmissionsSection from "./pages/Home/AdmissionsSection";
import ImageGallery from "./pages/Home/ImageGallery";
import VideoGallery from "./pages/Home/VideoGallery";
import MadrasahCampuses from "./pages/Home/MadrasahCampuses";
import LatestNews from "./pages/Home/LatestNews";

export default function Home() {
  return (
    <div className="bg-green-50">
      <CarouselBanner />
      <LatestNews />
      <NoticeSection />
      <MadrasahCampuses />
      <ServicesSection />
      <StudentLifeSection />
      <AdmissionsSection />
      <ImageGallery />
      <VideoGallery />
    </div>
  );
}
