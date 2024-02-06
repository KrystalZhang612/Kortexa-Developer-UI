import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>COMPANY INTRODUCTION</p>
        <h2 className={styles.sectionHeadText}>Overview - <span className='text-[#FFFF33]'> Kortexa</span></h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        At Kortexa, we specialize in delivering cutting-edge software
        solutions that encompass a wide array of expertise. Our skilled
        team excels in crafting <b>immersive 3D visuals that breathe life
          into virtual worlds, captivating users with unparalleled
          experiences.</b> Additionally, we are adept at designing seamless and intuitive user
        interfaces that enhance user interactions and optimize
        usability. <b>Leveraging the latest web development technologies, we create
          robust and scalable web applications that empower businesses to
          thrive in the digital landscape.</b> With our commitment to innovation
        and excellence, we embark on every project, pushing the boundaries
        of software development to bring visions to reality.
        Trust Kortexa to <b>transform your ideas into sophisticated
          and high-performing solutions that leave a lasting impact
          in tech-driven world.</b>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
