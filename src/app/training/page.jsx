import Home_1 from "../../../components/content/training/home/Home_1";
import Industries from "../../../components/content/training/industries/Industries";
import Services from "../../../components/content/training/services/Services";
import Footer from "../../../components/footer/Footer";

export default function Home() {
  const bg_training = "bg-[#f7f4f3]";
  return (
    <>
      <Home_1 />
      <Services />
      <Industries />
      <Footer bg_training={bg_training} />
    </>
  );
}
