import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/autoplay'

import { Autoplay, Mousewheel, Pagination } from "swiper/modules";

const SkillsSlider = ({ skills }) => {
  const renderSkillCard = (skill) => (
    <motion.div
      key={skill.category}
      className="w-full h-40 px-2"
      whileHover={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="bg-white/10  backdrop-blur-sm p-6 rounded-md border border-accent h-full">
        <h3 className="text-2xl font-bold text-accent mb-4 text-center flex flex-row items-center justify-center gap-x-2 w-full">
        <skill.icon className="size-10 text-accent" aria-hidden />
          {skill.category}
        </h3>
        <div className="flex flex-wrap gap-2 md:justify-center">
          {skill.items.map((item, itemIndex) => (
            <span
              key={itemIndex}
              className="bg-accent/20 px-3 py-1 rounded-full text-sm font-bold"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="h-20">
      <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={60}
        className="h-60 w-full md:w-3/4 "
        loop={true}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        modules={[Pagination, Mousewheel,Autoplay]}
      >
        {skills.map((skill, skillIndex) => (
          <SwiperSlide
            key={skillIndex}
            className=" h-20 pt-10 cursor-move"
          >
            {renderSkillCard(skill)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SkillsSlider;
