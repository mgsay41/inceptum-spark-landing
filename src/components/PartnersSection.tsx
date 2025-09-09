import React from "react";

// Import partner icons
import techneCairo from "../assets/techne-cairo.svg";
import techneAlex from "../assets/techne-alex.png";
import techshift from "../assets/techshift.png";
import carrerha from "../assets/carrerha.png";
import engineerex from "../assets/engineerex.png";
import swb from "../assets/swb.png";

const PartnersSection = () => {
  const partners = [
    { name: "Techne Summit Cairo", logo: techneCairo },
    { name: "Techne Summit Alexandria", logo: techneAlex },
    { name: "Techshift", logo: techshift },
    { name: "Carrerha", logo: carrerha },
    { name: "Engineerex", logo: engineerex },
    { name: "Startups Without Borders", logo: swb },
  ];

  return (
    <section id="partners" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Partner</span> with
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've been proud partners with industry leaders and innovative
            organizations, creating meaningful impact together.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-card hover-lift text-center animate-scale-in group bg-card flex flex-col items-center justify-center w-40"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-32 h-20 flex items-center justify-center mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-smooth">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground text-lg">
            Interested in partnering with us? Let's create something amazing
            together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
