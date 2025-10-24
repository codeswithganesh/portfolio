import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Trophy, GitBranch, Users } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    provider: "Amazon Web Services",
    year: "2023",
    icon: GraduationCap,
  },
  {
    title: "Google Cloud Professional Developer",
    provider: "Google Cloud",
    year: "2022",
    icon: Award,
  },
  {
    title: "MongoDB Certified Developer",
    provider: "MongoDB Inc.",
    year: "2022",
    icon: GraduationCap,
  },
  {
    title: "Certified Kubernetes Administrator",
    provider: "CNCF",
    year: "2021",
    icon: Award,
  },
];

const achievements = [
  {
    title: "Hackathon Winner",
    description: "TechCrunch Disrupt 2022 - Best AI Application",
    icon: Trophy,
  },
  {
    title: "Open Source Contributor",
    description: "500+ contributions to React, Next.js, and TypeScript",
    icon: GitBranch,
  },
  {
    title: "Tech Community Leader",
    description: "Organizer of Bay Area React Meetup (1000+ members)",
    icon: Users,
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic foundation and continuous learning in technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <GraduationCap className="h-12 w-12 text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6" data-testid="education-bachelor">
                  <h4 className="text-lg font-semibold text-white">Bachelor of Science in Computer Science</h4>
                  <p className="text-primary font-medium">Stanford University</p>
                  <p className="text-muted-foreground text-sm mb-2">2015 - 2019</p>
                  <p className="text-muted-foreground text-sm">GPA: 3.8/4.0 • Magna Cum Laude</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Relevant Coursework: Data Structures, Algorithms, Software Engineering, Database Systems, Machine Learning
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6" data-testid="education-minor">
                  <h4 className="text-lg font-semibold text-white">Minor in Mathematics</h4>
                  <p className="text-accent font-medium">Stanford University</p>
                  <p className="text-muted-foreground text-sm">Focus on Statistics and Linear Algebra</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Award className="h-12 w-12 text-accent mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => {
                  const IconComponent = cert.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-white/5 rounded-lg border border-white/10"
                      data-testid={`certification-${index}`}
                    >
                      <IconComponent className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white">{cert.title}</h4>
                        <p className="text-muted-foreground text-sm">
                          {cert.provider} • {cert.year}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Achievements */}
        <div className="mt-12 bg-white/5 backdrop-blur-sm border-white/10 shadow-lg rounded-xl p-8">
          <h3 className="text-xl font-semibold text-center mb-6">Additional Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} data-testid={`achievement-${index}`}>
                  <IconComponent className="h-8 w-8 text-primary mb-3 mx-auto" />
                  <h4 className="font-semibold text-white mb-2">{achievement.title}</h4>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
