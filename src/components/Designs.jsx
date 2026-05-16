import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { X, ZoomIn } from "lucide-react";

function Designs() {
    const [selectedImage, setSelectedImage] = useState(null);

    // Design works organized by category with dates inferred from filenames
    const designWorks = [
        // Jerseys & Apparel
        {
            title: "CE 20 Rag Day T-Shirt",
            category: "Apparel",
            date: "December 2025",
            image: "/designs/ce 20 rag day tshirt - December 2025.png"
        },
        {
            title: "Aula Hall Football Jersey (Front)",
            category: "Sports Apparel",
            date: "December 2025",
            image: "/designs/aula hall football jersey front - December 2025.png"
        },
        {
            title: "Aula Hall Football Jersey (Back)",
            category: "Sports Apparel",
            date: "December 2025",
            image: "/designs/aula hall football jersey back - December 2025.png"
        },
        {
            title: "Coherence 21 T-Shirt",
            category: "Apparel",
            date: "August 2023",
            image: "/designs/coherence 21 tshirt - August 2023.png"
        },
        {
            title: "Section B Jersey (Front)",
            category: "Sports Apparel",
            date: "January 2023",
            image: "/designs/section B jersey front - January 2023.png"
        },
        {
            title: "Section B Jersey (Back)",
            category: "Sports Apparel",
            date: "January 2023",
            image: "/designs/section B jersey back - January 2023.png"
        },
        {
            title: "BBFC Jersey",
            category: "Sports Apparel",
            date: "June 2022",
            image: "/designs/bbfc jersey - June 2022.png"
        },
        {
            title: "BBFC Jersey",
            category: "Sports Apparel",
            date: "May 2021",
            image: "/designs/bbfc jersey - May 2021.png"
        },
        {
            title: "NDC 18 Rag Day Polo (Front)",
            category: "Apparel",
            date: "October 2019",
            image: "/designs/ndc 18 rag day polo front - October 2019.png"
        },
        {
            title: "NDC 18 Rag Day T-Shirt",
            category: "Apparel",
            date: "October 2019",
            image: "/designs/ndc 18 rag day tshirt - October 2019.png"
        },
        {
            title: "BBFC Jersey",
            category: "Sports Apparel",
            date: "June 2019",
            image: "/designs/bbfc jersey - June 2019.png"
        },
        {
            title: "BBFC Logo",
            category: "Branding",
            date: "June 2019",
            image: "/designs/bbfc logo - June 2019.png"
        },
        {
            title: "BBFC Jersey",
            category: "Sports Apparel",
            date: "June 2018",
            image: "/designs/bbfc jersey - June 2018.png"
        },
        // Posters & Banners
        {
            title: "BUET Premier League Banner",
            category: "Event Banner",
            date: "May 2023",
            image: "/designs/buet premier league banner - May 2023.png"
        },
        {
            title: "BUET Premier League Scroll",
            category: "Event Banner",
            date: "May 2023",
            image: "/designs/buet premier league scroll - May 2023.png"
        },
        {
            title: "Appreciation Course Poster",
            category: "Academic Poster",
            date: "February 2023",
            description: "Solid Waste Management in Dhaka City: Addressing Urban Pollution and Health Hazards",
            image: "/designs/appreciation course poster (Solid Waste Management in Dhaka City Addressing Urban Pollution and Health Hazards) - February 2023.png"
        },
        {
            title: "Inter Cricket Championship Fixture",
            category: "Sports Event",
            date: "December 2022",
            image: "/designs/inter cricket championship fixture - December 2022.png"
        },
        {
            title: "ACI Poster",
            category: "Academic Poster",
            date: "August 2022",
            description: "ECOncrete: Infrastructure for coastal and marine areas enters a new era of concrete",
            image: "/designs/aci poster (ECOncrete Infrastructure for coastal and marine areas enters a new era of concrete) - August 2022.png"
        },
    ];

    // Get unique categories
    const categories = [...new Set(designWorks.map(work => work.category))];

    // Sort by date (newest first)
    const sortedWorks = [...designWorks].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
    });

    // Get year range
    const years = [...new Set(sortedWorks.map(work => {
        const year = work.date.split(' ')[1];
        return year;
    }))];

    return (
        <div className="min-h-svh flex flex-col">
            <Header />

            {/* Hero Section */}
            <div className="flex flex-col mt-16 md:mt-24">
                <div className="@container flex flex-col gap-8 max-w-400 m-4 sm:px-6 lg:px-32">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm text-muted-foreground uppercase tracking-widest">Creative Work</p>
                        <h1 className="text-[10cqw] md:text-[8cqw] font-anton leading-tight">
                            Designs
                        </h1>
                        <p className="text-muted-foreground max-w-xl">
                            A collection of graphic design work spanning jerseys, posters, banners, and branding
                            created over the years from {years[years.length - 1]} to {years[0]}.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-8 py-4">
                        <div className="flex flex-col">
                            <span className="text-3xl md:text-4xl font-anton text-foreground">{designWorks.length}</span>
                            <span className="text-sm text-muted-foreground">Designs</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl md:text-4xl font-anton text-foreground">{categories.length}</span>
                            <span className="text-sm text-muted-foreground">Categories</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl md:text-4xl font-anton text-foreground">{years.length}</span>
                            <span className="text-sm text-muted-foreground">Years</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="flex flex-col py-16 md:py-24 bg-secondary/30">
                <div className="@container flex flex-col gap-8 max-w-400 m-4 sm:px-6 lg:px-32">
                    <h2 className="text-[6cqw] md:text-[4cqw] font-anton">Gallery</h2>

                    {/* Masonry-style Grid */}
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                        {sortedWorks.map((work, index) => (
                            <div
                                key={index}
                                className="break-inside-avoid group cursor-pointer"
                                onClick={() => setSelectedImage(work)}
                            >
                                <div className="relative bg-background rounded-2xl overflow-hidden border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-xl">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={work.image}
                                            alt={work.title}
                                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
                                            <ZoomIn className="h-8 w-8 text-background opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-start justify-between gap-2">
                                            <div>
                                                <h3 className="font-medium text-foreground">{work.title}</h3>
                                                {work.description && (
                                                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{work.description}</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="text-xs px-2 py-1 bg-secondary rounded-full text-muted-foreground">
                                                {work.category}
                                            </span>
                                            <span className="text-xs text-muted-foreground">
                                                {work.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Timeline by Year */}
            <div className="flex flex-col py-16 md:py-24">
                <div className="@container flex flex-col gap-8 max-w-400 m-4 sm:px-6 lg:px-32">
                    <h2 className="text-[6cqw] md:text-[4cqw] font-anton">Timeline</h2>

                    <div className="flex flex-col gap-8">
                        {years.map((year) => {
                            const yearWorks = sortedWorks.filter(work => work.date.includes(year));
                            return (
                                <div key={year} className="flex flex-col md:flex-row gap-4 md:gap-8">
                                    <div className="shrink-0 w-20">
                                        <span className="text-2xl font-anton text-foreground">{year}</span>
                                    </div>
                                    <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-3">
                                        {yearWorks.map((work, index) => (
                                            <div
                                                key={index}
                                                className="group cursor-pointer"
                                                onClick={() => setSelectedImage(work)}
                                            >
                                                <div className="aspect-square bg-secondary rounded-xl overflow-hidden">
                                                    <img
                                                        src={work.image}
                                                        alt={work.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <p className="text-xs text-muted-foreground mt-2 truncate">{work.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="h-8 w-8" />
                    </button>
                    <div
                        className="max-w-5xl max-h-[90vh] flex flex-col items-center gap-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.title}
                            className="max-h-[80vh] w-auto object-contain rounded-lg"
                        />
                        <div className="text-center">
                            <h3 className="text-xl font-medium text-foreground">{selectedImage.title}</h3>
                            <p className="text-sm text-muted-foreground">{selectedImage.category} • {selectedImage.date}</p>
                            {selectedImage.description && (
                                <p className="text-sm text-muted-foreground mt-2 max-w-md">{selectedImage.description}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <Footer />

            {/* Mobile Nav Spacer */}
            <div className="h-20 md:h-0"></div>
        </div>
    );
}

export { Designs };
