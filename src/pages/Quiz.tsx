import { useState } from "react";
import { questions } from "@/data/questions";
import { BookOpen, BrainCircuit, MessageSquareMore, Workflow, Award } from "lucide-react";
import CategoryList from "@/components/quiz/CategoryList";
import QuizSection from "@/components/quiz/QuizSection";
import { Category } from "@/components/quiz/types";

const categories: Category[] = [
  {
    id: "bcs-foundation",
    title: "BCS Foundation Certification",
    description: "Official preparation for the BCS Foundation Certificate in Business Analysis",
    icon: <Award className="h-6 w-6 text-primary" />,
    subcategories: [
      {
        title: "BCS Foundation Practice Questions",
        topics: [
          "Business Analysis Planning",
          "Investigation Techniques",
          "Stakeholder Analysis",
          "Business Process Modeling",
          "Requirements Engineering"
        ],
        questionCount: 1000,
        progress: 0
      }
    ]
  },
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
        <CategoryList
          categories={categories}
          onCategorySelect={handleCategorySelect}
          correctAnswers={correctAnswers}
          totalAnswered={totalAnswered}
        />
      </div>
    );
  }

  return (
    <QuizSection
      selectedCategory={selectedCategory}
      currentQuestionIndex={currentQuestionIndex}
      questions={questions}
      correctAnswers={correctAnswers}
      totalAnswered={totalAnswered}
      onNext={handleNext}
      onAnswer={handleAnswer}
      onChangeCategory={() => setShowQuiz(false)}
    />
  );
}
