"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "motion/react";
const address = "azzzeerfsdsdfsdfskfjsdf,sdkfnsdkvnkkcvk,ck,dknsdkfnsd";
const phone = "+213123456789";
const email = "example@example.com";
import Image1 from "../../../public/Contact.jpg";
import Image from "next/image";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className=" relative p-[50px_20px] sm:p-[100px_60px] overflow-hidden  m-[0_auto] md:p-[220px_110px] flex items-center justify-center"
    >
      {/* /////// header part  ////// */}

      <Image
        src={Image1}
        className="absolute top-0 left-0 h-full w-full object-cover"
        alt="image"
        quality={100}
      />
      <motion.div className="md:p-[60px_120px] p-[100px_60px] z-[99] bg-white overflow-hidden rounded-[20px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] font-[200] leaking-[1.2] gap-[100px] ">
          <div className="flex flex-col items-center gap-[10px]">
            <h1 className="text-[24px] "> Find Us </h1>
            <p> {address} </p>
          </div>
          <div className="flex flex-col items-center gap-[10px]">
            <h1 className="text-[24px] "> General Contact </h1>
            <p> {phone} </p>
            <p> {email} </p>
          </div>
          <div className="flex flex-col items-center gap-[10]px ">
            <h1 className="text-[24px] m-[0_0_10px] "> Follow Us </h1>
            <p> {address} </p>
          </div>
        </div>
        {/* /////// content part  ////// */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[80px] mt-[80px] ">
          <h1 className="text-[80px] leaking-[1.1] tracking-[-.8]">
            Submit an inquiry
          </h1>
          <div className="flex  flex-col">
            <h1 className="font-[200] mb-[60px] tracking-[1.5]">
              if you are a prosepective client or team memeber and want to
              connect or request more information ,please contact one of out
              partners
            </h1>
            <div
              onClick={() => {
                setOpen(!open);
              }}
              className="capitalize bg-purple-500 text-[16px] text-white px-[14px] py-[6px] rounded-[35px]"
            >
              Contact one of our partners
            </div>
          </div>
        </div>
        {/* /////// info part  ////// */}
        {open && (
          <AnimatePresence>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              exit={{ height: 0 }}
              transition={{ duration: 1 }}
              className="max-h-[200vh] overflow-hidden"
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-[90px] relative "
              >
                <button className="abslolute right-[25px] top-[15px]">
                  Close
                </button>
                <h3 className="m-[0_0_10px] text-[24px] font-[400]">
                  {" "}
                  Inquired about Actionist
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[40px]">
                  <div className="flex flex-col ">
                    <input
                      className={`${
                        errors ? "border-red-500" : "border-b-black"
                      }   p-[15px_0_10px] outline-0 border-b-2`}
                      type="text"
                      placeholder="First name"
                      {...register("First_name", {
                        required: true,
                        pattern: /A-Z a-z/i,
                      })}
                    />
                    <input
                      className={`${
                        errors ? "border-red-500" : "border-b-black"
                      }   p-[15px_0_10px] outline-0 border-b-2`}
                      type="text"
                      placeholder="Last name"
                      {...register("Last name", {
                        required: "required",
                        maxLength: 100,
                      })}
                    />
                    <input
                      className={`${
                        errors ? "border-red-500" : "border-b-black"
                      }   p-[15px_0_10px] outline-0 border-b-2`}
                      type="text"
                      placeholder="Email"
                      {...register("Email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                    />
                    <input
                      className={`${
                        errors ? "border-red-500" : "border-b-black"
                      }   p-[15px_0_10px] outline-0 border-b-2`}
                      type="text"
                      placeholder="Organisation"
                      {...register("Organisation", { required: true })}
                    />
                    <input
                      className={`${
                        errors ? "border-red-500" : "border-b-black"
                      }   p-[15px_0_10px] outline-0 border-b-2`}
                      type="text"
                      placeholder="Title"
                      {...register("Title", { required: true })}
                    />
                    <input
                      className={`${
                        errors ? "border-red-500" : "border-b-black"
                      }   p-[15px_0_10px] outline-0 border-b-2`}
                      type="tel"
                      placeholder="Mobile number"
                      {...register("Mobile number", {
                        required: true,
                        minLength: 6,
                        maxLength: 12,
                      })}
                    />

                    <input
                      type="submit"
                      className="px-4 py-2 block mt-[35px] w-[150px] rounded-[15px] bg-blue-500 text-white"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <div className="grid grid-cols-1 md:grid-[1fr_1.5fr]">
                      <div>Inquiry type</div>
                      <div className="grid grid-cols-[1fr_1fr] gap-[20px]">
                        <div>
                          <input
                            className={``}
                            type="checkbox"
                            placeholder="client"
                            {...register("client", {
                              required: true,
                            })}
                          />
                          <span className="ms-[15px]">Client</span>
                        </div>
                        <div>
                          <input
                            className={``}
                            type="checkbox"
                            placeholder="talent"
                            {...register("talent", {
                              required: true,
                            })}
                          />
                          <span className="ms-[15px]">Talent</span>
                        </div>
                        <div>
                          <input
                            className={``}
                            type="checkbox"
                            placeholder="press"
                            {...register("press", {
                              required: true,
                            })}
                          />
                          <span className="ms-[15px]">Press</span>
                        </div>
                        <div>
                          <input
                            className={``}
                            type="checkbox"
                            placeholder="other"
                            {...register("other", {
                              required: true,
                            })}
                          />
                          <span className="ms-[15px]">Other</span>
                        </div>
                      </div>
                    </div>
                    <label className="m-[35px_0_5px]">
                      Additional Background Information{" "}
                    </label>

                    <div className="mt-[30px_0_0]">Required</div>
                  </div>
                </div>
              </form>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Contact;
