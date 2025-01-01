import { useState } from "react";
import { questions } from "@/data/questions";
import QuizCard from "@/components/QuizCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  BrainCircuit, 
  MessageSquareMore,
  Workflow
} from "lucide-react";

type Category = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  subcategories: {
    title: string;
    topics: string[];
  }[];
};

const categories: Category[] = [
  {
    id: "role-specific",
    title: "Role-Specific Knowledge",
    description: "Core competencies and skills essential for Business Analysts",
    icon: <BrainCircuit className="h-6 w-6" />,
    subcategories: [
      {
        title: "Business Analysis Fundamentals",
        topics: [
          "Key concepts of business analysis",
          "Requirements gathering and documentation",
          "Process modeling and improvement",
          "Stakeholder analysis and management"
        ]
      },
      {
        title: "BA Software and Tools Proficiency",
        topics: [
          "Jira, Confluence, Microsoft Visio, and Balsamiq",
          "Data analysis tools (Excel, SQL, Power BI)",
          "Modeling techniques (UML, BPMN)"
        ]
      }
    ]
  },
  {
    id: "methodologies",
    title: "Methodologies and Frameworks",
    description: "Understanding of methodologies and frameworks for business analysis",
    icon: <Workflow className="h-6 w-6" />,
    subcategories: [
      {
        title: "Agile Methodologies for BAs",
        topics: [
          "Agile principles and practices",
          "Scrum framework and roles",
          "User stories and backlog management"
        ]
      },
      {
        title: "Traditional and Hybrid Frameworks",
        topics: [
          "Waterfall model for requirements documentation",
          "Hybrid approaches combining Agile and Waterfall",
          "Lean and Six Sigma methodologies"
        ]
      }
    ]
  },
  {
    id: "general",
    title: "General Knowledge and Soft Skills",
    description: "Business knowledge and essential soft skills",
    icon: <MessageSquareMore className="h-6 w-6" />,
    subcategories: [
      {
        title: "Business Acumen for BAs",
        topics: [
          "General business principles and financial concepts",
          "Market analysis and strategic planning"
        ]
      },
      {
        title: "Communication and Analytical Skills",
        topics: [
          "Effective communication with stakeholders",
          "Analytical thinking and problem-solving",
          "Presentation and documentation skills"
        ]
      }
    ]
  }
];

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
  };

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      setCorrectAnswers((prev) => prev + 1);
    }
    setTotalAnswered((prev) => prev + 1);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setShowQuiz(true);
  };

  if (!showQuiz) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-primary mb-6">Select a Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card 
                key={category.id}
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleCategorySelect(category.id)}
              >
                <div className="flex items-center gap-4 mb-4">
                  {category.icon}
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <div className="space-y-3">
                  {category.subcategories.map((sub, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-medium text-sm">{sub.title}</h4>
                      <ul className="text-sm text-muted-foreground list-disc pl-4">
                        {sub.topics.map((topic, topicIndex) => (
                          <li key={topicIndex}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center p-4">
      <div className="w-full max-w-2xl mb-8">
        <div className="flex justify-between items-center mb-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-primary">Practice Quiz</h2>
            <p className="text-sm text-muted-foreground">
              {categories.find(c => c.id === selectedCategory)?.title}
            </p>
          </div>
          <div className="text-foreground">
            Score: {correctAnswers}/{totalAnswered}
          </div>
        </div>
        <QuizCard
          question={questions[currentQuestionIndex]}
          onNext={handleNext}
          onAnswer={handleAnswer}
        />
        <Button 
          variant="outline" 
          className="mt-4"
          onClick={() => setShowQuiz(false)}
        >
          Change Category
        </Button>
      </div>
    </div>
  );
}