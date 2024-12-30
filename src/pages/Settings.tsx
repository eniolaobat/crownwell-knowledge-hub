import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function Settings() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <Card className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="notifications">Push Notifications</Label>
            <p className="text-sm text-muted-foreground">
              Receive notifications about your progress
            </p>
          </div>
          <Switch id="notifications" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="theme">Dark Mode</Label>
            <p className="text-sm text-muted-foreground">
              Switch between light and dark theme
            </p>
          </div>
          <Switch id="theme" />
        </div>
        <Button variant="destructive" className="w-full">
          Log Out
        </Button>
      </Card>
    </div>
  );
}