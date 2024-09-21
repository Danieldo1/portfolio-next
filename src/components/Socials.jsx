"use client";
import React, { useRef, useEffect } from "react";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";

export const socialData = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/dani8l_sp/",
    Icon: Instagram,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/daniel.speranskiy1",
    Icon: Facebook,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/daniil-speranskii/",
    Icon: Linkedin,
  },
  {
    name: "Github",
    link: "https://github.com/Danieldo1",
    Icon: Github,
  },
];

const Socials = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const navElement = navRef.current;
    const linkElements = linksRef.current;

    // Initial animation for the header
    gsap.fromTo(
      navElement,
      { opacity: 0 },
      { opacity: 1, duration: 2.5, ease: "power3.out" }
    );

    // Staggered animation for links
    gsap.fromTo(
      linkElements,
      { x: -1000, opacity: 0, y: -500 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.8,
      }
    );

    // Hover animations for nav items
    linkElements.forEach((link) => {
      gsap.set(link, { transformOrigin: "center center" });

      link.addEventListener("mouseenter", () => {
        gsap.to(link, {
          scale: 1.2,
          duration: 0.2,
          ease: "power2.out",
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(link, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <div ref={navRef} className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          ref={(el) => (linksRef.current[i] = el)}
          className={`${
            social.name !== social.link
              ? "hover:bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-200`}
          key={i}
        >
          <social.Icon aria-hidden className="" />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
