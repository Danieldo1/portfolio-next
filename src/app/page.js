"use client";

import PageWrapper from "./PageTransitionWrapper";
import PageTransitionWrapper from "./PageTransitionWrapper";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ResumeDropdown from "@/components/ResumeDropdown";
import { useRouter } from "next/navigation";



export default function Home() {
  const mainRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const arrowRef = useRef(null);
  const containerRef = useRef(null);
  const spinRef = useRef(null);

  const router = useRouter();

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

  useEffect(() => {
    const container = containerRef.current;
    const arrow = arrowRef.current;
    const image = spinRef.current;

    if (!container || !arrow || !image) return;

    const arrowTl = gsap.timeline({ paused: true });

    arrowTl.to(arrow, {
      rotation: 360,
      duration: 0.5,
      scale: 1.25,
      ease: "power2.out",
    });

    gsap.set(image, { rotation: 0 });
    const spinTl = gsap.timeline({ repeat: -1, ease: "none" });
    spinTl.to(image, { rotation: 360, duration: 10 });

    container.addEventListener("mouseenter", () => {
      arrowTl.play();
      gsap.to(spinTl, { timeScale: 0.2, duration: 0.5 });
    });

    container.addEventListener("mouseleave", () => {
      arrowTl.reverse();
      gsap.to(spinTl, { timeScale: 1, duration: 0.5 });
    });

    return () => {
      container.removeEventListener("mouseenter", () => {});
      container.removeEventListener("mouseleave", () => {});
      spinTl.kill();
    };
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
    hidden: { x: -100, opacity: 0, rotate: 100 },
    visible: {
      x: 0,
      y: 50,
      opacity: 1,
      rotate: -30,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.7 },
    },
  };

  const circleVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 2 + i * 0.2, // 2 second initial delay, then stagger by 0.2 seconds
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

const handleClick = () => {
      router.push('/work')
  };

  return (
    <PageTransitionWrapper>
      <motion.main
        ref={mainRef}
        className="grid md:grid-cols-2 container mx-auto h-fit overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        
        <div className="z-10 lg:mt-20 ">
          <h1 ref={headingRef} className="text-4xl  font-bold mb-2">
            <span>Hi,</span> <span>I&apos;m</span>{" "}
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
          <ResumeDropdown />
        </div>
        <motion.div
          className="flex justify-center items-center absolute top-[30%] md:top-[15%] lg:top-[10%] xl:top-[15%] right-0 md:right-[5%] lg:right-[10%] xl:right-[15%] z-0 "
          variants={imageVariants}
        >
          <motion.div
            className="absolute top-[10%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border-4 border-accent rounded-full"
            variants={circleVariants}
            custom={0}
          />
          <motion.div
            className="absolute top-[14%] left-[36%] -translate-x-1/2 -translate-y-1/2 w-[230px] h-[230px] border-8 border-white rounded-full bg-accent"
            variants={circleVariants}
            custom={1}
          />
          <motion.div 
        className="absolute top-[18%] left-[42%] -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] border-[12px] border-white rounded-full"
        variants={circleVariants}
        custom={2}
      />
      <motion.div 
        className="absolute top-[22%] left-[48%] -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] border-[16px] border-white rounded-full"
        variants={circleVariants}
        custom={3}
      />
          <div ref={imageRef} className="select-none">
            <Image
              src="/file.webp"
              alt="image"
              width={400}
              height={400}
              priority
              className="rounded-full z-1 select-none overflow pointer-events-none"
            />
          </div>
        </motion.div>
        <motion.button
        onClick={handleClick}
          ref={containerRef}
          variants={leftImageVariants}
          className="absolute bottom-[25%] hidden md:block"
        >
          <div
            ref={spinRef}
            className="spin-container  left-[15%] w-[100px] h-[100px] cursor-pointer"
          >
            <Image
              src="/rounded-text.png"
              alt="Spinning text"
              fill
              priority
              className="invert z-1 select-none  pointer-events-none"
            />
          </div>
          <div>
            <ArrowRight
              ref={arrowRef}
              className="icon absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px]"
            />
          </div>
        </motion.button>
      </motion.main>
    </PageTransitionWrapper>
  );
}
