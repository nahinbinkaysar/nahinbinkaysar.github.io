import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Blog } from "./Blog";
import { Work } from "./Work";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa"
import { SiCodeforces } from "react-icons/si"
import { ArrowRight, ArrowUpRight } from "lucide-react";

function Home() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

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

  const oldStuffs = [
    { title: "Datatype", link: "datatype.html" },
    { title: "Group 8 Book", link: "group_8.html" },
    { title: "Links", link: "links.html" },
    { title: "Recursion Tree Visualizer", link: "https://recursion.vercel.app/" },
    { title: "A2 Ladder", link: "https://earthshakira.github.io/a2oj-clientside/server/Ladders.html" },
    { title: "Softwares", link: "softwares.html" },
    { title: "Real Reason for A==65 and a==97", link: "realReasonForASCII.html" },
    { title: "Customize your Udvash Unmesh Exam Page!", link: "customUdvPage.html" },
    { title: "Join two videos with VLC", link: "vlcJoinVid.html" },
    { title: "OneNote Colors", link: "1noteColors.html" },
    { title: "Toggle between two fonts in Word", link: "msWordFontToggle.html" },
    { title: "Merge and Center in Excel", link: "msExcelMergeToggle.html" },
    { title: "LoopTube", link: "looptube.html" },
  ];

  return (
    <div className="min-h-svh flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="flex flex-col h-svh">
        <div className="h-16 md:h-24 shrink-0"></div>

        <div className="@container flex flex-col gap-6 max-w-400 m-4 sm:px-6 lg:px-32">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground uppercase tracking-widest">
              {/* Civil Engineering Student & Developer */}
            </p>
            <h1 className="text-[15cqw] font-anton leading-[0.9]">
              Nahin Bin Kaysar
            </h1>
          </div>

          <div className="flex flex-col md:flex-row w-full text-sm text-foreground gap-8 md:gap-16 mt-4">
            <div className="flex-1">
              <p className="text-lg leading-relaxed">
                Building practical software tools that solve real workflow problems.
              </p>
            </div>
            <div className="flex-1">
              <p className="text-muted-foreground leading-relaxed">
                Currently completing my final year at BUET. I prefer native, low-level
                solutions where performance and simplicity matter.
              </p>
            </div>

            {/* Desktop: Hover Card */}
            <div className="hidden md:flex flex-1 items-start justify-end">
              <HoverCard>
                <HoverCardTrigger className="cursor-pointer group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  Get in touch
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </HoverCardTrigger>
                <HoverCardContent className="w-fit">
                  <div className="flex gap-4">
                    <a href="https://github.com/nahinbinkaysar" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-secondary rounded-lg transition-colors">
                      <FaGithub size={20} />
                    </a>
                    <a href="https://linkedin.com/in/nahinbinkaysar" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-secondary rounded-lg transition-colors">
                      <FaLinkedin size={20} />
                    </a>
                    <a href="https://facebook.com/nahin.binkaysar.7" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-secondary rounded-lg transition-colors">
                      <FaFacebook size={20} />
                    </a>
                    <a href="https://codeforces.com/profile/nahin.binkaysar" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-secondary rounded-lg transition-colors">
                      <SiCodeforces size={20} />
                    </a>
                    <a href="mailto:nahinbinkaysar@gmail.com" className="p-2 hover:bg-secondary rounded-lg transition-colors">
                      <FaEnvelope size={20} />
                    </a>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          {/* Mobile: Social Icons */}
          <div className="flex md:hidden gap-3">
            <a href="https://github.com/nahinbinkaysar" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-xl hover:bg-accent transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/nahinbinkaysar" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-xl hover:bg-accent transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://facebook.com/nahin.binkaysar.7" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-xl hover:bg-accent transition-colors">
              <FaFacebook size={20} />
            </a>
            <a href="https://codeforces.com/profile/nahinbinkaysar" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-xl hover:bg-accent transition-colors">
              <SiCodeforces size={20} />
            </a>
            <a href="mailto:nahinbinkaysar@gmail.com" className="p-3 bg-secondary rounded-xl hover:bg-accent transition-colors">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Decorative Element with Photo */}




        <div className={`flex flex-1 min-h-0 py-2 md:py-4 mb-20 md:mb-0`}
        >
          <div className="relative bg-foreground h-full w-full rounded-r-full mr-4 sm:mr-6 lg:mr-32 overflow-hidden">
            {/* Grid Pattern Background */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(to right, currentColor 1px, transparent 1px),
                  linear-gradient(to bottom, currentColor 1px, transparent 1px)
                `,
                backgroundSize: '24px 24px'
              }}
            />

            {/* Centered Photo */}
            <div className="relative h-full w-full flex items-center justify-center">
              <img
                src="dp_new.png"
                alt="Nahin Bin Kaysar"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Projects Preview */}
      <div className="flex flex-col bg-card py-16 md:py-24">
        <div className="@container flex flex-col gap-8 max-w-400 m-4 sm:px-6 lg:px-32">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">Featured</p>
              <h2 className="text-[12cqw] md:text-[6cqw] font-anton leading-tight">Projects</h2>
            </div>
            <Link
              to="/work"
              className="group hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors pb-2"
            >
              View all
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <Work amount={3} onHome={true} />

          <Link
            to="/work"
            className="md:hidden flex items-center justify-center gap-2 w-full py-4 bg-secondary rounded-2xl text-foreground hover:bg-accent transition-colors"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Blog Preview */}
      <div className="py-16 md:py-24">
        <Blog amount={3} onHome={true} />
      </div>

      {/* Old Stuffs */}
      <div className="flex flex-col bg-secondary/30 py-16 md:py-24">
        <div className="@container flex flex-col gap-8 max-w-400 m-4 sm:px-6 lg:px-32">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">Archive</p>
            <h2 className="text-[12cqw] md:text-[6cqw] font-anton leading-tight">Old Stuffs</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {oldStuffs.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="group px-4 py-2 bg-background rounded-full border border-border hover:border-foreground/20 hover:bg-secondary transition-all duration-200"
              >
                <span className="text-sm text-foreground whitespace-nowrap">
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Mobile Nav Spacer */}
      <div className="h-20 md:h-0"></div>
    </div >
  );
}

export { Home };
