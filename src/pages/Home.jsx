import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "../components/WhatsAppButton";
import PopupMessage from "../components/PopupMessage";
import HeroSection from "../components/HeroSection";
import FacultySlider from "../components/FacultySlider";
import AboutSection from "../components/AboutSection";
import LazyImage from "../components/LazyImage";
import { pageVariants, pageTransition, staggerContainerVariants, staggerItemVariants, hoverVariants } from "../animations/variants";
import { useIntersectionAnimation } from "../hooks/useScrollAnimation";
import FacultyPage from "../pages/FacultyPage"
import GallerySection from "../components/GallerySection";
import Courses from "./Courses";

const Home = () => {
  return (
    <>
      <PopupMessage />
      <HeroSection />
      <AboutSection />
      <Courses/>
      <FacultySlider />
      <FacultyPage/>
      <GallerySection />
      
      
      <WhatsAppButton number="+919446560812" message="Hello, I want to know more about the courses" />
    </>
  );
};

export default Home;
