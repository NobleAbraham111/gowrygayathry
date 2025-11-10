import React, { useState, useCallback, memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInVariants, hoverVariants } from "../animations/variants";
import LazyImage from "./LazyImage";
import "./styles/Navbar.css";

const Navbar = memo(() => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // User is scrolling down and has scrolled past 50px
            setIsVisible(false);
        } else {
            // User is scrolling up
            setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <motion.header
            className={`navbar ${isVisible ? "visible" : "hidden"}`}
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="nav-container">
                {/* Logo / Brand */}
                <Link to="/" className="logo">
                    <img
                        src="src/assets/images/reallogo.jpg"
                        alt="GowryGayathry logo"
                        className="logo-image"
                    />
                    <motion.h1
                        className="logo-text"
                        variants={fadeInVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                    >
                        GowryGayathry Vidyapeedom
                    </motion.h1>
                </Link>

                {/* Hamburger (mobile) */}
                <motion.button
                    className={`hamburger ${isOpen ? "open" : ""}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    variants={hoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    <span />
                    <span />
                    <span />
                </motion.button>

                {/* Links */}
                <motion.nav
                    className={`nav-links ${isOpen ? "show" : ""}`}
                    variants={fadeInVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.4 }}
                >
                    <motion.div variants={hoverVariants} whileHover="hover">
                        <Link to="/" onClick={closeMenu}>Home</Link>
                    </motion.div>
                    <motion.div variants={hoverVariants} whileHover="hover">
                        <Link to="/courses" onClick={closeMenu}>Courses</Link>
                    </motion.div>
                    <motion.div variants={hoverVariants} whileHover="hover">
                        <Link to="/faculty" onClick={closeMenu}>Faculty</Link>
                    </motion.div>
                    <motion.div variants={hoverVariants} whileHover="hover">
                        <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
                    </motion.div>
                    <motion.div variants={hoverVariants} whileHover="hover">
                        <Link to="/contact" onClick={closeMenu}>Contact</Link>
                    </motion.div>
                </motion.nav>
            </div>
        </motion.header>
    );
});

export default Navbar;
