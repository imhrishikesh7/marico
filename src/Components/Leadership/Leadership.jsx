import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import 'slick-carousel/slick/slick.css'; // Direct CSS import
import 'slick-carousel/slick/slick-theme.css'; // Direct CSS import
import './Leadership.css'; // Custom CSS for carousel
import Headings from '../Headings/Headings';
import Leaf from '../Leaf/Leaf';

const Leadership = () => {
  // Define image sets and titles
  const allImages = {
    members: [
      '/people/Members/Harsh.png',
      '/people/Members/Saugata.png',
      '/people/Members/Ananth.png',
      '/people/Members/Apurva.png',
      '/people/Members/Milind.png',
      '/people/Members/Nayantara.png',
      '/people/Members/Nikhil.png',
      '/people/Members/Rajan.png',
      '/people/Members/Rajendra.png',
      '/people/Members/Rajeev.png',
      '/people/Members/Rishabh.png',
    ],
    team: [
      '/people/Team/Saugata.png',
      '/people/Team/Amit.png',
      '/people/Team/Amit Praskash.png',
      '/people/Team/Ashish.png',
      '/people/Team/Shillpa.png',
      '/people/Team/Pawan.png',
      '/people/Team/Samasree.png',
      '/people/Team/Vaibhav.png',
      '/people/Team/Vrijesh.png',
    ],
  };

  // Define titles and colors for each filter
  const filterData = {
    members: {
      title1: "Know our Board",
      title2: "Members",
      clr: "pink",
    },
    team: {
      title1: "Know our Management",
      title2: "Team",
      clr: "purple",
    },
  };

  // State for selected filter
  const [filter, setFilter] = useState('members');
  const [animateKey, setAnimateKey] = useState(0);

  // Trigger animation on filter change
  useEffect(() => {
    setAnimateKey(prevKey => prevKey + 1);
  }, [filter]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.1, duration: 1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  // Slick Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Ensure arrows are enabled
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint as needed for different devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h3 className='text-center my-4'>OUR LEADERSHIP</h3>
      {/* Filter buttons */}
      <div className="filter-buttons">
        <button
          className={filter === 'members' ? 'active' : ''}
          onClick={() => setFilter('members')}
        >
          Members
        </button>
        <button
          className={filter === 'team' ? 'active' : ''}
          onClick={() => setFilter('team')}
        >
          Team
        </button>
      </div>

      {/* Dynamic Headings */}
      <div className='text-center my-4'>
        <Headings
          he1={filterData[filter].title1}
          he2={filterData[filter].title2}
          clr2={filterData[filter].clr}
          clr={filterData[filter].clr}
        />
      </div>
      {/* Slider */}
      <AnimatePresence>
        <motion.div
          key={animateKey} // Key to trigger re-mounting
          className="slider-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Slider {...settings}>
            {allImages[filter].map((image, index) => (
              <motion.div
                key={index}
                className="carousel-slide"
                variants={itemVariants}
              >
                <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </AnimatePresence>
         <Leaf fill={"#f8e0e3"} top={"0%"} right={"10vw"} width={"15vw"}/>
         <Leaf fill={"#e3efcd"} top={"10vh"} left={"15vw"} width={"7vw"} rotate={"-90"}/>
    </div>
  );
};

export default Leadership;
