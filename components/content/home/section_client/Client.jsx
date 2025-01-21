"use client";
import Image1 from "../../../../public/Actionist _Consulting1_files/Actionist-Featured-5.jpg";
import Image from "next/image";
import { motion } from "motion/react";

import React from "react";
const styiling = {
  upperStyle:
    "text-[40px] md:text-[80px] text-[#2f1d34] p-0 leading-[1] font-[400] ",
  lowerStyle: "text-[#52345b] p-0 text-[16px] leading-[1.4]font-[200]  ",
};
const Client = () => {
  return (
    <div className=" bg-[#f7f4f3] w-screen overflow-hidden flex flex-col items-center justify-evenly gap-[60px] py-[80px]  ">
      {/* our client */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="md:w-[85%] w-[90%] flex flex-col items-start"
      >
        <h1
          className={`m-[0_0_20px] w-full flex items-start ${styiling.upperStyle}`}
        >
          Our Clients
        </h1>
        <span
          className={` max-w-[315px] m-[0_auto_0_0] flex items-start ${styiling.lowerStyle}`}
        >
          Actionist serves leading companies including Fortune 500 players, top
          investment firms, and high-growth disruptors.
        </span>
      </motion.div>
      {/* s */}
      <div className="h-[140px] w-[90%]  "></div>
      {/* carrers */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-[90%] flex flex-col md:flex-row gap-[150px] items-center"
      >
        <div className="-black w-full relative md:w-[700px] h-[550px]">
          <Image
            src={Image1}
            className="absolute top-0 left-0 h-full w-full object-cover"
            alt="image"
            quality={100}
          />
        </div>
        <div className="  flex flex-col justify-center  p-[0_0_0_0] ">
          <h1 className={`m-[15px_0] ${styiling.upperStyle} `}>Careers</h1>
          <span
            className={`md:max-w-[300px] w-full bg-red-500 my-[30px]  ${styiling.lowerStyle} `}
          >
            Actionist is looking to grow our team of top-tier talent. We look
            for intellectual horsepower, curiosity, leadership, and
            communications prowess.
          </span>
          <button className="px-4 w-[140px] py-2 bg-purple-600 text-white rounded-[25px]  capitalize">
            apply now
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Client;
