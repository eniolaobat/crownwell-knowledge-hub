import { Home, BookOpen, PencilRuler, Trophy, Layout, User, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  
  const links = [
    { to: "/", label: "Home", icon: Home },
    { to: "/dashboard", label: "Dashboard", icon: Layout },
    { to: "/quiz", label: "Practice", icon: PencilRuler },
    { to: "/modules", label: "Modules", icon: BookOpen },
    { to: "/profile", label: "Profile", icon: User },
    { to: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t md:relative md:border-r md:h-screen md:w-64">
      <div className="flex md:flex-col justify-around md:justify-start p-4 gap-4">
        {links.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center gap-2 p-2 rounded-lg transition-colors
              ${location.pathname === to 
                ? "bg-primary text-primary-foreground" 
                : "hover:bg-secondary/10"}`}
          >
            <Icon className="h-5 w-5" />
            <span className="hidden md:inline">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}