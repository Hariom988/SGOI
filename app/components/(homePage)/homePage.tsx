import NavBar from "@/app/components/navBar";
import HeroSection from "./heroSection";
import MaterialExcellence from "./materialExcellence";
import MaterialSignature from "./materialSignaturet";
import MaterialDensity from "./materialDensity";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      {/* <MaterialExcellence /> */}
      {/* <MaterialSignature /> */}
      <MaterialDensity />
    </>
  );
};

export default HomePage;
