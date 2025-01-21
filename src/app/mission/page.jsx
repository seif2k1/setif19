import React from "react";
import { Home as Home_1 } from "../../../components/content/mession/home/Home";
import Footer from "../../../components/footer/Footer";
const Home = () => {
  const bg_mession = "#";
  return (
    <>
      <Home_1 />
      <Footer bg_mession={bg_mession} />
    </>
  );
};

export default Home;
