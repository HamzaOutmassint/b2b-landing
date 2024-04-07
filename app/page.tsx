import BrandShowcase from "@/components/Blocks/brand-showcase";
import HeroSection from "@/components/Blocks/hero-section";
import InformativeContent from "@/components/Blocks/informative-content";
import LatestNews from "@/components/Blocks/latest-news";
import SpecificBrands from "@/components/Blocks/specific-brands";
import SustainablePartnerships from "@/components/Blocks/sustainable-partnerships";
import UkSustainableBrands from "@/components/Blocks/uk-sustainable-brands";

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
   </>
  );
}
