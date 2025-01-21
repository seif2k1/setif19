"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ScrollY } from "./Se";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
const Lists = ["home", "training", "mession", "team", "contact"];
const myLists = (style) => {
  return Lists.map((list, index) => (
    <Link href={`/${list}`} key={index} className={`${style}`}>
      {list}
    </Link>
  ));
};

const Navigation = () => {
  const pathname = usePathname();
  const scrollShow = ScrollY();
  const [scrolled, setScrolled] = useState(0);
  const [isTrue, setIsTrue] = useState(null);
  const [isOpen, setIsOpen] = useState(null);
  const scrollBottom =
    document.documentElement.scrollHeight - scrollShow - window.innerHeight;
  const handleMouseOver = () => {
    setIsTrue(false);
  };
  console.log(pathname, pathname == "/mession");
  useEffect(() => {
    scrollShow > scrolled ? setIsTrue(true) : setIsTrue(false);
    setScrolled(scrollShow);
  }, [scrollShow]);

  return (
    <>
      {!isOpen ? (
        <div
          className={`${
            isTrue
              ? "before:-translate-y-[150%]   "
              : "before:bg-inherit text-black  before:text-black before:translate-y-0  "
          } ${
            scrollShow > 10
              ? " before:bg-white text-black before:h-[65px] before:w-full "
              : pathname == "/mession"
              ? "before:bg-inherit text-black"
              : "before:bg-inherit text-white"
          } fixed  before:content-[""] before:duration-1000 z-[5] duration-1000 before:absolute before:inset-0  md:hidden h-[65px] w-full flex items-center justify-end `}
        >
          <h3
            className="me-[20px] z-0"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {" "}
            Menu
          </h3>
        </div>
      ) : (
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="fixed z-[99999999] top-[20px] md:hidden right-[20px] "
        >
          Close
        </div>
      )}
      <AnimatePresence>
        <motion.div
          onMouseOver={handleMouseOver}
          className={`
      ${isOpen ? "translate-y-0 " : "-translate-y-full md:translate-y-0"}
        group w-full before:content-[''] transform transition-transforme ease-in-out duartion-1000 h-full duration-1000 md:h-[65px] z-[999] before:fixed before:top-0 dutaion-1000 before:w-full before:h-[65px]  opacity-[1] bg-inherit before:md:bg-inherit fixed top-0 flex items-center justify-center  `}
        >
          <div
            className={`${
              isTrue ? "md:-translate-y-[150%] " : " md:translate-y-0  "
            } ${
              scrollShow > 10
                ? " bg-white"
                : pathname == "/mession"
                ? " before:content-[''] bg-white md:bg-inherit text-black md:text-black before:duration-[1000ms] before:bg-white before:fixed before:left-0 before:-translate-y-[150%] before:top-0 before:w-screen before:h-[65px]"
                : " text-white before:content-[''] bg-white md:bg-inherit text-black md:text-white before:duration-[1000ms] before:bg-white before:fixed before:left-0 before:-translate-y-[150%] before:top-0 before:w-screen before:h-[65px]"
            } duration-1000 h-full flex items-center justify-between w-full  md:p-[12px_75px_12px_150px] opacity-[1] `}
          >
            <Link href="/" className="hidden md:flex">
              Logo
            </Link>
            <div
              className={` md:w-[50%] w-full duration-1000 flex md:flex md:flex-row flex-col z-[1] h-full items-center md:justify-between justify-center gap-[55px] md:gap-0 capitalize`}
            >
              {myLists(
                `relative flex items-center justify-center before:opacity-0 before:hover:opacity-[1] before:absolute before:-z-[1] before:h-[10px] before:w-[10px] before:content-[''] before:bg-black before:rounded-full before:hover:translate-y-[-270%] before:duration-[500ms]  `
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Navigation;

/*
 */
