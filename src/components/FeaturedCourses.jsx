// src/components/FeaturedCoursesSection.jsx (Combined file)

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import { staggerContainerVariants, staggerItemVariants, hoverVariants } from "../animations/variants";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "../pages/Courses.css"; // Assuming this styles the grid and cards

import bharathanatyam from "../assets/courses/Bharathanatyam.png"
import violin from "../assets/courses/1guitar.png";
// --- Data moved from Home.jsx ---
const featuredCourses = [
  {
    id: "bharatanatym",
    title: "Bharatanatyam",
    shortDesc: "Classical Indian dance that embodies rhythm, devotion, and expression.",
    longDesc: "Our Bharatanatyam course focuses on the essence of Nritta (pure dance), Nritya (expressive dance), and Natya (dramatic storytelling). Students are trained in traditional adavus, mudras, and abhinaya to cultivate grace, rhythm, and bhava. The program nurtures both technique and spiritual connection to the art.",
    image: bharathanatyam,
  },
  {
    id: "Violin",
    title: "Violin",
    shortDesc: "A versatile instrument that brings emotion and melody to every performance.",
    longDesc: "Our Violin program covers bowing techniques, fingering, and foundational music theory. Students learn classical, devotional, and contemporary pieces that enhance precision, rhythm, and musical expression.",
    image: violin,
  },
  {
    id: "carnatic Music",
    title: "Carnatic Vocal Music",
    shortDesc: "Master the melody and rhythm of South Indian classical music.",
    longDesc: "This course introduces students to the fundamentals of Carnatic music — swaras, ragas, and talas. With an emphasis on voice culture, compositions, and improvisation (manodharma), learners gain a strong foundation in both traditional kritis and performance skills guided by seasoned vocalists.",
    image: "src/assets/courses/song practice.jpg",
  },
  {
    id: "mridangam",
    title: "Mridangam",
    shortDesc: "The heartbeat of Carnatic rhythm — percussion with precision.",
    longDesc: "Students are trained in tala structures, korvais, and accompaniment techniques for vocal and instrumental concerts. The course emphasizes hand coordination, rhythmic improvisation, and the art of enhancing live performances through dynamic rhythm play.",
    image: "/assets/courses/mridangam.jpg",
  },
  {
    id: "Drums",
    title: "Drums",
    shortDesc: "Feel the power of rhythm with dynamic and energetic percussion training.",
    longDesc: "This course focuses on stick control, timing, and rhythmic patterns across multiple genres. Students build strong coordination and stage presence through practical exercises and performance-based learning.",
    image: "src/assets/courses/23.png",
  },

  {
    id: "keyboard",
    title: "Keyboard & Piano",
    shortDesc: "Learn melodies and harmonies that blend tradition and modern music.",
    longDesc: "A structured program introducing Western notation, scales, chords, and improvisation. Students explore devotional, classical, and fusion styles, enhancing their sense of pitch, rhythm, and musical expression through hands-on practice.",
    image: "src/assets/courses/pooja vepp.jpg",
  },
  {
    id: "guitar",
    title: "Guitar",
    shortDesc: "Master the strings with classical and contemporary playing techniques.",
    longDesc: "This course teaches acoustic and classical guitar fundamentals — chords, rhythm patterns, and melodic solos. Students also explore Indian film music and devotional compositions, blending global and local sounds beautifully.",
    image: "src/assets/courses/guitar.png",
  },
];
// --- End of data ---


const FeaturedCoursesSection = () => {
  const { ref: coursesRef, opacity, scale, y } = useScrollAnimation();
  const memoizedCourses = useMemo(() => featuredCourses, []);

  return (
    <motion.section
      ref={coursesRef}
      className="courses-page"
      style={{ opacity, scale, y }}
      variants={staggerContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="courses-heading"
        variants={staggerItemVariants}
      >
        Featured Courses
      </motion.h2>

      <motion.div
        className="courses-grid"
        variants={staggerContainerVariants}
      >
        {memoizedCourses.map((course, index) => (
          <motion.div
            key={course.id}
            variants={staggerItemVariants}
            whileHover="hover"
            whileTap="tap"
            custom={index}
          >
            <CourseCard course={course} fullImage />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        style={{ textAlign: 'center', marginTop: '3rem' }}
        variants={staggerItemVariants}
      >
        <motion.a
          href="/courses"
          variants={hoverVariants}
          whileHover="hover"
          whileTap="tap"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            background: 'linear-gradient(90deg, #d4a84f, #243d7a)',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem',
          }}
          aria-label="View all courses"
          role="button"
          tabIndex={0}
        >
          View All Courses →
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default FeaturedCoursesSection;
