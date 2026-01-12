import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { BlobArt } from "./BlobArt";
import { ScrambleText } from "./ScrambleText";

function Blog({ amount, onHome = false }) {
  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function fetchBlogs() {
    const data = await fetch("/weblog/files.json");
    const json = await data.json();
    setBlogList(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Standalone Blog Page
  if (!onHome) {
    return (
      <div className="min-h-svh flex flex-col">
        <Header />

        <div className="flex flex-col mt-16 md:mt-24">
          <div className="@container flex flex-col gap-8 max-w-400 m-4 sm:px-6 lg:px-32">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground uppercase tracking-widest">Writings</p>
              <h1 className="text-[10cqw] md:text-[8cqw] font-anton text-foreground leading-tight">
                Blog
              </h1>
              <p className="text-muted-foreground max-w-xl">
                Thoughts on software, engineering, and building things.
              </p>
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
              {loading ? (
                // Loading skeletons
                Array(6).fill(0).map((_, index) => (
                  <div key={index} className="flex flex-col rounded-3xl p-3 bg-secondary h-64">
                    <Skeleton className="h-1/2 w-full rounded-xl" />
                    <div className="flex flex-col flex-1 justify-between p-2">
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-1/4" />
                    </div>
                  </div>
                ))
              ) : (
                blogList.slice(0, amount).map((blog, index) => (
                  <Link key={index} to={`/blog/${blog.filename}`}>
                    <div
                      className={`group flex flex-col rounded-3xl p-3 overflow-hidden bg-secondary hover:bg-accent transition-all duration-300 ${index < 3 ? "h-64" : "h-32"
                        }`}
                    >
                      <BlobArt
                        className={`h-1/2 w-full rounded-xl shrink-0 ${index < 3 ? "" : "hidden"}`}
                        seed={index}
                      />
                      <div className="flex flex-col flex-1 w-full justify-between p-2">
                        <div className="text-lg md:text-xl text-foreground group-hover:text-foreground/80 transition-colors">
                          {blog.title}
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground">
                          {blog.date}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
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

  // Blog Section for Home Page
  return (
    <div className="@container flex flex-col gap-8 max-w-400 m-4 sm:px-6 lg:px-32">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">Latest</p>
          <h2
            onClick={() => navigate("/blog")}
            className="text-[8cqw] md:text-[6cqw] font-anton text-foreground cursor-pointer leading-tight hover:opacity-80 transition-opacity"
          >
            <ScrambleText text="Blog" delay={1800} />
          </h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full flex-1">
          {blogList.slice(0, amount).map((blog, index) => (
            <Link key={index} to={`/blog/${blog.filename}`}>
              <div
                className={`group flex flex-col rounded-3xl p-3 overflow-hidden bg-secondary hover:bg-accent transition-all duration-300 ${index < 3 ? "h-48 md:h-64" : "h-22 md:h-32"
                  }`}
              >
                <BlobArt
                  className={`h-3/5 md:h-1/2 w-full rounded-xl shrink-0 ${index < 3 ? "" : "hidden"}`}
                  seed={index}
                />
                <div className="flex flex-col flex-1 w-full justify-between p-2">
                  <div className="text-lg md:text-xl text-foreground">
                    {blog.title}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {blog.date}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Read More Button */}
        <Link
          to="/blog"
          className="group flex items-center justify-center md:justify-end text-muted-foreground rounded-3xl p-4 bg-secondary hover:bg-accent
            w-full h-16 md:h-64 md:w-16 md:hover:w-48 transition-all duration-300 ease-out cursor-pointer hover:text-foreground overflow-hidden"
        >
          <div className="hidden md:flex items-center">
            <span className="opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap mr-2">
              Read more
            </span>
            <ChevronRight size={28} className="shrink-0" />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <span className="whitespace-nowrap">Read more</span>
            <ChevronRight size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export { Blog };
