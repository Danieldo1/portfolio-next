

import { motion } from "framer-motion";


const AnimatedTitle = ({leftWord, rightWord}) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2
        }
      }
    };
  
    const leftWordVariants = {
      hidden: { x: '-100%' },
      visible: {
        x: '0%',
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
      }
    };
  
    const rightWordVariants = {
      hidden: { x: '100%' },
      visible: {
        x: '0%',
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
      }
    };
  
    return (
      <motion.h1 
        className="text-3xl md:text-5xl font-bold text-center p-4  md:mb-4 text-gray-800  relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative h-[1.2em] overflow-hidden">
          <motion.span 
            className="absolute left-0 right-1/2 text-right mr-1 "
            variants={leftWordVariants}
          >
            {leftWord}
          </motion.span>
          <motion.span 
            className="absolute left-1/2 right-0 text-left ml-1 text-accent font-normal"
            variants={rightWordVariants}
          >
            {rightWord}
          </motion.span>
        </div>
      </motion.h1>
    );
  };

  export default AnimatedTitle