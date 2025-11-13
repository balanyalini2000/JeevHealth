import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "I thought my Fitbit was enough. Jeev connected my step count to my blood sugar logs and family history. It's the first time I've seen the whole picture, like a daily check-in with a data scientist!",
      author: "Arjun, 34, Bangalore",
      role: "The Tech-Savvy Professional",
    },
    {
      quote:
        "I manage my parents' health. The family dashboard gives me peace of mind. I can see their risk scores and gently nudge them, instead of nagging. It flagged an upward sugar trend for my mom weeks before her doctor visit, and we adjusted her diet immediately!",
      author: "Priya, 42, Mumbai",
      role: "The Family Caregiver",
    },
    {
      quote:
        "This is what I've been missing. I track everything, but Jeev finally tells me what to actually do with the data. It noticed my heart rate spiked every afternoon and suggested cutting back on caffeine. And honestly? Genius! Small change, HUGE impact!",
      author: "Rohan, 29, Delhi",
      role: "The Fitness Enthusiast",
    },
    {
      quote:
        "Jeev's family dashboard helped me coordinate medicines for my dad. We avoided one unnecessary hospital trip because the app flagged a pattern before it became serious.",
      author: "Sandeep, 46, Pune",
      role: "The Family Manager",
    },
    {
      quote:
        "I was skeptical at first. After two weeks, my evening sleep improved by small tweaks Jeev suggested. The score nudged me to swap one meal and the difference was real.",
      author: "Meera, 51, Chennai",
      role: "The Busy Executive",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length - 2) % (testimonials.length - 2));
  };

  return (
    <section
      id="testimonials"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 md:mb-12 text-gradient animate-fade-in mx-auto">
          What Our Users Say
        </h2>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length;
              const testimonial = testimonials[index];
              return (
                <Card
                  key={index}
                  className="p-8 shadow-soft hover:shadow-glow transition-all duration-300 animate-scale-in bg-card/80 backdrop-blur-sm"
                >
                  <Quote className="h-10 w-10 text-primary mb-4" />
                  <p className="text-lg mb-6 text-foreground leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full hover:shadow-glow transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <div className="flex gap-2">
              {Array.from({ length: testimonials.length - 2 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full hover:shadow-glow transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
