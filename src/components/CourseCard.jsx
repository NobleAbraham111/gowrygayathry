import React, { memo } from "react";
import { motion } from "framer-motion";
import LazyImage from "./LazyImage";
import { hoverVariants } from "../animations/variants";

const CourseCard = memo(({ course, fullImage = false, detailed = false }) => {
  return (
    <motion.article
      className="course-card"
      variants={hoverVariants}
      whileHover="hover"
      whileTap="tap"
      role="article"
      aria-labelledby={`course-${course.id}-title`}
      tabIndex={0}
    >
      <div className={`course-image ${fullImage ? 'full-image' : ''}`}>
        <LazyImage
          src={course.image}
          alt={`${course.title} course illustration`}
          className="course-image"
        />
      </div>
      <div className="course-content">
        <h3 id={`course-${course.id}-title`}>{course.title}</h3>
        <p>{detailed ? course.longDesc : course.shortDesc}</p>
      </div>
    </motion.article>
  );
});

export default CourseCard;
