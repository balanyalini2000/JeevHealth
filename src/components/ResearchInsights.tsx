import { AlertCircle, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

const ResearchInsights = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 md:mb-12 text-gradient animate-fade-in mx-auto">
          Did You Know?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <Card className="p-8 shadow-soft hover:shadow-glow transition-all duration-300 animate-slide-in-left bg-card/80 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <AlertCircle className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-lg leading-relaxed text-foreground">
                  The World Health Organization says{" "}
                  <span className="font-bold text-primary">60% of deaths</span> from
                  lifestyle diseases could be prevented by changing just a few habits:
                  eating better, moving more, sleeping well, and avoiding tobacco and
                  excess alcohol.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-soft hover:shadow-glow transition-all duration-300 animate-slide-in-right bg-card/80 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-secondary/10">
                <TrendingDown className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <p className="text-lg leading-relaxed text-foreground">
                  Approximately <span className="font-bold text-secondary">27% of adults</span> do
                  not meet physical activity recommendations, and physical inactivity
                  contributes to about{" "}
                  <span className="font-bold text-secondary">9% of all premature deaths</span>,
                  notes the World Health Organization.
                </p>
              </div>
            </div>
          </Card>
        </div>
        <div className="text-center animate-fade-in-up">
          <p className="text-2xl font-semibold text-primary max-w-3xl mx-auto">
            That's what Jeev is built for: to catch those patterns before they catch you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResearchInsights;
