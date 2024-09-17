"use client";

import Transition from "@/components/Transition";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import PageWrapper from "./PageTransitionWrapper";
import PageTransitionWrapper from "./PageTransitionWrapper";

export default function Home() {
  const router = useRouter();
  return (
    <PageTransitionWrapper>
    <PageWrapper>
      <main >
        <h1>Welcome to the Home Page</h1>
        {/* Your page content here */}
      </main>
    </PageWrapper>
  </PageTransitionWrapper>
  );
}
