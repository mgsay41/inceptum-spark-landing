const PartnersSection = () => {
  const partners = [
    "Techne Summit Cairo",
    "Techne Summit Alexandria", 
    "Excellence Event",
    "Techshift",
    "Carrerha",
    "Engineerex",
    "Startups Without Borders"
  ];

  return (
    <section id="partners" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Partners</span>
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Collaborating with industry leaders and innovative organizations to create meaningful impact.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="card-gradient p-6 rounded-2xl shadow-card hover-lift text-center animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl accent-gradient opacity-20 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {partner.split(' ').map(word => word[0]).join('').slice(0, 2)}
                </span>
              </div>
              <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-smooth">
                {partner}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground text-lg">
            Interested in partnering with us? Let's create something amazing together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;