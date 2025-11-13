import founder1 from "@/assets/founder-1.jpg";
import founder2 from "@/assets/founder-2.jpg";
import founder3 from "@/assets/founder-3.jpg";

const TeamSection = () => {
  const team = [
    {
      name: "Dr. Indumathi S",
      role: "CEO",
      credentials: ["MBA, IIM Calcutta", "MBBS, MAMC Delhi"],
      image: founder1,
    },
    {
      name: "Nupur Kokate",
      role: "COO",
      credentials: ["MBA, IIM Calcutta", "MSc Mathematics, BITS Pilani"],
      image: founder2,
    },
    {
      name: "Yalini Balan",
      role: "CTO",
      credentials: ["MBA, IIM Calcutta", "BTech IT, CIT"],
      image: founder3,
    },
  ];

  return (
    <section id="team" className="gradient-hero py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-10 text-gradient animate-fade-in mx-auto">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-card/80 shadow-soft transition-all duration-300 hover:shadow-glow">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-72 w-full object-cover transition-transform duration-300 hover:scale-105 md:h-80"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center gap-2 px-6 py-6 text-center">
                  <h3 className="text-2xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-accent font-semibold">{member.role}</p>
                  <div className="h-px w-12 bg-accent/60" />
                  <div className="space-y-1 text-sm text-muted-foreground">
                    {member.credentials.map((cred) => (
                      <p key={cred}>{cred}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
