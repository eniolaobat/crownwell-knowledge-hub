import { Button } from "@/components/ui/button";
import StudyOptions from "./StudyOptions";
import { Lock } from "lucide-react";

export default function WelcomeHero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FF5722] to-white p-4">
      <div className="max-w-2xl mx-auto space-y-8 pt-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            BA Knowledge Hub
          </h1>
          <p className="text-white/90">Your complete Business Analyst test preparation kit</p>
        </div>

        <div className="bg-white rounded-t-3xl px-4 py-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#1e293b] mb-8 text-center">
            Choose your learning path:
          </h2>
          <StudyOptions />
          
          <div className="mt-8 flex justify-center">
            <Button 
              variant="default" 
              className="w-full max-w-md bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-full py-6"
            >
              <Lock className="mr-2 h-5 w-5" />
              Unlock all questions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}