"use client";

import Image from "next/image";
import React from "react";
import Image1 from "../../../../public/services_image_files/Actionist-Featured-2.jpg";
import { motion } from "motion/react";
const text = [
  "we are action-oriented strategists",
  "we help our clients achieve great things",
];
const printText = (style) => {
  return text.map((text, index) => {
    return (
      <div className={`${style}`} key={index}>
        {text}
      </div>
    );
  });
};
const Home_1 = () => {
  const tt =
    "We serve leading companies, investors, and high-growth disruptors at every stage of the growth journey";
  const word = tt.split("");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: -40,
      x: -40,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <motion.section
      /* initiale={{ width:"50%",opacity:0,height:0 }}
    animate={{ width:"100%",opacity:0,height:"100%" }}
    transition={{duration:1}} */
      className="relative h-[100vh] w-[100vw]  flex flex-col items-center justify-center "
    >
      <Image
        src={Image1}
        className="absolute top-0 left-0 h-full w-full object-cover z-[-10]"
        alt="image"
        quality={100}
      />
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0  left-0 z-[20] md:ps-[150px] flex-col  flex items-center"
      >
        <h1 className="max-w-[640px] w-[70%] md:w-full m-[40px_0] text-left text-[30px] md:text-[40px] font-[300] text-white leading-[1.4]">
          {word.map((words, index) => (
            <motion.span variants={child} key={index}>
              {words}
            </motion.span>
          ))}
        </h1>
        <div className="md:h-[150px] h-[80px] w-[2px] bg-white"></div>
      </motion.div>
    </motion.section>
  );
};

export default Home_1;
/*

    <section className="relative h-[100vh] w-[100vw] z-[-99] flex items-center justify-center bg-green-400">
      <div>
        {printText(
          "w-[300px] m-[15px] border-2 border-black text-wrap text-center "
        )}
      </div>
    </section>
 */
