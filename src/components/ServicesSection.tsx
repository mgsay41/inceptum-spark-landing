import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, GraduationCap, Users, Briefcase } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs, from web applications to mobile platforms."
    },
    {
      icon: GraduationCap,
      title: "Educational Courses",
      description: "Comprehensive training programs designed to bridge the skills gap and prepare students for the industry."
    },
    {
      icon: Users,
      title: "Recruitment & Hiring",
      description: "Connect talented individuals with opportunities that match their skills and career aspirations."
    },
    {
      icon: Briefcase,
      title: "Business Consulting",
      description: "Strategic guidance to help businesses leverage technology and innovation for growth and success."
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to empower your journey, whether you're a student, business, or organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-lift card-gradient border-0 shadow-card text-center animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl accent-gradient p-4 group-hover:shadow-accent transition-smooth">
                  <service.icon className="w-full h-full text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;