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
      <WhatsAppButton number="+919446560812" message="Hello, I want to know more about the courses" />
    </>
  );
};

export default Home;
