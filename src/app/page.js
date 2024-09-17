"use client";

import PageWrapper from "./PageTransitionWrapper";
import PageTransitionWrapper from "./PageTransitionWrapper";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const mainRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        y: "+=10",
        x: "+=10",
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
        delay: 0.7,
      });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.7,
      });

      tl.set(mainRef.current, { visibility: "visible" }).from(
        headingRef.current.children,
        {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          delay: 0.7,
        }
      );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
        delay: 1.4,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0, rotate: 10 },
    visible: {
      x: 0,
      y: 50,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.5 },
    },
  };

  const leftImageVariants = {
    hidden: { x: -100, opacity: 0, rotate: 10 },
    visible: {
      x: 0,
      y: 50,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.5 },
    },
  };

  return (
    <PageTransitionWrapper>
      <motion.main
        ref={mainRef}
        className="grid md:grid-cols-2 container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="z-10 lg:mt-20">
          <h1 ref={headingRef} className="text-4xl  font-bold mb-2">
            <span>Hi,</span> <span>I'm</span>{" "}
            <span className="text-accent">Daniil</span>
          </h1>
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold"
          >
            A passionate and dedicated{" "}
            <span className="text-accent">Full Stack Developer</span> with a
            flair for creating intuitive, high-quality websites that seamlessly
            turn ideas into digital realities.
          </motion.p>
          <motion.button
            variants={itemVariants}
            className="rounded-full border-2 border-accent hover:bg-accent hover:text-white px-4 py-2 text-xl z-1 font-bold text-accent flex items-center justify-center gap-x-2 mt-4 relative"
          >
            Resume
            <ChevronDown />
          </motion.button>
        </div>
        <motion.div
          className="flex justify-center items-center absolute top-[30%] md:top-[15%] lg:top-[10%] xl:top-[15%] right-0 md:right-[5%] lg:right-[10%] xl:right-[15%] z-0 "
          variants={imageVariants}
        >
           <div className="absolute top-[40%] left-[60%] -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border-2 border-accent rounded-full" />
          <div ref={imageRef} className='select-none'>
            <Image
              src="/file.webp"
              alt="image"
              width={400}
              height={400}
              priority
              className="rounded-full z-1 select-none"
            />
          </div>
        </motion.div>
      <motion.div 
      variants={leftImageVariants}
      className="spin-container absolute bottom-[25%] hidden md:block left-[15%] w-[100px] h-[100px]">
      <Image
        src="/rounded-text.png"
        alt="Spinning text"
        fill
        priority
        className="invert slow-spin z-1"
      />
      <div>

      <ArrowRight className='icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] hover:w-[50px] hover:h-[50px] cursor-pointer  ' />
      </div>
    </motion.div>
      </motion.main>
      
    </PageTransitionWrapper>
  );
}
