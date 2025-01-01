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
    questionCount: number;
    progress: number;
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
        ],
        questionCount: 27,
        progress: 0
      },
      {
        title: "BA Software and Tools Proficiency",
        topics: [
          "Jira, Confluence, Microsoft Visio, and Balsamiq",
          "Data analysis tools (Excel, SQL, Power BI)",
          "Modeling techniques (UML, BPMN)"
        ],
        questionCount: 26,
        progress: 0
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
        ],
        questionCount: 39,
        progress: 0
      },
      {
        title: "Traditional and Hybrid Frameworks",
        topics: [
          "Waterfall model for requirements documentation",
          "Hybrid approaches combining Agile and Waterfall",
          "Lean and Six Sigma methodologies"
        ],
        questionCount: 34,
        progress: 0
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
        ],
        questionCount: 22,
        progress: 0
      },
      {
        title: "Communication and Analytical Skills",
        topics: [
          "Effective communication with stakeholders",
          "Analytical thinking and problem-solving",
          "Presentation and documentation skills"
        ],
        questionCount: 45,
        progress: 0
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
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-primary">Practice Topics</h2>
            <div className="text-sm text-muted-foreground">
              Overall Progress: {Math.round((correctAnswers / Math.max(totalAnswered, 1)) * 100)}%
            </div>
          </div>
          <div className="space-y-3">
            {categories.flatMap(category => 
              category.subcategories.map((subcategory, index) => (
                <Card 
                  key={`${category.id}-${index}`}
                  className="p-4 hover:bg-accent/5 transition-colors cursor-pointer"
                  onClick={() => handleCategorySelect(`${category.id}-${index}`)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {category.icon}
                      <div>
                        <h3 className="font-medium">{subcategory.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          0/{subcategory.questionCount} Questions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 rounded-full border-4 border-muted flex items-center justify-center">
                        <span className="text-sm font-medium">{subcategory.progress}%</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            )}
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
              {selectedCategory?.split('-').map(part => 
                categories.find(c => c.id === part)?.title
              ).join(' - ')}
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