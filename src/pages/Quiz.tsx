import { useState } from "react";
import { questions } from "@/data/questions";
import QuizCard from "@/components/QuizCard";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
  };

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      setCorrectAnswers((prev) => prev + 1);
    }
    setTotalAnswered((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center p-4">
      <div className="w-full max-w-2xl mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary">Practice Quiz</h2>
          <div className="text-foreground">
            Score: {correctAnswers}/{totalAnswered}
          </div>
        </div>
        <QuizCard
          question={questions[currentQuestionIndex]}
          onNext={handleNext}
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  );
}