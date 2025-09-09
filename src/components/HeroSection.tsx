import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";
import IESCDialog from "@/components/IESCDialog";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      <div className="container mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left animate-slide-in-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Empowering Students &{" "}
              <span className="text-gradient">Businesses</span> with Innovation
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Building tools like Tariky & IESC to connect learning, careers, and communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
  href="https://tariky.net"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    className="accent-gradient shadow-accent hover-scale group"
  >
    Discover Tariky
    <ArrowRight className="ml-2 h-5 w-5 transition-smooth group-hover:translate-x-1" />
  </Button>
</a>

              <IESCDialog>
                <Button size="lg" variant="outline" className="hover-lift">
                  Bring IESC to Your Campus
                </Button>
              </IESCDialog>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <img
              src={heroIllustration}
              alt="Innovation and collaboration"
              className="w-full h-auto rounded-2xl shadow-card hover-lift"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;