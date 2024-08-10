import React, { useRef } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import './Messages.css'; // Custom CSS for slider
import LinkBtn from '../LinkBtn/LinkBtn';
import Leaf from '../Leaf/Leaf';

const Messages = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        centerPadding: '15%',
        nextArrow: null, // Remove next arrow
        prevArrow: null, // Remove prev arrow
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '10%',
                },
            },
        ],
    };

    const handleClick = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    return (
        <div className='messages-slider'>
            <Slider ref={sliderRef} {...settings}>
                <div className="slider-item" onClick={() => handleClick(0)}>
                    <motion.div
                        className="card c1"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0 }}
                    >
                        <motion.img
                            src="./homepage/msg1.webp"
                            alt="Slide 1"
                            className="card-image"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.3 }}
                        />

                        

                            <motion.div
                                className="card-content relative"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.6 }}
                            >
                                <Leaf fill={"rgba(244, 127, 32, 0.5)"} top={"-5%"} right={"0%"} width={"50px"} animate={1}/>
                                <h2 className='mb-5 relative'>CHAIRMAN’S PERSPECTIVE
                                </h2>
                                <p>
                                    <img src="./homepage/quote-o.svg" alt="" className='quo-1' />
                                    <img src="./homepage/quote-o.svg" alt="" className='quo-2' />
                                    I have always believed that one path-breaking innovation can have a cascading positive impact on an entire ecosystem. Marico Innovation Foundation (MIF), since its inception in 2003, has been committed to nurturing and catalysing India’s innovation landscape and ground-breaking technologies that can create large-scale socio-economic and environmental impact for millions of people.
                                </p>
                                    <LinkBtn />
                            </motion.div>
                    </motion.div>
                </div>
                <div className="slider-item" onClick={() => handleClick(1)}>
                    <motion.div
                        className="card c2"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0 }}
                    >
                        <motion.img
                            src="./homepage/msg2.webp"
                            alt="Slide 2"
                            className="card-image"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.3 }}
                        />

                            <motion.div
                                className="card-content relative"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.6 }}
                            >
                                <Leaf fill={"rgba(155, 205, 238, 0.5)"} top={"-5%"} right={"0"} width={"50px"} animate={1}/>
                                <h2 className='mb-5 relative'>MESSAGE FROM THE CEO AND MD
                                </h2>
                                <p>
                                    <img src="./homepage/quote-b.svg" alt="" className='quo-1' />
                                    <img src="./homepage/quote-b.svg" alt="" className='quo-2' />
                                    It is deeply inspiring for all of us at Marico that we touch the lives of one out of every three Indians through our portfolio of brands, and reach out to millions of consumers through our international businesses as well. Catering to the aspirations of such a diverse cross-section of consumers, transcending geographic borders and cultural preferences, continues to be both an opportunity and a responsibility for your Company.
                                </p>
                                <LinkBtn />
                            </motion.div>
                    </motion.div>
                </div>
            </Slider>
        </div>
    );
};

export default Messages;
