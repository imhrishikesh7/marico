import React from 'react';
import './About.css';
import Headings from '../Headings/Headings';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    './homepage/Group1.png',
    './homepage/Group2.png'
];

const About = () => {
    const [index, setIndex] = React.useState(0);
    const isMobile = window.innerWidth <= 768; // Detect if the screen is mobile size

    React.useEffect(() => {
        if (isMobile) return; // Skip image switching on mobile

        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, [isMobile]);

    return (
        <div className='marginal'>
            <div className='about-section'>
                <div className='row about-row justify-content-center'>
                    <div className='col-lg-6 abt-imgs'>
                        <AnimatePresence>
                            {!isMobile ? (
                                <motion.img
                                    key={index}
                                    src={images[index]}
                                    className='img-fluid'
                                    alt=""
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                />
                            ) : (
                                <img
                                    src={images[0]}
                                    className='img-fluid'
                                    alt=""
                                />
                            )}
                        </AnimatePresence>
                    </div>
                    <div className='col-lg-6 abt-content'>
                        <Headings he1={"About"} he2={"Marico"} clr={"green"} svg={"./homepage/bleaf.svg"} />
                        <p>
                            Marico (BSE 531642, NSE "MARICO") is one of India's leading consumer products
                            companies, in the global beauty and wellness space.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
