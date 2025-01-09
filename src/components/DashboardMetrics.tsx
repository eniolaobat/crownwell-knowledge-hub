import { Card } from "@/components/ui/card";
import { Trophy, Brain, Target } from "lucide-react";

export default function DashboardMetrics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Current Streak</h3>
          </div>
          <p className="text-3xl font-bold mt-2">5 days</p>
          <p className="text-sm text-muted-foreground mt-1">Keep it going!</p>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Modules Completed</h3>
          </div>
          <p className="text-3xl font-bold mt-2">2/8</p>
          <p className="text-sm text-muted-foreground mt-1">Making progress</p>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Quiz Score</h3>
          </div>
          <p className="text-3xl font-bold mt-2">85%</p>
          <p className="text-sm text-muted-foreground mt-1">Average performance</p>
        </Card>
      </div>
    </div>
  );
}