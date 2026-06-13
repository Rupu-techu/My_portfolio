"use client";
import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const typeColors: Record<string, string> = {
  Internship: "bg-[#fdf0e8] text-[#a05c2a] border-[#f0d0b4]",
  Research: "bg-[#e8f0f8] text-[#2a5ca0] border-[#b4cff0]",
  Training: "bg-[#e8f8ee] text-[#2a8055] border-[#b4f0cc]",
  Leadership: "bg-[#f0e8f8] text-[#6a2aa0] border-[#d4b4f0]",
  Competition: "bg-[#f8f2e6] text-[#8a5a1a] border-[#e6cfaa]",
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="Experience" title="Journey so far" />
        <div className="relative pl-8">
          <div className="absolute left-[6px] top-2 bottom-2 w-px bg-border" />
          {experiences.map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0, transition: { delay: i * 0.1, duration: 0.5 } }} viewport={{ once: true }} className="relative mb-10 last:mb-0">
              <div className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-surface border-2 border-primary shadow-sm" />
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className={`text-[0.68rem] font-semibold tracking-wide uppercase rounded-full px-2.5 py-0.5 border ${typeColors[exp.type] ?? "bg-bg text-muted border-border"}`}>{exp.type}</span>
                <span className="text-xs text-muted">{exp.date}</span>
              </div>
              <h3 className="font-semibold text-base text-ink">{exp.title}</h3>
              <p className="text-sm text-secondary mb-2">{exp.org}</p>
              <p className="text-sm text-muted leading-[1.65]">{exp.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
