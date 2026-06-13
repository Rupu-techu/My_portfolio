"use client";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const featured = projects.filter(p => p.featured);
  const secondary = projects.filter(p => !p.featured);
  return (
    <section id="projects" className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="Featured Projects"
          title="Work that speaks"
          subtitle="Selected AI, machine learning, security, and hackathon projects."
        />
        {featured.map(p => (
          <motion.div key={p.id} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.55 } }} viewport={{ once: true }} className="mb-6 bg-bg border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 md:grid md:grid-cols-[2fr_3fr]">
            <div className="h-[200px] md:h-auto flex items-center justify-center relative" style={{ background: `linear-gradient(145deg,${p.gradientFrom},${p.gradientTo})` }}>
              <span className="text-[5rem] opacity-35">{p.emoji}</span>
              <span className="absolute top-3 left-3 bg-primary text-white text-[0.68rem] font-semibold rounded-full px-3 py-1">Featured</span>
            </div>
            <div className="p-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">{p.technologies.map(t => <span key={t} className="chip-muted">{t}</span>)}</div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-widest text-secondary mb-1">{p.subtitle}</p>
                <h3 className="font-serif text-2xl text-ink mb-3">{p.title}</h3>
                <p className="text-sm text-muted leading-[1.7] mb-4">{p.description}</p>
                <ul className="space-y-2 mb-6">{p.achievements.map((a, ai) => <li key={ai} className="flex gap-2.5 text-sm text-muted"><span className="text-secondary font-bold mt-0.5 shrink-0">{"->"}</span>{a}</li>)}</ul>
              </div>
              <div className="flex gap-3 flex-wrap">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-primary py-2 px-5 text-xs"><FiGithub size={13} /> GitHub</a>
                {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-outline py-2 px-5 text-xs"><FiExternalLink size={13} /> Live Demo</a>}
              </div>
            </div>
          </motion.div>
        ))}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {secondary.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }} viewport={{ once: true }} whileHover={{ y: -3 }} className="bg-bg border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col">
              <div className="h-[160px] flex items-center justify-center" style={{ background: `linear-gradient(145deg,${p.gradientFrom},${p.gradientTo})` }}>
                <span className="text-[3.5rem] opacity-35">{p.emoji}</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-1.5 mb-3">{p.technologies.map(t => <span key={t} className="chip-muted">{t}</span>)}</div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-widest text-secondary mb-1">{p.subtitle}</p>
                <h3 className="font-serif text-xl text-ink mb-2">{p.title}</h3>
                <p className="text-sm text-muted leading-[1.65] mb-4 flex-1">{p.description}</p>
                <ul className="space-y-1.5 mb-5">{p.achievements.map((a, ai) => <li key={ai} className="flex gap-2 text-xs text-muted"><span className="text-secondary font-bold shrink-0 mt-0.5">{"->"}</span>{a}</li>)}</ul>
                <div className="flex gap-2.5 flex-wrap mt-auto">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-primary py-2 px-4 text-xs"><FiGithub size={12} /> GitHub</a>
                  {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-outline py-2 px-4 text-xs"><FiExternalLink size={12} /> Live Demo</a>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
