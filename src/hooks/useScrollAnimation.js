import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

/**
 * Hook for smooth scroll animations using Framer Motion
 * Each section fades and scales in/out as user scrolls.
 */
export function useScrollAnimation() {
  const ref = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: isMounted ? ref : null,
    offset: ["start 80%", "end 20%"], // animate when 80% enters to 20% leaves viewport
  });

  // Map scroll progress (0 → 1) to transform values
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  return { ref, motion, opacity, scale, y };
}

/**
 * Hook for Intersection Observer-based animations
 * Triggers animations when element enters viewport
 */
export function useIntersectionAnimation(threshold = 0.1, triggerOnce = true) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold,
    triggerOnce,
  });

  return { ref, isInView };
}

/**
 * Hook for staggered animations on scroll
 */
export function useStaggeredAnimation(itemCount, staggerDelay = 0.1) {
  const [visibleItems, setVisibleItems] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate items one by one
            for (let i = 0; i < itemCount; i++) {
              setTimeout(() => {
                setVisibleItems((prev) => Math.min(prev + 1, itemCount));
              }, i * staggerDelay * 1000);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [itemCount, staggerDelay]);

  return { containerRef, visibleItems };
}
