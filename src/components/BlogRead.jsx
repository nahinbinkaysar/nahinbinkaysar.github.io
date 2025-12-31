import { useEffect, useState } from "react";
import { Header } from "./Header";
import Renderer from "./Renderer";
import { useParams } from "react-router";
import { Skeleton } from "@/components/ui/skeleton";

function BlogRead() {
  const { filename } = useParams();
  const [blog, setBlog] = useState("");
  const [loading, setLoading] = useState(true);

  const loadPage = async () => {
    const data = await fetch(`/weblog/${filename}`);
    const text = await data.text();
    console.log(text);
    setBlog(text);
    setLoading(false);
  }

  useEffect(() => {
    loadPage();
  }, [filename]);

  console.log(blog);

  return (
    <>
      <title>{blog.title}</title>
      <div className="min-h-svh flex flex-col justify-between">
        <Header />
        <div className="flex w-full h-full gap-2 mt-16">
          <div className="flex flex-col max-w-[1000px] px-6 py-10 gap-4 md:mt-10 md:mb-10 mx-auto">
            {loading && (
              <div className="flex flex-col space-y-3">
                <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            )}
            <Renderer
              content={blog}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export { BlogRead };
