import { Button } from "@/components/ui/button";
import StudyOptions from "./StudyOptions";

export default function WelcomeHero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 animate-fadeIn">
      <div className="max-w-2xl mx-auto space-y-8 pt-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Hello, 👋
          </h1>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-primary mb-8">
            Let's study!
          </h2>
          <StudyOptions />
        </div>
      </div>
    </div>
  );
}