import { Mail, MapPin, ExternalLink, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import orcidLogo from "@/assets/orcid-logo.png";
import githubLogo from "@/assets/github-logo.png";
import googleScholarLogo from "@/assets/google-scholar-logo.png";
import linkedinLogo from "@/assets/linkedin-logo.png";

const academicLinks = [
  { name: "ORCID", url: "https://orcid.org/0000-0003-2679-2440", logo: orcidLogo },
  { name: "GitHub", url: "https://github.com/andresSantos9", logo: githubLogo },
  { name: "Google Scholar", url: "https://scholar.google.es/citations?user=wLFCis0AAAAJ&hl=es&oi=ao", logo: googleScholarLogo },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/andres-santos-torres/", logo: linkedinLogo },
];

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Contact
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-serif font-semibold text-primary mb-6">
                Get in Touch
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:asantos@vicomtech.org"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      asantos@vicomtech.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Office</p>
                    <p className="text-muted-foreground">
                      Vicomtech, Digital Media & Communications
                      <br />
                      Donostia – San Sebastián
                      <br />
                      Basque Country, Spain
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Website</p>
                    <a
                      href="https://andressantos9.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      andressantos9.github.io
                    </a>
                  </div>
                </div>
              </div>

              {/* Academic Links */}
              <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                Profiles
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {academicLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors group"
                  >
                    <img src={link.logo} alt={link.name} className="w-5 h-5 object-contain" />
                    <span className="font-medium text-sm text-foreground">{link.name}</span>
                    <ExternalLink className="h-3 w-3 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold text-primary mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Subject of your message" required className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message..." rows={4} required className="bg-background resize-none" />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
