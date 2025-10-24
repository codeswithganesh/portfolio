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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Alex Johnson
          </h1>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground">
            Full Stack Developer & Cloud Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about building scalable web applications and solving complex problems with clean, efficient code. Ready to contribute to innovative teams at leading tech companies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={handleScrollToProjects}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1"
              data-testid="button-view-work"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 animate-bounce-gentle" />
            </Button>
            <Button
              variant="outline"
              onClick={handleScrollToContact}
              className="border-border text-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-muted hover:-translate-y-1"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 pt-6">
            <a
              href="https://github.com/alexjohnson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-transform duration-300 hover:scale-125"
              data-testid="link-github"
            >
              <Github className="h-7 w-7" />
            </a>
            <a
              href="https://linkedin.com/in/alexjohnson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-transform duration-300 hover:scale-125"
              data-testid="link-linkedin"
            >
              <Linkedin className="h-7 w-7" />
            </a>
            <a
              href="https://twitter.com/alexjohnson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-transform duration-300 hover:scale-125"
              data-testid="link-twitter"
            >
              <Twitter className="h-7 w-7" />
            </a>
            <a
              href="mailto:alex@example.com"
              className="text-muted-foreground hover:text-primary transition-transform duration-300 hover:scale-125"
              data-testid="link-email"
            >
              <Mail className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
