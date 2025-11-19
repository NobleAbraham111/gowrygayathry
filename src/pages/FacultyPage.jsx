
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
      name: "Harikrishnan B",
      title: "Founder",
      image: "/assets/images/founder1.jpg",
      description:
        "Visionary founder who established Gowry Gayathry Vidyapeedom with the dream of preserving Kerala’s cultural artistry. A lifelong supporter of traditional and modern fine arts.",
      isFounder: true,
    },
    {
      name: "Mrs. Bindu K R",
      title: "Director & Manager ",
      image: "/assets/images/founder2.jpg",
      description:
        "An inspiring leader and the heart of Gowry Gayathry Vidyapeedom, nurturing both faculty and students alike. Her focus on creative growth has shaped generations of artists.",
      isFounder: true,
    },
  ];

  const keyPersons = [
    {
      name: "Athira Kaimal ",
      title: "Office Administrator",
      image: "src/assets/faculty/Athira Kaimal fac.jpg",
      description:
        "Athira Kaimal serves as the Office Administrator, bringing 10 years of experience in educational administration. She holds a postgraduate degree in History from Sree Sankara University of Sanskrit, and completed her degree from NSS College. With a decade of experience as a receptionist at Gowrygayathri Vidhyapeedom in Vaikom, Athira ensures smooth daily operations and provides warm, efficient support to students, parents, and faculty.",
    }
  ];

  const facultyMembers = [
    {
      name: "Prasanth Kumar P C",
      title: " Piano & Keyboard Instructor",
      image: "src/assets/faculty/prashanth fac.jpg",
      description:
        "Prasanth Kumar P C has been teaching piano and keyboard for over 20 years. He holds an 8th Grade certificate from Trinity College London and has taught at several well-known schools in Kerala. Currently teaching at Rajagiri Amala Public School and Fatima Central School, Prasanth is dedicated to helping students discover and develop their musical talents with patience and expertise.",
    },
    {
      name: "Lakshmi Velayudhan",
      title: "Bharatanatyam Instructor",
      image: "src/assets/faculty/Lakshmi Velayudhan fac.jpg",
      description:
        "Lakshmi Velayudhan is a passionate Bharatanatyam dancer and teacher with 10 years of teaching experience. She completed her BA in Bharatanatyam from St. Theresa's College and trained under respected gurus like RLV Ratnamma and Kalamandalam Gopl. Lakshmi has performed at major events including national games and cultural festivals across Kerala. She specializes in choreography and preparing students for competitions.",
    },
    {
      name: "Aromal Vijay",
      title: "Drums Instructor",
      image: "src/assets/faculty/Aromal Vijay fac.jpg",
      description:
        "Aromal Vijay is an accomplished drummer with over 15 years of experience. He holds an 8th Grade certification in drums from Trinity College London and has won top honors at both MG University and Kerala School youth festivals. As a graduate with extensive performance and teaching experience, Aromal brings energy and technical excellence to his classes, helping students master rhythm and develop their drumming skills.",
    },
    {
      name: "Vijayakumar T N ",
      title: "Drums Instructor",
      image: "src/assets/faculty/Vijay Kumar TN fac.jpg",
      description:
        "Vijayakumar T N is a seasoned percussion artist with over 35 years of performing experience. He currently teaches drums at prestigious institutions including Bharatiya Vidya Bhavan and Rajagiri Amala School. With more than three decades in music, Vijayakumar brings deep knowledge and a wealth of experience to his students, guiding them with patience and expertise honed over years of dedicated practice and performance.",
    },
    {
      name: "Reji T V",
      title: "Carnatic Music Instructor",
      image: "src/assets/faculty/Reji TV fac.jpg",
      description:
        "Reji TV holds a Ganabhushanam and BA in Music from RLV College Thrippunithura. With 25 years of experience in Carnatic music, he formerly served as a music teacher at Kochin Kalabhavan. His extensive background in traditional Carnatic vocal training and performance makes him an excellent guide for students looking to learn classical music with proper technique and cultural depth.",
    },
    {
      name: "Sudheerkumar",
      title: "Violin Instructor",
      image: "src/assets/faculty/Sudheerkumar fac.jpg",
      description:
        "Sudheerkumar is a Ganapraveena-certified violin instructor with 30 years of experience in teaching and performing. His three decades of dedication to the violin have given him deep expertise in both technique and musicality. Sudheerkumar's patient teaching approach helps students of all levels develop their skills and appreciation for this classical instrument.",
    },
    {
      name: "P. Muralikrishnan",
      title: "Mridangam Instructor",
      image: "src/assets/faculty/P. Muralikrishnan.jpg",
      description:
        "P. Muralikrishnan holds a BA in Mridangam from RLV College Thrippunithura. Trained in the traditional style of this essential percussion instrument, he brings authentic knowledge of rhythm and technique to his students. His education from one of Kerala's respected music institutions ensures students receive quality instruction in classical mridangam playing.",
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
          <motion.div
            key={index}
            style={{ '--index': index }}
          >
            <PhotoCard {...f} />
          </motion.div>
        ))}
      </section>

      {/* Key Persons Section */}
      <motion.section
        className="keypersons-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>Administration</h2>
        <div className="faculty-grid">
          {keyPersons.map((f, index) => (
            <motion.div
              key={index}
              style={{ '--index': index }}
            >
              <PhotoCard {...f} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Faculty Members */}
      <motion.section
        className="faculty-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>Our Teaching Faculty</h2>
        <div className="faculty-grid">
          {facultyMembers.map((f, index) => (
            <motion.div
              key={index}
              style={{ '--index': index }}
            >
              <PhotoCard {...f} />
            </motion.div>
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
