import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectShowcase from "@/components/ProjectShowcase";
import { additionalProjects } from "@/lib/data";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 pt-6">
        <Link href="/" className="btn-outline">
          Back to Home
        </Link>
      </div>
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
