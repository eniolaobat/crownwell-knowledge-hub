import DashboardMetrics from "@/components/DashboardMetrics";

export default function Dashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <DashboardMetrics />
    </div>
  );
}