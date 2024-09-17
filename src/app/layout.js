import localFont from "next/font/local";
import "./globals.css";

import Navbar from "../components/Navbar";
import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    // supressHydration
    <html lang="en" suppressHydrationWarning={true} >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-pink-100 page bg-site text-black bg-cover bg-no-repeat relative`}
      >
      <CustomCursor />
        <Header />
        <Navbar />
        <div className='absolute top-40 left-5 w-full h-full'>{children}</div>
      </body>
    </html>
  );
}
