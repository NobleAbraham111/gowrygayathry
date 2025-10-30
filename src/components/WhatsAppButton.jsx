import React, { memo } from "react";
import { motion } from "framer-motion";
import { hoverVariants } from "../animations/variants";

const WhatsAppButton = memo(({ number, message }) => {
  const encoded = encodeURIComponent(message || "");
  return (
    <motion.a
      className="whatsapp-button"
      href={`https://wa.me/${number}?text=${encoded}`}
      target="_blank"
      rel="noopener noreferrer"
      variants={hoverVariants}
      whileHover="hover"
      whileTap="tap"
      aria-label="Contact us on WhatsApp"
      role="button"
      tabIndex={0}
    >
      Enquire Now on WhatsApp
    </motion.a>
  );
});

export default WhatsAppButton;
