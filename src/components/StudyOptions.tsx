import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ClipboardList, Trophy, BookOpen, Settings } from "lucide-react";

export default function StudyOptions() {
  const navigate = useNavigate();

  const options = [
    {
      title: "Practice Questions",
      icon: ClipboardList,
      route: "/quiz",
      description: "Test your knowledge",
      color: "text-[#9b87f5]"
    },
    {
      title: "Mock Exam",
      icon: Trophy,
      route: "/quiz",  // Changed from /tests to /quiz since /tests route wasn't defined
      description: "Take timed exams",
      color: "text-[#9b87f5]"
    },
    {
      title: "Modules",
      icon: BookOpen,
      route: "/modules",
      description: "Learn key concepts",
      color: "text-[#9b87f5]"
    },
    {
      title: "Settings",
      icon: Settings,
      route: "/settings",
      description: "Customize your experience",
      color: "text-[#9b87f5]"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {options.map((option) => (
        <Card
          key={option.title}
          className="p-6 text-center hover:bg-gray-50 cursor-pointer transition-all duration-300 border-2 hover:border-[#D6BCFA] hover:shadow-lg"
          onClick={() => navigate(option.route)}
        >
          <div className="flex flex-col items-center gap-3">
            <option.icon className={`h-12 w-12 ${option.color}`} />
            <h3 className="font-semibold text-lg">{option.title}</h3>
            <p className="text-muted-foreground">{option.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}