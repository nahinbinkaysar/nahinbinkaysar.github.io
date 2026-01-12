import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ExternalLink, Gavel, Image, Play, ArrowUpRight } from "lucide-react";
import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";

function Work({ amount, onHome = false }) {
    const projectList = [
        {
            title: "BUET ITE Student Chapter",
            details: "A website built with React.js, shadcn and Supabase for the student chapter of BUET ITE",
            image: "https://ite.ce.buet.ac.bd/ite-logo-buet.svg",
            web: "https://ite.ce.buet.ac.bd/",
            facebook: "https://www.facebook.com/share/p/1KAZsVsWaa/",
            twitter: "https://x.com/nahinbinkaysar/status/2004068531491750071?s=20"
        },
        {
            title: "Lawyered",
            details: "A RAG pipeline to ask and get insight for any legal problems based on the past rulings",
            icon: Gavel,
            web: "https://lawyered.vercel.app/"
        },
        {
            title: "Clipper",
            details: "Clipper is a lightweight on-screen utility that lets you copy and paste with a single tap while writing in any app",
            image: "https://raw.githubusercontent.com/nahinbinkaysar/clipper/refs/heads/master/Clipper/Clipper.ico",
            github: "https://github.com/nahinbinkaysar/clipper",
            facebook: "https://www.facebook.com/share/v/1DEm7PbTwa/"
        },
        {
            title: "LoopTube",
            details: "A tool to play a segment of a YouTube video on loop",
            icon: Play,
            web: "https://nahinbinkaysar.github.io/looptube.html"
        },
        {
            title: "ThumbGen",
            details: "A tool to create thumbnails for the thousands of videos uploaded to the BUET Civil 20 YouTube Channel",
            icon: Image,
            web: "https://nahinbinkaysar.github.io/civil/thumb"
        },
    ];

    const businesses = [
        {
            title: "Play Sphere",
            details: "An online marketplace for gaming items, gift cards, and game currency, offering a secure way for gamers to access digital content at affordable prices",
            image: "playsphere.jpeg",
            facebook: "https://www.facebook.com/playsphereofficial"
        }
    ];

    // Project Card Component
    const ProjectCard = ({ project, featured = false }) => (
        <div className={`group flex gap-4 ${featured ? 'p-4 bg-secondary/50 rounded-3xl hover:bg-secondary transition-colors' : ''}`}>
            <div className={`${featured ? 'h-36 w-36 md:h-44 md:w-44' : 'h-24 w-24 md:h-32 md:w-32'} shrink-0 bg-secondary rounded-2xl p-2`}>
                <div className="h-full w-full bg-background flex items-center justify-center rounded-xl overflow-hidden">
                    {project.image ? (
                        <img
                            className={`${featured ? 'h-4/5 w-4/5' : 'h-3/4 w-3/4'} object-contain`}
                            src={project.image}
                            alt={project.title}
                        />
                    ) : project.icon ? (
                        <project.icon className={`${featured ? 'h-1/2 w-1/2' : 'h-2/5 w-2/5'} text-muted-foreground`} />
                    ) : null}
                </div>
            </div>

            <div className="flex flex-col justify-between flex-1 py-1">
                <div className="flex flex-col gap-2">
                    <h3 className={`${featured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'} text-foreground font-medium`}>
                        {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground line-clamp-3">
                        {project.details}
                    </p>
                </div>

                <div className="flex items-center gap-3 mt-3">
                    {project.web && (
                        <a
                            href={project.web}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <ExternalLink size={18} />
                        </a>
                    )}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <FaGithub size={20} />
                        </a>
                    )}
                    {project.facebook && (
                        <a
                            href={project.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <FaFacebook size={20} />
                        </a>
                    )}
                    {project.twitter && (
                        <a
                            href={project.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <FaTwitter size={20} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );

    // Home Page Embed - Compact Grid
    if (onHome) {
        return (
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {projectList.slice(0, amount).map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        );
    }

    // Standalone Work Page
    return (
        <div className="min-h-svh flex flex-col">
            <Header />

            <div className="flex flex-col mt-16 md:mt-24">
                <div className="@container flex flex-col gap-8 max-w-400 m-4 sm:px-6 lg:px-32">

                    {/* Projects Section */}
                    <div className="flex flex-col gap-2">
                        <p className="text-sm text-muted-foreground uppercase tracking-widest">Portfolio</p>
                        <h1 className="text-[10cqw] md:text-[8cqw] font-anton leading-tight">
                            Projects
                        </h1>
                        <p className="text-muted-foreground max-w-xl">
                            Tools and applications I've built to solve real problems.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                        {projectList.map((project, index) => (
                            <ProjectCard key={index} project={project} featured={true} />
                        ))}
                    </div>

                    {/* Businesses Section */}
                    <div className="flex flex-col gap-2 mt-16">
                        <p className="text-sm text-muted-foreground uppercase tracking-widest">Ventures</p>
                        <h2 className="text-[8cqw] md:text-[6cqw] font-anton leading-tight">
                            Businesses
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                        {businesses.map((business, index) => (
                            <ProjectCard key={index} project={business} featured={true} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />

            {/* Mobile Nav Spacer */}
            <div className="h-20 md:h-0"></div>
        </div>
    );
}

export { Work };
