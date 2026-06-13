"use client";
import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="Recognition" title="Achievements & Certifications" />
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
