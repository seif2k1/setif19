"use client";
import { motion } from "motion/react";
const Footer = ({ bg, bg_mession, display, bg_training }) => {
  return (
    <div className="w-full h-full flex items-center overflow-hidden justify-center">
      <div
        className={`${bg} ${bg_mession} ${display} ${bg_training} w-[80%] px-[15px_35px] relative md:h-[250px] h-[150px] w-full flex items-center justify-between `}
      >
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute top-0 laft-0 h-[3px] w-full"
        />
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-[45px] font-[400] leaking-[1.4]"
        >
          Actionist
        </motion.div>
        {/* our position */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className=" "
        >
          {/*  */}
          <div className="text-[30px] font-[200]">find us</div>
          {/* our address */}
          <div className="text-[15px]">address</div>
          {/* our privacy */}
          <div className="text-[15px]">privacy policy</div>
        </motion.div>
        {/* our contact */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className=""
        >
          <div className="text-[30px] font-[200]">follow us</div>
          <div className="text-[15px]">log</div>
          <div className="text-[15px]">copyright 2025</div>
          <div className="text-[15px]">actionist consulting</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
