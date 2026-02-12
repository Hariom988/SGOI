import NavBar from "@/app/components/navBar";
import HeroSection from "./heroSection";
import Clients from "./clients";
import WhyChooseUs from "./whyChooseUs";
import Products from "./ourProducts";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Products />
      <WhyChooseUs />
      <Clients />
    </>
  );
};

export default HomePage;
