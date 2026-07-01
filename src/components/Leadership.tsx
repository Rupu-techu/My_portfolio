"use client";
import { motion } from "framer-motion";
import { leadership } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const typeStyles: Record<string, string> = {
  Leadership: "bg-[#f0e8f8] text-[#6a2aa0] border-[#d4b4f0]",
  Volunteering: "bg-[#e8f8ee] text-[#2a8055] border-[#b4f0cc]",
  Community: "bg-[#f8f2e6] text-[#8a5a1a] border-[#e6cfaa]",
};

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="Leadership"
          title="Leadership and community"
          subtitle="Organizing roles, mentoring, volunteering, and the community work that shaped my growth beyond coursework."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {leadership.map((item, index) => (
            <motion.article
              key={`${item.title}-${item.date}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.45, delay: index * 0.05 } }}
              viewport={{ once: true }}
              className="bg-bg border border-border rounded-card p-5 shadow-card hover:shadow-card-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] ${typeStyles[item.type] ?? "bg-bg text-muted border-border"}`}>
                  {item.type}
                </span>
                <span className="text-xs text-muted">{item.date}</span>
              </div>
              <h3 className="font-semibold text-base text-ink">{item.title}</h3>
              <p className="text-sm text-secondary mb-2">{item.org}</p>
              <p className="text-sm text-muted leading-[1.65]">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
