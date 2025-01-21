"use client";

import Image from "next/image";
import Image1 from "../../../../public/Actionist_Consulting_Mission_files/Mission-01.jpg";
import Image2 from "../../../../public/Actionist_Consulting_Mission_files/Actionist-Featured-4-1.jpg";
import { motion } from "motion/react";

const Info = [
  {
    direction: true,
    image: Image1,
    title:
      "Actionist's client mission is to create more impact, on a pound-for-pound basis, than any other consulting firm.",
    describe:
      "The firm deploys elite strategists and actionists who provide unparalleled thought partnership, insights, and creativity.",
  },
  {
    direction: false,
    image: Image2,
    title:
      "Actionist’s talent mission is to accelerate and enrich the careers of our team members.",
    describe:
      "We do so through distinctive training and coaching, intellectually stimulating engagements, cultivating an entrepreneurial environment, and enabling a travel-light model.",
  },
];

const Home = () => {
  return (
    <div className="overflow-hidden">
      {Info.map((info, index) => {
        return (
          <motion.div
            initial={
              info.direction
                ? { x: "-50%", opacity: 0 }
                : { x: "-50%", opacity: 0 }
            }
            animate={
              info.direction ? { x: "0", opacity: 1 } : { x: "0", opacity: 1 }
            }
            transition={{ duration: 1 }}
            className={` w-full flex overflow-hidden flex-col md:flex-row items-center gap-[40px] md:gap-[80px] p-[0_0_50px] ${
              info.direction ? " md:flex-row " : " md:flex-row-reverse "
            }  `}
            key={index}
          >
            <figure
              className={`w-full h-[350px] md:w-[50%] md:h-[550px] relative overflow-hidden ${
                info.direction ? "rounded-tr-[100px]" : " rounded-tl-[100px]"
              } `}
            >
              <Image
                src={info.image}
                className="absolute top-0 left-0 h-full w-full object-cover"
                alt="image"
                quality={100}
              />
            </figure>
            <div className="md:max-w-[550px] w-[80%]  gap-[10px] h-full flex flex-col justify-center">
              <h1 className={`m-[0_auto_10px] text-[24px] leading-[1.4]`}>
                {info.title}
              </h1>
              <p className="text-[16px] font-[200] leading-[1.4]">
                {info.describe}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Home;
