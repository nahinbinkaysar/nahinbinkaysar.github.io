import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronRight, Edit, Pen, RefreshCw, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { Header } from "./Header";

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

  console.log(blogList);

  return (
    <div className={`${onHome ? "" : "min-h-svh font-weblog mt-24"} flex flex-col justify-between`}>
      <Header />

      <div className="flex flex-col">
        <div className="@container flex flex-col gap-4 max-w-400 m-3 px-4 sm:px-6 lg:px-32">
          {onHome ? (
            <h1 onClick={() => navigate("/blog")} className="text-[8cqw] font-anton cursor-pointer">
              <ScrambleText text="BLOG" delay={1800} />
            </h1>
          ) : (
            <h1 className="text-[8cqw] font-anton">BLOG</h1>
          )}

          <div className="flex gap-4">

            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full flex-1">
              {blogList.slice(0, amount).map((blog, index) => (
                <Link key={index} to={`/blog/${blog.filename}`}>
                  <div
                    className={`flex flex-col rounded-3xl p-3 overflow-hidden bg-secondary hover:bg-accent transition-colors ${index < 3 ? "h-64" : "h-32"}`}
                  >
                    <BlobArt
                      className={`h-1/2 w-full rounded-xl shrink-0 ${index < 3 ? "" : "hidden"}`}
                      seed={index}
                    />
                    <div className="flex flex-col flex-1 w-full justify-between p-2">
                      <div className="text-2xl text-foreground">
                        {blog.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {blog.date}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {onHome &&
              <Link to="/blog"
                className={`group flex items-center justify-end text-muted-foreground rounded-3xl p-4 bg-secondary hover:bg-accent
                  h-64 w-16 hover:w-46 transition-all duration-300 ease-out cursor-pointer hover:text-foreground overflow-hidden`}
              >
                <span className="opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap mr-2">
                  Read more
                </span>
                <ChevronRight size={32} className="shrink-0" />
              </Link>
            }
          </div>
        </div>
      </div>
    </div >
  );
}

export { Blog };
