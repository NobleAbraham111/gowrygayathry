// src/pages/Courses.jsx
import React from "react";
import { motion } from "framer-motion";
import CourseCard from "../components/CourseCard";
import image from "../assets/courses/Bharathanatyam.png";

import "./Courses.css";

const courses = [
  {
    id: "bharatanatyam",
    title: "Bharatanatyam",
    shortDesc:
      "Classical Indian dance that embodies rhythm, devotion, and expression.",
    longDesc:
      "Our Bharatanatyam course focuses on the essence of Nritta (pure dance), Nritya (expressive dance), and Natya (dramatic storytelling). Students are trained in traditional adavus, mudras, and abhinaya to cultivate grace, rhythm, and bhava. The program nurtures both technique and spiritual connection to the art.",
    image: "/assets/courses/Bharathanatyam.png",
  },
  {
    id: "mohiniyattam",
    title: "Mohiniyattam",
    shortDesc:
      "The graceful dance of Kerala that celebrates femininity and devotion.",
    longDesc:
      "Mohiniyattam, the classical dance of Kerala, is known for its gentle swaying movements and expressions of love and devotion. This course offers a deep dive into lasya, adavus, and choreography based on traditional literature and music, preserving the elegance and emotional storytelling that define this art form.",
    image: "/assets/courses/3dance.png",
  },
  {
    id: "carnaticmusic",
    title: "Carnatic Vocal Music",
    shortDesc:
      "Master the melody and rhythm of South Indian classical music.",
    longDesc:
      "This course introduces students to the fundamentals of Carnatic music — swaras, ragas, and talas. With an emphasis on voice culture, compositions, and improvisation (manodharma), learners gain a strong foundation in both traditional kritis and performance skills guided by seasoned vocalists.",
    image: "/assets/courses/carnaticmusic.jpg",
  },
  {
    id: "mridangam",
    title: "Mridangam",
    shortDesc: "The heartbeat of Carnatic rhythm — percussion with precision.",
    longDesc:
      "Students are trained in tala structures, korvais, and accompaniment techniques for vocal and instrumental concerts. The course emphasizes hand coordination, rhythmic improvisation, and the art of enhancing live performances through dynamic rhythm play.",
    image: "/assets/courses/mridangam.jpg",
  },
  {
    id: "veena",
    title: "Veena",
    shortDesc:
      "String instrument that resonates with the soul of Indian tradition.",
    longDesc:
      "The Veena course covers techniques of plucking, fingering, gamakas, and raga interpretation. Students learn both traditional compositions and modern innovations, developing deep melodic understanding and stage confidence under expert tutelage.",
    image: "/assets/courses/veena.jpg",
  },
  {
    id: "drawingpainting",
    title: "Drawing & Painting",
    shortDesc:
      "Express creativity through color, form, and imagination.",
    longDesc:
      "This course nurtures artistic creativity in students by teaching drawing fundamentals, watercolor, oil painting, and mixed media. Learners explore both traditional Indian art and modern techniques, focusing on perspective, composition, and color theory.",
    image: "/assets/courses/drawingpainting.jpg",
  },
  {
    id: "keyboard",
    title: "Keyboard & Piano",
    shortDesc:
      "Learn melodies and harmonies that blend tradition and modern music.",
    longDesc:
      "A structured program introducing Western notation, scales, chords, and improvisation. Students explore devotional, classical, and fusion styles, enhancing their sense of pitch, rhythm, and musical expression through hands-on practice.",
    image: "/assets/courses/keyboard.jpg",
  },
  {
    id: "guitar",
    title: "Guitar",
    shortDesc:
      "Master the strings with classical and contemporary playing techniques.",
    longDesc:
      "This course teaches acoustic and classical guitar fundamentals — chords, rhythm patterns, and melodic solos. Students also explore Indian film music and devotional compositions, blending global and local sounds beautifully.",
    image: "/assets/courses/guitar.jpg",
  },
];

function Courses() {
  return (
    <section className="courses-page">
      <motion.h2
        className="courses-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Courses
      </motion.h2>
      <section>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quia aliquid consequuntur temporibus incidunt excepturi, non nam obcaecati voluptas quidem neque similique omnis esse? Commodi itaque error cumque perferendis fuga!</p>
      </section>

      <div className="courses-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} detailed />
        ))}
      </div>
    </section>
  );
}

export default Courses;
