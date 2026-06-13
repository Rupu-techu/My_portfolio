"use client";
import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="Technical Skills" title="Tools of the trade" />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <motion.div key={group.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.5 } }} viewport={{ once: true }} className="bg-surface border border-border rounded-card p-6 shadow-card hover:shadow-card-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-accent border border-accent-border rounded-lg flex items-center justify-center text-base shrink-0">{group.icon}</div>
                <span className="font-semibold text-sm text-ink">{group.title}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(s => <span key={s.name} className={s.highlight ? "chip" : "chip-muted"}>{s.name}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
