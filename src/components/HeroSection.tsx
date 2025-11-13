import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import InteractiveDashboard from "./InteractiveDashboard";

const HeroSection = () => {
  const scrollToConversion = () => {
    const element = document.getElementById("conversion");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center gradient-hero pt-20"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-[1fr,1.5fr] gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6 animate-slide-in-left md:pl-6 lg:pl-10">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="block">Stop Guessing.</span>
              <span className="text-gradient block">Start Predicting.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              AI that turns today's choices into tomorrow's prevention
            </p>
            <div className="space-y-3">
              <Button
                size="lg"
                className="gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
                onClick={scrollToConversion}
              >
                Get Your Health Forecast
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-muted-foreground">
                Takes 2 minutes. No hospital visits. No jargon.
              </p>
            </div>
          </div>

          {/* Right Side - Dashboard Mockup */}
          <div className="relative animate-slide-in-right md:pr-6 lg:pr-10">
            <InteractiveDashboard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
