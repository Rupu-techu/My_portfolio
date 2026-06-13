"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiPlay } from "react-icons/fi";
import type { Project } from "@/lib/data";
import SectionHeader from "./SectionHeader";

type Props = {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  projects: Project[];
  layout: "homepage" | "grid";
  ctaHref?: string;
  ctaLabel?: string;
};

function ProjectButtons({ project, compact = false }: { project: Project; compact?: boolean }) {
  const buttonClass = compact ? "btn-primary py-2 px-4 text-xs" : "btn-primary py-2 px-5 text-xs";
  const outlineClass = compact ? "btn-outline py-2 px-4 text-xs" : "btn-outline py-2 px-5 text-xs";
  return (
    <div className="flex gap-2.5 flex-wrap">
      <a href={project.github} target="_blank" rel="noopener noreferrer" className={buttonClass}>
        <FiGithub size={compact ? 12 : 13} /> GitHub
      </a>
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className={outlineClass}>
          <FiExternalLink size={compact ? 12 : 13} /> Live Demo
        </a>
      )}
      {project.video && (
        <a href={project.video} target="_blank" rel="noopener noreferrer" className={outlineClass}>
          <FiPlay size={compact ? 12 : 13} /> Demo Video
        </a>
      )}
    </div>
  );
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.55 } }}
        viewport={{ once: true }}
        className="mb-6 bg-bg border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 md:grid md:grid-cols-[2fr_3fr]"
      >
        <div
          className="h-[200px] md:h-auto flex items-center justify-center relative"
          style={{ background: `linear-gradient(145deg,${project.gradientFrom},${project.gradientTo})` }}
        >
          <span className="text-[5rem] opacity-35">{project.emoji}</span>
          <span className="absolute top-3 left-3 bg-primary text-white text-[0.68rem] font-semibold rounded-full px-3 py-1">
            Featured
          </span>
        </div>
        <div className="p-7 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.map(t => <span key={t} className="chip-muted">{t}</span>)}
            </div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-widest text-secondary mb-1">{project.subtitle}</p>
            <h3 className="font-serif text-2xl text-ink mb-3">{project.title}</h3>
            <p className="text-sm text-muted leading-[1.7] mb-4">{project.description}</p>
            <ul className="space-y-2 mb-6">
              {project.achievements.map((a, ai) => (
                <li key={ai} className="flex gap-2.5 text-sm text-muted">
                  <span className="text-secondary font-bold mt-0.5 shrink-0">{"->"}</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <ProjectButtons project={project} />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
      className="bg-bg border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
    >
      <div
        className="h-[160px] flex items-center justify-center"
        style={{ background: `linear-gradient(145deg,${project.gradientFrom},${project.gradientTo})` }}
      >
        <span className="text-[3.5rem] opacity-35">{project.emoji}</span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.technologies.map(t => <span key={t} className="chip-muted">{t}</span>)}
        </div>
        <p className="text-[0.68rem] font-semibold uppercase tracking-widest text-secondary mb-1">{project.subtitle}</p>
        <h3 className="font-serif text-xl text-ink mb-2">{project.title}</h3>
        <p className="text-sm text-muted leading-[1.65] mb-4 flex-1">{project.description}</p>
        <ul className="space-y-1.5 mb-5">
          {project.achievements.map((a, ai) => (
            <li key={ai} className="flex gap-2 text-xs text-muted">
              <span className="text-secondary font-bold shrink-0 mt-0.5">{"->"}</span>
              {a}
            </li>
          ))}
        </ul>
        <ProjectButtons project={project} compact />
      </div>
    </motion.div>
  );
}

export default function ProjectShowcase({ label, title, subtitle, projects, layout, ctaHref, ctaLabel }: Props) {
  const featured = layout === "homepage" ? projects.slice(0, 1) : [];
  const gridItems = layout === "homepage" ? projects.slice(1) : projects;

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label={label} title={title} subtitle={subtitle} />
        {featured.map(project => <ProjectCard key={project.id} project={project} featured />)}
        <div className={layout === "homepage" ? "grid grid-cols-1 md:grid-cols-2 gap-5" : "grid grid-cols-1 md:grid-cols-2 gap-5"}>
          {gridItems.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
        {ctaHref && ctaLabel && (
          <div className="mt-8 flex justify-center">
            <Link href={ctaHref} className="btn-outline">
              {ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
