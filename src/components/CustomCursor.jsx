'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'lucide-react';

const CustomCursor = ({ target }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const checkPointer = () => {
      if (target) {
        const computedStyle = window.getComputedStyle(target);
        setIsPointer(computedStyle.cursor === 'pointer' || target.tagName.toLowerCase() === 'a');
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', checkPointer);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', checkPointer);
    };
  }, [mousePosition.x, mousePosition.y, target]);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    pointer: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
      backgroundColor: '#925eff',
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 28,
      },
    },
    linkHover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 2,
      backgroundColor: '#925eff',
      boxShadow: '0 0 10px rgba(146, 94, 255, 0.5)',
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 28,
      },
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 hidden sm:block"
      animate={isPointer ? (target?.tagName?.toLowerCase() === 'a' ? 'linkHover' : 'pointer') : 'default'}
      variants={variants}
    >
      {isPointer && target?.tagName?.toLowerCase() === 'a' ? (
        <motion.div
          className="flex items-center justify-center h-full"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 28,
          }}
        >
          <Link size={16} color="#fff" />
        </motion.div>
      ) : (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="8" fill="#925eff" />
        </svg>
      )}
    </motion.div>
  );
};

export default CustomCursor;