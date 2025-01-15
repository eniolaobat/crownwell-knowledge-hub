import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ClipboardList, Trophy, BookOpen, Settings } from "lucide-react";

export default function StudyOptions() {
  const navigate = useNavigate();
  
  const options = [
    {
      title: "Practice",
      icon: ClipboardList,
      route: "/quiz",
      description: "Test your knowledge",
      color: "text-[#9b87f5]"
    },
    {
      title: "Mock Exam",
      icon: Trophy,
      route: "/tests",
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
    <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
      {options.map((option) => (
        <Card
          key={option.title}
          className="p-6 text-center hover:bg-gray-50 cursor-pointer transition-all duration-300 border-2 hover:border-[#D6BCFA] hover:shadow-lg"
          onClick={() => navigate(option.route)}
        >
          <div className="flex flex-col items-center gap-3">
            <option.icon className={`h-10 w-10 ${option.color}`} />
            <h3 className="font-semibold text-[#1e293b]">{option.title}</h3>
            <p className="text-sm text-gray-500">
              {option.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}