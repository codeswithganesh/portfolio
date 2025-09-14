import { Check, User } from "lucide-react";

export default function AboutSection() {
  const strengths = [
    "System Design & Architecture",
    "Performance Optimization",
    "Cross-functional Collaboration",
    "Agile Development Practices",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dedicated full-stack developer with a passion for creating impactful digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Background</h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 4 years of experience in full-stack development, I've worked on diverse projects ranging from e-commerce platforms to real-time collaboration tools. My journey began with a Computer Science degree from Stanford University, where I discovered my passion for creating software that makes a difference.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Core Strengths</h3>
              <ul className="space-y-2 text-muted-foreground">
                {strengths.map((strength, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-3" />
                    {strength}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Career Goals</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm seeking opportunities at innovative tech companies where I can contribute to products that scale to millions of users. My goal is to work on challenging problems in areas like distributed systems, machine learning integration, and user experience optimization.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <User className="h-24 w-24" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card border-4 border-background rounded-xl p-4">
                <User className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
