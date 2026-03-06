import Hero from "@/components/Hero";
import About from "@/components/About";
import Competencies from "@/components/Competencies";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-neon-purple/30 selection:text-white pb-0">
      <Hero />
      <About />
      <Competencies />
      <Experience />
      <Projects />
      <Achievements />
      <Education />
      <Contact />
    </main>
  );
}
