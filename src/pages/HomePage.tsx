import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import type { Language } from "../types/language";

const HomePage = ({ language }: { language: Language }) => {
  return (
    <main>
      <HeroSection language={language} />
      <AboutSection language={language} />
      <ProjectsSection language={language} />
    </main>
  );
};

export default HomePage;
