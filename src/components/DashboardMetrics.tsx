import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const mockData = [
  { date: "Mon", score: 65 },
  { date: "Tue", score: 75 },
  { date: "Wed", score: 85 },
  { date: "Thu", score: 80 },
  { date: "Fri", score: 90 },
];

export default function DashboardMetrics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Total Questions</h3>
          <p className="text-3xl font-bold">124</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Correct Answers</h3>
          <p className="text-3xl font-bold text-green-500">98</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Success Rate</h3>
          <p className="text-3xl font-bold text-primary">79%</p>
        </Card>
      </div>
      
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Progress Over Time</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="score"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}