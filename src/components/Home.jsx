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
// import Renderer from "./Renderer";

function Home() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-svh flex flex-col justify-between mt-24">
      <Header />

      <div className="flex flex-col gap-4 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-32 py-10">
        <h1 className="scroll-m-20 text-9xl font-stretch-condensed font-bold tracking-tight text-balance">
					Nahin Bin Kaysar
        </h1>


        <p className="text-sm text-muted-foreground">
          The ITE BUET Student Chapter operates under the Institute of
          Transportation Engineers global network. We work to:
        </p>

        <ul className="list-disc ml-5 text-sm space-y-1">
          <li>Promote transportation engineering knowledge</li>
          <li>Conduct seminars, workshops, and technical sessions</li>
          <li>Develop leadership and professional skills</li>
          <li>Enable collaboration with global transportation experts</li>
        </ul>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight text-balance">
          Past Events
        </h1>
        <div className="space-y-4">
          <div
            className="p-4 border rounded-lg cursor-pointer"
            onClick={() => {
              navigate("/article/43");
            }}
          >
            <div className="font-medium">
              Engineering Intelligence: AI’s Role in Next-Gen Transportation
            </div>
            <div className="text-sm text-muted-foreground">
              A deep dive into how AI, computer vision, and data-driven tools
              are transforming the transportation industry.
            </div>
            <div className="text-sm mt-2">
              Presenter: Shofiq Ahmed, PE, PTOE, RSP1, Executive Vice President
              | Peggy Malone & Associates | Maryland, USA
            </div>
            <div className="text-sm">Date: 3 December 2025</div>
            <div className="text-sm">
              Location: Seminar Room 205 — Hybrid + Facebook Live
            </div>
          </div>

          <div
            className="p-4 border rounded-lg cursor-pointer"
            onClick={() => {
              navigate("/article/44");
            }}
          >
            <div className="font-medium">
              Vissim Unplugged: Turning Traffic Data into Decisions
            </div>
            <div className="text-sm text-muted-foreground">
              An in-depth technical exploration of Vissim micro-simulation,
              using real-world crash data and geometric redesigns like R-cuts
              and roundabouts.
            </div>
            <div className="text-sm mt-2">
              Presenter: Tausif Chy, PE, Traffic Engineering Expert & Chair,
              Scholarship and Awards Committee | South Texas Institute of
              Transportation Engineers (ITE) | Texas, USA
            </div>
            <div className="text-sm">Date: 8 August 2025 (BST)</div>
            <div className="text-sm">Platform: Microsoft Teams</div>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-max"
          onClick={() => {
            navigate("/meetings");
          }}
        >
          See more
        </Button>
      </div>

    </div>
  );
}

export { Home };
