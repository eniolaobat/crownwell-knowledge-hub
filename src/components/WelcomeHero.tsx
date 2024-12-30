import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function WelcomeHero() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary to-secondary p-4 animate-fadeIn">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to Crownwell Tech House
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          Your journey to becoming a successful Business Analyst or Project Manager starts here.
        </p>
        <div className="space-y-4">
          <Button
            onClick={() => navigate("/quiz")}
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
          >
            Start Learning
          </Button>
        </div>
      </div>
    </div>
  );
}