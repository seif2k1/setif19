"use client";

import { motion } from "motion/react";

const text =
  "Every one of our consultants is unique, but we are united by our passion for solving problems and helping our clients succeed.";

const changeToChar = () => {
  return text.split("");
};
const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};
const Home_1 = () => {
  const text_animation = changeToChar();
  console.log(text_animation);
  return (
    <motion.div
      initial={{
        height: "-100%",
        opacity: 0,
      }}
      animate={{
        height: "auto",
        opacity: 1,
      }}
      whileInView={{
        height: "auto",
        opacity: 1,
      }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className=" w-full flex items-center justify-center"
    >
      <motion.h1
        className="text-[60px] w-[80%] tracking-[-.6] text-white leading-[1.1] font-[500] max-w-[1000px]"
      >
        {text}
      </motion.h1>
    </motion.div>
  );
};

export default Home_1;
