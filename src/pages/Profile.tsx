import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Bell } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Profile() {
  const [reminderEnabled, setReminderEnabled] = useState(false);
  const [reminderTime, setReminderTime] = useState("09:00");
  const { toast } = useToast();

  const handleReminderToggle = (checked: boolean) => {
    setReminderEnabled(checked);
    toast({
      title: checked ? "Reminders enabled" : "Reminders disabled",
      description: checked 
        ? `You will be reminded daily at ${reminderTime}` 
        : "Daily reminders have been turned off",
    });
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReminderTime(e.target.value);
    if (reminderEnabled) {
      toast({
        title: "Reminder time updated",
        description: `Your daily reminder has been set to ${e.target.value}`,
      });
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="space-y-6">
        <Card className="p-6">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Preferred Role</Label>
              <select
                id="role"
                className="w-full p-2 border rounded-md"
                defaultValue="BA"
              >
                <option value="BA">Business Analyst</option>
                <option value="PM">Project Manager</option>
              </select>
            </div>
            <Button type="submit" className="w-full">
              Save Changes
            </Button>
          </form>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Daily Reminders</h2>
            </div>
            <Switch
              checked={reminderEnabled}
              onCheckedChange={handleReminderToggle}
            />
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="reminderTime">Reminder Time</Label>
              <Input
                id="reminderTime"
                type="time"
                value={reminderTime}
                onChange={handleTimeChange}
                disabled={!reminderEnabled}
                className="w-full"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {reminderEnabled
                ? `You will be reminded to study daily at ${reminderTime}`
                : "Enable reminders to get daily notifications to study"}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}