import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Cloud, Database, GitBranch, Code, Cpu, BarChart3, Wrench, Zap } from "lucide-react";

const programmingLanguages = [
  { name: "JavaScript/TypeScript", level: 95 },
  { name: "Python", level: 90 },
  { name: "Java", level: 85 },
  { name: "C++", level: 75 },
  { name: "Go", level: 70 },
];

const frameworks = [
  { name: "React/Next.js", level: 95 },
  { name: "Node.js/Express", level: 90 },
  { name: "Django/FastAPI", level: 85 },
  { name: "React Native", level: 80 },
  { name: "Spring Boot", level: 75 },
];

const tools = [
  { name: "AWS", icon: Cloud },
  { name: "Docker", icon: Code },
  { name: "Git", icon: GitBranch },
  { name: "PostgreSQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "Redis", icon: Cpu },
  { name: "CI/CD", icon: Wrench },
  { name: "Terraform", icon: Zap },
];

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const progressStyles = {
    transition: "width 1.5s ease-in-out",
  };

  return (
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on development experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-center mb-6">Programming Languages</h3>
              <div className="space-y-4">
                {programmingLanguages.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress
                      value={isVisible ? skill.level : 0}
                      className="h-2 bg-white/10"
                      indicatorClassName="bg-primary"
                      style={progressStyles}
                      data-testid={`skill-progress-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Frameworks & Libraries */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-center mb-6">Frameworks & Libraries</h3>
              <div className="space-y-4">
                {frameworks.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress
                      value={isVisible ? skill.level : 0}
                      className="h-2 bg-white/10"
                      indicatorClassName="bg-accent"
                      style={progressStyles}
                      data-testid={`framework-progress-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools & Technologies */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-center mb-6">Tools & Cloud</h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => {
                  const IconComponent = tool.icon;
                  return (
                    <Card
                      key={index}
                      className="bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group"
                      data-testid={`tool-card-${tool.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      <CardContent className="p-4 text-center">
                        <IconComponent className="h-8 w-8 text-primary mb-2 mx-auto transition-transform duration-300 group-hover:scale-110" />
                        <div className="font-medium text-sm">{tool.name}</div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
