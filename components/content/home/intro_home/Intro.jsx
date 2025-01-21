"use client";
import Image from "next/image";
import Image1 from "../../../../public/Actionist _Consulting1_files/Actionist-Featured-3.jpg";
const Intro = () => {
  return (
    <div className="h-full w-full bg-gray-300 flex flex items-center justify-center">
      <div className="flex flex-col w-full lg:w-[85%]  lg:grid relative md:static lg:grid-cols-[65%_35%] h-full items-center md:justify-between gap-[10px] md:gap-0">
        <div className="h-full lg:h-[80%]  w-full flex items-center justify-center">
          <div className="lg:w-[75%] w-[90%] h-full flex flex-col items-start justify-evenly">
            <div className=" md:text-[50px] text-[20px] capitalize">
              who is your actionist ?
            </div>

            <div className="k w-full relative h-[500px]">
              <Image
                src={Image1}
                className="absolute top-0 left-0 h-full w-full object-cover"
                alt="image"
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className=" h-full md:grid flex w-[90%] lg:w-[90%] justify-center flex-col lg:grid-cols-[60%_40%] items-center md:justify-between">
          <div className=" h-full  flex-col items-start md:relative justify-center md:pb-[100px]">
            {/* orange ball animate */}
            <div className="md:h-[100px] flex items-center h-full w-[100px] absolute blur-xl rounded-full" />
            {/* text */}
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, enim consequuntur expedita fuga magni in atque
              mollitia, aliquid deserunt culpa dolorem harum quis ea odio sequi
              ipsa numquam nam sapiente necessitatibus deleniti. Quod qui ipsam
              animi repellat explicabo reprehenderit
            </div>
          </div>
          <div className=" md:h-full  flex flex-col items-center justify-between md:pb-[100px]">
            {/* right border animate */}
            <div className=" h-[90%] w-[2px] bg-black hidden md:flex" />
            {/* examples button */}
            <button className="bg-purple-900 hover:scale-[1.1] hover:bg-orange-500 duration-1000 px-4 py-1 rounded-[35px]  text-white ">
              See Examplesss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Intro;
