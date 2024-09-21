'use client';

import {useEffect} from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ErrorPage({error}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-200 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl"
      >
        <div>
          <motion.h2 
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
            className="mt-6 text-center text-3xl font-extrabold text-gray-900"
          >
            Oops! Something went wrong
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-2 text-center text-sm text-gray-600"
          >
            Don&apos;t worry, we&apos;re on it. In the meantime, you can:
          </motion.p>
        </div>
        <div className="mt-8 space-y-6">
          <motion.ul 
            className="space-y-4"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            animate="show"
          >
            {['Refresh the page', 'Go back to the homepage', 'Contact support'].map((item, index) => (
              <motion.li 
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  show: { opacity: 1, x: 0 }
                }}
                className="flex items-center space-x-3 text-gray-700"
              >
                <svg className="h-5 w-5 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
          <div>
            <Link href="/">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Return to Homepage
              </motion.a>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
