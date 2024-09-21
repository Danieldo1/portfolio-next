import React, { useState, useEffect } from "react";
import { Github, ExternalLink, XIcon } from "lucide-react";
import Image from "next/image";
import { DrawerDescription, DrawerTitle } from "./ui/drawer";
import { Badge } from "./ui/badge";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import ProjectImageGrid from "./Thumbnails";
import FullSizeImage from "./FullSizeImage";
import { useInView } from "react-intersection-observer";

const useScrollReveal = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce:false,
    threshold: 0.28,
    rootMargin: "0px 0px -150px 200px",
    delay: 0.1
   
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return [ref, controls];
};


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

  const [titleRef, titleControls] = useScrollReveal();
  const [imagesRef, imagesControls] = useScrollReveal();
  const [descriptionRef, descriptionControls] = useScrollReveal();
  const [buttonsRef, buttonsControls] = useScrollReveal();
  const [technologiesRef, technologiesControls] = useScrollReveal();
  const [featuresRef, featuresControls] = useScrollReveal();

  return (
    <motion.div
    variants={containerVariants}
    className="md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto">
      {/* Title */}
      <motion.div
        ref={titleRef}
        initial="hidden"
        animate={titleControls}
        variants={itemVariants}
      >
        <DrawerTitle className="text-3xl font-bold leading-tight tracking-tight mb-4">
          {project.name}
        </DrawerTitle>
      </motion.div>

      {/* Main images and thumb */}
      <div className="p-4 pb-0">
        <motion.div
          ref={imagesRef}
          initial="hidden"
          animate={imagesControls}
          variants={imageVariants}
          className="mb-4"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-full aspect-auto h-0 pb-[90.25%] md:pb-[75%] lg:pb-[56.25%] mb-2 cursor-zoom-in rounded-lg z-1 "
            onClick={openLightbox}
          >
            <Image
              src={selectedImage}
              alt={`${project.name} main screenshot`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              unoptimized={true}
            />
          </motion.div>
          <ProjectImageGrid
            project={project}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        </motion.div>
        <AnimatePresence>
          {lightboxOpen && (
            <FullSizeImage
              selectedImage={selectedImage}
              closeLightbox={closeLightbox}
            />
          )}
        </AnimatePresence>

        {/* Description */}
        <motion.div
          ref={descriptionRef}
          initial="hidden"
          animate={descriptionControls}
          variants={itemVariants}
        >
          <DrawerDescription className="mb-4 text-black text-pretty text-base font-medium">
            {project.description}
          </DrawerDescription>
        </motion.div>
        {/* Buttons */}
        <motion.div
          ref={buttonsRef}
          initial="hidden"
          animate={buttonsControls}
          variants={itemVariants}
          className="flex flex-col sm:flex-row mb-4 gap-4"
        >
          <motion.button
            onClick={() => window.open(project.project_link, "_blank")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 bg-white text-black text-center border-[1px] border-black justify-center px-4 py-2 rounded-lg transition duration-300 hover:bg-gray-100 "
          >
            <ExternalLink className="w-5 h-5" />
            Visit Project
          </motion.button>
          <motion.button
            onClick={() => window.open(project.source_code_link, "_blank")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 bg-black text-white text-center  justify-center px-4 py-2 rounded-lg transition duration-300 hover:bg-gray-800 "
          >
            <Github className="w-5 h-5 text-white" />
            View Source Code
          </motion.button>
        </motion.div>

        {/* Technologies Block */}
        <motion.div
          ref={technologiesRef}
          initial="hidden"
          animate={technologiesControls}
          variants={itemVariants}
        >
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tech) => (
              <Badge key={tech.name} className={`${tech.color} select-none`}>
                {tech.name}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          ref={featuresRef}
          initial="hidden"
          animate={featuresControls}
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
        >
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
    </motion.div>
  );
};

export default DetailedProjectDrawer;
