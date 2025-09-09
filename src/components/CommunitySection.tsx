import { Card, CardContent } from "@/components/ui/card";
import lebaladna from "../assets/lebaladna.png";
import aast from "../assets/aast.png";
import hu from "../assets/hu.png";

const CommunitySection = () => {
  const collaborations = [
    {
      logo: lebaladna,
      title: "Le Baladna",
    },
    {
      logo: aast,
      title: "AAST",
    },
    {
      logo: hu,
      title: "HU",
    },
  ];

  return (
    <section id="community" className="py-24 hero-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Community <span className="text-gradient">Support</span>
            </h2>
            <div className="w-24 h-1 accent-gradient mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground">
              Building stronger communities through strategic partnerships and
              collaborative initiatives.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* IESC Initiative Card */}
            <Card className="card-gradient p-8 rounded-2xl shadow-card animate-slide-in-left">
              <CardContent>
                <h3 className="text-2xl font-bold mb-4 text-gradient">
                  IESC Initiative
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The IESC (Innovation, Entrepreneurship, Skills & Career)
                  program is our flagship community support initiative designed
                  to empower students with the tools, knowledge, and networks
                  they need to succeed in today&apos;s competitive landscape.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through strategic partnerships with leading educational
                  institutions and organizations, we create opportunities for
                  mentorship, skill development, and career advancement.
                </p>
              </CardContent>
            </Card>

            {/* Collaborations Group Card */}
            <Card className="card-gradient p-8 rounded-2xl shadow-card animate-slide-in-right flex flex-col justify-center">
              <CardContent className="flex flex-col gap-6">
                {collaborations.map((collab, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center hover-lift transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-20 h-20 mb-3 relative">
                      <img
                        src={collab.logo}
                        alt={collab.title}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-base mb-1">{collab.title}</h4>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
