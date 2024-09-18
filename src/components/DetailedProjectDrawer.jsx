import React, { useState } from "react";
import { Github, ExternalLink, XIcon } from "lucide-react";
import Image from "next/image";
import { DrawerDescription, DrawerTitle } from "./ui/drawer";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const DetailedProjectDrawer = ({ project }) => {
  const [selectedImage, setSelectedImage] = useState(project.images[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  if (!project) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24, delay: 0.2 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto"
    >
      {/* Title */}
      <motion.div variants={itemVariants}>
        <DrawerTitle className="text-3xl font-bold leading-tight tracking-tight mb-4">
          {project.name}
        </DrawerTitle>
      </motion.div>

      {/* Main images and thumb */}
      <div className="p-4 pb-0">
        <motion.div variants={imageVariants} className="mb-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-full h-0 pb-[90.25%] md:pb-[75%] lg:pb-[56.25%] mb-2 cursor-zoom-in rounded-lg z-1 "
            onClick={openLightbox}
          >
            <Image
              src={selectedImage}
              alt={`${project.name} main screenshot`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
          <div
            className={`grid grid-cols-${project?.images?.length || 5 } gap-2 md:gap-4 justify-items-center w-full z-0`}
          >
            
            {project.images.map((image, index) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                key={index}
                className={`relative h-16 aspect-square cursor-pointer ${
                  image === selectedImage ? "ring-2 ring-accent rounded" : ""
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`${project.name} screenshot ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded "
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
              onClick={closeLightbox}
            >
              <div className="relative max-w-4xl max-h-[90vh] w-full h-full rounded-md">
                <Image
                  src={selectedImage}
                  alt="Enlarged project image"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                />
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 text-white text-xl"
                >
                  <XIcon />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Description */}
        <motion.div variants={itemVariants}>
          <DrawerDescription className="mb-4 text-black text-pretty text-base font-medium">
            {project.description}
          </DrawerDescription>
        </motion.div>
{/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row mb-4 gap-4">
          <Button
            asChild
            className="flex items-center gap-2 bg-black hover:scale-105 transition duration-300 "
          >
            <Link
              href={project.source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white"
            >
              <Github className="w-5 h-5 text-white" />
              View Source Code
            </Link>
          </Button>
          <Button
            asChild
            className="flex items-center gap-2 bg-white border-[1px] border-black hover:bg-gray-100 hover:scale-105 transition duration-300"
          >
            <Link
              href={project.project_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black"
            >
              <ExternalLink className="w-5 h-5" />
              Visit Project
            </Link>
          </Button>
        </motion.div>

        {/* Technologies Block */}

        <motion.h2 variants={itemVariants} className="text-2xl font-semibold mb-4">Technologies Used</motion.h2>
        <motion.div variants={itemVariants}className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tech) => (
            <Badge key={tech.name} className={`${tech.color}`}>
              {tech.name}
            </Badge>
          ))}
        </motion.div>


        {/* Key Features */}
        <motion.div 
          variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-lg rounded-xl p-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
            <ul className="list-disc  space-y-2">
              {project?.key_features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-lg rounded-xl p-6"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Technical Highlights
            </h3>
            <ul className="list-disc  space-y-2">
              {project?.technical_highlights?.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
      {/* <DrawerFooter>
        
      </DrawerFooter> */}
    </motion.div>
  );
};

export default DetailedProjectDrawer;
