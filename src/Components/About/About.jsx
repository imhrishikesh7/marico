import React from 'react';
import './About.css';
import Headings from '../Headings/Headings';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
                    </div>
                    <div className='col-lg-6 abt-content'>
                        <Headings he1={"About"} he2={"Marico"} clr2={"green"} clr={"blue"} />
                        <p>
                            Marico (BSE 531642, NSE "MARICO") is one of India's leading consumer products
                            companies, in the global beauty and wellness space.
                        </p>

                        <div className='image-container'>
                            {['yellow@2x.png', 'orange@2x.png', 'Blue@2x.png', 'Pink@2x.png'].map((image, index) => (
                                <RotatingImage
                                    key={index}
                                    src={`./homepage/${image}`}
                                    className='w-25'
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Component to handle the rotating animation
const RotatingImage = ({ src, className }) => {
    const { ref, inView } = useInView({ triggerOnce: false }); // triggerOnce: false to reset animation every time
    const controls = useAnimation();

    React.useEffect(() => {
        if (inView) {
            // Reset animation to start from 0 and rotate 360
            controls.start({
                rotate: [0, 360],
                transition: { duration: 1, ease: "easeInOut" }
            });
        }
    }, [inView, controls]);

    return (
        <motion.img
            ref={ref}
            src={src}
            className={className}
            alt=""
            initial={{ rotate: 0 }}
            animate={controls}
        />
    );
};

export default About;
