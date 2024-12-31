import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { PencilRuler, Trophy, BookOpen, Settings } from "lucide-react";

export default function StudyOptions() {
  const navigate = useNavigate();
  
  const options = [
    {
      title: "Practice",
      icon: PencilRuler,
      route: "/quiz",
      description: "Test your knowledge"
    },
    {
      title: "Tests",
      icon: Trophy,
      route: "/tests",
      description: "Take timed exams"
    },
    {
      title: "Modules",
      icon: BookOpen,
      route: "/modules",
      description: "Learn key concepts"
    },
    {
      title: "Settings",
      icon: Settings,
      route: "/settings",
      description: "Customize your experience"
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
      {options.map((option) => (
        <Card
          key={option.title}
          className="p-6 text-center hover:bg-accent cursor-pointer transition-colors"
          onClick={() => navigate(option.route)}
        >
          <div className="flex flex-col items-center gap-2">
            <option.icon className="h-8 w-8 text-primary" />
            <h3 className="font-semibold">{option.title}</h3>
            <p className="text-sm text-muted-foreground">
              {option.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}