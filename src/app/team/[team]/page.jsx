"use client";
import Link from "next/link";

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

import { motion } from "motion/react";

const team = [
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
import React, { useState, useEffect } from "react";
const TeamId = (props) => {
  const [teams, setTeam] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      // Ensure params is unwrapped by awaiting the Promise
      const params = await React.use(props.params);
      setTeam(params.team);
    };

    fetchTeam();
  }, [props.params]); // Re-run the effect if `props.params` changes
  /* 
  if (!teams) {
    return <div>Loading...</div>;
  } */

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      className={` ${"bg-white w-full top-0 duration-1000 opacity-[1] left-0 overflow-hidden h-full z-[90000] fixed scroll"}`}
    >
      {team.map(
        (data, index) =>
          (index === Number(teams)) === true && (
            <div
              className="flex md:flex-row flex-col h-full w-full relative items-center"
              key={index}
            >
              <Link
                href="/team"
                className="text-[12px] z-[2] absolute top-[50px] right-[50px] font-[500] text-white bg-red-400 rounded-[25px] px-4 py-2"
              >
                Close
              </Link>
              <div className="md:w-1/2 w-full h-full relative ">
                <Image
                  src={data.image}
                  alt="image"
                  className="w-full h-full top-0 left-0
                     absolute object-cover md:object-[30.2%_50.6%] md:object-[30.2%_10.6%]"
                />
              </div>
              <div className="md:w-1/2 w-[80%] h-full flex flex-col items-start m-auto p-[45px_60px] overflow-y-auto overflow-x-hidden">
                <h1 className="m-[45px_0_5px] text-[40px] font-[300]">
                  {data.name}
                </h1>
                <div className="text-[24px] font-[100] gap-[15px] laeking-[1.1] flex flex-col ">
                  <h3>{data.carrier.info}</h3>
                  <h3>{data.carrier.job}</h3>
                </div>
                <h1>Connection</h1>
                <div></div>
              </div>
            </div>
          )
      )}
    </motion.div>
  );
};

export default TeamId;
