import { Header } from "./Header";
import { Footer } from "./Footer";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { Code, Cpu, Car, Wrench, Puzzle, Sparkles } from "lucide-react";

function About() {
	const interests = [
		{
			icon: Code,
			title: "Software Development",
			description: "Building practical tools that reduce friction in real workflows"
		},
		{
			icon: Cpu,
			title: "Low-Level Solutions",
			description: "Native tools where clarity, efficiency, and direct control matter"
		},
		{
			icon: Car,
			title: "Simulation & Automation",
			description: "Systems that combine structure, logic, and real-world utility"
		},
		{
			icon: Puzzle,
			title: "Algorithmic Thinking",
			description: "Competitive programming as a training ground for fundamentals"
		}
	];

	return (
		<div className="min-h-svh flex flex-col">
			<Header />

			{/* Hero Section */}
			<div className="flex flex-col mt-16 md:mt-24">
				<div className="@container flex flex-col gap-8 max-w-400 m-4 sm:px-6 lg:px-32">
					<div className="flex flex-col gap-2">
						<p className="text-sm text-muted-foreground uppercase tracking-widest">About Me</p>
						<h1 className="text-[10cqw] md:text-[8cqw] font-anton leading-tight">
							At the Intersection of Multiple Skills
						</h1>
					</div>

					{/* Main Bio */}
					<div className="flex flex-col md:flex-row gap-8 md:gap-16">
						<div className="flex-1">
							<p className="text-lg md:text-xl text-foreground leading-relaxed">
								I am a civil engineering student at BUET with a long-standing inclination
								toward building things—first physical, then digital.
							</p>
						</div>
						<div className="flex-1">
							<p className="text-muted-foreground leading-relaxed">
								Although my formal education is in civil engineering, my curiosity has always
								extended beyond a single discipline. I do not see myself as a single label;
								I am more comfortable operating at the intersection of multiple skills.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Origin Story Section */}
			<div className="flex flex-col py-16 md:py-24 mt-8">
				<div className="@container flex flex-col gap-8 max-w-400 m-4 sm:px-6 lg:px-32">
					<div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
						<div className="flex-1 flex flex-col gap-4">
							<div className="flex items-center gap-3">
								<Sparkles className="h-6 w-6 text-muted-foreground" />
								<h2 className="text-xl font-semibold text-foreground">How It Started</h2>
							</div>
							<p className="text-muted-foreground leading-relaxed">
								As a child, I was more interested in how things worked than how they looked,
								often taking objects apart just to understand motion, mechanics, and control.
								That instinct later evolved into an interest in electronics, robotics, and
								software systems.
							</p>
						</div>
						<div className="flex-1 flex flex-col gap-4">
							<div className="flex items-center gap-3">
								<Wrench className="h-6 w-6 text-muted-foreground" />
								<h2 className="text-xl font-semibold text-foreground">What Drives Me</h2>
							</div>
							<p className="text-muted-foreground leading-relaxed">
								I am drawn to systems that combine structure and logic: programming, automation,
								simulation, and tools that reduce friction in real workflows. I value clarity,
								efficiency, and direct control over abstractions—which is why I often prefer
								low-level or native solutions when possible.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Philosophy Section */}
			<div className="flex flex-col py-16 md:py-24 bg-secondary/30">
				<div className="@container flex flex-col gap-8 max-w-400 m-4 sm:px-6 lg:px-32">
					<h2 className="text-[6cqw] md:text-[4cqw] font-anton">On Competitive Programming</h2>

					<div className="flex flex-col md:flex-row gap-8 md:gap-16">
						<div className="flex-1 flex flex-col gap-4">
							<div className="h-1 w-16 bg-foreground rounded-full"></div>
							<p className="text-foreground leading-relaxed text-lg">
								I have spent several years engaging with competitive programming. While it
								sharpened my algorithmic thinking and discipline, I now treat it as a
								training ground rather than an identity.
							</p>
						</div>
						<div className="flex-1 flex flex-col gap-4">
							<div className="h-1 w-16 bg-muted-foreground rounded-full"></div>
							<p className="text-muted-foreground leading-relaxed">
								Useful for strengthening fundamentals, but not the sole measure of ability
								or direction. The problem-solving skills translate well to building real
								systems, which is where my focus has shifted.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Interests Grid */}
			<div className="flex flex-col py-16 md:py-24">
				<div className="@container flex flex-col gap-8 max-w-400 m-4 sm:px-6 lg:px-32">
					<h2 className="text-[6cqw] md:text-[4cqw] font-anton">What I Do</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{interests.map((item, index) => (
							<div
								key={index}
								className="flex gap-4 p-6 bg-secondary/50 rounded-2xl hover:bg-secondary transition-colors"
							>
								<div className="shrink-0">
									<item.icon className="h-8 w-8 text-foreground" />
								</div>
								<div className="flex flex-col gap-2">
									<h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
									<p className="text-sm text-muted-foreground">{item.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Direction Section */}
			<div className="flex flex-col py-16 md:py-24 bg-card">
				<div className="@container flex flex-col gap-8 max-w-400 m-4 sm:px-6 lg:px-32">
					<h2 className="text-[6cqw] md:text-[4cqw] font-anton">Where I'm Heading</h2>

					<div className="max-w-2xl">
						<p className="text-lg text-foreground leading-relaxed">
							I am interested in building practical software, experimenting with ideas, and
							steadily moving toward work that blends engineering thinking with real-world utility.
						</p>
					</div>
				</div>
			</div>

			{/* Contact Section */}
			<div className="flex flex-col py-16 md:py-24 bg-foreground text-background">
				<div className="@container flex flex-col gap-8 max-w-400 m-4 sm:px-6 lg:px-32">
					<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
						<div className="flex flex-col gap-2">
							<h2 className="text-[6cqw] md:text-[4cqw] font-anton">Get In Touch</h2>
							<p className="text-background/70">
								Feel free to reach out for collaborations or just a friendly hello.
							</p>
						</div>

						<div className="flex gap-4">
							<a
								href="https://github.com/nahinbinkaysar"
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 bg-background/10 rounded-xl hover:bg-background/20 transition-colors"
							>
								<FaGithub size={24} />
							</a>
							<a
								href="https://linkedin.com/in/nahinbinkaysar"
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 bg-background/10 rounded-xl hover:bg-background/20 transition-colors"
							>
								<FaLinkedin size={24} />
							</a>
							<a
								href="https://facebook.com/nahin.binkaysar.7"
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 bg-background/10 rounded-xl hover:bg-background/20 transition-colors"
							>
								<FaFacebook size={24} />
							</a>
							<a
								href="https://codeforces.com/profile/nahin.binkaysar"
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 bg-background/10 rounded-xl hover:bg-background/20 transition-colors"
							>
								<SiCodeforces size={24} />
							</a>
							<a
								href="mailto:nahinbinkaysar@gmail.com"
								className="p-3 bg-background/10 rounded-xl hover:bg-background/20 transition-colors"
							>
								<FaEnvelope size={24} />
							</a>
						</div>
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

export { About };
