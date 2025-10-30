import React, { memo, useCallback } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { fadeInVariants, hoverVariants, staggerContainerVariants } from "../animations/variants";
import "./styles/Footer.css";

const Footer = memo(() => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <motion.footer
      className="footer"
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="footer-content"
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left Section */}
        <motion.div
          className="footer-about"
          variants={fadeInVariants}
        >
          <motion.h3
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            🎨 Gowry Gayathri Vidyapeedom
          </motion.h3>
          <motion.p
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Inspiring creativity and nurturing artistic talent since 2009.
            Visit our gallery or reach out for admission and exhibition details.
          </motion.p>
        </motion.div>

        {/* Middle Section */}
        <motion.div
          className="footer-contact"
          variants={fadeInVariants}
        >
          <motion.h4
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h4>
          <motion.p
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Email: info@gowrygayathri.org
          </motion.p>
          <motion.a
            href="https://wa.me/919876543210?text=Hello, I have an enquiry!"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
            variants={hoverVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaWhatsapp /> Message us on WhatsApp
          </motion.a>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="footer-social"
          variants={fadeInVariants}
        >
          <motion.h4
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Follow Us
          </motion.h4>
          <motion.div
            className="social-icons"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              variants={hoverVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Follow us on Instagram"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              variants={hoverVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Follow us on Facebook"
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              variants={hoverVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Follow us on Twitter"
            >
              <FaTwitter />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Divider */}
      <motion.div
        className="footer-divider"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      ></motion.div>

      {/* Bottom Section */}
      <motion.div
        className="footer-bottom"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <p>© {new Date().getFullYear()} Gowry Gayathri Vidyapeedom. All rights reserved.</p>
        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          variants={hoverVariants}
          whileHover="hover"
          whileTap="tap"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </motion.button>
      </motion.div>
    </motion.footer>
  );
});

export default Footer;
