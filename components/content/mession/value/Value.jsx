"use client";
import Image from "next/image";
import Image1 from "../../../../public/Actionist_Consulting_Mission_files/Value-Prop-01.jpg";
import Image2 from "../../../../public/Actionist_Consulting_Mission_files/Value-Prop-02.jpg";
import Image3 from "../../../../public/Actionist_Consulting_Mission_files/Value-Prop-03.jpg";

import { motion } from "motion/react";

const Info = [
  {
    image: Image1,
    title: "Top-Tier Professionals",
    describe:
      "Our seasoned consultants combine intellectual horsepower, creativity, analytics, powerful storytelling, and expertise in core industries and functions.",
  },
  {
    image: Image2,
    title: "Deep Client Partnership",
    describe:
      "We work in tight collaboration with executives and investment professionals to find the right answer, create pragmatic recommendations, and bridge strategy and execution.",
  },
  {
    image: Image3,
    title: "Commitment to Client Returns",
    describe:
      "Through nimbleness and efficiency, we maximize the return on consulting investments and make consulting accessible at every stage of the growth journey",
  },
];

const Value = () => {
  return (
    <div className="flex flex-col overflow-hidden py-[25px] md:py-[60px] gap-[30px] md:gap-[60px] items-center">
      <h1 className="md:text-[80px] px-[15px] md:p-0 text-[40px] font-[400] leaking-[1.2] text-[#2f1d34]">
        Our Value Proposition
      </h1>
      {Info.map((info, index) => {
        return (
          <motion.div
            initial={
              index == 1
                ? { opacity: 0, x: "-100%" }
                : { opacity: 0, x: "100%" }
            }
            whileInView={
              index == 1 ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }
            }
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex  w-full items-center md:flex-row flex-col gap-[25px] md:gap-[100px]"
            key={index}
          >
            <figure
              className={`md:w-[40%] w-[90%] md:h-[350px] h-[250px] relative overflow-hidden   rounded-tr-[100px] `}
            >
              <Image
                src={info.image}
                className="absolute top-0 left-0 h-full w-full object-cover"
                alt="image"
                quality={100}
              />
            </figure>

            <div className="md:max-w-[390px] w-[80%] gap-[10px] h-full flex flex-col items-start">
              <h1 className="md:text-[80px] text-[60px] text-[#2f1d34]">
                0{index + 1}
              </h1>
              <h1 className={` text-[24px] p-0 text-[#2f1d34]`}>
                {info.title}
              </h1>
              <p className="text-[16px] font-[200] leading-[1.5] text-[#52345b]">
                {info.describe}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Value;
