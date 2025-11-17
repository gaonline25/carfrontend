import CarsySection from "./CarsySection";
import CubeGallery from "./CubeGallery";
import Hero from "./Hero";
import NewsletterSection from "./NewsletterSection";
import NewsSection from "./NewsSection";
import PricingSection from "./PricingSection";
import ServiceProcess from "./ServiceProcess";

function HeroSection() {
  return (
    <>
      <Hero />
          <CarsySection />
          <ServiceProcess />
          <CubeGallery />
          <PricingSection />
          <NewsSection />
          <NewsletterSection />
    </>
  );
}

export default HeroSection;
