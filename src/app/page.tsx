import Navbar       from "@/components/Navbar";
import Hero         from "@/components/Hero";
import About        from "@/components/About";
import Skills       from "@/components/Skills";
import Projects     from "@/components/Projects";
import ResearchWork from "@/components/ResearchWork";
import Experience   from "@/components/Experience";
import Leadership   from "@/components/Leadership";
import JourneySoFar from "@/components/JourneySoFar";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import GitHubSection from "@/components/GitHubSection";
import BackToTopButton from "@/components/BackToTopButton";
import Contact      from "@/components/Contact";
import Footer       from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ResearchWork />
      <Experience />
      <Leadership />
      <JourneySoFar />
      <Achievements />
      <Certifications />
      <GitHubSection />
      <Contact />
      <Footer />
      <BackToTopButton />
    </main>
  );
}
