"use client";
import Image from "next/image";
import Image1 from "../../../../public/Actionist_Consulting_Mission_files/A-Culture-of-Collaboration-01.jpg";
import Image2 from "../../../../public/Actionist_Consulting_Mission_files/A-Culture-of-Collaboration-02.jpg";
import Image3 from "../../../../public/Actionist_Consulting_Mission_files/A-Culture-of-Collaboration-03.jpg";
import Image4 from "../../../../public/Actionist_Consulting_Mission_files/A-Culture-of-Collaboration-04.jpg";
import { motion } from "motion/react";

const Images = [
  {
    image: Image1,
    style:
      "z-[10] w-[205px] md:w-[300px] h-[150px] md:h-[380px] translate-x-[25%]",
  },
  {
    style:
      " z-[20] w-[340px] h-[165px] md:h-[383.5px] md:w-[300px] translate-y-[-50%]",
    image: Image2,
  },
  {
    style:
      " z-[30] w-[312px] h-[85px] md:h-[200px] md:w-[300px] translate-x-[-25%]",
    image: Image3,
  },
];

const Info = [
  {
    text: "Collaboration underpins everything we do. We never “steamroll” clients, but instead work hand-in-hand with them to reach the right solutions and ensure they own the answers.",
  },
  {
    text: "We listen intently and craft our scope to help our clients achieve their unique ambitions. Our engagements are bespoke and custom-fit rather than off-the-shelf.",
  },
  {
    text: "During engagements, we frequently facilitate working sessions in which we combine our industry, competitive and customer insights with creative ideation to identify innovative solutions.",
  },
  {
    text: "Once a project is over, the relationship endures. Our clients tend to involve us as thought partners over the long run.",
  },
];

const Colabiration = () => {
  return (
    <div className="bg-[#2f1d34] w-full h-full flex flex-col items-center justify-start ">
      <div className="w-[80%] min-h-[60vh] md:min-h-[85vh] relative">
        <div className="flex w-full overflow-hidden text-white justify-center sticky mt-[30px] md:mt-0 top-[120px] z-[100]">
          <motion.div
            initial={{ height: "100%" }}
            whileInView={{ height: 0 }}
            transition={{ duration: 1 }}
            className="absolute bg-[#2f1d34] inet-0 h-full w-full"
          />
          <h3 className="font-[400] text-[30px] md:text-[80px]">A</h3>
          <h3 className="font-[400] text-[55px] md:text-[160px] p-[0_0_0_15px] md:p-[0_0_0_35px]">
            Culture
          </h3>
        </div>
        <div className="w-full flex justify-center items-center content-stretch">
          {Images.map((info, index) => {
            return (
              <motion.figure
                key={index}
                className={`${info.style} "scale-[.5] md:scale-[1] w-[300px] "`}
              >
                <Image
                  src={info.image}
                  className="absolute top-0 left-0 h-full w-full object-cover"
                  alt="image"
                  quality={100}
                />
              </motion.figure>
            );
          })}
        </div>
      </div>
      <div className="z-[20] relative w-full md:w-[80%] flex flex-col overflow-hidden items-center justify-center md:block ps-[60px] md:px-[60px] text-white leaking-[1.2]">
        <motion.div
          initial={{ height: "100%" }}
          whileInView={{ height: 0 }}
          transition={{ duration: 1 }}
          className="absolute bg-[#2f1d34] inet-0 h-full w-full"
        />
        <h3 className="md:text-[80px] text-[40px] w-[60%] sm:w-[40%] md:w-auto font-[400] ps-[33px] md:ps-[160px]  m-0">
          Of
        </h3>
        <h3 className="md:text-[180px] text-[55px] flex items-center w-full md:w-auto justify-center md:block font-[500] m-0 ">
          Collaboration
        </h3>
      </div>
      <div className="w-full flex flex-col overflow-hidden gap-[35px] md:flex-row flex-wrap items-center justify-center">
        {Info.map((info, index) => {
          return (
            <>
              <motion.div
                initial={
                  index == 0
                    ? { y: 100, opacity: 0 }
                    : index == 1
                    ? { y: 100, opacity: 0 }
                    : index == 2
                    ? { y: 100, opacity: 0 }
                    : { y: 100, opacity: 0 }
                }
                whileInView={
                  index == 0
                    ? { y: 0, opacity: 1 }
                    : index == 1
                    ? { y: 0, opacity: 1 }
                    : index == 2
                    ? { y: 0, opacity: 1 }
                    : { y: 0, opacity: 1 }
                }
                transition={
                  index == 0
                    ? { duration: 1 }
                    : index == 1
                    ? { duration: 1 }
                    : index == 2
                    ? { duration: 1 }
                    : { duration: 1 }
                }
                className="flex w-[80%] md:w-[35%] flex-col items-start text-white md:p-[70px_80px]"
                key={index}
              >
                <h1 className="font-[400] text-[22px]">0{index + 1} </h1>
                <p className="font-[200]  text-[16px] leaking-[1.5] mt-[10px]">
                  {info.text}
                </p>
              </motion.div>
              {index + 1 === 2 && (
                <motion.div
                  initial={{ x: "100%" }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 1 }}
                  className=" w-full relative min-h-[400px]"
                >
                  <Image
                    src={Image4}
                    className="absolute object-[49.8%_87.5%] top-0 left-0 h-full w-full object-cover"
                    alt="image"
                    quality={100}
                  />
                </motion.div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Colabiration;
