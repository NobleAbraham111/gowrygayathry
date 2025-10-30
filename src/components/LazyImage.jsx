import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImage = ({ src, alt, className, ...props }) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      effect="blur"
      threshold={100}
      placeholderSrc="/placeholder.jpg" // Optional: add a placeholder image
      {...props}
    />
  );
};

export default LazyImage;
