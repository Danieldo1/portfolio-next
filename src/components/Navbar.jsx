"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const HouseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-house">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-user">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const DashboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dashboard">
    <rect width="7" height="9" x="3" y="3" rx="1"/>
    <rect width="7" height="5" x="14" y="3" rx="1"/>
    <rect width="7" height="9" x="14" y="12" rx="1"/>
    <rect width="7" height="5" x="3" y="16" rx="1"/>
  </svg>
);

const LayoutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-layout">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
    <line x1="3" x2="21" y1="9" y2="9"/>
    <line x1="9" x2="9" y1="21" y2="9"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-mail">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);


// nav data
export const navData = [
  { name: "home", path: "/", Icon: HouseIcon },
  { name: "about", path: "/about", Icon: UserIcon },
  { name: "services", path: "/services", Icon: DashboardIcon },
  { name: "work", path: "/work", Icon: LayoutIcon },
  { name: "contact", path: "/contact", Icon: MailIcon },
];

const Nav = () => {
  const pathname = usePathname();
  const navRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const navElement = navRef.current;
    const linkElements = linksRef.current;

    // Initial animation for the navbar
    gsap.fromTo(navElement, 
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Staggered animation for nav items
    gsap.fromTo(linkElements, 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.5, 
        stagger: 0.1, 
        ease: "power2.out",
        delay: 0.5
      }
    );

    // Hover animations for nav items
    linkElements.forEach((link) => {
      gsap.set(link, { transformOrigin: "center center" });
      
      link.addEventListener("mouseenter", () => {
        gsap.to(link, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(link, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <nav ref={navRef} className="flex flex-shrink-0 flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-[8px] top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full border-[0.5px] lg:border-accent">
        {navData.map((link, i) => (
          <Link
            className={`${
              link.path === pathname && "text-accent"
            } nav-link relative flex items-center group hover:text-accent transition-all duration-300`}
            href={link.path}
            key={link.name + i}
            ref={(el) => (linksRef.current[i] = el)}
          >
            {/* tooltip */}
            <div
              role="tooltip"
              className="absolute pr-14 right-0 hidden xl:group-hover:flex"
            >
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>

                {/* triangle */}
                <div
                  className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                  aria-hidden
                />
              </div>
            </div>

            {/* icon */}
            <div className="flex flex-col items-center gap-x-2 h-full">
              <link.Icon />
              <p className="text-sm capitalize caption-bottom">{link.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
