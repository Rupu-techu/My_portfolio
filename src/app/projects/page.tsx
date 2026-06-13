import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectShowcase from "@/components/ProjectShowcase";
import { additionalProjects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <ProjectShowcase
        label="More Projects"
        title="Additional Projects"
        subtitle="A deeper look at the supporting projects in the portfolio."
        projects={additionalProjects}
        layout="grid"
      />
      <Footer />
    </main>
  );
}
