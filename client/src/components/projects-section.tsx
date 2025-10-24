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
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A collection of my recent work showcasing different technologies and problem-solving approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-cyan-500/20 hover:border-cyan-500/50 hover:-translate-y-2 transform-gpu [transform-style:preserve-3d] [transform:translateZ(0)]"
              data-testid={`project-card-${index}`}
            >
              <div className="relative overflow-hidden group h-56">
                <img
                  src={project.image}
                  alt={`${project.title} interface`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-cyan-400 border-cyan-400/30 bg-cyan-400/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <Button asChild variant="outline" className="border-border hover:bg-muted/50">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                      data-testid={`project-github-${index}`}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button asChild className="bg-primary text-primary-foreground shadow-lg shadow-cyan-500/30 hover:bg-cyan-400/90 hover:shadow-xl hover:shadow-cyan-500/40">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                      data-testid={`project-demo-${index}`}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="bg-transparent border-2 border-primary text-primary font-bold transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-1"
            data-testid="button-view-all-projects"
          >
            <a href="https://github.com/alexjohnson" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-3" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
