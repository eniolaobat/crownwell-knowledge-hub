import { Button } from "@/components/ui/button";
import StudyOptions from "./StudyOptions";
import { Lock } from "lucide-react";

export default function WelcomeHero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-background p-4">
      <div className="max-w-2xl mx-auto space-y-8 pt-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Tenet Tech Hub
          </h1>
          <p className="text-white/90">Empowering your tech journey with expert-led learning paths</p>
        </div>

        <div className="bg-card rounded-t-3xl px-4 py-8 mt-8 border border-border/50">
          <h2 className="text-2xl font-semibold text-card-foreground mb-8 text-center">
            Choose your learning path:
          </h2>
          <StudyOptions />
          
          <div className="mt-8 flex justify-center">
            <Button 
              variant="default" 
              className="w-full max-w-md bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6"
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