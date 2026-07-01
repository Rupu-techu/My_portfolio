import Navbar       from "@/components/Navbar";
import Hero         from "@/components/Hero";
import About        from "@/components/About";
import Skills       from "@/components/Skills";
import ResearchWork from "@/components/ResearchWork";
import Projects     from "@/components/Projects";
import Experience   from "@/components/Experience";
import Leadership   from "@/components/Leadership";
import JourneySoFar from "@/components/JourneySoFar";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import GitHubSection from "@/components/GitHubSection";
import Contact      from "@/components/Contact";
import Footer       from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ResearchWork />
      <Projects />
      <Experience />
      <Leadership />
      <JourneySoFar />
      <Achievements />
      <Certifications />
      <GitHubSection />
      <Contact />
      <Footer />
    </main>
  );
}
