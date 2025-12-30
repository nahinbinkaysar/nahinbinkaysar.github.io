import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";
// import {
//   Menu,
//   ChevronDown,
//   Pen,
//   PlusSquare,
//   User,
//   UserCircle2,
//   LogOut,
//   StickyNote,
// } from "lucide-react";
import { Link } from "react-router-dom";

// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
//   SheetClose,
// } from "@/components/ui/sheet";

// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
// import { ModeToggle } from "./mode-toggle.jsx";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [session, setSession] = useState(null);

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`w-full h-24 flex items-center fixed top-0 z-40 justify-center transition-all duration-300 backdrop-blur-xs ${
          scrolled ? "bg-background/90" : "bg-background/70"
        }`}
      >
        {/* Desktop header */}
        <div className="hidden md:flex md:justify-between w-full px-32">
          {/* Logo left */}
          <div className="flex m-3 gap-2">
            <a href="/">
              <div>nahin</div>
            </a>
          </div>

          {/* Social right */}
          <div className="flex items-center m-3 gap-8 ">
            <div>Work</div>
            <div>About</div>
            <div>Blog</div>
            <div>Contact</div>


            {/* <ModeToggle /> */}
          </div>
        </div>

        {/* Mobile header */}
        <div className="md:hidden flex w-full">
          {/* Logo left */}
          <div className="flex fixed left-0 m-3 gap-2">
            <a href="/">
              <img
                className="w-auto h-18"
                src="https://zrlccixefhitycbtdnab.supabase.co/storage/v1/object/public/images/ite-logo-buet.svg"
                alt="ITE BUET logo"
              />
            </a>
          </div>

          {/* Hamburger right */}
          <div className="flex items-center fixed right-0 m-3 gap-2">
            {/* <MobileNav /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export { Header };