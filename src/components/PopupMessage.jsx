import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/PopupMessage.css";
import WhatsAppButton from "./WhatsAppButton";
function PopupMessage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem("popupClosed");
    if (!hasSeen) {
      setShow(true);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    localStorage.setItem("popupClosed", "true");
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="popup-box"
            initial={{ y: "-50%", opacity: 0, scale: 0.8 }}
            animate={{ y: "0%", opacity: 1, scale: 1 }}
            exit={{ y: "-50%", opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 120, damping: 15, duration: 0.5 }}
          >
            <button className="close-btn" onClick={handleClose}>
              ×
            </button>
            <h3>Announcement!</h3>
            <p>The admissions are open go ahead and checkout our courses .</p>
            <section><WhatsAppButton/></section>
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PopupMessage;
