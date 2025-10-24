import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function HeroSection() {
  const handleScrollToProjects = () => {
    const target = document.querySelector("#projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToContact = () => {
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Alex Johnson
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about building scalable web applications and solving complex problems with clean, efficient code. Ready to contribute to innovative teams at leading tech companies.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={handleScrollToProjects}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1"
              data-testid="button-view-work"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 animate-bounce-gentle" />
            </Button>
            <Button
              variant="outline"
              onClick={handleScrollToContact}
              className="border border-border text-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-muted/50 hover:-translate-y-1"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://github.com/alexjohnson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-github"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/alexjohnson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-linkedin"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/alexjohnson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="mailto:alex@example.com"
              className="text-2xl text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
