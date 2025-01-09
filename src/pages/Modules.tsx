import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

export default function Modules() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-primary">Learning Modules</h2>
        </div>
        <Card className="p-12 text-center">
          <Clock className="h-16 w-16 mx-auto text-primary mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Coming Soon</h3>
          <p className="text-muted-foreground">
            Our learning modules are currently under development. Check back soon for comprehensive Business Analysis content.
          </p>
        </Card>
      </div>
    </div>
  );
}