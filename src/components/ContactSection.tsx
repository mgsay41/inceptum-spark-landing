import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const subject = encodeURIComponent("Contact Form Submission");
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
      `);
      
      const mailtoLink = `mailto:info@inceptum.in?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;

      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully!",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 hero-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your journey with us? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-slide-in-left">
            <div className="space-y-8">
              <Card className="card-gradient border-0 shadow-card hover-lift">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 accent-gradient rounded-xl p-3">
                    <Mail className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email Us</h3>
                    <p className="text-muted-foreground">info@inceptum.in</p>
                  </div>
                </CardContent>
              </Card>


              <div className="card-gradient p-6 rounded-2xl shadow-card">
  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
  <div className="flex space-x-4">
    <a
      href="https://www.facebook.com/inceptum.egypt/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 accent-gradient rounded-xl p-3 hover-scale cursor-pointer"
    >
      <Facebook className="w-full h-full text-white" />
    </a>
    <a
      href="https://www.instagram.com/inceptum_egypt/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 accent-gradient rounded-xl p-3 hover-scale cursor-pointer"
    >
      <Instagram className="w-full h-full text-white" />
    </a>
    <a
      href="https://www.linkedin.com/company/inceptum-egypt"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 accent-gradient rounded-xl p-3 hover-scale cursor-pointer"
    >
      <Linkedin className="w-full h-full text-white" />
    </a>
  </div>
</div>

            </div>
          </div>

          <div className="animate-slide-in-right">
            <Card className="card-gradient border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input 
                    placeholder="Your Name" 
                    className="bg-background"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input 
                    placeholder="Your Email" 
                    type="email" 
                    className="bg-background"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Textarea 
                    placeholder="Your Message" 
                    className="bg-background min-h-[120px]"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                  <Button 
                    type="submit"
                    className="w-full accent-gradient shadow-accent hover-scale"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;