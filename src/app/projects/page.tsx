import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectShowcase from "@/components/ProjectShowcase";
import BackToTopButton from "@/components/BackToTopButton";
import { additionalProjects } from "@/lib/data";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 pt-28">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-[#cfb293] bg-[#f7efe6] px-4 py-2 text-sm font-semibold text-[#7c5c45] shadow-[0_6px_16px_rgba(90,58,34,0.08)] transition-all duration-200 hover:-translate-x-[3px] hover:border-[#b99274] hover:bg-[#eddcc9] hover:text-[#5e402d] hover:shadow-[0_8px_18px_rgba(90,58,34,0.12)]"
        >
          <FiArrowLeft size={14} />
          Back to Portfolio
        </Link>
      </div>
      <ProjectShowcase
        id="more-projects"
        label="More Projects"
        title="Additional Projects"
        subtitle="A deeper look at the supporting projects in the portfolio."
        projects={additionalProjects}
        layout="grid"
        sectionClassName="pt-10 pb-24 bg-surface"
      />
      <Footer />
      <BackToTopButton projectsSectionId="more-projects" />
    </main>
  );
}
