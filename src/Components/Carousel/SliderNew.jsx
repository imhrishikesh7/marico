import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";

// Function to determine the best contrasting text color (black or white)
const getContrastingTextColor = (bgColor) => {
  const color = bgColor.substring(1); // Remove the '#' character
  const rgb = parseInt(color, 16); // Convert hex to integer
  const r = (rgb >> 16) & 0xff; // Extract red
  const g = (rgb >> 8) & 0xff; // Extract green
  const b = (rgb >> 0) & 0xff; // Extract blue

  // Calculate brightness (YIQ formula)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "black" : "white";
};

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const [textColor, setTextColor] = useState("white");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // Uncomment the next line and comment the following one if you want to change based on the entire page scroll
    // target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  const backgroundColors = [
    "#208ee9",
    "#1d1d1d",
    "#dbdbdb",
    "#dbdbdb",
    "#208ee9",
    "#dbdbdb",
  ];

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        return distance < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
    setTextColor(getContrastingTextColor(backgroundColors[closestBreakpointIndex % backgroundColors.length]));
  });

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      transition={{ ease: "easeInOut", duration: 0.6 }}
      className="h-[80vh] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 pb-20 hide-scroll"
      ref={ref}
    >
      <div className="relative flex items-start px-2 md:w-[50%] w-full">
        <div className="w-full xyz">
          {content.map((item, index) => (
            <div key={item.title + index} className={`my-[20%] pt-5 px-2 ${index === 5 ? 'mb-[0%]' : ''}`}>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className={`text-2xl font-bold ${textColor === 'white' ? 'text-slate-100' : 'text-slate-900'}`}
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className={`text-kg ${textColor === 'white' ? 'text-slate-300' : 'text-slate-700'} mt-10`}
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        className={`hidden lg:block md:w-[50%] rounded-md sticky top-10 overflow-hidden ${contentClassName}`}
        key={content[activeCard].content} // Re-render on content change
      >
        <AnimatePresence>
          <motion.img
            src={content[activeCard].content}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} 
            alt={content[activeCard].title}
            className="object-contain w-[80%] m-auto h-[100%]"
          />
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
