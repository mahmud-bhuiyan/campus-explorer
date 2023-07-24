import SearchField from "../../Shared/SeachFiled/SearchFiled";
import CollegeSection from "../CollegeSection/CollegeSection";
import HeroSection from "../HeroSection/HeroSection";
import PromotionCard from "../PromotionCard/PromotionCard";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div className="pt-16">
      <SearchField></SearchField>
      <HeroSection></HeroSection>
      <CollegeSection></CollegeSection>
      <Reviews></Reviews>
      <PromotionCard></PromotionCard>
    </div>
  );
};

export default Home;
