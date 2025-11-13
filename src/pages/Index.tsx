import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrokenExperience from "@/components/BrokenExperience";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ConnectedApps from "@/components/ConnectedApps";
import ResearchInsights from "@/components/ResearchInsights";
import AIAdvantage from "@/components/AIAdvantage";
import PricingSection from "@/components/PricingSection";
import ConversionSection from "@/components/ConversionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <BrokenExperience />
      <TestimonialsSection />
      <ResearchInsights />
      <ConnectedApps />
      <AIAdvantage />
      <PricingSection />
      <ConversionSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
