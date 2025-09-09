const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Inceptum Egypt</h3>
          <p className="text-background/80 mb-6 max-w-2xl mx-auto">
            Empowering students and businesses with innovation through cutting-edge tools and community collaboration.
          </p>
          <div className="border-t border-background/20 pt-6">
            <p className="text-background/60">
              © 2024 Inceptum Egypt. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;