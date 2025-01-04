import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export default function DashboardMetrics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Current Streak</h3>
          </div>
          <p className="text-3xl font-bold mt-2">5 days</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Success Rate</h3>
          <p className="text-3xl font-bold text-primary">79%</p>
        </Card>
      </div>
    </div>
  );
}