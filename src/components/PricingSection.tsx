import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
const PricingSection = () => {
  return <section id="pricing" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gradient animate-fade-in mx-auto">
          Pricing Model
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full max-w-6xl mx-auto border-collapse animate-fade-in-up">
            <thead>
              <tr className="border-b-2 border-primary">
                <th className="p-4 text-left text-lg font-bold text-foreground">Feature</th>
                <th className="p-4 text-center text-lg font-bold text-muted-foreground">
                  The Old Way
                  <br />
                  <span className="text-sm font-normal">(Reactive & Generic)</span>
                </th>
                <th className="p-4 text-center text-lg font-bold text-foreground bg-muted/30">
                  Jeev Free
                  <br />
                  <span className="text-sm font-normal">(Descriptive)</span>
                </th>
                <th className="p-4 text-center text-lg font-bold text-primary gradient-hero">
                  Jeev Pro
                  <br />
                  <span className="text-sm font-normal">(Predictive & Actionable)</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border hover:bg-muted/20 transition-colors">
                <td className="p-4 font-semibold text-foreground">Frequency</td>
                <td className="p-4 text-center text-muted-foreground">Once a year</td>
                <td className="p-4 text-center bg-muted/10">Continuous (Basic Tracking)</td>
                <td className="p-4 text-center gradient-hero font-medium">
                  Continuous (Real-Time AI Forecasts)
                </td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/20 transition-colors">
                <td className="p-4 font-semibold text-foreground">Data Sources</td>
                <td className="p-4 text-center text-muted-foreground">Bloodwork and scans</td>
                <td className="p-4 text-center bg-muted/10">Wearables</td>
                <td className="p-4 text-center gradient-hero">
                  <div className="text-sm leading-relaxed">
                    Wearables + Devices + Diet + Labs + Environment + Scans + Genetics + Family
                    History
                  </div>
                </td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/20 transition-colors">
                <td className="p-4 font-semibold text-foreground">Features & Support</td>
                <td className="p-4 text-center text-muted-foreground">
                  Doctor visit after check-up
                </td>
                <td className="p-4 text-center bg-muted/10">Weekly recommendation</td>
                <td className="p-4 text-center gradient-hero">
                  <div className="text-sm leading-relaxed">
                    Daily recommendations + AI-based personalized insights + Family Dashboard
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-muted/20 transition-colors">
                <td className="p-4 font-semibold text-foreground">Cost</td>
                <td className="p-4 text-center">
                  <span className="text-destructive font-bold">₹5,000 - ₹10,000</span>
                  <br />
                  <span className="text-sm text-muted-foreground">a year</span>
                </td>
                <td className="p-4 text-center bg-muted/10">
                  <span className="text-2xl font-bold text-primary">₹0</span>
                </td>
                <td className="p-4 text-center gradient-hero">
                  <span className="text-3xl font-bold text-primary">₹299</span>
                  <br />
                  <span className="text-sm">/ month</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Value Cards */}
        
      </div>
    </section>;
};
export default PricingSection;