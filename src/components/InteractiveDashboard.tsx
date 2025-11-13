import { Moon, Heart, Utensils, Wind, TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useMemo, useState } from "react";

type TrendDirection = "up" | "down" | "steady";

type Metric = {
  id: string;
  label: string;
  value: string;
  delta: string;
  trend: TrendDirection;
  description: string;
  icon: LucideIcon;
};

type ActivityBar = {
  label: string;
  value: number;
  tooltip: string;
};

type DashboardData = {
  score: number;
  status: string;
  trend: { direction: TrendDirection; label: string };
  summary: string;
  metrics: Metric[];
  bars: ActivityBar[];
  highlight: string;
};

type RangeKey = "today" | "week" | "month";

const rangeOptions: { key: RangeKey; label: string }[] = [
  { key: "today", label: "Today" },
  { key: "week", label: "7 days" },
  { key: "month", label: "30 days" },
];

const dashboards: Record<RangeKey, DashboardData> = {
  today: {
    score: 72,
    status: "Moderate",
    trend: { direction: "up", label: "+4 vs yesterday" },
    summary: "Live signals from today",
    metrics: [
      {
        id: "sleep",
        label: "Sleep Quality",
        value: "78%",
        delta: "+5%",
        trend: "up",
        description: "You slept 22 minutes longer than yesterday and reached 78% restorative sleep.",
        icon: Moon,
      },
      {
        id: "heart",
        label: "Heart Rate",
        value: "74 bpm",
        delta: "-3 bpm",
        trend: "down",
        description: "Resting heart rate dropped to 74 bpm. Hydration and cooldown routine are working.",
        icon: Heart,
      },
      {
        id: "diet",
        label: "Diet Score",
        value: "63",
        delta: "+2",
        trend: "up",
        description: "Balanced macros with 24g protein at lunch. Keep fiber intake consistent for dinner.",
        icon: Utensils,
      },
      {
        id: "respiratory",
        label: "Respiratory Load",
        value: "Low",
        delta: "AQI 95",
        trend: "steady",
        description: "City air remains moderate. Mask recommended for outdoor workouts later tonight.",
        icon: Wind,
      },
    ],
    bars: [
      { label: "6am", value: 45, tooltip: "Morning stretch routine kept stress load low." },
      { label: "9am", value: 72, tooltip: "Commute spike detected—breathing exercise suggested." },
      { label: "12pm", value: 58, tooltip: "Lunchtime walk steadied your activity." },
      { label: "3pm", value: 64, tooltip: "Standing break improved posture and mobility." },
      { label: "6pm", value: 88, tooltip: "Workout window delivered peak cardio load." },
      { label: "9pm", value: 42, tooltip: "Wind-down breathing restored balance." },
    ],
    highlight: "Evening walk at 8 PM keeps AQI exposure low. Forecast nudges you to continue the streak.",
  },
  week: {
    score: 76,
    status: "Improving",
    trend: { direction: "up", label: "+6 vs last week" },
    summary: "Aggregated over the last 7 days",
    metrics: [
      {
        id: "sleep",
        label: "Sleep Quality",
        value: "80%",
        delta: "+6%",
        trend: "up",
        description: "Average nightly sleep crossed 7h 15m. Maintain consistent bedtimes this week.",
        icon: Moon,
      },
      {
        id: "heart",
        label: "Heart Rate",
        value: "73 bpm",
        delta: "-2 bpm",
        trend: "down",
        description: "Gradual HR drop shows improved recovery after workouts.",
        icon: Heart,
      },
      {
        id: "diet",
        label: "Diet Score",
        value: "66",
        delta: "+4",
        trend: "up",
        description: "Higher whole-grain and greens intake boosted micronutrients.",
        icon: Utensils,
      },
      {
        id: "respiratory",
        label: "Respiratory Load",
        value: "Stable",
        delta: "AQI 88",
        trend: "steady",
        description: "Air quality held steady. Consider indoor workouts on high pollen days.",
        icon: Wind,
      },
    ],
    bars: [
      { label: "Mon", value: 62, tooltip: "Mobility session increased readiness." },
      { label: "Tue", value: 68, tooltip: "Balanced cardio & recovery." },
      { label: "Wed", value: 75, tooltip: "High-intensity run elevated load." },
      { label: "Thu", value: 58, tooltip: "Active recovery restored balance." },
      { label: "Fri", value: 82, tooltip: "Strength training boosted metabolic score." },
      { label: "Sat", value: 70, tooltip: "Outdoor activities maintained momentum." },
      { label: "Sun", value: 55, tooltip: "Deep rest day locked in recovery." },
    ],
    highlight: "Consistency pays off—4 solid workout days and 3 restorative days kept your risk trending down.",
  },
  month: {
    score: 68,
    status: "Steady",
    trend: { direction: "steady", label: "±0 vs last month" },
    summary: "Rolling 30-day pattern",
    metrics: [
      {
        id: "sleep",
        label: "Sleep Quality",
        value: "76%",
        delta: "+2%",
        trend: "up",
        description: "Sleep debt shrank by 1.2 hours. Keep lights-out before 11:00 PM.",
        icon: Moon,
      },
      {
        id: "heart",
        label: "Heart Rate",
        value: "76 bpm",
        delta: "+1 bpm",
        trend: "steady",
        description: "Minor uptick from travel stress. Plan a low-intensity week to settle HRV.",
        icon: Heart,
      },
      {
        id: "diet",
        label: "Diet Score",
        value: "61",
        delta: "-1",
        trend: "down",
        description: "Travel meals lowered fiber intake. Reintroduce leafy greens at lunch.",
        icon: Utensils,
      },
      {
        id: "respiratory",
        label: "Respiratory Load",
        value: "Medium",
        delta: "AQI 102",
        trend: "down",
        description: "Smog alerts triggered 4 times. Schedule indoor cardio when AQI > 110.",
        icon: Wind,
      },
    ],
    bars: [
      { label: "Week 1", value: 64, tooltip: "Strong start with consistent workouts." },
      { label: "Week 2", value: 72, tooltip: "Peak performance window—highest readiness." },
      { label: "Week 3", value: 58, tooltip: "Travel reduced activity and sleep quality." },
      { label: "Week 4", value: 66, tooltip: "Recovery plan brought metrics back on track." },
      { label: "Week 5", value: 61, tooltip: "Maintaining base level while easing back in." },
    ],
    highlight: "Macro view shows resilience—keep alternating focus weeks with lighter recovery weeks.",
  },
};

