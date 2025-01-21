"use client";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

import Image1 from "../../../../public/services_image_files/Strategic-Planning.jpg";
import Image2 from "../../../../public/services_image_files/Growth-Management-and-Marketing.jpg";
import Image3 from "../../../../public/services_image_files/Organizational-enablement-and-operating-model.jpg";
import Image4 from "../../../../public/services_image_files/Investment-Support-2.jpg";
import Image5 from "../../../../public/services_image_files/Business-transformation.jpg";

const style = {
  title_style:
    "text-[25px] font-[400] text-[#2f1d34] leading-[1.14] p-0 margin-[0_0_20px]",
  describe_style: "text-[16px] font-[200] text-[#52345b] leading-[1.8] ",
  button_style:
    "font-[16px] leading-[1.5] bg-[#2f1d34] text-white border-[1px] border-solid border-[#2f1d34] p-[6px 14px] rounded-[30px]",
};

const Info = [
  {
    direction: true,
    image: Image1,
    title: "Strategic Planning",
    describe: [
      {
        details: "Long-term strategic planning",
      },
      {
        details: "Value proposition development",
      },
      {
        details: "Inorganic growth and divestiture strategy",
      },
      {
        details: "New market entry and expansion",
      },
    ],
    button: "View Case Studies →",
  },
  {
    direction: false,
    image: Image2,
    title: "Growth Management and Marketing",
    describe: [
      {
        details: "Revenue management and pricing",
      },
      {
        details: "Marketing assessment and optimization",
      },
      {
        details: "Customer experience and lifecycle management",
      },
      {
        details: "Customer segmentation, insights, and analytics",
      },
      {
        details: "Sales channel optimization",
      },
      {
        details: "Partnership, agency, and alliance management",
      },
    ],
    button: "View Case Studies →",
  },
  {
    direction: true,
    image: Image3,
    title: "Organizational Enablement and Operating Model",
    describe: [
      {
        details: "Organizational design",
      },
      {
        details: "Operating model, process design, and ways of working",
      },
      {
        details: "Culture, change management, and organizational health",
      },
      {
        details: "Talent management and capability building",
      },
      {
        details: "Compensation design and optimization",
      },
    ],
    button: "View Case Studies →",
  },

  {
    direction: false,
    image: Image4,
    title: "Investment Support",
    describe: [
      {
        details: "Investment screening",
      },
      {
        details: "Due diligence",
      },
      {
        details: "Portfolio company strategy",
      },
      {
        details: "Portfolio company operational enablement",
      },
      {
        details: "Sell-side advisory and exits",
      },
      {
        details: "Buy-side advisory and acquisitions",
      },
    ],
    button: "View Case Studies →",
  },
  {
    direction: true,
    image: Image5,
    title: "Business Transformation",
    describe: [
      {
        details: "Strategic transformation and implementation support",
      },
      {
        details: "Due diligence",
      },
      {
        details: "Post-merger integration",
      },
      {
        details: "Cost transformation",
      },
      {
        details: "Transformation office and control tower",
      },
    ],
    button: "View Case Studies →",
  },
];

const showServices = () => {
  return (
    <div className="md:p-[60px_0] p-[30px_0] w-full flex flex-col items-center">
      <div className="md:text-[80px] md:w-[85%] text-[50px] w-[90%] text-[#2f1d34] leaking-[1.08] traking-[-.8px] m-[0_0_60px]">
        Our Services
      </div>
      {Info.map((info, index) => {
        return (
          <motion.div
            initial={
              info.direction
                ? { x: "100%", opacity: 0 }
                : { x: "-100%", opacity: 0 }
            }
            whileInView={
              info.direction ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }
            }
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={` w-[90%] md:w-full flex flex-col md:flex-row items-start md:items-center gap-[50px] md:gap-[120px] p-[0_0_50px] ${
              info.direction ? " flex-row " : " md:flex-row-reverse flex-row "
            }  `}
            key={index}
          >
            <figure
              className={`w-full md:w-1/2 relative overflow-hidden border-2 border-black ${
                info.direction
                  ? "rounded-tr-[100px]  h-[250px] md:h-[450px]"
                  : " rounded-tl-[100px] h-[350px] md:h-[550px]"
              } `}
            >
              <Image
                src={info.image}
                className="absolute top-0 left-0 h-full w-full object-cover z-[-10]"
                alt="image"
                quality={100}
              />
            </figure>
            <div className="  gap-[30px] h-full flex flex-col justify-center">
              <h1 className={`${style.title_style}`}>{info.title}</h1>
              <div className={`${style.describe_style}`}>
                {info.describe.map((data, index) => (
                  <ul className=" " key={index}>
                    <li
                      className={`before:content-["—"] before:indent-[-2px] before:pe-[5px] `}
                    >
                      {data.details}
                    </li>
                  </ul>
                ))}
              </div>
              <div>
                <button
                  className={`px-4 py-2 rounded-[25px] ${style.button_style} hover:scale-[1.1] duration-1000 hover:bg-orange-500`}
                >
                  {info.button}
                </button>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

const Services = () => {
  return <div className=" w-full">{showServices()}</div>;
};

export default Services;
