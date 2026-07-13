import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Education from "@/components/sections/Education";
import Achievements from "@/components/sections/Achievements";
import GitHubSection from "@/components/sections/GitHub";
import ResumeSection from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <div className="container mx-auto px-6 md:px-12 space-y-32 py-24">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Achievements />
        <GitHubSection />
        <ResumeSection />
        <Contact />
      </div>
    </div>
  );
}
