// src/pages/Courses.jsx
import React from "react";
import { motion } from "framer-motion";
import CourseCard from "../components/CourseCard";
import { staggerContainerVariants, staggerItemVariants } from "../animations/variants";
import { useIntersectionAnimation } from "../hooks/useScrollAnimation";
import bharatanatyamImage from "../assets/courses/Bharathanatyam.png";
import guitar from "../assets/courses/1guitar.png";
import violineImage from "../assets/courses/1guitar.png";
import carnaticImage from "../assets/courses/song practice.jpg";
import mridangamImage from "../assets/courses/mridangam.jpg";
import drumsImage from "../assets/courses/23.png";
import keyboardImage from "../assets/courses/pooja vepp.jpg";
import "./Courses.css";

const courses = [
  {
    id: "bharatanatyam",
    title: "Bharatanatyam",
    shortDesc:
      "Classical Indian dance that embodies rhythm, devotion, and expression.",
    longDesc:
      "Our Bharatanatyam course focuses on the essence of Nritta (pure dance), Nritya (expressive dance), and Natya (dramatic storytelling). Students are trained in traditional adavus, mudras, and abhinaya to cultivate grace, rhythm, and bhava. The program nurtures both technique and spiritual connection to the art.",
    image: bharatanatyamImage,
  },
  {
    id: "violine",
    title: "Violine",

    longDesc:
      "Our Violin course emphasizes mastering melody, pitch, and emotional expression. Students learn foundational bowing techniques, finger placement, and swaras to build precision and fluid musicality. The program nurtures both technical skill and a deep connection to the classical music tradition, helping learners express ragas with clarity, devotion, and artistry",
    image: violineImage,
  },
  {
    id: "carnaticmusic",
    title: "  Carnatic Music",
    shortDesc:
      "Master the melody and rhythm of South Indian classical music.",
    longDesc:
      "This course introduces students to the fundamentals of Carnatic music — swaras, ragas, and talas. With an emphasis on voice culture, compositions, and improvisation (manodharma), learners gain a strong foundation in both traditional kritis and performance skills guided by seasoned vocalists.",
    image: carnaticImage,
  },
  {
    id: "mridangam",
    title: "Mridangam",
    shortDesc: "The heartbeat of Carnatic rhythm — percussion with precision.",
    longDesc:
      "Students are trained in tala structures, korvais, and accompaniment techniques for vocal and instrumental concerts. The course emphasizes hand coordination, rhythmic improvisation, and the art of enhancing live performances through dynamic rhythm play.",
    image: mridangamImage,
  },
  {
    id: "drums",
    title: "Drums",
    shortDesc:
      "String instrument that resonates with the soul of Indian tradition.",
    longDesc:
      "Our Drums course focuses on developing rhythm, timing, and dynamic control. Students train in essential stick techniques, coordination exercises, and rhythmic patterns to strengthen their sense of tempo and musical energy. The program builds technical confidence while fostering creativity, allowing learners to perform with power, discipline, and expressive groove",
    image: drumsImage,
  },
  
  {
    id: "keyboard",
    title: "Keyboard & Piano",
    shortDesc:
      "Learn melodies and harmonies that blend tradition and modern music.",
    longDesc:
      "A structured program introducing Western notation, scales, chords, and improvisation. Students explore devotional, classical, and fusion styles, enhancing their sense of pitch, rhythm, and musical expression through hands-on practice.",
    image: keyboardImage,
  },
  {
    id: "guitar",
    title: "Guitar",
    shortDesc:
      "Master the strings with classical and contemporary playing techniques.",
    longDesc:
      "This course teaches acoustic and classical guitar fundamentals — chords, rhythm patterns, and melodic solos. Students also explore Indian film music and devotional compositions, blending global and local sounds beautifully.",
    image: guitar,
  },
];

function Courses() {
  const { ref: coursesRef, isInView: coursesInView } = useIntersectionAnimation(0.2);

  return (
    <motion.section
      ref={coursesRef}
      className="courses-page"
      variants={staggerContainerVariants}
      initial="hidden"
      animate={coursesInView ? "visible" : "hidden"}
    >
      <motion.h2
        className="courses-heading"
        variants={staggerItemVariants}
      >
        Our Courses
      </motion.h2>
      <motion.section
        variants={staggerItemVariants}
      >
        
      </motion.section>

      <motion.div
        className="courses-grid"
        variants={staggerContainerVariants}
      >
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            variants={staggerItemVariants}
            custom={index}
          >
            <CourseCard course={course} detailed />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Courses;
