import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import tarikyIcon from "@/assets/tariky-icon.png";
import iescIcon from "@/assets/iesc-icon.png";

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 hero-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Products</span>
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative platforms designed to revolutionize the way students and businesses connect and grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="hover-lift card-gradient border-0 shadow-card animate-scale-in">
            <CardHeader className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-background p-4 shadow-soft">
                <img src={tarikyIcon} alt="Tariky" className="w-full h-full object-contain" />
              </div>
              <CardTitle className="text-2xl font-bold">Tariky</CardTitle>
              <CardDescription className="text-lg">
                Career Development Platform
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Connect students with career opportunities, internships, and professional development resources. Build your career path with confidence.
              </p>
              <Button className="accent-gradient shadow-accent hover-scale group">
                Explore Tariky
                <ArrowRight className="ml-2 h-4 w-4 transition-smooth group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-lift card-gradient border-0 shadow-card animate-scale-in">
            <CardHeader className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-background p-4 shadow-soft">
                <img src={iescIcon} alt="IESC" className="w-full h-full object-contain" />
              </div>
              <CardTitle className="text-2xl font-bold">IESC</CardTitle>
              <CardDescription className="text-lg">
                Community Support Platform
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join a thriving community of students, professionals, and mentors. Collaborate, learn, and grow together through shared experiences.
              </p>
              <Button className="accent-gradient shadow-accent hover-scale group">
                Join IESC
                <ArrowRight className="ml-2 h-4 w-4 transition-smooth group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;