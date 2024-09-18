'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const ResumeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ dropdownRef ]);

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div ref={dropdownRef} className="relative z-10">
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={toggleDropdown}
        className="rounded-full border-2 border-accent hover:bg-accent hover:text-white px-4 py-2 text-xl font-bold text-accent flex items-center justify-center gap-x-2 mt-4"
      >
        Resume
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute top-full left-0 mt-2 w-fit bg-white rounded-md shadow-lg overflow-hidden"
          >
            <Link
              href="https://drive.google.com/file/d/1RU6IwXWfCNRzqfHJIgv5wa2SivAnDuUF/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent hover:text-white transition-colors duration-150"
            >
              English Resume
            </Link>
            <Link 
              href="https://drive.google.com/file/d/1g7eDUOTor4b-t-goe3AORMJvBlmiMbdv/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent hover:text-white transition-colors duration-150"
            >
              Russian Resume
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResumeDropdown;