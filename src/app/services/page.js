"use client";
import { motion,useAnimation } from "framer-motion";
import {
  Code,
  Palette,
  Smartphone,
  Globe,
  Zap,
  Database,
  Coffee,
  Lightbulb,
  Podcast,
} from "lucide-react";
import PageTransitionWrapper from "../PageTransitionWrapper";
import AnimatedTitle from "@/components/AnimatedTitle";

const services = [
  {
    title: "Web Development",
    description: "Crafting responsive and performant websites",
    icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8" />,
    color: "bg-blue-500/80",
    span: "col-span-2 sm:col-span-2",
  },
  {
    title: "Mobile Apps",
    description: "Building web applications with mobile compatibility",
    icon: <Smartphone className="h-6 w-6 sm:h-8 sm:w-8" />,
    color: "bg-green-500/80",
    span: "col-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    title: "UI/UX Design",
    description: "Crafting pixel perfect designs",
    icon: <Palette className="h-6 w-6 sm:h-8 sm:w-8" />,
    color: "bg-purple-500/80",
    span: "col-span-2 sm:col-span-1",
  },
  {
    title: "Backend",
    description: "Robust server-side solutions",
    icon: <Database className="h-6 w-6 sm:h-8 sm:w-8" />,
    color: "bg-red-500/80",
    span: "col-span-1",
  },
  {
    title: "API Integration",
    description: "Seamless third-party integrations",
    icon: <Code className="h-6 w-6 sm:h-8 sm:w-8" />,
    color: "bg-yellow-500/80",
    span: "col-span-1",
  },
  {
    title: "Performance",
    description: "Optimizing for speed and efficiency",
    icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8" />,
    color: "bg-indigo-500/80",
    span: "col-span-2 sm:col-span-1",
  },
  {
    title: "Consultation",
    description: "Expert advice on tech solutions",
    icon: <Coffee className="h-6 w-6 sm:h-8 sm:w-8" />,
    color: "bg-orange-500/80",
    span: "col-span-2 sm:col-span-2",
  },
  {
    title: "Company",
    description: "A great person to work with",
    icon: <Podcast className="h-6 w-6 sm:h-8 sm:w-8" />,
    color: "bg-pink-500/80",
    span: "col-span-2 sm:col-span-2",
  },
];

const ServiceCard = ({ service, index }) => {
  const controls = useAnimation();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1 + index * 0.1,
      },
    },
    hover: {
      scale: 1.05,
      // boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      opacity: 0.30,
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 5,
        duration: 0.55,
      },
      onComplete: () => {
        handleTapEnd();
      },
    }
  };
  

  const handleTapEnd = async () => {
    
    await controls.start({ opacity: 0.30, scale: 0.95 });
    
    // Flicker effect
    await controls.start({ opacity: 1, scale: 1, transition: { duration: 0.6 } });
    await controls.start({ opacity: 0.5, transition: { duration: 0.6 } });
    await controls.start({ opacity: 1, transition: { duration: 0.6 } });
    await controls.start({ opacity: 0.7, transition: { duration: 0.6 } });
    await controls.start({ opacity: 1, transition: { duration: 0.8 } });
  };


  const iconVariants = {
    hidden: { rotate: -180, opacity: 0 },
    visible: { rotate: 0, opacity: 1 },
    hover: {
      rotate: 360,
      transition: { type: "spring", stiffness: 200, damping: 10 },
    },
  };

  const getShadowColor = (color) => {
    const colorMap = {
      "bg-blue-500/80": "shadow-blue-500",
      "bg-green-500/80": "shadow-green-500",
      "bg-purple-500/80": "shadow-purple-500",
      "bg-red-500/80": "shadow-red-500",
      "bg-yellow-500/80": "shadow-yellow-500",
      "bg-indigo-500/80": "shadow-indigo-500",
      "bg-orange-500/80": "shadow-orange-500",
      "bg-pink-500/80": "shadow-pink-500",
    };
    return colorMap[color] || "shadow-grey-500";
  };
  const shadowColor = getShadowColor(service.color);

  return (
    <motion.div
      className={`${service.span} ${service.color} ${shadowColor} shadow-lg  p-6 rounded-2xl overflow-hidden relative cursor-help group`}
      variants={cardVariants}
      // onTapEnd={handleTapEnd}
      initial="hidden"
      drag
      animate="visible"
      whileHover="hover"
      whileTap="tap"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <motion.div
          variants={iconVariants}
          className="text-white absolute  sm:mb-4 -top-8 md:-top-10 left-0 "
        >
          {service.icon}
        </motion.div>
        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 mt-6 sm:mb-2 select-none">
          {service.title}
        </h3>
        <p className="text-sm sm:text-base text-white text-opacity-80 select-none">
          {service.description}
        </p>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-white"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};
const BentoBox = () => {
 
  return (
    <section className="py-6 sm:py-8 ">
      <div className="flex flex-col h-[calc(100vh-4rem)] overflow-hidden relative">
        <AnimatedTitle leftWord="My" rightWord="services" />
        
        <div className="flex-grow overflow-y-auto pt-4 px-4 pb-60 relative scrollbar-hide">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Top gradient */}
        <div className="absolute top-[4rem] left-0 right-0 h-16 bg-gradient-to-b from-pink-100 via-pink-100/20 to-transparent pointer-events-none z-10 md:hidden"></div>
      </div>
    </section>
  );
};

const ServicesPage = () => {
  return (
    <PageTransitionWrapper>
      <BentoBox />
    </PageTransitionWrapper>
  );
};

export default ServicesPage;
