import { Button } from "./ui/button";
// import {
//   Card,
//   CardAction,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
// import { ViewList } from "./ViewList";
import { Header } from "./Header";
import { ArrowRight, ArrowUpIcon } from "lucide-react";
// import Renderer from "./Renderer";

function Home() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

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
        <div className="h-24"></div>
        <div className="@container flex flex-col gap-4 max-w-400 m-3 px-4 sm:px-6 lg:px-32">
          <h1 className="text-[15cqw] font-stretch-condensed font-bold">
            Nahin Bin Kaysar
          </h1>

          <div className="flex w-full text-sm text-foreground gap-10">
            <div className="flex flex-2">
              I'm currently orchestrating experiences at Hero Digital for a
              leading tech company that rhymes with Snapple, headquartered in
              Cupertino, California.
            </div>
            <div className="flex flex-2">
              I'm a passionate designer with many years of experience who uses
              research, data, and thoughtful design to create delightful
              products that scale.
            </div>
            <div className="flex flex-1 items-end justify-end underline">
              <p>GET IN TOUCH →</p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 py-10">
          <div className="flex-1 bg-foreground h-full border-r-8 rounded-r-full"></div>
          <div className="w-32"></div>
        </div>
      </div>

      <div className="flex flex-col h-svh bg-sky-950">
        <div className="h-24"></div>
        <div className="@container flex flex-col gap-4 max-w-400 m-3 px-4 sm:px-6 lg:px-32">
          <h1 className="text-[8cqw] font-anton">PROJECTS</h1>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full flex-1">
            <Link to={""}>
              <div
                className="h-70 bg-cover bg-center text-background rounded-3xl p-5"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url("")`,
                }}
              >
                <div className="h-full w-full bg-amber-800 rounded-xl"></div>
              </div>
              <div className="flex flex-col w-full text-foreground py-4 gap-2">
                <div className="flex w-full text-4xl text-foreground font-anton">
                  BUET ITE Student Chapter
                </div>
                <div className="flex w-full text-sm text-foreground">
                  I'm currently orchestrating experiences at Hero Digital for a
                  leading tech company that rhymes with Snapple, headquartered
                  in Cupertino, California.
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-svh bg-blue-950">
        <div className="h-24"></div>
        <div className="@container flex flex-col gap-4 max-w-400 m-3 px-4 sm:px-6 lg:px-32">
          <h1 className="text-[8cqw] font-anton">BLOG</h1>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full flex-1">
            <Link to={""}>
              <div
                className="h-64 bg-cover bg-center text-background rounded-3xl p-3 overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url("")`,
                }}
              >
                <div className="h-1/2 w-full bg-amber-800 rounded-xl"></div>
                <div className="flex flex-col w-full text-foreground py-4 gap-2">
                  <div className="flex w-full text-4xl text-foreground font-anton">
                    BUET ITE Student Chapter
                  </div>
                  <div className="w-full text-sm text-muted-foreground line-clamp-3">
                    I'm currently orchestrating experiences at Hero Digital for
                    a leading tech company that rhymes with Snapple,
                    headquartered in Cupertino, California. I'm currently
                    orchestrating experiences at Hero Digital for a leading tech
                    company that rhymes with Snapple, headquartered in
                    Cupertino, California.
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>



      <div className="flex flex-col h-svh bg-blue-950">
        <div className="h-24"></div>
        <div className="@container flex flex-col gap-4 max-w-400 m-3 px-4 sm:px-6 lg:px-32">
          <h1 className="text-[8cqw] font-anton">OLD STUFFS</h1>

          <div className="w-full flex flex-wrap gap-2">
            {oldStuffs.map((item, index) => (
              <a key={index} href={item.link} className="w-fit">
                <div
                  className="bg-cover bg-center text-background rounded-full p-1"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url("")`,
                  }}
                >
                  <div className="h-full w-full bg-amber-800 rounded-full hover:bg-amber-700 transition-colors">
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
