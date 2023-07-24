import HeroSection from "../HeroSection/HeroSection";
import PromotionCard from "../PromotionCard/PromotionCard";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div className="pt-16">
      <HeroSection></HeroSection>
      <Reviews></Reviews>
      <PromotionCard></PromotionCard>
    </div>
  );
};

export default Home;
