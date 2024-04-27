import BrandShowcase from "@/components/blocks/brand_showcase";
import ExploreSection from "@/components/blocks/explore_section";
import HeroSection from "@/components/blocks/hero_section";
import InformativeContent from "@/components/blocks/informative_content";
import LatestNews from "@/components/blocks/latest_news";
import SpecificBrands from "@/components/blocks/specific_brands";
import SustainablePartnerships from "@/components/blocks/sustainable_partnerships";
import UkSustainableBrands from "@/components/blocks/uk_sustainable_brands";

export default function Home() {
  return (
   <>
    <HeroSection />
    <BrandShowcase />
    <InformativeContent />
    <UkSustainableBrands />
    <SustainablePartnerships />
    <SpecificBrands />
    <LatestNews />
    <ExploreSection />
   </>
  );
}
