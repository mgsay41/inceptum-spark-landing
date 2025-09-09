import logo from "@/assets/1.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <img src={logo} alt="Inceptum Egypt" className="h-12 w-auto" />
          </div>
          <p className="text-background/80 mb-6">
            Discover more
          </p>
          <div className="border-t border-background/20 pt-6">
            <p className="text-background/60">
              © 2025 Inceptum Egypt. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;