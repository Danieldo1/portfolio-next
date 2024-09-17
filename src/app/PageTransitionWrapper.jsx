'use client';

import Transition from "@/components/Transition";
import { AnimatePresence } from "framer-motion";
import { usePathname } from 'next/navigation';


const PageTransitionWrapper = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" >
      {children}
      <Transition key={pathname} />
    </AnimatePresence>
  );
};

export default PageTransitionWrapper;