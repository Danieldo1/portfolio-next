"use client";

import React,{ useEffect, useRef } from "react";
import PageWrapper from "../PageTransitionWrapper";
import PageTransitionWrapper from "../PageTransitionWrapper";
import CountUp from "react-countup";
import SkillsSlider from "@/components/SkillsSlider";
import { DraftingCompass, Languages, Laptop, Router } from "lucide-react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const mainRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const statsRef = useRef(null);
  const skillsRef = useRef(null);

  const skillsData = [
    { category: "Frontend", items: ["React", "Next.js", "Tailwind", "Chakra UI"],icon: Laptop  },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB"],icon: Router },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Netlify"],icon: DraftingCompass  },
    { category: "Languages", items: ["JavaScript", "HTML", "CSS"],icon: Languages  },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation for the main content
      gsap.from(mainRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        delay: 0.5, 
      });

      // Heading animation
      gsap.from(headingRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 1.2,
        stagger: 0.4,
        delay: 1, 
      });

      // Paragraph animation
      gsap.from(paragraphRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 1.5, 
      });

      // Stats animation
      gsap.from(statsRef.current.children, {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        stagger: 0.2,
        delay: 2.5,
        ease: "back.out(1.7)",
      });

      // Skills section animation
      ScrollTrigger.create({
        trigger: skillsRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.from(skillsRef.current.children, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: 1.7,
            stagger: 0.2,
            ease: "power3.out",
          });
        },
      });
    }, mainRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <PageTransitionWrapper>
      <PageWrapper>
      <main ref={mainRef} className="min-h-screen overflow-y-auto">
      <div className="container mx-auto p-4">
        <h1 ref={headingRef} className="text-3xl md:text-5xl font-bold text-center mb-2 md:mb-4 text-gray-800">
          <span>Crafting</span> <span className="text-accent">full stack web</span> <span>apps</span>
        </h1>
        <p ref={paragraphRef} className="text-lg md:text-xl font-semibold text-center mb-4 px-6 md:px-12 text-gray-700">
          Since I was 15, I have dove into the realm of web development. For
          past 4 years I have been working on my passion of web development. I
          have worked on projects ranging from basic web development to full
          stack web development.
        </p>

        <div ref={statsRef} className="grid grid-cols-3 gap-4 text-center my-8 md:my-14">
          <div className="flex flex-col border-r-2 border-gray-500">
            <span className="text-3xl font-bold text-accent"><CountUp end={8} delay={3.2} duration={2} /></span>
            <p className="text-sm uppercase font-black text-gray-600" >Years of experience</p>
          </div>
          <div className="flex flex-col border-r-2 border-gray-500">
            <span className="text-3xl font-bold text-accent"><CountUp end={90} delay={3.4} duration={2} suffix="+" /></span>
            <p className="text-sm uppercase font-black text-gray-600" >Satisfied customers</p>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-accent"><CountUp end={100} delay={3.6} duration={2} suffix="+" /></span>
            <p className="text-sm uppercase font-black text-gray-600" >Projects completed</p>
          </div>
        </div>

        <div ref={skillsRef} className="mt-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-2 text-gray-800">
            My <span className="text-accent">skills</span>
          </h2>
          <SkillsSlider skills={skillsData} />
        </div>
      </div>
    </main>
      </PageWrapper>
    </PageTransitionWrapper>
  );
};

export default AboutPage;
