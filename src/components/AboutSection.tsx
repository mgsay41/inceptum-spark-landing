const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6">
              About <span className="text-gradient">Inceptum Egypt</span>
            </h2>
            <div className="w-24 h-1 accent-gradient mx-auto mb-12"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Inceptum Egypt, we believe in the transformative power of innovation to bridge the gap between education and industry. Our mission is to create cutting-edge tools and platforms that empower students and businesses alike.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Through our flagship products like <span className="text-primary font-semibold">Tariky</span> and <span className="text-primary font-semibold">IESC</span>, we're building a connected ecosystem where learning meets opportunity, and communities thrive through collaboration.
              </p>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="card-gradient p-8 rounded-2xl shadow-card">
                <h3 className="text-2xl font-bold mb-4 text-gradient">Our Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 accent-gradient rounded-full mr-3"></div>
                    <span className="text-foreground">Innovation-driven solutions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 accent-gradient rounded-full mr-3"></div>
                    <span className="text-foreground">Student-centric approach</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 accent-gradient rounded-full mr-3"></div>
                    <span className="text-foreground">Community collaboration</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 accent-gradient rounded-full mr-3"></div>
                    <span className="text-foreground">Excellence in execution</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;