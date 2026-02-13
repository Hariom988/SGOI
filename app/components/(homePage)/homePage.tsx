import NavBar from "@/app/components/navBar";
import HeroSection from "./heroSection";
import Clients from "./clients";
import WhyChooseUs from "./whyChooseUs";
import Products from "./ourProducts";
import Reviews from "./reviews";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Products />
      <WhyChooseUs />
      <Reviews />
      <Clients />
    </>
  );
};

export default HomePage;
