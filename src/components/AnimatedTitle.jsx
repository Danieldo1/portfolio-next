

import { motion } from "framer-motion";


const AnimatedTitle = ({leftWord, rightWord}) => {
  const containerVariants = {
    hidden: { opacity: 0 ,},
    visible: {
      opacity: 1,
      
      transition: {
        delayChildren: 0.7,
        delay: 0.7,
        staggerChildren: 0.2

      }
    }
  };

  const leftWordVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: {
      x: '0%',
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rightWordVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: {
      x: '0%',
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.h1 
      className="text-3xl md:text-5xl font-bold text-center p-4 text-gray-800 w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-center items-center ">
        <div className="relative inline-flex">
          <motion.span 
            className="mr-1"
            variants={leftWordVariants}
          >
            {leftWord}
          </motion.span>
          <motion.span 
            className="text-accent font-normal ml-1"
            variants={rightWordVariants}
          >
            {rightWord}
          </motion.span>
        </div>
      </div>
    </motion.h1>
    );
  };

  export default AnimatedTitle