import { Header } from "./Header";
import { Footer } from "./Footer";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

function Contact() {
    const socialLinks = [
        {
            name: "GitHub",
            icon: FaGithub,
            url: "https://github.com/nahinbinkaysar",
            handle: "@nahinbinkaysar",
            description: "Check out my projects and contributions"
        },
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            url: "https://linkedin.com/in/nahinbinkaysar",
            handle: "nahinbinkaysar",
            description: "Connect with me professionally"
        },
        {
            name: "Facebook",
            icon: FaFacebook,
            url: "https://facebook.com/nahin.binkaysar.7",
            handle: "nahin.binkaysar.7",
            description: "Follow my updates"
        },
        {
            name: "Codeforces",
            icon: SiCodeforces,
            url: "https://codeforces.com/profile/nahin.binkaysar",
            handle: "nahinbinkaysar",
            description: "See my competitive programming profile"
        }
    ];

    return (
        <div className="min-h-svh flex flex-col">
            <Header />

            {/* Hero Section */}
            <div className="flex flex-col flex-1 justify-center mt-16 md:mt-24">
                <div className="flex flex-col md:mt-0">
                    <div className="@container flex flex-col gap-8 max-w-400 m-4 sm:px-6 lg:px-32">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm text-muted-foreground uppercase tracking-widest">Contact</p>
                            <h1 className="text-[10cqw] md:text-[8cqw] font-anton leading-tight">
                                Let's Connect
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-xl mt-4">
                                Have a project in mind, want to collaborate, or just want to say hello?
                                I'd love to hear from you.
                            </p>
                        </div>

                        {/* Email CTA */}
                        <a
                            href="mailto:nahinbinkaysar@gmail.com"
                            className="group flex items-center gap-4 p-6 bg-foreground text-background rounded-2xl hover:scale-[1.02] transition-all duration-300 w-fit"
                        >
                            <div className="p-3 bg-background/10 rounded-xl">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-background/70">Email me at</span>
                                <span className="text-lg font-medium">nahinbinkaysar@gmail.com</span>
                            </div>
                            <ArrowUpRight className="h-5 w-5 ml-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </a>

                        {/* Location */}
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <MapPin className="h-5 w-5" />
                            <span>Dhaka, Bangladesh</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col py-16 md:py-24 bg-secondary/30">
                <div className="@container flex flex-col gap-8 max-w-400 m-4 sm:px-6 lg:px-32">
                    <h2 className="text-[6cqw] md:text-[4cqw] font-anton">Find Me Online</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {socialLinks.map((link, index) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 p-5 bg-background rounded-2xl border border-border hover:border-foreground/20 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="p-3 bg-secondary rounded-xl group-hover:bg-foreground group-hover:text-background transition-colors">
                                        <Icon size={24} />
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <span className="font-medium text-foreground">{link.name}</span>
                                        <span className="text-sm text-muted-foreground">{link.description}</span>
                                    </div>
                                    <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Bottom Message */}
            <div className="flex flex-col py-16 md:py-24">
                <div className="@container flex flex-col gap-4 max-w-400 m-4 sm:px-6 lg:px-32">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
                            <p className="text-2xl md:text-3xl font-anton text-foreground">
                                Open to opportunities
                            </p>
                            <p className="text-muted-foreground mt-2">
                                Currently available for freelance work and collaborations.
                            </p>
                        </div>
                        <a
                            href="mailto:nahinbinkaysar@gmail.com"
                            className="px-6 py-3 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-transform w-fit"
                        >
                            Send an Email
                        </a>
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

export { Contact };
