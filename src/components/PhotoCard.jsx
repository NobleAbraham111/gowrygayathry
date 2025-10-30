import React from "react";
import { motion } from "framer-motion";
function PhotoCard({ photo }) {
    return (
        <motion.div
            className="photo-card"
            // starting state (invisible & slightly shifted down)
            initial={{ opacity: 0, y: 50 }}
            // when the card enters the viewport
            whileInView={{ opacity: 1, y: 0 }}
            // ensures it only animates once when it scrolls into view
            viewport={{ once: true, amount: 0.3 }}
            // smooth “liquid” feel
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
        >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            {photo.title && <h4>{photo.title}</h4>}
        </motion.div>
    );
}

export default PhotoCard;
