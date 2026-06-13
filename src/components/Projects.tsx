import ProjectShowcase from "./ProjectShowcase";
import { featuredProjects } from "@/lib/data";

export default function Projects() {
  return (
    <ProjectShowcase
      label="Featured Projects"
      title="Work that speaks"
      subtitle="Selected AI, machine learning, security, and hackathon projects."
      projects={featuredProjects}
      layout="homepage"
      ctaHref="/projects"
      ctaLabel="View All Projects"
    />
  );
}
