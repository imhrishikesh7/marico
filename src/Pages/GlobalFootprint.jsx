import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../Utilities/useAnimation';
const GlobalFootprint = () => {
  return (
    <div>
        <motion.img {...fadeIn} src="./homepage/global-footprint.jpg" className='img-fluid' alt="" />
    </div>
  )
}

export default GlobalFootprint