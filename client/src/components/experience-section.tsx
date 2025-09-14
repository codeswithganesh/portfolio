import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2021 - Present",
    achievements: [
      "Led development of microservices architecture serving 2M+ users, reducing API response time by 40%",
      "Mentored 5 junior developers and established code review practices that improved team productivity by 25%",
      "Implemented CI/CD pipelines with Docker and AWS, reducing deployment time from 2 hours to 15 minutes",
    ],
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
    color: "primary",
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2019 - 2021",
    achievements: [
      "Built and launched 3 major product features from conception to production in an agile environment",
      "Optimized database queries and implemented caching strategies, improving app performance by 60%",
      "Collaborated with design team to create responsive, accessible user interfaces used by 500K+ users",
    ],
    technologies: ["Vue.js", "Python", "Django", "MongoDB", "Redis"],
    color: "accent",
  },
  {
    title: "Software Developer Intern",
    company: "BigTech Inc.",
    period: "Summer 2019",
    achievements: [
      "Developed internal tools for data analysis that reduced manual work by 80% for analytics team",
      "Contributed to open-source projects and documentation, gaining experience with large codebases",
      "Participated in code reviews and learned industry best practices for software development",
    ],
    technologies: ["JavaScript", "Python", "SQL", "Git"],
    color: "secondary",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Journey through impactful roles at innovative companies
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative flex items-start">
                <div
                  className={`absolute left-6 w-4 h-4 bg-${experience.color} rounded-full border-4 border-background`}
                ></div>
                <Card
                  className="ml-20 bg-card border border-border hover:shadow-lg transition-shadow w-full"
                  data-testid={`experience-card-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{experience.title}</h3>
                        <p className={`text-${experience.color} font-medium`}>{experience.company}</p>
                      </div>
                      <span className="text-muted-foreground text-sm">{experience.period}</span>
                    </div>
                    
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <ChevronRight className={`h-3 w-3 text-${experience.color} mr-3 mt-1 flex-shrink-0`} />
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className={`text-xs ${
                            techIndex % 2 === 0 ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                          }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
