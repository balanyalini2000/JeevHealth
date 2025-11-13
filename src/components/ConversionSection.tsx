import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles } from "lucide-react";
import { toast } from "sonner";

const ConversionSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      toast.success("Welcome aboard! Check your email for next steps.", {
        description: "Your health journey begins now.",
      });
      setName("");
      setEmail("");
    }
  };

  return (
    <section
      id="conversion"
      className="min-h-screen flex items-center justify-center gradient-primary py-20 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-scale-in">
          {/* Greeting */}
          <div className="space-y-4">
            <Sparkles className="h-16 w-16 mx-auto text-white animate-pulse-glow" />
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Hello There. Your Health Co-Pilot is Ready!
            </h3>
          </div>

          {/* Main Offer */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              CONNECT AN APP AND ENJOY 1 MONTH OF JEEV PRO FREE!
            </h2>
            <p className="text-xl md:text-2xl text-white/90">
              Get your risk score. See your forecast, not just your past.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Enter your first name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-14 text-lg bg-white/90 border-white text-foreground placeholder:text-muted-foreground"
              required
            />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 text-lg bg-white/90 border-white text-foreground placeholder:text-muted-foreground"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="w-full min-h-[3.5rem] px-6 py-3 text-base md:text-lg bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-glow flex-wrap whitespace-normal leading-snug"
            >
              <span className="flex-1 text-center font-semibold">
                Join thousands taking control of their health
              </span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </form>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionSection;
