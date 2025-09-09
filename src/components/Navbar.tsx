import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-soft border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Inceptum Egypt" className="h-12 w-auto" />
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-smooth relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-smooth group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-foreground hover:text-primary transition-smooth relative group"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-smooth group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-smooth relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-smooth group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className="text-foreground hover:text-primary transition-smooth relative group"
            >
              Community Support
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-smooth group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("partners")}
              className="text-foreground hover:text-primary transition-smooth relative group"
            >
              Partners
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-smooth group-hover:w-full"></span>
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="hover-scale"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;