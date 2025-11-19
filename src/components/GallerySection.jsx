import React from "react";
import "../components/styles/GallerySection.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GallerySection = () => {
  // You can replace these with your real gallery images later
  const galleryImages = [
    { src: "src/assets/images/01.jpg", alt: "Dance performance" },
    { src: "src/assets/images/02 (1).jpg", alt: "Music class" },
    { src: "src/assets/images/03.jpg", alt: "Annual day" },
    { src: "src/assets/images/04.jpg", alt: "Students performing" },
    { src: "src/assets/images/05 (1).png", alt: "Singing session" },
    { src: "/src/assets/images/pooja vepp 1.jpg", alt: "Art exhibition" },
  ];

  return (
    <section className="gallery-section">
      <motion.div
        className="gallery-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Gallery</h2>
        <p>Moments from our vibrant campus life</p>
      </motion.div>

      <div className="gallery-grid">
        {galleryImages.map((img, index) => (
          <motion.div
            className="gallery-item"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={img.src} alt={img.alt} />
            <div className="overlay">
              <p>{img.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="view-more"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/gallery">View Full Gallery →</Link>
      </motion.div>
    </section>
  );
};

export default GallerySection;
