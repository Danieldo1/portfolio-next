import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Loader2, XIcon } from "lucide-react";

const FullSizeImage = ({ selectedImage, closeLightbox }) => {
  const [imageAspectRatio, setImageAspectRatio] = useState(16 / 9); // Default aspect ratio
  const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
    setIsLoading(true);
    

    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = (e) => reject(e);
      });
    };

    const timer = setTimeout(() => {
      loadImage(selectedImage)
        .then((img) => {
          setImageAspectRatio(img.width / img.height);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }, 1000); // Minimum 1 second loading time

    return () => clearTimeout(timer);
  }, [selectedImage]);

  const cloudflareUrl = `${selectedImage}?fit=contain&width=1920&height=1080`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={closeLightbox}
    >
      <div className="relative w-full h-full max-w-4xl max-h-[90vh] flex items-center justify-center">
        <div
          className="relative w-full h-0"
          style={{ paddingBottom: `${(1 / imageAspectRatio) * 100}%` }}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="w-40 h-40 animate-spin text-white" />
            </div>
          )}
          {!isLoading && (
            <Image
              src={cloudflareUrl}
              alt="Enlarged project image"
              layout="intrinsic"
              width={1920}
              height={1080}
              objectFit="contain"
              className="rounded-md"
            />
          )}
        </div>
        <button
          onClick={closeLightbox}
          className="absolute top-2 right-2 text-white text-xl bg-black bg-opacity-50 rounded-full p-2"
        >
          <XIcon className="w-6 h-6" />
        </button>
      </div>
    </motion.div>
  );
};

export default FullSizeImage;
