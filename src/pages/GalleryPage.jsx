import React from "react";
import { motion } from "framer-motion";
import "../components/styles/GalleryPage.css";

/**
 * GalleryPage.jsx
 * - Uses Framer Motion for smooth scroll animations
 * - Respects theme by using CSS variables (body.dark-theme toggled by your ThemeToggle)
 *
 * Add your images into: /src/assets/gallery/<section>/
 */

const SECTIONS = [
  {
    key: "finearts",
    title: "Fine Arts",
    subtitle: "Paintings, sketches and studio works",
    images: [
      "/assets/gallery/finearts/fine1.jpg",
      "/assets/gallery/finearts/fine2.jpg",
      "/assets/gallery/finearts/fine3.jpg",
      "/assets/gallery/finearts/fine4.jpg",
      "/assets/gallery/finearts/fine5.jpg",
    ],
  },
  {
    key: "performing",
    title: "Performing Arts",
    subtitle: "Dance, music rehearsals and recitals",
    images: [
      "/assets/gallery/performing/perform1.jpg",
      "/assets/gallery/performing/perform2.jpg",
      "/assets/gallery/performing/perform3.jpg",
      "/assets/gallery/performing/perform4.jpg",
    ],
    horizontal: true, // this section will be a draggable horizontal slider
  },
  {
    key: "events",
    title: "Events & Moments",
    subtitle: "Festivals, workshops and candid moments",
    images: [
      "/assets/gallery/events/event1.jpg",
      "/assets/gallery/events/event2.jpg",
      "/assets/gallery/events/event3.jpg",
      "/assets/gallery/events/event4.jpg",
      "/assets/gallery/events/event5.jpg",
      "/assets/gallery/events/event6.jpg",
    ],
  },
  {
    key: "legacy",
    title: "Legacy & Culture",
    subtitle: "Founders, alumni, and institutional heritage",
    images: [
      "/assets/gallery/legacy/legacy1.jpg",
      "/assets/gallery/legacy/legacy2.jpg",
      "/assets/gallery/legacy/legacy3.jpg",
    ],
  },
];

// small animation presets
const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" },
  }),
};

const imageVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function GalleryPage() {
  return (
    <main className="gallery-page">
      {/* HERO */}
      <motion.header
        className="gallery-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h1>Art in Every Frame</h1>
        <p className="hero-sub">
          A curated visual journey through Gowry Gayathry Vidyapeedom — paintings,
          performances, moments and memory. Scroll to discover.
        </p>
      </motion.header>

      {/* SECTIONS */}
      <div className="gallery-sections">
        {SECTIONS.map((section, idx) => (
          <motion.section
            key={section.key}
            className="gallery-section"
            style={{ '--section-index': idx }}
          >
            <motion.div
              className="section-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={sectionVariant}
              custom={idx}
            >
              <h2>{section.title}</h2>
              <p>{section.subtitle}</p>
            </motion.div>

            {/* Horizontal slider for some sections */}
            {section.horizontal ? (
              <motion.div
                className="horizontal-slider"
                drag="x"
                dragConstraints={{ left: -900, right: 0 }}
                dragElastic={0.15}
                whileTap={{ cursor: "grabbing" }}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3, once: true }}
              >
                {section.images.map((src, i) => (
                  <motion.figure
                    className="gallery-tile horizontal-tile"
                    key={src}
                    variants={imageVariant}
                    custom={i}
                    whileHover={{ scale: 1.02 }}
                    style={{ '--tile-index': i }}
                  >
                    <img src={src} alt={`${section.title} ${i + 1}`} loading="lazy" />
                    <figcaption>{section.title}</figcaption>
                  </motion.figure>
                ))}
              </motion.div>
            ) : (
              // Masonry-like responsive grid
              <div className="masonry-grid">
                {section.images.map((src, i) => (
                  <motion.figure
                    className="gallery-tile"
                    key={src}
                    variants={imageVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: true }}
                    custom={i}
                    whileHover={{ scale: 1.02 }}
                    style={{ '--tile-index': i }}
                  >
                    <img src={src} alt={`${section.title} ${i + 1}`} loading="lazy" />
                    <figcaption>{section.title}</figcaption>
                  </motion.figure>
                ))}
              </div>
            )}
          </motion.section>
        ))}
      </div>

      {/* FOOTER CTA */}
      <motion.section
        className="gallery-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3>Want to see more?</h3>
        <p>Contact us to access the full archive or request prints and exhibitions.</p>
        <a className="cta-btn" href="/contact">Get in touch</a>
      </motion.section>

    </main>
  );
}
