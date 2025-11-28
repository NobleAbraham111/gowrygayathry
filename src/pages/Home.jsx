import React from "react";
import WhatsAppButton from "../components/WhatsAppButton";
import PopupMessage from "../components/PopupMessage";
import HeroSection from "../components/HeroSection";
import FacultySlider from "../components/FacultySlider";
import AboutSection from "../components/AboutSection";
import GallerySection from "../components/GallerySection";
import FeaturedCourses from "../components/FeaturedCourses";

const Home = () => {
  return (
    <>
      <PopupMessage />
      <HeroSection />
      <AboutSection />
      <FeaturedCourses />
      <FacultySlider />
      <GallerySection />
    </>
  );
};

export default Home;
