import React from "react";
import { motion } from "framer-motion";
import "../components/styles/Contact.css";

function Contact() {
  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="contact-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Get in Touch
      </motion.h1>

      <motion.p
        className="contact-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Have questions or want to learn more? Reach out to us.
      </motion.p>

      {/* Contact Details */}
      <motion.div
        className="contact-info"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <div className="info-card">
          <h3>Email</h3>
          <a href="mailto:info@gowrygayathry.com">gowrygayathry@gmail.com</a>
        </div>

        <div className="info-card">
          <h3>Phone</h3>
          <a href="tel:+919876543210">+91 98765 43210</a>
        </div>

        <div className="info-card">
          <h3>WhatsApp</h3>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="info-card">
          <h3>Address</h3>
          <p>
            GowryGayathry Vidyapeedom,<br />
            Vaikom,Kottayam<br />
            Kerala, India -686141
          </p>
        </div>
      </motion.div>

      {/* Google Map Embed */}
      <motion.div
        className="map-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.1190062233964!2d76.39597119999999!3d9.7559861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08792776f72829%3A0xf9d9e4f98f4b1d9e!2sGouri%20Gayarhri%20Vidyapeedom!5e0!3m2!1sen!2sin!4v1764939883759!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        className="contact-form"
        onSubmit={(e) => e.preventDefault()}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Send Us a Message</h2>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default Contact;
