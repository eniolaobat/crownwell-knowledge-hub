import { Card } from "@/components/ui/card";
import { BookOpen, Code, Database, Network } from "lucide-react";

export default function Modules() {
  const modules = [
    {
      title: "Frontend Development",
      icon: Code,
      description: "Learn HTML, CSS, JavaScript and modern frameworks",
      progress: 0
    },
    {
      title: "Backend Development",
      icon: Database,
      description: "Master server-side programming and databases",
      progress: 0
    },
    {
      title: "DevOps & Cloud",
      icon: Network,
      description: "Explore deployment, CI/CD, and cloud services",
      progress: 0
    },
    {
      title: "Software Architecture",
      icon: BookOpen,
      description: "Study design patterns and system architecture",
      progress: 0
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-primary">Learning Modules</h2>
          <div className="text-sm text-muted-foreground">
            Overall Progress: 0%
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modules.map((module, index) => (
            <Card 
              key={index}
              className="p-6 hover:bg-accent/5 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <module.icon className="h-8 w-8 text-primary" />
                <div className="flex-1">
                  <h3 className="font-medium">{module.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {module.description}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-muted flex items-center justify-center">
                  <span className="text-sm font-medium">{module.progress}%</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}