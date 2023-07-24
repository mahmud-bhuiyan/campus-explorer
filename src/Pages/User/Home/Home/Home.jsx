import { Helmet } from "react-helmet-async";
import SearchField from "../../Shared/SeachFiled/SearchFiled";
import CollegeSection from "../CollegeSection/CollegeSection";
import HeroSection from "../HeroSection/HeroSection";
import ImageGallerySection from "../ImageGallerySection/ImageGallerySection";
import PromotionCard from "../PromotionCard/PromotionCard";
import ResearchSection from "../ResearchSection/ResearchSection";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>Home | Campus Explorer</title>
      </Helmet>
      <SearchField></SearchField>
      <HeroSection></HeroSection>
      <CollegeSection></CollegeSection>
      <ImageGallerySection></ImageGallerySection>
      <ResearchSection></ResearchSection>
      <Reviews></Reviews>
      <PromotionCard></PromotionCard>
    </div>
  );
};

export default Home;
