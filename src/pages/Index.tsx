import { useFadeIn } from "@/hooks/useFadeIn";
import HeroSection from "@/components/HeroSection";
import ContradictionSection from "@/components/ContradictionSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import StudioSection from "@/components/StudioSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const containerRef = useFadeIn();

  return (
    <div ref={containerRef} className="bg-background">
      <HeroSection />
      <div className="fade-in-section"><ContradictionSection /></div>
      <div className="fade-in-section"><ServicesSection /></div>
      <div className="fade-in-section"><CaseStudiesSection /></div>
      <div className="fade-in-section"><StudioSection /></div>
      <div className="fade-in-section"><ContactSection /></div>
      <FooterSection />
    </div>
  );
};

export default Index;
