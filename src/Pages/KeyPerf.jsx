import React from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import Headings from '../Components/Headings/Headings';

const KeyPerf = () => {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  return (
    <div className=' w-100 p-1'>
      <div className='marginal row'>
      <b className='fs-4 mt-4'>KEY PERFORMANCE INDICATORS</b>
            <Headings
                he1={"Mapping a healthy"}
                he2={"trajectory"}
                clr2={"#87C54C"}
                clr={"#87C54C"}
            />

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((num, index) => (
          <InView key={num} triggerOnce>
            {({ ref, inView }) => (
              <motion.div
                className='col-md-3'
                ref={ref}
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
                custom={index}
                variants={imageVariants}
              >
                <img src={`./key-perf/${num}.jpg`} className='img-fluid' alt={`Highlight ${num}`} />
              </motion.div>
            )}
          </InView>
        ))}
      </div>

    </div>
  );
};

export default KeyPerf;
