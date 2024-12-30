import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Question } from "@/data/questions";
import { toast } from "sonner";

interface QuizCardProps {
  question: Question;
  onNext: () => void;
  onAnswer: (correct: boolean) => void;
}

export default function QuizCard({ question, onNext, onAnswer }: QuizCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
    const isCorrect = index === question.correctAnswer;
    onAnswer(isCorrect);
    
    if (isCorrect) {
      toast.success("Correct answer!");
    } else {
      toast.error("Incorrect answer. Try again!");
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    onNext();
  };

  return (
    <Card className="w-full max-w-2xl p-6 space-y-6 animate-fadeIn">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-foreground/60">
            {question.category} • {question.difficulty}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-primary">{question.question}</h3>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant={
                selectedAnswer === null
                  ? "outline"
                  : index === question.correctAnswer
                  ? "success"
                  : selectedAnswer === index
                  ? "destructive"
                  : "outline"
              }
              className="w-full justify-start text-left h-auto py-4 px-6"
              onClick={() => !showExplanation && handleAnswer(index)}
              disabled={showExplanation}
            >
              {option}
            </Button>
          ))}
        </div>
        {showExplanation && (
          <div className="mt-4 p-4 bg-secondary/10 rounded-lg">
            <p className="text-foreground">{question.explanation}</p>
          </div>
        )}
        {showExplanation && (
          <Button onClick={handleNext} className="w-full mt-4">
            Next Question
          </Button>
        )}
      </div>
    </Card>
  );
}