const InteractiveDashboard = () => {
  const [selectedRange, setSelectedRange] = useState<RangeKey>("today");
  const [displayScore, setDisplayScore] = useState(0);
  const [activeMetricId, setActiveMetricId] = useState(dashboards["today"].metrics[0].id);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  useEffect(() => {
    setDisplayScore(0);
    const timer = setTimeout(() => {
      setDisplayScore(dashboards[selectedRange].score);
    }, 200);
    return () => clearTimeout(timer);
  }, [selectedRange]);

  useEffect(() => {
    setActiveMetricId(dashboards[selectedRange].metrics[0].id);
    setHoveredBar(null);
  }, [selectedRange]);

  const dashboard = dashboards[selectedRange];

  const activeMetric = useMemo(() => {
    return dashboard.metrics.find((metric) => metric.id === activeMetricId) ?? dashboard.metrics[0];
  }, [dashboard, activeMetricId]);

  const circumference = 2 * Math.PI * 56;
  const strokeDashoffset = circumference * (1 - displayScore / 100);

  const getTrendClasses = (direction: TrendDirection) => {
    if (direction === "up") return "text-emerald-500";
    if (direction === "down") return "text-destructive";
    return "text-muted-foreground";
  };

  const renderTrendIcon = (direction: TrendDirection) => {
    if (direction === "up") {
      return <TrendingUp className="h-4 w-4" />;
    }
    if (direction === "down") {
      return <TrendingDown className="h-4 w-4" />;
    }
    return <Minus className="h-4 w-4" />;
  };

  return (
    <Card className="relative p-6 md:p-7 shadow-glow animate-float bg-background/95 backdrop-blur-md border-primary/20">
      <div className="space-y-5">
        <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-foreground">{dashboard.summary}</p>
            <p className="text-xs text-muted-foreground">Switch ranges to see how Jeev adapts your forecast.</p>
          </div>
          <div className="flex gap-2 justify-end">
            {rangeOptions.map((option) => (
              <button
                key={option.key}
                type="button"
                onClick={() => setSelectedRange(option.key)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                  selectedRange === option.key
                    ? "bg-primary text-white border-primary shadow-glow"
                    : "bg-muted/40 text-muted-foreground border-transparent hover:border-primary/30"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="grid gap-5 lg:grid-cols-[240px,1fr] xl:grid-cols-[220px,1fr] items-start">
            <div className="flex flex-col items-center justify-center space-y-4 rounded-2xl border border-border bg-muted/30 px-4 py-5">
              <div className="relative h-32 w-32">
                <svg className="h-full w-full -rotate-90 transform">
                  <circle cx="64" cy="64" r="56" stroke="hsl(var(--muted))" strokeWidth="8" fill="none" />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="hsl(var(--primary))"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-700 ease-out"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-primary">{Math.round(displayScore)}</span>
                  <span className="text-sm text-muted-foreground">{dashboard.status}</span>
                </div>
              </div>
              <div className={`flex items-center gap-2 text-xs font-semibold ${getTrendClasses(dashboard.trend.direction)}`}>
                {renderTrendIcon(dashboard.trend.direction)}
                <span>{dashboard.trend.label}</span>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {dashboard.metrics.map((metric) => {
                const Icon = metric.icon;
                const isActive = activeMetricId === metric.id;
                return (
                  <button
                    key={metric.id}
                    type="button"
                    onClick={() => setActiveMetricId(metric.id)}
                    className={`flex items-center gap-3 rounded-xl border p-3 text-left transition-all ${
                      isActive
                        ? "border-primary bg-primary/10 text-foreground shadow-glow"
                        : "border-border bg-muted/40 hover:bg-muted/60"
                    }`}
                  >
                    <div className={`rounded-lg p-2 ${isActive ? "bg-primary/20 text-primary" : "bg-background text-primary"}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">{metric.label}</p>
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="text-lg font-bold text-foreground">{metric.value}</p>
                        <span className={`text-sm font-semibold ${getTrendClasses(metric.trend)}`}>{metric.delta}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 items-stretch">
            <div className="flex flex-col justify-between rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-4">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-primary">Personalized Insight</h3>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Focus: {activeMetric.label}</p>
                <p className="text-sm leading-relaxed text-foreground">{activeMetric.description}</p>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{dashboard.highlight}</p>
            </div>

            <div className="flex flex-col rounded-xl border border-border bg-muted/30 p-4">
              <div className="flex flex-1 items-end justify-between gap-2">
                {dashboard.bars.map((bar, index) => (
                  <div
                    key={bar.label}
                    className="relative flex-1 cursor-pointer rounded-t-lg bg-primary/40 transition-all duration-300 hover:bg-primary"
                    style={{ height: `${bar.value}%` }}
                    onMouseEnter={() => setHoveredBar(index)}
                    onMouseLeave={() => setHoveredBar(null)}
                  >
                    {hoveredBar === index && (
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-primary/30 bg-background px-2 py-1 text-xs text-foreground shadow-soft">
                        {bar.tooltip}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                {dashboard.bars.map((bar) => (
                  <span key={bar.label}>{bar.label}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative glow effects */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse-glow pointer-events-none" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse-glow pointer-events-none" />
    </Card>
  );
};

export default InteractiveDashboard;

