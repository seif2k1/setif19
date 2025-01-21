"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import Image1 from "../../../../public/services_image_files/Consumer-Retail.jpg";
import Image2 from "../../../../public/services_image_files/Financial-Services.jpg";
import Image3 from "../../../../public/services_image_files/Investment-Firms.jpg";
import Image4 from "../../../../public/services_image_files/Manufacturers-Suppliers.jpg";
import Image5 from "../../../../public/services_image_files/Business-Services.jpg";
import Image6 from "../../../../public/services_image_files/Technology.jpg";

const categories = [
  {
    type: "programming",
  },
  {
    type: "speaking",
  },
  {
    type: "shopping",
  },
  {
    type: "working",
  },
];

const Info = [
  {
    type: "programming",
    image: Image1,
    title: "Consumer & Retail",
    details:
      "Apparel and fashion, beauty and personal care, consumer services, food and beverage, national retailers, department stores and specialty retail, eCommerce",
  },
  {
    type: "speaking",
    image: Image2,
    title: "Financial Services",
    details:
      "Banking, specialty finance/non-bank lending, insurance, mortgage, credit cards and payments, wealth management",
  },
  {
    image: Image3,
    type: "shopping",
    title: "Investment Firms",
    details: "Private equity and credit funds, hedge funds, REITs",
  },
  {
    image: Image4,
    type: "working",
    title: "Manufacturers & Suppliers",
    details: "Manufacturing, distribution, logistics",
  },
  {
    image: Image5,
    type: "speaking",
    title: "Business Services",
    details: "Business process outsourcing, financial services outsourcing",
  },
  {
    image: Image6,
    type: "programming",
    title: "Technology",
    details: "Consumer tech, consumer electronics, media, software / SaaS",
  },
];

const showInfo = (handleCategories) => {
  return Info.map((info, index) => {
    return (
      <div
        key={index}
        className="h-[250px] relative text-white w-full flex before:content-['12'] before:h-full before:w-full before:absolute before:top-0 before:left-0 before:z-[1] before:opacity-[.4] before:bg-[#2f1d34] flex-col items-start justify-center p-[20px] "
      >
        <Image
          src={info.image}
          className="absolute top-0 left-0 z-[0] h-full w-full object-cover"
          alt="image"
          quality={100}
        />
        <h1 className="m-[0_0_5px] text-[24px] font-[400] leading-[1.2] z-[2]">
          {info.title}
        </h1>
        <p className="text-[16px] font-[300] leading-[1.25] z-[2]">
          {info.details}
        </p>
      </div>
    );
  });
};
const Industries = () => {
  const [isCategoriesTrue, setIsCategoriesTrue] = useState(false);
  const [fil, setFil] = useState("");
  const [filter, setFilter] = useState(null);
  const [resultFilter, setResultFilter] = useState(null);
  console.log(filter);
  return (
    <div className="p-[60px_0] flex items-center justify-center bg-[#f7f4f3]">
      <div className="w-[90%] h-full flex flex-col items-center ">
        <h1 className=" w-full flex item-start text-[40px] md:text-[80px] m-[0_0_30px] font-[400] traking-[-.8px] text-[#2f1d34] leading-[1.14]">
          Industries
        </h1>
        <motion.div
          translate={{ duration: 1 }}
          className={` h-full  w-full ${
            isCategoriesTrue
              ? "grid grid-cols-1 gap-[20px] md:gap-0 md:grid-cols-[10%_90%]"
              : "grid grid-cols-1"
          }`}
        >
          <div
            className={` h-full w-full  flex flex-wrap gap-[25px] md:flex-col gap-[25px] items-center transition-transform transform ease-in-out duration-1000 ${
              isCategoriesTrue ? " translate-x-0 " : " -translate-x-full "
            }`}
          >
            {isCategoriesTrue &&
              categories.map((category, index) => (
                <div
                  onClick={() => {
                    setFilter(
                      Info.filter((data) => data.type == category.type)
                    );
                  }}
                  className="hover:text-white hover:bg-black px-4 py-2 rounded-[25px]  "
                  key={index}
                >
                  {category.type}
                </div>
              ))}
          </div>
          <motion.div
            layout
            className={`${
              isCategoriesTrue ? " " : ""
            } w-full  grid grid-cols-1 md:grid-cols-3 gap-[6px] `}
          >
            {isCategoriesTrue && filter?.length > 0
              ? filter.map((info, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        setFilter(null);

                        setIsCategoriesTrue(!isCategoriesTrue);
                      }}
                      className="h-[250px] group relative text-white w-full flex overflow-hidden before:content-['12'] before:h-full before:w-full before:absolute before:top-0 before:left-0 before:z-[1] before:opacity-[.4] before:bg-[#2f1d34] flex-col items-start justify-center p-[20px] "
                    >
                      <Image
                        src={info.image}
                        className="absolute group-hover:scale-[1.2] duration-[400ms] top-0 left-0 z-[0] h-full w-full object-cover"
                        alt="image"
                        quality={100}
                      />
                      <h1 className="m-[0_0_5px] text-[24px] font-[400] leading-[1.2] z-[2]">
                        {info.title}
                      </h1>
                      <p className="text-[16px] font-[300] leading-[1.25] z-[2]">
                        {info.details}
                      </p>
                    </div>
                  );
                })
              : Info.map((info, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        setIsCategoriesTrue(!isCategoriesTrue);
                      }}
                      className="h-[250px] group relative text-white w-full flex overflow-hidden before:content-['12'] before:h-full before:w-full before:absolute before:top-0 before:left-0 before:z-[1] before:opacity-[.4] before:bg-[#2f1d34] flex-col items-start justify-center p-[20px] "
                    >
                      <Image
                        src={info.image}
                        className="absolute group-hover:scale-[1.2] duration-[400ms] top-0 left-0 z-[0] h-full w-full object-cover"
                        alt="image"
                        quality={100}
                      />
                      <h1 className="m-[0_0_5px] text-[24px] font-[400] leading-[1.2] z-[2]">
                        {info.title}
                      </h1>
                      <p className="text-[16px] font-[300] leading-[1.25] z-[2]">
                        {info.details}
                      </p>
                    </div>
                  );
                })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Industries;
