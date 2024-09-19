import localFont from "next/font/local";
import "./globals.css";

import Navbar from "../components/Navbar";
import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import toast, { Toaster } from 'react-hot-toast';
import ogImage from "./opengraph-image.png";

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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fce7f3' },
    { media: '(prefers-color-scheme: dark)', color: '#7373732e' },
  ],
}

export const metadata = {
  title: {
    default: "Daniil Speranskii | Fullstack Developer | Portfolio",
    template: "%s | Daniil",
  },
  metadataBase: new URL("https://dansper.com"),
  description: "Portfolio website of Daniil Speranskii, a fullstack developer.Here you can find my projects, skills, and contact information.",
  openGraph: {
    title: "Daniil Speranskii | Fullstack Developer | Portfolio",
    description:
      "Portfolio website of Daniil Speranskii, a fullstack developer.Here you can find my projects, skills, and contact information.",
    type: "website",
    url: "https://dansper.com",
    locale: "en_US",
    siteName: "Daniil Speranskii",
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
        alt: "Daniil Portfolio",
        card: "summary_large_image",
      },
    ],
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} className='scrollbar-hide'>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
    <body
      className={`${geistSans.variable} ${geistMono.variable} grid-main antialiased bg-pink-100 text-black `}
    >
      <CustomCursor />
      <div className="flex flex-col ">
        <Header className="" />
        <main className="">
          <div className="container mx-auto px-4 py-2 md:py-8 ">
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
