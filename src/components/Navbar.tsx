import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Home, Users, Briefcase, Newspaper, HelpCircle } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { path: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { path: "/about", label: "About Us", icon: <Users className="w-4 h-4" /> },
    { path: "/careers", label: "Careers", icon: <Briefcase className="w-4 h-4" /> },
    { path: "/press", label: "Press and News", icon: <Newspaper className="w-4 h-4" /> },
    { path: "/faqs", label: "FAQs", icon: <HelpCircle className="w-4 h-4" /> },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-[#1A1F2C]" onClick={handleNavClick}>
            Bodyshop
          </Link>
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={isActive(item.path) ? "default" : "ghost"}
                className={`flex items-center gap-2 ${
                  isActive(item.path)
                    ? "bg-[#1A1F2C] text-white"
                    : "text-gray-600 hover:text-[#1A1F2C]"
                }`}
                asChild
              >
                <Link to={item.path} onClick={handleNavClick}>
                  {item.icon}
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;