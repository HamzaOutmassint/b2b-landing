import BrandShowcase from "@/components/blocks/brand-showcase";
import ExploreSection from "@/components/blocks/explore-section";
import HeroSection from "@/components/blocks/hero-section";
import InformativeContent from "@/components/blocks/informative-content";
import LatestNews from "@/components/blocks/latest-news";
import SpecificBrands from "@/components/blocks/specific-brands";
import SustainablePartnerships from "@/components/blocks/sustainable-partnerships";
import UkSustainableBrands from "@/components/blocks/uk-sustainable-brands";

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
