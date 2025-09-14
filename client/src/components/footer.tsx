import { Button } from "@/components/ui/button";
import { ArrowUp, Download } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © 2024 Alex Johnson. Built with passion and modern web technologies.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="button-back-to-top"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to top
            </Button>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-download-resume"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
