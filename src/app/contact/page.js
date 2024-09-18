'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import PageTransitionWrapper from '../PageTransitionWrapper'
import gsap from 'gsap';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
      const formRef = useRef(null);
      const nameInputRef = useRef(null);
      const emailInputRef = useRef(null);
      const messageInputRef = useRef(null);
      const buttonRef = useRef(null);
      

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // add sumbit logic
        console.log('Form submitted:', formData);
      };

  return (
    <PageTransitionWrapper>
    <div className=" flex items-center justify-center p-4 ">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        delay={0.7}
        className="bg-white  bg-opacity-10 rounded-2xl p-8 backdrop-filter backdrop-blur-lg shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold  mb-6 text-center text-black">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-black mb-2">Name</label>
            <motion.input 
              whileFocus={{ scale: 1.02 }}
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-b border-accent focus:border-0 rounded-lg bg-white bg-opacity-20 focus:bg-opacity-30 transition-all duration-300 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-black mb-2">Email</label>
            <motion.input 
              whileFocus={{ scale: 1.02 }}
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border-b border-accent focus:border-0 bg-white bg-opacity-20 focus:bg-opacity-30 transition-all duration-300 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-black mb-2">Message</label>
            <motion.textarea 
              whileFocus={{ scale: 1.02 }}
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 rounded-lg border-b border-accent focus:border-0 bg-white bg-opacity-20 focus:bg-opacity-30 transition-all duration-300 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              placeholder="Your message here..."
            />
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r  from-purple-500 to-indigo-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-all duration-300"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
    </PageTransitionWrapper>
  )
}

export default ContactPage