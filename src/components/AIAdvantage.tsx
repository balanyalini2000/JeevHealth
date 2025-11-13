import { X, Check, Dna, Watch, Cloud, Utensils, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

const AIAdvantage = () => {
  const oldWay = [
    "You feel fine",
    "Symptom appears",
    "Wait 3 days",
    "Doctor Visit",
    "Lab Tests",
    "Diagnosis: Problem Found",
    "Reactive Treatment",
  ];

  const urgencyLevels = [
    "bg-red-50",
    "bg-red-100/90",
    "bg-red-100",
    "bg-red-200/90",
    "bg-red-200",
    "bg-red-300/90",
    "bg-red-400/80",
  ];

  const urgencyDots = [
    "bg-red-200",
    "bg-red-300",
    "bg-red-400",
    "bg-red-500",
    "bg-red-500",
    "bg-red-600",
    "bg-red-700",
  ];

  const jeevWay = [
    "You input the data",
    "AI spots the pattern",
    "Smart nudge delivered",
    "You take action",
    "Risk stabilizes",
  ];

  const positiveLevels = [
    "bg-rose-50/70",
    "bg-rose-100/60",
    "bg-emerald-50/70",
    "bg-emerald-100/70",
    "bg-emerald-200/80",
  ];

  const positiveDots = [
    "bg-rose-300",
    "bg-rose-400",
    "bg-emerald-400",
    "bg-emerald-500",
    "bg-emerald-600",
  ];

  const dataSources = [
    { icon: <Dna className="h-6 w-6" />, label: "Genetics" },
    { icon: <Watch className="h-6 w-6" />, label: "Wearables & Devices" },
    { icon: <Cloud className="h-6 w-6" />, label: "Environment" },
    { icon: <Utensils className="h-6 w-6" />, label: "Diet" },
    { icon: <FileText className="h-6 w-6" />, label: "Questionnaires" },
  ];

  return (
    <section
      id="ai-advantage"
      className="min-h-screen flex items-center justify-center gradient-hero py-12 md:py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 md:mb-8 text-gradient animate-fade-in mx-auto">
          The AI Advantage
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Old Way */}
          <Card className="group flex h-full flex-col p-5 md:p-6 shadow-soft animate-slide-in-left bg-muted/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-destructive flex items-center gap-2">
              <X className="h-6 w-6" />
              The Old Way
            </h3>
            <div className="space-y-2 mb-4 md:mb-6 flex-1">
              {oldWay.map((step, index) => (
                <div
                  key={index}
                  className={`group/step flex items-start gap-2.5 md:gap-3 rounded-lg border border-transparent p-3 transition-all duration-300 hover:border-destructive/50 hover:bg-red-500/10 hover:shadow-lg ${urgencyLevels[index]}`}
                >
                  <div
                    className={`mt-1 h-2 w-2 rounded-full flex-shrink-0 transition-transform duration-300 group-hover/step:scale-125 ${urgencyDots[index]}`}
                  />
                  <p className="text-sm md:text-base text-foreground font-medium transition-colors duration-300 group-hover/step:text-destructive">
                    {step}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-auto p-4 rounded-xl bg-destructive/10 border border-destructive/20">
              <p className="font-semibold text-lg text-destructive mb-1">
                Linear. Broken. Reactive.
              </p>
              <p className="text-sm text-muted-foreground">One-size-fits-all medicine</p>
            </div>
          </Card>

          {/* Jeev Way */}
          <Card className="group flex h-full flex-col p-5 md:p-6 shadow-glow animate-slide-in-right gradient-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_35px_rgba(99,102,241,0.35)]">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary flex items-center gap-2">
              <Check className="h-6 w-6" />
              The Jeev Way
            </h3>
            
            {/* Data Sources */}
            <div className="mb-4 md:mb-6">
              <p className="text-xs md:text-sm font-semibold mb-3 text-muted-foreground text-center md:text-left">
                5 Data Sources, One Intelligence
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {dataSources.map((source) => (
                  <div
                    key={source.label}
                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/20 hover:shadow"
                  >
                    {source.icon}
                    <span>{source.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 mb-4 md:mb-6 flex-1">
              {jeevWay.map((step, index) => (
                <div
                  key={index}
                  className={`group/step flex items-start gap-2.5 md:gap-3 rounded-lg border border-transparent p-3 transition-all duration-300 hover:border-emerald-300 hover:bg-white/40 hover:shadow-md ${positiveLevels[index]}`}
                >
                  <div
                    className={`mt-1 h-2 w-2 rounded-full flex-shrink-0 transition-transform duration-300 group-hover/step:scale-125 ${positiveDots[index]}`}
                  />
                  <p className="text-sm md:text-base text-foreground font-medium transition-colors duration-300 group-hover/step:text-emerald-600">
                    {step}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-auto p-4 rounded-xl gradient-primary text-white">
              <p className="text-lg font-semibold mb-1">
                Continuous. Intelligent. Personal.
              </p>
              <p>Built for YOUR unique body & lifestyle</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIAdvantage;
