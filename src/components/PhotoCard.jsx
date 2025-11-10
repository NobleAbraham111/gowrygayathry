import React from "react";
import { motion } from "framer-motion";
function PhotoCard({ name, title, image, description, isFounder }) {
    return (
        <motion.div
            className={`photo-card ${isFounder ? 'founder-card' : ''}`}
            // starting state (invisible & slightly shifted down)
            initial={{ opacity: 0, y: 50 }}
            // when the card enters the viewport
            whileInView={{ opacity: 1, y: 0 }}
            // ensures it only animates once when it scrolls into view
            viewport={{ once: true, amount: 0.3 }}
            // smooth “liquid” feel
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
        >
            <img src={image} alt={name} loading="lazy" />
            <h4>{name}</h4>
            <p className="card-title">{title}</p>
            <p className="card-description">{description}</p>
        </motion.div>
    );
}

export default PhotoCard;
