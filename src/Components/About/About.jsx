import React, { useEffect, useState } from 'react';
import './About.css'; // Import the CSS file

const About = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const top = window.scrollY;
    const triggerHeight = window.innerHeight / 2; // Middle of the screen
    if (top > triggerHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='about-section'>
        <h2>Our values encapsulate both our </h2>
        <h1>thought and action</h1>
    <div className="parent-container">
        
      <div className={`pinned-box ${scrolled ? 'scrolled' : ''}`}>
        <div className="box-row first-row">
          <div className="box"><img src="./homepage/val.svg" className='img-fluid' alt="" /></div>
          <div className="box"><img src="./homepage/val2.svg" className='img-fluid' alt="" /></div>
          <div className="box"><img src="./homepage/val3.svg" className='img-fluid' alt="" /></div>
          <div className="box"><img src="./homepage/val4.svg" className='img-fluid' alt="" /></div>
        </div>
        <div className={`box-row second-row ${scrolled ? 'visible' : ''}`}>
        <div className="box"><img src="./homepage/val.svg" className='img-fluid' alt="" /></div>
          <div className="box"><img src="./homepage/val2.svg" className='img-fluid' alt="" /></div>
          <div className="box"><img src="./homepage/val3.svg" className='img-fluid' alt="" /></div>
          <div className="box"><img src="./homepage/val4.svg" className='img-fluid' alt="" /></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
