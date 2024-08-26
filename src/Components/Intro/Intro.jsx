import React, { useState } from 'react';
import "./Intro.css";
import { motion } from 'framer-motion';
import Leaf from '../Leaf/Leaf';

const Intro = () => {
  const categories = {
    think: [
      {
        icon: "./homepage/think1.svg",
        title: "Consumer First",
        text: "We not only serve but delight our consumers and drive our innovation to fulfil their aspirations. Delighting our consumers is our way of life."
      },
      {
        icon: "./homepage/think2.svg",
        title: "Bold Ambition",
        text: "We take bold and courageous decisions to constantly stay ahead of the curve in an evolving business scenario. We think big, start small, learn and scale fast."
      },
      {
        icon: "./homepage/think3.svg",
        title: "Responsible Growth",
        text: "We enable win-win outcomes for external stakeholders. Our growth is a legacy of holistic progress for all."
      }
    ],
    act: [
      {
        icon: "./homepage/act1.svg",
        title: "Grow with Members",
        text: "We nurture members to unleash their potential. We collaborate, empower, celebrate inclusion and grow together."
      },
      {
        icon: "./homepage/act2.svg",
        title: "Accountability for Outcomes",
        text: "We deliver what we promise. We surpass challenges with determination and togetherness."
      },
      {
        icon: "./homepage/act3.svg",
        title: "Execute with Agility",
        text: "We adapt to changing scenarios with speed and excellence. We embrace change as an opportunity, rather than a threat."
      }
    ]
  };

  // useState Hook for active category
  const [activeCategory, setActiveCategory] = useState('think');

  // Toggle function to switch between "think" and "act"
  const toggleCategory = () => {
    setActiveCategory(prevCategory => (prevCategory === 'think' ? 'act' : 'think'));
  };

  return (
    <div className='intro-container row align-items-center justify-center relative'>
      
      <Leaf
        fill={"#ffe192"}
        bottom={"50%"}
        left={"-7em"}
        width={"10%"}
        rotate={-30}
        animate={1}
      />
      <div className='themeline2 col-md-3 relative'>
      <Leaf
        fill={"rgb(164, 207, 87, 0.4)"}
        bottom={"0"}
        left={"-15em"}
        width={"70%"}
        animate={1}
      />
        <motion.h2
          className='text-4xl max-sm:text-xl'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Delivering value...
        </motion.h2>
        <motion.h1
          className='text-7xl max-sm:text-4xl'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          The
        </motion.h1>
        <motion.h1
          className='text-7xl max-sm:text-4xl'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Mar
          <span className='border-container'>
            <span className='i-wrapper text-7xl max-sm:text-4xl'>ı</span>
            <motion.div
              initial={{ opacity: 0, y: -150 }}
              whileInView={{
                opacity: 1,
                y: "-0.8em",
                x: ['-5px', '5px', '-5px', '5px', '0'],
              }}
              transition={{
                duration: 3,
                delay: 0.3,
                repeat: 0,
              }}
              viewport={{ once: true }}
            >
              <Leaf
                fill={"#a4cf57"}
                top={"-0.5em"}
                left={"0em"}
                width={"250%"}
              />
            </motion.div>
          </span>
          co
        </motion.h1>
        <motion.h1
          className='text-7xl max-sm:text-4xl'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
        >
          Way
        </motion.h1>
      </div>
      <div className='col-md-5 text-xl'>
        <p>
          The Marico Way is our unique identity that brings together our Purpose, Ethos and Values. It inspires us to look beyond the bend, stimulate inclusive growth, which encompasses all stakeholders and create a powerful impact that outshines in a competitive global landscape.
        </p>
        <br />
        <p>
          Our values represent the compass that determines the way we interpret the world around us and chart our way forward.
        </p>
      </div>

      <div className='bg-green-grad'>
         {/* Switch Button */}
 <div className="switch-container">
        <label className="switch">
          <input type="checkbox" onChange={toggleCategory} checked={activeCategory === 'act'} />
          <span className="slider round"></span>
        </label>
        <span className="switch-label" style={{ whiteSpace: "pre-line", lineHeight: "1.2" }}>
  {activeCategory === 'think' ? (
    <>
      The Way We {"\n"} 
      <span style={{ fontSize: "2.5em", fontWeight: "bold" }}>Think</span>
    </>
  ) : (
    <>
      The Way We {"\n"} 
      <span style={{ fontSize: "2.5em", fontWeight: "bold" }}>Act</span>
    </>
  )}
</span>
      </div>
        <div className=''>
          <h2 className='h2 text-light mb-10'>Our ethos</h2>
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className='intro-card-container'
          >
            {categories[activeCategory].map((card, index) => (
              <div key={index} className='intro-card'>
                <img src={card.icon} alt={`${card.title} Icon`} />
                <h3>{card.title}</h3>
                <div className='intro-card-content'>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Uncomment and configure slider if needed */}
      {/* <div className="carousel-container">
        <AnimatePresence>
          <motion.div
            key={animateKey}
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
      </div> */}
    </div>
  );
};

export default Intro;



