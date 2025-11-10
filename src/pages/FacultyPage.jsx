
import WhatsAppButton from "../components/WhatsAppButton";
// src/pages/Faculty.jsx
import React from "react";
import { motion } from "framer-motion";
import PhotoCard from "../components/PhotoCard";
import FacultySlider from "../components/FacultySlider";
import "../components/styles/facultyPage.css";

function FacultyPage() {
  const founders = [
    {
      name: "Mr. Rajeev Nair",
      title: "Director & Founder",
      image: "/assets/images/founder1.jpg",
      description:
        "Visionary founder who established Gowry Gayathry Vidyapeedom with the dream of preserving Kerala’s cultural artistry. A lifelong supporter of traditional and modern fine arts.",
      isFounder: true,
    },
    {
      name: "Mrs. Anitha Rajeev",
      title: "Manager & Co-Founder",
      image: "/assets/images/founder2.jpg",
      description:
        "An inspiring leader and the heart of Gowry Gayathry Vidyapeedom, nurturing both faculty and students alike. Her focus on creative growth has shaped generations of artists.",
      isFounder: true,
    },
  ];

  const keyPersons = [
    {
      name: "Gayathry Rajeev",
      title: "Renowned Singer & Alumni",
      image: "/assets/images/faculty_gayathry.jpg",
      description:
        "A celebrated singer and cultural ambassador who began her artistic journey right here at Gowry Gayathry Vidyapeedom.",
    },
    {
      name: "Suresh Kumar",
      title: "Administrative Head",
      image: "/assets/images/faculty_suresh.jpg",
      description:
        "Oversees daily operations and ensures that our institution remains a sanctuary of discipline and creativity.",
    },
  ];

  const facultyMembers = [
    {
      name: "Dr. Meera Nair",
      title: "Dean of Fine Arts",
      image: "/assets/images/faculty1.jpg",
      description:
        "Guides students in exploring art through emotion and technique. Her mentorship defines the soul of our institution.",
    },
    {
      name: "Arun Krishnan",
      title: "Sculpture Faculty",
      image: "/assets/images/faculty2.jpg",
      description:
        "A sculptor whose creations bridge classical form with modern expression, inspiring students in 3D art forms.",
    },
    {
      name: "Riya Thomas",
      title: "Painting Faculty",
      image: "/assets/images/faculty3.jpg",
      description:
        "Specializes in contemporary realism and color theory, encouraging students to find their personal visual language.",
    },
    {
      name: "Vikram Menon",
      title: "Digital Arts Faculty",
      image: "/assets/images/faculty4.jpg",
      description:
        "Blends creativity with technology to teach digital illustration, concept design, and animation fundamentals.",
    },
  ];

  return (
    <motion.div
      className="faculty-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Title Section */}
      <motion.header
        className="faculty-header"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1>Our Faculty</h1>
        <p>
          Meet the people who shape the creative journey at Gowry Gayathry
          Vidyapeedom — the visionaries, artists, and educators inspiring the
          next generation.
        </p>
        
        
      </motion.header>

      {/* Founders Section */}
      <section className="founders-section">
        {founders.map((f, index) => (
          <PhotoCard key={index} {...f} />
        ))}
      </section>

      {/* Key Persons Section */}
      <motion.section
        className="keypersons-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2>Key Figures</h2>
        <div className="faculty-grid">
          {keyPersons.map((f, index) => (
            <PhotoCard key={index} {...f} />
          ))}
        </div>
      </motion.section>

      {/* Faculty Members */}
      <motion.section
        className="faculty-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2>Our Teaching Faculty</h2>
        <div className="faculty-grid">
          {facultyMembers.map((f, index) => (
            <PhotoCard key={index} {...f} />
          ))}
        </div>
        <section>
            <FacultySlider />
        </section>
      </motion.section>
    </motion.div>
  );
}

export default FacultyPage;