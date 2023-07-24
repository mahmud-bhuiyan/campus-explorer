import SearchField from "../../Shared/SeachFiled/SearchFiled";
import CollegeSection from "../CollegeSection/CollegeSection";
import HeroSection from "../HeroSection/HeroSection";
import ImageGallerySection from "../ImageGallerySection/ImageGallerySection";
import PromotionCard from "../PromotionCard/PromotionCard";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div className="pt-16">
      <SearchField></SearchField>
      <HeroSection></HeroSection>
      <CollegeSection></CollegeSection>
      <ImageGallerySection></ImageGallerySection>
      <Reviews></Reviews>
      <PromotionCard></PromotionCard>
    </div>
  );
};

export default Home;
