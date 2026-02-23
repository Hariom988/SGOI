import HeroSection from "./heroSection";
import Clients from "./clients";
import WhyChooseUs from "./whyChooseUs";
import Products from "./ourProduct";
import Reviews from "./reviews";
export const revalidate = 0;

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
