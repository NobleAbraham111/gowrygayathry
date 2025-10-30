import React, { memo, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation, useIntersectionAnimation } from "../hooks/useScrollAnimation";
import { fadeInVariants, slideInLeftVariants, slideInRightVariants } from "../animations/variants";
import "./styles/AboutSection.css";

const AboutSection = memo(() => {
    const { ref, opacity, scale, y } = useScrollAnimation();
    const { ref: videoRef, isInView: videoInView } = useIntersectionAnimation(0.3);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const videoElement = useRef(null);

    useEffect(() => {
        if (videoInView && videoElement.current && !videoLoaded) {
            videoElement.current.play();
            setVideoLoaded(true);
        }
    }, [videoInView, videoLoaded]);

    return (
        <motion.section
            ref={ref}
            style={{ opacity, scale, y }}
            className="about-section"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.video
                ref={(el) => {
                    videoRef.current = el;
                    videoElement.current = el;
                }}
                src="/assets/videos/GG-landscape.mp4"
                className="about-video"
                autoPlay={false}
                loop
                muted
                playsInline
                preload="metadata"
                variants={slideInLeftVariants}
                initial="hidden"
                animate={videoInView ? "visible" : "hidden"}
                onLoadedData={() => setVideoLoaded(true)}
            />
            <motion.div
                className="about-text"
                variants={slideInRightVariants}
                initial="hidden"
                animate={videoInView ? "visible" : "hidden"}
                transition={{ delay: 0.3 }}
            >
                <motion.h2
                    variants={fadeInVariants}
                    initial="hidden"
                    animate={videoInView ? "visible" : "hidden"}
                    transition={{ delay: 0.5 }}
                >
                    OUR BEGINNING
                </motion.h2>
                <motion.p
                    variants={fadeInVariants}
                    initial="hidden"
                    animate={videoInView ? "visible" : "hidden"}
                    transition={{ delay: 0.7 }}
                >
                    Gowri Gayathri Vidyapeedam was inaugurated in Vaikom in 2009, emerging as a dynamic
                    artistic institution. The academy has consistently nurtured exceptional talents with over a dozen
                    skilled educators and a student community of over 500. Our alumni shine in district and state
                    school festivals, reflecting the institution's prowess. Moreover, many of our student alumni have
                    significantly contributed to the music, art, dance and entertainment industry.
                </motion.p>
            </motion.div>
        </motion.section>
    );
});

export default AboutSection;