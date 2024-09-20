import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = ({ onClick }) => {
  return (
    <div className="slick-next-custom" onClick={onClick}>
      <img src="/homepage/right-arrow.svg" alt="Next" />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="slick-prev-custom" onClick={onClick}>
      <img src="/homepage/left-arrow.svg" alt="Previous" />
    </div>
  );
};

const EightValues = () => {
  const images = [
    './homepage/sl1.jpg',
    './homepage/sl2.jpg',
    './homepage/sl3.jpg',
    './homepage/sl4.jpg',
    './homepage/sl5.jpg',
    './homepage/sl6.jpg',
    './homepage/sl7.jpg',
    './homepage/sl8.jpg',
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable arrows
    prevArrow: <PrevArrow />, // Custom previous arrow
    nextArrow: <NextArrow />, // Custom next arrow
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="marginal">
      <Slider {...settings}>
        {images.map((image, index) => (
          <motion.div key={index} className="carousel-slide">
            <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default EightValues;
