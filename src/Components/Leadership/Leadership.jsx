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
      'People/Members/Harsh.png',
      'People/Members/Saugata.png',
      'People/Members/Ananth.png',
      'People/Members/Apurva.png',
      'People/Members/Milind.png',
      'People/Members/Nayantara.png',
      'People/Members/Nikhil.png',
      'People/Members/Rajan.png',
      'People/Members/Rajendra.png',
      'People/Members/Rajeev.png',
      'People/Members/Rishabh.png',
    ],
    team: [
      'People/Team/Saugata.png',
      'People/Team/Amit.png',
      'People/Team/Amit Praskash.png',
      'People/Team/Ashish.png',
      'People/Team/Shillpa.png',
      'People/Team/Pawan.png',
      'People/Team/Samasree.png',
      'People/Team/Vaibhav.png',
      'People/Team/Vrijesh.png',
    ],
  };

  // Define titles and colors for each filter
  const filterData = {
    members: {
      title1: "Know our Board",
      title2: "Members",
      clr: "#efa5b1",
    },
    team: {
      title1: "Know our Management",
      title2: "Team",
      clr: "#9484be",
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
         <Leaf fill={"#f8e0e3"} top={"0%"} right={"10vw"} width={"15vw"} animate={1}/>
         <Leaf fill={"#e3efcd"} top={"10vh"} left={"15vw"} width={"7vw"} rotate={-90} animate={1}/>
    </div>
  );
};

export default Leadership;
