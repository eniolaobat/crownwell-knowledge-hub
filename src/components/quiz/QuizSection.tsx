import { Button } from "@/components/ui/button";
import { Question } from "@/data/questions";
import QuizCard from "@/components/QuizCard";

interface QuizSectionProps {
  selectedCategory: string | null;
  currentQuestionIndex: number;
  questions: Question[];
  correctAnswers: number;
  totalAnswered: number;
  onNext: () => void;
  onAnswer: (correct: boolean) => void;
  onChangeCategory: () => void;
}

export default function QuizSection({
  selectedCategory,
  currentQuestionIndex,
  questions,
  correctAnswers,
  totalAnswered,
  onNext,
  onAnswer,
  onChangeCategory,
}: QuizSectionProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center p-4">
      <div className="w-full max-w-2xl mb-8">
        <div className="flex justify-between items-center mb-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-primary">Practice Quiz</h2>
            <p className="text-sm text-muted-foreground">
              {selectedCategory?.split('-').join(' - ')}
            </p>
          </div>
          <div className="text-foreground">
            Score: {correctAnswers}/{totalAnswered}
          </div>
        </div>
        <QuizCard
          question={questions[currentQuestionIndex]}
          onNext={onNext}
          onAnswer={onAnswer}
        />
        <Button 
          variant="outline" 
          className="mt-4"
          onClick={onChangeCategory}
        >
          Change Category
        </Button>
      </div>
    </div>
  );
}