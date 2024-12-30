import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Profile() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
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
    </div>
  );
}