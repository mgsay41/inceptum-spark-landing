import {
  ShieldCheck,
  Flame,
  Target,
  Lightbulb,
  Heart,
  ListChecks,
  Repeat,
} from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Section Heading */}
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-gradient">Inceptum Egypt</span>
            </h2>
            <div className="w-24 h-1 accent-gradient mx-auto mb-10"></div>
          </div>

          {/* Description */}
          <div className="animate-slide-in-up max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Inceptum Egypt, we believe in the transformative power of
              innovation to bridge the gap between education and industry. Our
              mission is to create cutting-edge tools and platforms that empower
              students and businesses alike.
            </p>
            <p className="text-lg text-muted-foreground mb-14 leading-relaxed">
              Through our flagship products like{" "}
              <span className="text-primary font-semibold">Tariky</span>
              and <span className="text-primary font-semibold">IESC</span>,
              we're building a connected ecosystem where learning meets
              opportunity, and communities thrive through collaboration.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="animate-slide-in-up">
          <h3 className="text-2xl lg:text-3xl font-bold mb-10 text-gradient text-center">
            Our Values
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <ShieldCheck className="w-7 h-7 text-primary" />,
                title: "Integrity",
                desc: "Always seek the right path and follow it.",
              },
              {
                icon: <Flame className="w-7 h-7 text-primary" />,
                title: "Courage",
                desc: "Challenge yourself to rise beyond what you once thought impossible.",
              },
              {
                icon: <Target className="w-7 h-7 text-primary" />,
                title: "Dedication",
                desc: "Let your work reflect the essence of your ideas and effort; measure it beyond material gains.",
              },
              {
                icon: <Lightbulb className="w-7 h-7 text-primary" />,
                title: "Innovation",
                desc: "Observe challenges, share your vision, and delve into human needs—what people want is not always what they truly need.",
              },
              {
                icon: <Heart className="w-7 h-7 text-primary" />,
                title: "Faith",
                desc: "Your work is seen by God and will never be in vain—keep going.",
              },
              {
                icon: <ListChecks className="w-7 h-7 text-primary" />,
                title: "Clarity",
                desc: "Lay out your ideas and plans clearly; break them into simple, time-bound steps.",
              },
              {
                icon: <Repeat className="w-7 h-7 text-primary" />,
                title: "Persistence",
                desc: "Keep moving forward—failure teaches us, and success lights the way.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="card-gradient p-6 rounded-2xl shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{value.icon}</div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
