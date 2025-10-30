import React, { useEffect, useState, useRef, memo, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollAnimation, useIntersectionAnimation } from "../hooks/useScrollAnimation";
import { fadeInVariants, hoverVariants } from "../animations/variants";
import LazyImage from "./LazyImage";
import "./styles/FacultySlider.css";

const FacultySlider = memo(() => {
    const { ref: sectionRef, opacity, scale, y } = useScrollAnimation();
    const { ref: sliderRef, isInView: sliderInView } = useIntersectionAnimation(0.3);

    const members = [
        { name: "Dr. Meera Nair", img: "/assets/images/04.jpg", title: "Dean" },
        { name: "Arun Krishnan", img: "/assets/images/faculty2.jpg", title: "Sculpture" },
        { name: "Riya Thomas", img: "/assets/images/faculty3.jpg", title: "Painting" },
        { name: "Vikram Menon", img: "/assets/images/faculty4.jpg", title: "Digital Arts" },
        { name: "Sneha Pillai", img: "/assets/images/23.png", title: "Photography" },
        { name: "Anand Raj", img: "/assets/images/04.jpg", title: "Sketching" },
        { name: "Leena Joseph", img: "/assets/images/faculty7.jpg", title: "Visual Design" },
        { name: "Manu Dev", img: "/assets/images/faculty8.jpg", title: "Art History" },
    ];

    const controls = useAnimation();
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const isAutoSliding = useRef(true);
    
    // Calculate the width of one card (260px + 2rem gap = 260 + 32 = 292px)
    const slideWidth = 292;
    const totalSlides = members.length;

    // Auto-slide animation - slides continuously like a circle
    useEffect(() => {
        const autoSlide = () => {
            if (isAutoSliding.current) {
                setCurrentIndex((prevIndex) => {
                    const newIndex = (prevIndex + 1) % totalSlides;
                    return newIndex;
                });
            }
        };

        const interval = setInterval(autoSlide, 2000); // Auto-slide every 2 seconds
        return () => clearInterval(interval);
    }, [totalSlides]);

    // Animate position when currentIndex changes
    useEffect(() => {
        const translateX = -currentIndex * slideWidth;
        controls.start({ 
            x: translateX, 
            transition: { duration: 1.5, ease: [0.4, 0, 0.2, 1] } 
        });
    }, [currentIndex, controls, slideWidth]);

    const handleSlideLeft = useCallback(() => {
        isAutoSliding.current = false;
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
        setTimeout(() => {
            isAutoSliding.current = true;
        }, 3000);
    }, [totalSlides]);

    const handleSlideRight = useCallback(() => {
        isAutoSliding.current = false;
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        setTimeout(() => {
            isAutoSliding.current = true;
        }, 3000);
    }, [totalSlides]);

    return (
        <motion.section
            ref={sectionRef}
            style={{ opacity, scale, y }}
            className="faculty-section"
            variants={fadeInVariants}
            initial="hidden"
            animate={sliderInView ? "visible" : "hidden"}
        >
            <Link to="/Faculty" style={{ textDecoration: 'none' }}>
                <motion.h2
                    className="faculty-heading"
                    variants={fadeInVariants}
                    initial="hidden"
                    animate={sliderInView ? "visible" : "hidden"}
                    transition={{ delay: 0.2 }}
                >
                    Meet Our Team
                </motion.h2>
            </Link>

            <motion.div
                className="slider-container"
                ref={containerRef}
                variants={fadeInVariants}
                initial="hidden"
                animate={sliderInView ? "visible" : "hidden"}
                transition={{ delay: 0.4 }}
            >
                <motion.button
                    className="slider-btn slider-btn-left"
                    onClick={handleSlideLeft}
                    variants={hoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                    aria-label="Previous faculty member"
                >
                    ←
                </motion.button>

                <div className="faculty-slider-wrapper">
                    <motion.div
                        className="faculty-slider"
                        animate={controls}
                        initial={{ x: 0 }}
                        style={{ opacity: 1 }}
                    >
                        {members.map((m, i) => (
                            <Link key={i} to="/Faculty" style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="faculty-card"
                                    variants={hoverVariants}
                                    whileHover="hover"
                                    transition={{ type: "spring", stiffness: 10 }}
                                >
                                    <LazyImage
                                        src={m.img}
                                        alt={m.name}
                                        className="faculty-image"
                                    />
                                    <h4>{m.name}</h4>
                                    <p>{m.title}</p>
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                </div>

                <motion.button
                    className="slider-btn slider-btn-right"
                    onClick={handleSlideRight}
                    variants={hoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                    aria-label="Next faculty member"
                >
                    →
                </motion.button>
            </motion.div>
        </motion.section>
    );
});

export default FacultySlider;