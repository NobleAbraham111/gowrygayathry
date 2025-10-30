import React, { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { fadeInVariants, hoverVariants } from "../animations/variants";
import LazyImage from "./LazyImage";
import "./styles/HeroSection.css";

const HeroSection = memo(() => {
    const { ref, opacity, scale, y } = useScrollAnimation();

    return (
        <motion.section
            ref={ref}
            style={{ opacity, scale, y }}
            className="hero-section"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
        >
            <LazyImage
                src="/assets/images/herosection.png"
                alt="School of Music and Dance"
                className="hero-image"
            />
            <motion.div
                className="hero-text"
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
            >
                <motion.h1
                    variants={fadeInVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.5 }}
                >
                    Gowry Gayathri Vidyapeedom
                </motion.h1>
                <motion.h2
                    variants={fadeInVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.7 }}
                >
                    School Of Music and Dance
                </motion.h2>
                <motion.div
                    variants={fadeInVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.9 }}
                >
                    <Link to="/courses">
                        <motion.button
                            style={{
                                backgroundColor: "green",
                                color: "white",
                                padding: "10px 20px",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}
                            variants={hoverVariants}
                            whileHover="hover"
                            whileTap="tap"
                            aria-label="Find our courses"
                        >
                            Find Our Courses
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.div>
        </motion.section>
    );
});

export default HeroSection;