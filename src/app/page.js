import Image from "next/image";
import Home_1 from "../../components/content/home/fisrt-section/Home_1";
import Intro from "../../components/content/home/intro_home/Intro";
import img from "../../public/home_image.jpg";
import Value from "../../components/content/home/section_value/Value";
import Client from "../../components/content/home/section_client/Client";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Home_1 />
      <Intro />
      <Value />
      <Client />
      <Footer />
    </>
  );
}
