'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProjectImageGrid = ({ project, selectedImage, setSelectedImage }) => {
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2 md:gap-4">
          {project.images.map((image, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={index}
              className={`relative w-16 h-16 cursor-pointer ${
                image === selectedImage ? "ring-2 ring-accent rounded" : ""
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`${project.name} screenshot ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded"
                
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectImageGrid;