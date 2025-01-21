"use client";
import Link from "next/link";
import Image1 from "../../../../public/Actionist_Consulting _Team_files/1000026164-1.jpg";
import Image2 from "../../../../public/Actionist_Consulting _Team_files/Abhi_6.jpg";
import Image3 from "../../../../public/Actionist_Consulting _Team_files/Actionist_execs_230802_0004.jpg";
import Image4 from "../../../../public/Actionist_Consulting _Team_files/Actionist_execs_230802_0083.jpg";
import Image5 from "../../../../public/Actionist_Consulting _Team_files/Actionist_execs_230802_0119.jpg";
import Image6 from "../../../../public/Actionist_Consulting _Team_files/Actionist_execs_230802_0154.jpg";
import Image7 from "../../../../public/Actionist_Consulting _Team_files/Actionist_execs_230802_0179.jpg";
import Image8 from "../../../../public/Actionist_Consulting _Team_files/Actionist_execs_240920_0124_V2.jpg";
import Image9 from "../../../../public/Actionist_Consulting _Team_files/Actionist_Gabe2.jpg";
import Image10 from "../../../../public/Actionist_Consulting _Team_files/Actionist_JoJo.jpg";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const advisors = [
  {
    image: Image2,

    name: "Lorem ipsum dolor sit amet.",
    job: "devoloper",
    carrier: {
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis sed dolore, cupiditate accusamus id! Consectetur nemo eligendi delectus reprehenderit magni praesentium voluptatibus beatae, unde maiores quidem quibusdam, vel quos eveniet nam iste nobis. Earum, vitae perspiciatis! Repellendus enim mollitia quasi, cumque in at odio, dolorem pariatur sunt accusamus inventore.",
      job: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, commodi! Nemo sit dolores adipisci velit?",
    },
    socials: [
      {
        instagram: "",
        linkedin: "",
        twitter: "",
        email: "",
      },
    ],
  },

  {
    image: Image3,

    name: "Lorem ipsum dolor sit amet.",
    job: "devoloper",
    carrier: {
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis sed dolore, cupiditate accusamus id! Consectetur nemo eligendi delectus reprehenderit magni praesentium voluptatibus beatae, unde maiores quidem quibusdam, vel quos eveniet nam iste nobis. Earum, vitae perspiciatis! Repellendus enim mollitia quasi, cumque in at odio, dolorem pariatur sunt accusamus inventore.",
      job: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, commodi! Nemo sit dolores adipisci velit?",
    },
    socials: [
      {
        instagram: "",
        linkedin: "",
        twitter: "",
        email: "",
      },
    ],
  },
  {
    image: Image4,

    name: "Lorem ipsum dolor sit amet.",
    job: "devoloper",
    carrier: {
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis sed dolore, cupiditate accusamus id! Consectetur nemo eligendi delectus reprehenderit magni praesentium voluptatibus beatae, unde maiores quidem quibusdam, vel quos eveniet nam iste nobis. Earum, vitae perspiciatis! Repellendus enim mollitia quasi, cumque in at odio, dolorem pariatur sunt accusamus inventore.",
      job: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, commodi! Nemo sit dolores adipisci velit?",
    },
    socials: [
      {
        instagram: "",
        linkedin: "",
        twitter: "",
        email: "",
      },
    ],
  },
  {
    image: Image5,

    name: "Lorem ipsum dolor sit amet.",
    job: "devoloper",
    carrier: {
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis sed dolore, cupiditate accusamus id! Consectetur nemo eligendi delectus reprehenderit magni praesentium voluptatibus beatae, unde maiores quidem quibusdam, vel quos eveniet nam iste nobis. Earum, vitae perspiciatis! Repellendus enim mollitia quasi, cumque in at odio, dolorem pariatur sunt accusamus inventore.",
      job: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, commodi! Nemo sit dolores adipisci velit?",
    },
    socials: [
      {
        instagram: "",
        linkedin: "",
        twitter: "",
        email: "",
      },
    ],
  },
  {
    image: Image6,

    name: "Lorem ipsum dolor sit amet.",
    job: "devoloper",
    carrier: {
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis sed dolore, cupiditate accusamus id! Consectetur nemo eligendi delectus reprehenderit magni praesentium voluptatibus beatae, unde maiores quidem quibusdam, vel quos eveniet nam iste nobis. Earum, vitae perspiciatis! Repellendus enim mollitia quasi, cumque in at odio, dolorem pariatur sunt accusamus inventore.",
      job: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, commodi! Nemo sit dolores adipisci velit?",
    },
    socials: [
      {
        instagram: "",
        linkedin: "",
        twitter: "",
        email: "",
      },
    ],
  },
  {
    image: Image7,

    name: "Lorem ipsum dolor sit amet.",
    job: "devoloper",
    carrier: {
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis sed dolore, cupiditate accusamus id! Consectetur nemo eligendi delectus reprehenderit magni praesentium voluptatibus beatae, unde maiores quidem quibusdam, vel quos eveniet nam iste nobis. Earum, vitae perspiciatis! Repellendus enim mollitia quasi, cumque in at odio, dolorem pariatur sunt accusamus inventore.",
      job: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, commodi! Nemo sit dolores adipisci velit?",
    },
    socials: [
      {
        instagram: "",
        linkedin: "",
        twitter: "",
        email: "",
      },
    ],
  },
  {
    image: Image8,

    name: "Lorem ipsum dolor sit amet.",
    job: "devoloper",
    carrier: {
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis sed dolore, cupiditate accusamus id! Consectetur nemo eligendi delectus reprehenderit magni praesentium voluptatibus beatae, unde maiores quidem quibusdam, vel quos eveniet nam iste nobis. Earum, vitae perspiciatis! Repellendus enim mollitia quasi, cumque in at odio, dolorem pariatur sunt accusamus inventore.",
      job: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, commodi! Nemo sit dolores adipisci velit?",
    },
    socials: [
      {
        instagram: "",
        linkedin: "",
        twitter: "",
        email: "",
      },
    ],
  },
  {
    image: Image9,

    name: "Lorem ipsum dolor sit amet.",
    job: "devoloper",
    carrier: {
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis sed dolore, cupiditate accusamus id! Consectetur nemo eligendi delectus reprehenderit magni praesentium voluptatibus beatae, unde maiores quidem quibusdam, vel quos eveniet nam iste nobis. Earum, vitae perspiciatis! Repellendus enim mollitia quasi, cumque in at odio, dolorem pariatur sunt accusamus inventore.",
      job: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, commodi! Nemo sit dolores adipisci velit?",
    },
    socials: [
      {
        instagram: "",
        linkedin: "",
        twitter: "",
        email: "",
      },
    ],
  },
  {
    image: Image10,

    name: "Lorem ipsum dolor sit amet.",
    job: "devoloper",
    carrier: {
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis sed dolore, cupiditate accusamus id! Consectetur nemo eligendi delectus reprehenderit magni praesentium voluptatibus beatae, unde maiores quidem quibusdam, vel quos eveniet nam iste nobis. Earum, vitae perspiciatis! Repellendus enim mollitia quasi, cumque in at odio, dolorem pariatur sunt accusamus inventore.",
      job: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, commodi! Nemo sit dolores adipisci velit?",
    },
    socials: [
      {
        instagram: "",
        linkedin: "",
        twitter: "",
        email: "",
      },
    ],
  },
];

