"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import PageTransitionWrapper from "../PageTransitionWrapper";
import {
  Mail,
  MailIcon,
  MapPin,
  PenLine,
  SendHorizonal,
  User2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import AnimatedTitle from "@/components/AnimatedTitle";

const ContactPage = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        staggerChildren: 0.5,
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 500,
        // delay: 1.2,
      },
    },
  };

  const containerBtnVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.2,
        duration: 1,
        delay: 1.1,
      },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    emailjs
      .send(
        "service_sde995g",
        "template_1y5lt3p",
        {
          from_name: form.name,
          to_name: "Daniil",
          from_email: form.email,
          to_email: "daniel.speranskiy@gmail.com",
          message: form.message,
        },
        "7yFNjLLKOxxB4Osr4"
      )
      .then(
        () => {
          setSent(false);
          toast.success(
            "Thank you, I will get back to you as soon as possible!"
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setSent(false);
          console.log(error);
          toast.error("Something went wrong, please try again later!");
        }
      );
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/danielsper", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:daniel.speranskiy@gmail.com";
  };

  const handleLocationClick = () => {
    window.open("https://www.google.com/maps/place/Batumi,+Georgia", "_blank");
  };

  return (
    <PageTransitionWrapper>
      <div className=" pb-20 w-full h-full overflow-clip relative">
        <div className="rounded-full absolute top-1/2 lg:top-[70%] -translate-y-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-purple-500/20 via-pink-300/20 to-transparent z-0 lg:w-[800px] lg:h-[800px]" />
        <div className="relative z-[8px] pt-0 lg:pt-10 px-4 ">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full max-w-md mx-auto"
          >
            <AnimatedTitle leftWord="Contact" rightWord="me" />
            <motion.p
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1.5 }}
            className="text-center text-lg md:text-xl text-gray-600 mb-6">
              I want to hear back from you
            </motion.p>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={inputVariants}>
                <div className="relative ">
                  <motion.label
                    htmlFor="name"
                    className="absolute left-2 flex gap-2 items-center bottom-7 text-black text-sm transition-all duration-300 pointer-events-none"
                  >
                    <User2 className="size-4 " aria-hidden />
                    Name
                  </motion.label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    onFocus={(e) =>
                      e.target.previousSibling.classList.add(
                        "-translate-y-9",
                        "text-xs"
                      )
                    }
                    onBlur={(e) =>
                      !e.target.value &&
                      e.target.previousSibling.classList.remove(
                        "-translate-y-9",
                        "text-xs"
                      )
                    }
                    required
                    onChange={handleChange}
                    autoComplete="off"
                    className="w-full px-4 py-2 border-b-4 border border-accent focus:border-0 rounded-lg bg-white bg-opacity-20 focus:bg-opacity-30 transition-all duration-300 text-black placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 mb-3"
                    placeholder="Your Name"
                  />
                </div>
              </motion.div>

              <motion.div variants={inputVariants}>
                <div className="relative">
                  <motion.label
                    htmlFor="email"
                    className="absolute  flex gap-2 items-center left-2 bottom-7 text-black text-sm transition-all duration-300 pointer-events-none"
                  >
                    <Mail className="size-4 " aria-hidden />
                    Email
                  </motion.label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    onFocus={(e) =>
                      e.target.previousSibling.classList.add(
                        "-translate-y-9",
                        "text-xs"
                      )
                    }
                    onBlur={(e) =>
                      !e.target.value &&
                      e.target.previousSibling.classList.remove(
                        "-translate-y-9",
                        "text-xs"
                      )
                    }
                    required
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border-b-4 border border-accent focus:border-0 bg-white bg-opacity-20 focus:bg-opacity-30 transition-all duration-300 text-black placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 mb-3"
                    placeholder="your@email.com"
                  />
                </div>
              </motion.div>

              <motion.div variants={inputVariants}>
                <div className="relative">
                  <motion.label
                    htmlFor="message"
                    className="absolute flex gap-2 items-center left-2 top-4 text-black text-sm transition-all duration-300 pointer-events-none"
                  >
                    <PenLine className="size-4 " aria-hidden />
                    Message
                  </motion.label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    onFocus={(e) =>
                      e.target.previousSibling.classList.add(
                        "-translate-y-10",
                        "text-xs"
                      )
                    }
                    onBlur={(e) =>
                      !e.target.value &&
                      e.target.previousSibling.classList.remove(
                        "-translate-y-10",
                        "text-xs"
                      )
                    }
                    required
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg border-b-4 border border-accent focus:border-0 bg-white bg-opacity-20 focus:bg-opacity-30 transition-all duration-300 text-black placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    placeholder="Your message here..."
                  />
                </div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full  bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-all duration-300"
              >
                {sent ? "Sent" : "Send"}
              </motion.button>
            </form>
          </motion.div>
        </div>
        {/* buttons */}

        <motion.div
          variants={containerBtnVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 gap-4 lg:gap-8 relative z-1 mt-10"
        >
          <motion.button
            variants={buttonVariants}
            whileHover={{ scale: 0.8 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleTelegramClick}
            className="w-full h-40 bg-white/20 border-[1px] border-b-4 border-accent rounded-xl flex flex-col justify-evenly items-center"
          >
            <div className=" bg-blue-300/30 p-2 rounded-full border-black border-[1px]">
              <SendHorizonal className="size-10" strokeWidth={1.2} />
            </div>
            <p className="font-bold text-xs sm:text-sm md:text-base">
              @danielsper
            </p>
          </motion.button>

          <motion.button
            variants={buttonVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEmailClick}
            className="w-full h-40 bg-white/20 border-[1px] border-b-4 border-accent rounded-xl flex flex-col justify-evenly items-center "
          >
            <div className=" bg-pink-300/30 p-2 rounded-full border-black border-[1px]">
              <MailIcon className="size-10" strokeWidth={1.2} />
            </div>
            <p className="font-bold sm:text-sm text-xs md:text-base">
              daniel.speranskiy
            </p>
          </motion.button>

          <motion.button
            variants={buttonVariants}
            whileHover={{ scale: 0.8 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLocationClick}
            className="w-full h-40 bg-white/20 border-[1px] border-b-4 border-accent rounded-xl flex flex-col justify-evenly items-center"
          >
            <div className=" bg-yellow-300/30 p-2 rounded-full border-black border-[1px]">
              <MapPin className="size-10" strokeWidth={1.2} />
            </div>
            <p className="font-bold text-xs sm:text-sm md:text-base">
              Batumi, Georgia
            </p>
          </motion.button>
        </motion.div>
      </div>
    </PageTransitionWrapper>
  );
};

export default ContactPage;
