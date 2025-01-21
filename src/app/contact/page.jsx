import React from "react";
import Contact from "../../../components/content/contact/Contact";
import Footer from "../../../components/footer/Footer";

const page = () => {
  const display = " hidden ";
  return (
    <>
      <Contact />
      <Footer display={display} />
    </>
  );
};

export default page;
