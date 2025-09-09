import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Target } from "lucide-react";

const CommunitySection = () => {
  const collaborations = [
    {
      icon: Heart,
      title: "Le Baladna",
      description: "Community support and social impact initiatives"
    },
    {
      icon: Users,
      title: "AAST",
      description: "Academic partnerships and student development"
    },
    {
      icon: Award,
      title: "HU",
      description: "Research collaboration and innovation programs"
    },
    {
      icon: Target,
      title: "IESC Program",
      description: "Comprehensive student empowerment ecosystem"
    }
  ];

  return (
    <section id="community" className="py-24 hero-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Community <span className="text-gradient">Support</span>
            </h2>
            <div className="w-24 h-1 accent-gradient mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground">
              Building stronger communities through strategic partnerships and collaborative initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="animate-slide-in-left">
              <div className="card-gradient p-8 rounded-2xl shadow-card">
                <h3 className="text-2xl font-bold mb-4 text-gradient">IESC Initiative</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The IESC (Innovation, Entrepreneurship, Skills & Career) program is our flagship community support initiative designed to empower students with the tools, knowledge, and networks they need to succeed in today's competitive landscape.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through strategic partnerships with leading educational institutions and organizations, we create opportunities for mentorship, skill development, and career advancement.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
              {collaborations.map((collab, index) => (
                <Card 
                  key={index} 
                  className="hover-lift card-gradient border-0 shadow-card text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl accent-gradient p-3">
                      <collab.icon className="w-full h-full text-white" />
                    </div>
                    <h4 className="font-bold text-sm mb-2">{collab.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {collab.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;