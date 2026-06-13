"use client";
import { motion } from "framer-motion";
import { achievements, featuredAchievement, codingAchievement } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import { FiExternalLink } from "react-icons/fi";

export default function Achievements() {
  const highlights = [featuredAchievement, codingAchievement];
  return (
    <section id="achievements" className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="Recognition" title="Achievements & Certifications" />
        <div className="space-y-4 mb-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.05 } }}
              viewport={{ once: true }}
              className={`bg-accent/70 border-l-4 border-l-primary border-t border-r border-b border-accent-border rounded-card p-5 flex gap-4 items-start shadow-card-md hover:shadow-card-hover transition-shadow duration-300`}
            >
              <div className="w-10 h-10 bg-surface border border-border rounded-xl flex items-center justify-center text-xl shrink-0 shadow-sm">
                {item.icon}
              </div>
              <div className="flex-1">
                <span className="inline-flex items-center rounded-full border border-accent-border bg-surface px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-widest text-primary mb-2">
                  Featured
                </span>
                <h4 className="font-semibold text-sm text-ink mb-1">{item.title}</h4>
                <p className="text-[0.7rem] font-semibold text-secondary mb-2">{item.role}</p>
                <p className="text-xs text-muted leading-[1.55]">{item.description}</p>
                <a
                  href={item.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline mt-4 py-2 px-4 text-xs"
                >
                  <FiExternalLink size={12} /> {item.buttonText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }} viewport={{ once: true }} className="bg-bg border border-border rounded-card p-5 flex gap-4 items-start shadow-card hover:shadow-card-md transition-shadow duration-300">
              <div className="w-10 h-10 bg-surface border border-border rounded-xl flex items-center justify-center text-xl shrink-0">{a.icon}</div>
              <div>
                <h4 className="font-semibold text-sm text-ink mb-1">{a.title}</h4>
                <p className="text-xs text-muted leading-[1.55]">{a.description}</p>
                <p className="text-[0.7rem] font-semibold text-secondary mt-2">{a.meta}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
