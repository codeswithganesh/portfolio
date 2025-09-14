import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to discuss opportunities or collaborate on exciting projects? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center" data-testid="contact-email">
                  <Mail className="h-5 w-5 text-primary mr-4" />
                  <div>
                    <p className="font-medium">alex.johnson@email.com</p>
                    <p className="text-muted-foreground text-sm">Primary email</p>
                  </div>
                </div>
                
                <div className="flex items-center" data-testid="contact-phone">
                  <Phone className="h-5 w-5 text-primary mr-4" />
                  <div>
                    <p className="font-medium">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground text-sm">Available Mon-Fri, 9AM-6PM PST</p>
                  </div>
                </div>
                
                <div className="flex items-center" data-testid="contact-location">
                  <MapPin className="h-5 w-5 text-primary mr-4" />
                  <div>
                    <p className="font-medium">San Francisco, CA</p>
                    <p className="text-muted-foreground text-sm">Open to remote opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Social Links</h3>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/alexjohnson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-border p-3 rounded-lg hover:bg-muted transition-colors"
                  data-testid="social-linkedin"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
                <a
                  href="https://github.com/alexjohnson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-border p-3 rounded-lg hover:bg-muted transition-colors"
                  data-testid="social-github"
                >
                  <Github className="h-5 w-5 text-primary" />
                </a>
                <a
                  href="https://twitter.com/alexjohnson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-border p-3 rounded-lg hover:bg-muted transition-colors"
                  data-testid="social-twitter"
                >
                  <Twitter className="h-5 w-5 text-primary" />
                </a>
                <a
                  href="https://medium.com/@alexjohnson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-border p-3 rounded-lg hover:bg-muted transition-colors"
                  data-testid="social-medium"
                >
                  <MessageSquare className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border border-border">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your full name"
                    required
                    data-testid="input-name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@company.com"
                    required
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </Label>
                  <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                    <SelectTrigger data-testid="select-subject">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="job-opportunity">Job Opportunity</SelectItem>
                      <SelectItem value="collaboration">Collaboration</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  data-testid="button-submit-form"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
