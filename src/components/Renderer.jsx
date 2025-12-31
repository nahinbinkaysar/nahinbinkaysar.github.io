import React from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";
import "highlight.js/styles/github.css";

function Renderer({ content = "" }) {
  return (
    <div
      // need npm install -D @tailwindcss/typography for prose
      className={`font-weblog prose dark:prose-invert max-w-[1200px] w-full overflow-x-auto wrap-anywhere`}
    >
      <Markdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeHighlight, rehypeRaw]}
      >
        {content}
      </Markdown>
    </div>
  );
}

export default Renderer;
