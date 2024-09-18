"use client";

import React, { useState, useEffect } from "react";
import PageTransitionWrapper from "../PageTransitionWrapper";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import ProjectSkeletonLoader from "@/components/SkeletonLoader";
import Link from "next/link";
import CustomButton from "@/components/CustomButton";
import { Drawer } from "vaul";
import DetailedProjectDrawer from "@/components/DetailedProjectDrawer";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data?.projects);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const currentProject = projects[currentIndex];

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const projectVariants = {
    enter: { opacity: 0, scale: 0.95 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <PageTransitionWrapper>
      <div className="flex flex-col min-h-[80vh] overflow-scroll">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-2 md:mb-4 text-gray-800">
          Creative <span className="text-accent font-normal">Visions</span>
        </h1>

        <main className="flex-grow flex items-center justify-center z-10 relative ">
          <button
            onClick={prevProject}
            className="absolute -left-3 xl:left-20 z-20 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors transform hover:scale-110"
            aria-label="Previous project"
          >
            <ChevronLeftIcon className="w-8 h-8" />
          </button>

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="w-full max-w-4xl p-8 absolute"
            >
              {isLoading ? (
                <ProjectSkeletonLoader />
              ) : (
                projects?.map((project, index) => (
                  <div
                    key={index}
                    className={`bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row ${
                      index !== currentIndex ? "hidden" : ""
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full md:w-1/2 h-64 md:h-auto object-cover"
                    />
                    <div className="p-6 md:w-1/2 flex flex-col justify-center">
                      <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-emerald-400">
                        {project.name}
                      </h2>
                      <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-stone-400 via-gray-700 mb-6">
                        {project.description}
                      </p>
                      {/* <CustomButton link={`/work/${project._id}`} /> */}
                      <Drawer.Root>
                        <Drawer.Trigger asChild>
                          <button
                            onClick={() => openProjectDetails(project)}
                            className="px-6 py-3 bg-accent text-white rounded-full text-lg font-semibold hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 inline-block text-center"
                          >
                            Explore Project
                          </button>
                        </Drawer.Trigger>
                        <Drawer.Portal>
                          <Drawer.Overlay className="fixed inset-0 bg-black/50 " />
                          <Drawer.Content className="bg-white flex flex-col z-[100] fixed bottom-0 left-0 right-0 max-h-[93%] rounded-t-[10px] shadow-[0px_-10px_15px_5px_#3C3B3B69]">
                            <div className="w-[30%] h-2 bg-slate-400 rounded-xl mx-auto my-3 cursor-grabbing" />
                            <div className=" w-full  mx-auto flex flex-col overflow-auto p-4 rounded-t-[10px] scrollbar-hide">
                              <DetailedProjectDrawer
                                project={selectedProject}
                              />
                            </div>
                          </Drawer.Content>
                        </Drawer.Portal>
                      </Drawer.Root>
                    </div>
                  </div>
                ))
              )}
            </motion.div>
          </AnimatePresence>

          <button
            onClick={nextProject}
            className="absolute -right-3 xl:right-20 z-20 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors transform hover:scale-110"
            aria-label="Next project"
          >
            <ChevronRightIcon className="w-8 h-8" />
          </button>
        </main>

        <footer className="p-6 justify-center mt-10 items-center z-10 hidden lg:flex">
          <div className="flex space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent scale-125"
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </footer>
      </div>

      {/* <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} className='overflow-auto'>
        <DetailedProjectDrawer project={selectedProject} />
      </Drawer> */}
    </PageTransitionWrapper>
  );
};

export default ProjectPage;
