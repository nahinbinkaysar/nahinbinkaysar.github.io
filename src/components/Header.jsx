import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle.jsx";
import { Home, Briefcase, User, BookOpen, Mail } from "lucide-react";

function Header() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current || currentScrollY < 20) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/work", label: "Work", icon: Briefcase },
    { path: "/about", label: "About", icon: User },
    { path: "/blog", label: "Blog", icon: BookOpen },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      {/* Desktop Header - Top */}
      <div
        className={`w-full -translate-y-full flex items-center fixed top-0 z-40 justify-center transition-all duration-300 ease-in-out backdrop-blur-md bg-background/80 border-b border-border/50 overflow-hidden ${visible ? "md:translate-y-0" : "md:-translate-y-full"}`}
      >
        <div className="font-sofia-pro h-24 flex justify-between max-w-400 w-full px-6 lg:px-32 transition-all duration-300">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-lg font-semibold hover:text-primary transition-colors">
              nahin
            </Link>
          </div>

          <div className="flex items-center gap-8">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-foreground transition-colors ${isActive(link.path) ? "text-foreground font-medium" : "text-muted-foreground"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <ModeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Header - Bottom Navigation Bar */}
      <div
        className={`w-full flex items-center fixed bottom-0 z-40 justify-center overflow-hidden transition-all duration-300 md:translate-y-full ${visible ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="flex items-center justify-around p-2 mx-4 mb-2 bg-card backdrop-blur-md rounded-4xl border border-border/50 shadow-lg
        w-full max-w-md transition-all duration-300">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex flex-col flex-1 items-center justify-center p-2 rounded-2xl transition-all duration-200 ${isActive(link.path)
                  ? "text-foreground bg-accent scale-105"
                  : "text-muted-foreground hover:text-foreground hover:scale-105"
                  }`}
              >
                <Icon size={20} />
                <span className="text-[10px] mt-1">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export { Header };
