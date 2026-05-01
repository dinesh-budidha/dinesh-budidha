import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { GitHubSection } from "@/components/portfolio/GitHubSection";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Loader } from "@/components/portfolio/Loader";
import { useTheme } from "@/hooks/use-theme";

const Index = () => {
  // Initialize theme on first paint
  useTheme();

  return (
    <div className="relative min-h-screen">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubSection />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
