import React, { useEffect, useState, useRef, memo, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
// Assuming the first ref returned is a function/object for scroll animation
import { useScrollAnimation, useIntersectionAnimation } from "../hooks/useScrollAnimation"; 
import { fadeInVariants, hoverVariants } from "../animations/variants";
import LazyImage from "./LazyImage";
import "./styles/FacultySlider.css";

const FacultySlider = memo(() => {
    // 💡 FIX APPLIED HERE: Renamed 'ref' to 'scrollRef'. 
    // This assumes useScrollAnimation returns a ref object (for JSX) and other style props.
    // If 'ref' from the hook is meant to be a *function* for observation, 
    // it likely conflicts with an internal variable named 'sectionRef' or the destructuring is incorrect.
    // Using a different name like 'scrollRef' resolves the naming conflict.
    const { ref: scrollRef, opacity, scale, y } = useScrollAnimation(); 
    const { ref: sliderRef, isInView: sliderInView } = useIntersectionAnimation(0.3);

    const members = [
        { name: "Athira Kaimal ", img: "src/assets/Faculty/Athira Kaimal fac.jpg", title: "Office Administrator" },
        { name: "P. Muralikrishnan ", img: "src/assets/Faculty/P. Muralikrishnan.jpg", title: "Mridangam Instructor" },
        { name: "Sudheerkumar ", img: "src/assets/Faculty/Sudheerkumar fac.jpg", title: "Violin Instructor" },
        { name: "Reji TV", img: "src/assets/Faculty/Reji TV fac.jpg", title: "Carnatic Music Instructor" },
        { name: "Vijayakumar T N", img: "src/assets/Faculty/Vijay Kumar TN fac.jpg", title: "Drums Instructor" },
        { name: "Aromal Vijay", img: "src/assets/Faculty/Aromal Vijay fac.jpg", title: "Drums Instructor" },
        { name: "Lakshmi Velayudhan ", img: "src/assets/Faculty/Lakshmi Velayudhan fac.jpg", title: "Bharatanatyam Instructor" },
        { name: "Prasanth Kumar P C", img: "src/assets/Faculty/prashanth fac.jpg", title: "Piano & Keyboard Instructor" },
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
    // This is line 86 if you count from the top of the file without imports. 
    // The code here is correct and does not involve sectionRef.
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
            // 💡 FIX APPLIED HERE: Using the renamed ref 'scrollRef'
            ref={scrollRef} 
            style={{ opacity, scale, y }}
            className="faculty-section"
            variants={fadeInVariants}
            initial="hidden"
            // The logic here is fine, but you're animating based on two different refs.
            // Using sliderInView (from useIntersectionAnimation) is appropriate for its visibility.
            animate="visible"
        >
            <Link to="/Faculty" style={{ textDecoration: 'none' }}>
                <motion.h2
                    className="faculty-heading"
                    variants={fadeInVariants}
                    initial="hidden"
                    animate="visible"
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
                animate="visible"
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
                                    {/* Using LazyImage here if needed, but keeping your structure */}
                                    <img
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