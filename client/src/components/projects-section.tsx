import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "EcoStore - Sustainable E-commerce",
    description: "Full-stack e-commerce platform focused on sustainable products. Features include real-time inventory management, AI-powered recommendations, and integrated payment processing with Stripe.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    github: "https://github.com/alexjohnson/ecostore",
    demo: "https://ecostore-demo.vercel.app",
  },
  {
    title: "TaskFlow - Project Management",
    description: "Real-time collaborative project management tool with live updates, file sharing, and team communication. Built with WebSocket technology for seamless real-time experiences.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Next.js", "TypeScript", "Socket.io", "MongoDB"],
    github: "https://github.com/alexjohnson/taskflow",
    demo: "https://taskflow-demo.netlify.app",
  },
  {
    title: "DataViz Pro - Analytics Platform",
    description: "Comprehensive analytics dashboard with machine learning insights, interactive visualizations, and automated reporting. Processes over 1M data points daily with sub-second query performance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "Django", "D3.js", "Redis"],
    github: "https://github.com/alexjohnson/dataviz-pro",
    demo: "https://dataviz-pro.herokuapp.com",
  },
  {
    title: "ConnectHub - Social Network",
    description: "Mobile-first social networking platform with advanced privacy controls, content moderation AI, and real-time messaging. Optimized for performance with lazy loading and image compression.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React Native", "Express.js", "GraphQL", "Firebase"],
    github: "https://github.com/alexjohnson/connecthub",
    demo: "https://connecthub-app.expo.dev",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of my recent work showcasing different technologies and problem-solving approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card bg-card rounded-xl border border-border shadow-sm hover:shadow-lg"
              data-testid={`project-card-${index}`}
            >
              <CardContent className="p-6">
                <div className="relative mb-6 rounded-lg overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={`${project.title} interface`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant={techIndex % 2 === 0 ? "default" : "secondary"}
                      className={techIndex % 2 === 0 ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`project-github-${index}`}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`project-demo-${index}`}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            asChild
            className="border border-border hover:bg-muted"
            data-testid="button-view-all-projects"
          >
            <a href="https://github.com/alexjohnson" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
