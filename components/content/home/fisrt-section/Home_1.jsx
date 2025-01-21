import Image from "next/image";
import React from "react";
import "./home.css";
import Image1 from "../../../../public/home_image.jpg";
const text = [
  "we are action-oriented strategists",
  "we help our clients achieve great things",
];
const printText = (style) => {
  return text.map((text, index) => {
    return (
      <div className={`${style}`} key={index}>
        {text}
      </div>
    );
  });
};
const Home_1 = () => {
  return (
    <section className="relative h-[100vh] w-[100vw] z-[-99] flex items-center justify-center images">
      <div>
        {printText(
          "w-[300px] m-[15px] border-2 border-black text-wrap text-center "
        )}
      </div>
    </section>
  );
};

export default Home_1;
/*

    <section className="relative h-[100vh] w-[100vw] z-[-99] flex items-center justify-center bg-green-400">
      <div>
        {printText(
          "w-[300px] m-[15px] border-2 border-black text-wrap text-center "
        )}
      </div>
    </section>
 */
