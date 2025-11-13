import hospitalWaiting from "@/assets/hospital-waiting.jpg";

const BrokenExperience = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted to-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Right Side - Visual */}
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img
                src={hospitalWaiting}
                alt="Hospital Waiting Room"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg font-semibold">
                  The Broken Healthcare Journey
                </p>
              </div>
            </div>
          </div>

          {/* Left Side - Content */}
          <div className="order-1 md:order-2 space-y-6 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center md:text-left mx-auto md:mx-0">
              The Broken Experience
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                We all wait till something hurts to care about our health. But our bodies
                give hints every day: in our steps, our sleep patterns, and even our stress
                levels.
              </p>
              <p className="italic border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg">
                A friend of mine was "perfectly fine," or so her last checkup said. Six
                months later, she was diagnosed with hypertension. The signs were there all
                along: restless nights, rising heart rate, oily fried meals with high salt.
                But no one was connecting the dots.
              </p>
              <p className="text-foreground font-medium">
                Jeev connects these dots. It learns your patterns, spots early risks, and
                helps you act on them before they turn serious.
              </p>
              <p className="text-xl font-semibold text-primary">
                Because the best hospital is the one you never need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrokenExperience;
