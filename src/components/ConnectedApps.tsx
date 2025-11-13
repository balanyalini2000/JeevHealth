import googleFit from "@/assets/Google fit.png";
import fittr from "@/assets/fittr.jpg";
import appleHealth from "@/assets/Apple health.png";
import healthifyMe from "@/assets/Healthify me.jpg";
import samsungHealth from "@/assets/Samsung health.png";

const ConnectedApps = () => {
  const apps = [
    { name: "Samsung Health", logo: samsungHealth },
    { name: "Google Fit", logo: googleFit },
    { name: "Apple Health", logo: appleHealth },
    { name: "HealthifyMe", logo: healthifyMe },
    { name: "Fittr", logo: fittr },
  ];

  return (
    <section
      id="connected"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted to-background py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 md:mb-8 text-gradient animate-fade-in mx-auto">
          Join our community with your favourite apps
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Seamlessly integrate with your favorite health apps
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {apps.map((app, index) => (
            <div
              key={app.name}
              className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-card shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-110 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-background/80 p-2 shadow-inner">
                <img
                  src={app.logo}
                  alt={`${app.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="text-center text-sm font-semibold text-foreground">{app.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectedApps;
