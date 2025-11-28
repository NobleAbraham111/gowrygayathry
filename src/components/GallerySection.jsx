import React from "react";
import "../components/styles/GallerySection.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GallerySection = () => {
  // You can replace these with your real gallery images later
  const galleryImages = [
    { src: "src/assets/images/01.jpg" },
    { src: "src/assets/images/02 (1).jpg" },
    { src: "src/assets/images/03.jpg" },
    { src: "src/assets/images/04.jpg" },
    { src: "src/assets/images/05 (1).png" },
    { src: "src/assets/images/pooja vepp 1.jpg", alt: "Pooja" },
  ];

  return (
    <motion.section className="gallery-section">
      <div className="gallery-header">
        <h2>Gallery</h2>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((img, index) => (
          <motion.div
            className="gallery-item"
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
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
    </motion.section>
  );
};

export default GallerySection;
