import React from 'react';
import { motion } from 'framer-motion';
import './Headings.css'; // Import the CSS file

const Headings = ({ he1, he2, clr, clr2, svg }) => {
  // Define animation properties for whileInView
  const headingAnimationH2 = {
    initial: { opacity: 0, scale: 0.8, y: 30 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99], // Custom easing function for bounce effect
      delay: 0.1
    }
  };

  const headingAnimationH1 = {
    initial: { opacity: 0, scale: 0.7, y: 50 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    transition: {
      duration: 1.2,
      ease: [0.87, 0, 0.13, 1], // Custom easing function for a more dramatic effect
      delay: 0.3
    }
  };

  return (
    <div className='d-flex heading-container flex-column flex-md-row align-items-start my-4 relative ' >
      <div className='d-flex flex-column' style={{ flex: '1' }}>
        <motion.h2
          className={`m-0` }
          style={{ color: clr }}
          initial={headingAnimationH2.initial}
          whileInView={headingAnimationH2.whileInView}
          transition={headingAnimationH2.transition}
          viewport={{ once: true }} // Ensures animation triggers only once
        >
          {he1}
        </motion.h2>
        <motion.h1
          className={`m-0`}
          style={{ color: clr2 }}
          initial={headingAnimationH1.initial}
          whileInView={headingAnimationH1.whileInView}
          transition={headingAnimationH1.transition}
          viewport={{ once: true }} // Ensures animation triggers only once
        >
          {he2}
        </motion.h1>
      </div>
      <img
        src={svg}
        className='img-fluid'
        alt=""
        style={{
          position: 'absolute',
          top: 0,
          maxWidth: '100%',
          height: 'auto',
          width: 'auto', // Ensure image fits well
        }}
      />
    </div>
  );
}

export default Headings;
