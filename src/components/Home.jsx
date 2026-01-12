import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Blog } from "./Blog";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa"
import { SiCodeforces } from "react-icons/si"

function Home() {
  const oldStuffs = [
    { title: "Datatype", link: "datatype.html" },
    { title: "Group 8 Book", link: "group_8.html" },
    { title: "Links", link: "links.html" },
    {
      title: "Recusrion Tree Visualizer",
      link: "https://recursion.vercel.app/",
    },
    {
      title: "A2 Ladder",
      link: "https://earthshakira.github.io/a2oj-clientside/server/Ladders.html",
    },
    { title: "Softwares", link: "softwares.html" },
    {
      title: "Real Reason for A==65 and a==97",
      link: "realReasonForASCII.html",
    },
    {
      title: "Customize your Udvash Unmesh Exam Page!",
      link: "customUdvPage.html",
    },
    { title: "Join two videos with VLC", link: "vlcJoinVid.html" },
    { title: "OneNote Colors", link: "1noteColors.html" },
    {
      title: "Toggle between two fonts in Word",
      link: "msWordFontToggle.html",
    },
    { title: "Merge and Center in Excel", link: "msExcelMergeToggle.html" },
    { title: "LoopTube", link: "looptube.html" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-svh flex flex-col justify-between">
      <Header />

      <div className="flex flex-col h-svh">
        <div className="h-24 transition-all duration-300"></div>
        <div className="@container flex flex-col gap-4 max-w-400 m-3 px-4 sm:px-6 lg:px-32 transition-all duration-300">
          <h1 className="text-[15cqw] font-anton">
            Nahin Bin Kaysar
          </h1>

          <div className="flex flex-col md:flex-row w-full text-sm text-foreground gap-10 transition-all duration-300">
            <div className="flex flex-2">
              I am currently completing my last year as an undergraduate student at BUET.
              Very soon my game with forces and moments will come to an end.
            </div>
            <div className="flex flex-2">
              I love to build stuffs. Right now my tools of choice are React.js, shadcn, FastAPI and supabase.
              I also do contests on Codeforces.
            </div>
            <div className="hidden md:flex flex-1 items-end justify-end underline">
              <HoverCard>
                <HoverCardTrigger className="cursor-pointer">GET IN TOUCH →</HoverCardTrigger>
                <HoverCardContent className="w-fit">
                  <div className="flex gap-4">
                    <a href="https://github.com/nahinbinkaysar" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <FaGithub size={24} />
                    </a>
                    <a href="https://linkedin.com/in/nahinbinkaysar" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <FaLinkedin size={24} />
                    </a>
                    <a href="https://facebook.com/nahin.binkaysar.7" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <FaFacebook size={24} />
                    </a>
                    <a href="https://codeforces.com/profile/nahinbinkaysar" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <SiCodeforces size={24} />
                    </a>
                    <a href="mailto:nahinbinkaysar@gmail.com" className="hover:text-primary transition-colors">
                      <FaEnvelope size={24} />
                    </a>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>

            <div className="md:hidden flex-1 items-end justify-end underline">
              <div className="flex gap-4">
                <a href="https://github.com/nahinbinkaysar" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <FaGithub size={24} />
                </a>
                <a href="https://linkedin.com/in/nahinbinkaysar" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://facebook.com/nahin.binkaysar.7" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <FaFacebook size={24} />
                </a>
                <a href="https://codeforces.com/profile/nahinbinkaysar" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <SiCodeforces size={24} />
                </a>
                <a href="mailto:nahinbinkaysar@gmail.com" className="hover:text-primary transition-colors">
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 py-10">
          <div className="flex-1 bg-foreground h-full border-r-8 rounded-r-full mr-4 sm:mr-6 lg:mr-32 transition-all duration-300"></div>
        </div>
      </div>

      <div className="flex flex-col bg-card py-10">
        <div className="@container flex flex-col gap-4 max-w-400 m-3 px-4 sm:px-6 lg:px-32">
          <h1 className="text-[8cqw] font-anton">PROJECTS</h1>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full flex-1">
            <Link to={""}>
              <div
                className="h-70 bg-cover bg-center bg-secondary text-background rounded-3xl p-3"
              >
                <div className="h-full w-full bg-background rounded-xl overflow-hidden">
                  <img className="object-cover w-auto"
                    src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t51.82787-15/590432636_18423180778116633_543388014050906595_n.webp?stp=dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFodN27haEiba1s_DfPkVotCnBee7AXMXcKcF57sBcxdzKtzrHGAZGGODxnQchLxr6aopW9-ejDFVRpW4ilxxIx&_nc_ohc=pWCaLRBkVKAQ7kNvwEK2_8v&_nc_oc=AdlHgQ4hPb5iM22b_40KAU5t8ZqrfxH0C0j0LWfNefupLEAZCXKdiDfgf8OsrSazm2I&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=nJKwKis3nzfyNHeTOrUbKA&oh=00_AflQhcdZclcz9tTL3nYomOWv_1t7WUS5w_h11Z1Tpe-1bg&oe=695B5676"></img>
                </div>
              </div>
              <div className="flex flex-col w-full text-foreground py-4 gap-2">
                <div className="flex w-full text-3xl text-foreground font-anton">
                  BUET ITE Student Chapter
                </div>
                <div className="flex w-full text-sm text-muted-foreground">
                  A website built with React.js, shadcn and Supabase for the student chapter of BUET ITE.
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-10">
        <Blog amount={3} onHome={true} />
      </div>


      <div className="flex flex-col bg-muted py-10">
        <div className="@container flex flex-col gap-4 max-w-400 m-3 px-4 sm:px-6 lg:px-32">
          <h1 className="text-[8cqw] font-anton">OLD STUFFS</h1>

          <div className="w-full flex flex-wrap gap-2">
            {oldStuffs.map((item, index) => (
              <a key={index} href={item.link} className="w-fit">
                <div
                  className="bg-cover bg-center text-background rounded-full p-1 bg-background"
                >
                  <div className="h-full w-full bg-secondary rounded-full hover:bg-accent transition-colors">
                    <div className="w-full text-sm text-foreground p-3 whitespace-nowrap">
                      {item.title}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
}

export { Home };