const Advisors = () => {
  const [id, setId] = useState(null);
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="w-full text-orange-500 h-full flex flex-col items-start ">
        <motion.h3
          initial="initial"
          whileInView="hovered"
          className="text-[80px] ms-[100px] whitespace-nowrap  block relative font-[400] p-[25px_45px] overflow-hidden text-[#] leading-[] tracking-[]"
        >
          <motion.div
            className="w-full flex items-start"
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
          >
            Advisors
          </motion.div>
          <motion.div
            className="absolute inset-0 p-0 flex items-center justify-center"
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
          >
            {" "}
            Advisors
          </motion.div>
        </motion.h3>
        <motion.div
          initial="initial"
          whileInView="viewed"
          transition="transition"
          className="grid gap-[10px] grid-cols-1 md:grid-cols-5 w-full overflow-hidden pointer"
        >
          {advisors.map((data, index) => {
            return (
              <Link
                href={`/team/${index}`}
                className="group flex flex-col itmes-start duration-300 text-white hover:text-orange-500 group h-full"
                key={index}
                onClick={() => {
                  /* setId(index);
                  setIsShow(true); */
                }}
              >
                <figure className="md:max-h-[400px] max-h-[200px] overflow-hidden">
                  <Image
                    src={data.image}
                    alt="image"
                    className="object-cover object-[41.9%_22%] duration-1000 group-hover:scale-[1.2]"
                  />
                </figure>
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "auto" }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  /* variants={{
                    initial: { height: 0 },
                    viewed: { height: "auto" },
                    transition: { duration: 0.8 },
                  }} */
                  className="w-full flex flex-col items-center p-[0_20px] max-h-[150px] "
                >
                  <motion.h3 className="m-[10px_0_0] font-[16px] leaking-[1.5] font-[400]">
                    {data.name}
                  </motion.h3>
                  <motion.p className="m-[10px_0_0] font-[16px] leaking-[1.5] font-[200]">
                    {data.name}
                  </motion.p>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default Advisors;
