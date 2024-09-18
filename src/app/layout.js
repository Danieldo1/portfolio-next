import localFont from "next/font/local";
import "./globals.css";

import Navbar from "../components/Navbar";
import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import toast, { Toaster } from 'react-hot-toast';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Daniil Speranskii | Fullstack Developer | Portfolio",
  description: "Portfolio website of Daniil Speranskii, a fullstack developer.Here you can find my projects, skills, and contact information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
    <body
      className={`${geistSans.variable} ${geistMono.variable} grid-main antialiased bg-pink-100 text-black`}
    >
      <CustomCursor />
      <div className="flex flex-col min-h-screen">
        <Header className="" />
        <main className="flex-grow overflow-y-auto">
          <div className="container mx-auto px-4 py-8">
            {children}
          </div>
        </main>
        <Navbar />
      </div>
      <Toaster />
    </body>
  </html>
  );
}
