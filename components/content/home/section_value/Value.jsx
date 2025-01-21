"use client";
import Image1 from "../../../../public/Actionist _Consulting1_files/Top-Tier-Professionals.jpg";
import Image2 from "../../../../public/Actionist _Consulting1_files/Deep-Client-Partnership.jpg";
import Image3 from "../../../../public/Actionist _Consulting1_files/Commitment-to-Client-Returns.jpg";
import { motion } from "motion/react";
import Image from "next/image";
const pannelInfo = [
  {
    image: Image1,
    title: "Top-Tier Professionals",
    describe:
      "Seasoned consultants who combine intellectual horsepower, creativity, analytics, powerful storytelling, and expertise in core industries and functions.",
  },
  {
    image: Image2,
    title: "Deep Client Partnership",
    describe:
      "Tight collaboration with executives and investment professionals to find the right answer, create pragmatic recommendations, and bridge strategy and execution.",
  },
  {
    image: Image3,
    title: "Commitment to Client Returns",
    describe:
      "Nimbleness and efficiency that makes consulting accessible at every stage of the growth journey and maximizes the return on consulting investments.",
  },
];
const print_pannel_info = () => {
  return pannelInfo.map((pannel, index) => {
    return (
      <div
        key={index}
        className="flex flex-col gap-[15px] items-start justify-between"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-[315px] relative w-full "
        >
          <Image
            src={pannel.image}
            className="absolute top-0 left-0 h-full w-full object-cover"
            alt="image"
            quality={100}
          />
        </motion.div>
        <div className="text-[24px] text-[#2f1d34] font-normal ">
          {pannel.title}
        </div>
        <div className="text-[16px] text-[#52345b] font-extralight ">
          {pannel.describe}
        </div>
      </div>
    );
  });
};
/*
line-height: 1.2;
    font-size: 80px;
    font-weight: 400;
    letter-spacing: -.8px;
    color: var(--color-dark-purple);
    padding: 0;
    margin: 0 0 60px;
    transform: translateY(200%);
    transition: transform .6s var(--easing-authentic-motion);
    

    block-value .title[data-v-5403c324] {
    font-size: 24px;
    #2f1d34
    margin: 25px 0 15px;
    font-weight: 400;
    line-height: 1.2;


    .block-value .text[data-v-5403c324] {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 200;
    52345b
}
}
*/
const Value = () => {
  return (
    <div className="w-screen boder-green-500 flex items-center justify-center">
      <div className="w-[85%] gap-[40px]  h-full py-[35px] flex flex-col items-center justify-between">
        {/* mask */}
        <div className=" md:text-[80px] text-[30px] w-full flex items-start font-normal p-0 md:m-[0_0_60px] md:m-[0_0_10px]">
          Our Value Proposition
        </div>
        {/* pannel blocks */}
        <div className="w-full gap-[55px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr] items-center">
          {print_pannel_info()}
        </div>
        {/* pannel button */}
        <button className="text-white my-[60px_35px] bg-purple-700 rounded-[35px] hover:bg-orange-500 px-4 py-2 hover:scale-[1.1] duration-700">
          Read More on Our Approach
        </button>
      </div>
    </div>
  );
};

export default Value;
