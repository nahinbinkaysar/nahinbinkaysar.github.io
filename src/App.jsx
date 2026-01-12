import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider"
import { Blog } from "./components/Blog";
import { Home } from "./components/Home";
import { BlogRead } from "./components/BlogRead";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:filename" element={<BlogRead />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
