import Home_1 from "../../../components/content/team/home/Home_1";
import Team from "../../../components/content/team/team_member/Team";
import Footer from "../../../components/footer/Footer";

export default function Home() {
  const bg_team = "#2f1d34";

  return (
    <>
      <div className="w-full h-full bg-[#2f1d34] pt-[120px]">
        <Home_1 />
        <Team />
        <Footer bg={bg_team} />
      </div>
    </>
  );
}
