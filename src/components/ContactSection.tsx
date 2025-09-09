import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

const ContactSection = () => {
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
                    <p className="text-muted-foreground">contact@inceptumegypt.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-0 shadow-card hover-lift">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 accent-gradient rounded-xl p-3">
                    <Phone className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">Call Us</h3>
                    <p className="text-muted-foreground">+20 XXX XXX XXXX</p>
                  </div>
                </CardContent>
              </Card>

              <div className="card-gradient p-6 rounded-2xl shadow-card">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 accent-gradient rounded-xl p-3 hover-scale cursor-pointer">
                    <Facebook className="w-full h-full text-white" />
                  </div>
                  <div className="w-12 h-12 accent-gradient rounded-xl p-3 hover-scale cursor-pointer">
                    <Instagram className="w-full h-full text-white" />
                  </div>
                  <div className="w-12 h-12 accent-gradient rounded-xl p-3 hover-scale cursor-pointer">
                    <Linkedin className="w-full h-full text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <Card className="card-gradient border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Your Name" className="bg-background" />
                <Input placeholder="Your Email" type="email" className="bg-background" />
                <Textarea 
                  placeholder="Your Message" 
                  className="bg-background min-h-[120px]"
                />
                <Button className="w-full accent-gradient shadow-accent hover-scale">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;