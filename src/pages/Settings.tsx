import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { User, Bug, Share, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

export default function Settings() {
  const handleDeleteAccount = () => {
    toast.error("This feature will be available soon");
  };

  const handleReportBug = () => {
    toast.success("Thank you for your feedback!");
  };

  const handleReferral = () => {
    toast.success("Referral link copied to clipboard!");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="space-y-4">
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
        </Card>

        <Card className="p-6 space-y-4">
          <Button 
            variant="outline" 
            className="w-full justify-start" 
            onClick={handleReferral}
          >
            <Share className="mr-2" />
            Refer Friends (Get Premium Free)
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full justify-start"
            onClick={handleReportBug}
          >
            <Bug className="mr-2" />
            Report Bug / Suggestions
          </Button>

          <Button 
            variant="destructive" 
            className="w-full justify-start"
            onClick={handleDeleteAccount}
          >
            <User className="mr-2" />
            Delete Account
          </Button>
        </Card>
      </div>
    </div>
  );
}