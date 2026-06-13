"use client";
import { motion } from "framer-motion";
import { personal, githubStats } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import { FiGithub } from "react-icons/fi";

function getLevel(col: number, row: number): number {
  const n = (col * 31 + row * 17 + col * row) % 23;
  if (n < 8) return 0;
  if (n < 13) return 1;
  if (n < 17) return 2;
  if (n < 20) return 3;
  return 4;
}

const levelClass = ["bg-[#e5ddd5]", "bg-[#d4b8a5]", "bg-[#b89070]", "bg-[#9a7255]", "bg-primary"];

export default function GitHubSection() {
  const WEEKS = 36;
  return (
    <section id="github" className="py-24 bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="Open Source" title="GitHub Activity" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }} viewport={{ once: true }} className="bg-surface border border-border rounded-2xl p-7 flex flex-wrap gap-6 items-center mb-7 shadow-card">
          <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#e8ddd5] to-[#d4c4b5] border-2 border-border flex items-center justify-center text-3xl shrink-0">GH</div>
          <div className="flex-1 min-w-[200px]">
            <h3 className="font-serif text-xl text-ink mb-1">{personal.githubUsername}</h3>
            <p className="text-sm text-muted mb-3">{personal.githubSubtitle}</p>
            <div className="flex flex-wrap gap-5">
              {githubStats.map(s => (
                <div key={s.label} className="text-center">
                  <strong className="block font-serif text-xl text-primary">{s.value}</strong>
                  <span className="text-xs text-muted">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-outline shrink-0">
            <FiGithub size={15} /> View Profile
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 0.6 } }} viewport={{ once: true }}>
          <p className="text-xs text-muted mb-3">Contribution activity</p>
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-[3px]" style={{ minWidth: `${WEEKS * 13}px` }}>
              {Array.from({ length: WEEKS }).map((_, col) => (
                <div key={col} className="flex flex-col gap-[3px]">
                  {Array.from({ length: 7 }).map((_, row) => (
                    <div key={row} className={`w-[10px] h-[10px] rounded-[2px] ${levelClass[getLevel(col, row)]}`} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
