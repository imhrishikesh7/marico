import React from 'react'
import "./Cover.css"
import { motion } from 'framer-motion';
import Leaf from '../Leaf/Leaf'
const Cover = () => {
    return (
        <div className='cov'>
            <video autoPlay muted loop
                style={{
                    width: "100%"
                }}
            >
                <source src="./homepage/m2.webm" />
            </video>
            <div className='themeline'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Delivering value...
                </motion.h2>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    The
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    Mar
                    <span className='border-container'>
                        <span className='i-wrapper'>ı</span>
                        <motion.div
                            initial={{ opacity: 0, y: -300 }}
                            animate={{
                                opacity: 1,
                                y: "-0.8em",
                                x: ['-20px', '20px', '-20px', '20px', '0'], // Waving effect
                            }}
                            transition={{
                                duration: 3, // Total duration for drop and wave
                                delay: 0.8,
                                repeat: 0, // Change to `Infinity` for continuous waving
                                repeatType: 'loop', // Repeat type for continuous wave
                            }}
                        >
                            <Leaf
                                fill={"#a4cf57"}
                                top={"-0.6em"}
                                left={"0em"}
                                width={"250%"}
                            />
                        </motion.div>
                    </span>
                    co
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                >
                    Way
                </motion.h1>
            </div>
        </div>
    )
}

export default Cover