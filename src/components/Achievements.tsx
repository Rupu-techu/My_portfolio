"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { featuredAchievements, minorAchievements } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const smallIconMap: Record<string, string> = {
  AW: "🏆",
  CR: "🥇",
  OS: "🌍",
};

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span
          key={tag}
          className="inline-flex items-center rounded-full border border-border bg-surface px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-secondary"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function PremiumBlob() {
  return (
    <div className="absolute right-5 top-5 h-14 w-14 rounded-full bg-[#c6a98f]/35 blur-[1px]" />
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="Achievements"
          title="Selected accomplishments"
          subtitle="A concise look at the milestones that best reflect my progress and technical direction."
        />

        <div className="space-y-5">
          {featuredAchievements.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.55, delay: index * 0.08 } }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-accent-border bg-[linear-gradient(135deg,rgba(244,234,225,0.98)_0%,rgba(232,221,213,0.92)_55%,rgba(215,191,169,0.88)_100%)] p-6 md:p-7 shadow-card-md transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <PremiumBlob />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_32%)]" />

              <div className="relative flex items-start gap-4 md:gap-5">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl border border-border bg-surface flex items-center justify-center text-2xl md:text-3xl shrink-0 shadow-sm">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center rounded-full border border-accent-border bg-surface px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-widest text-primary">
                      Featured
                    </span>
                    {item.year && <span className="text-xs text-muted">{item.year}</span>}
                  </div>
                  <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
                  <p className="text-sm text-secondary mt-1">{item.organization}</p>
                  {item.platform && <p className="text-xs text-muted mt-1">Platform: {item.platform}</p>}
                  <p className="text-sm text-muted leading-[1.7] mt-3 max-w-3xl">{item.description}</p>
                  <div className="mt-4">
                    <TagList tags={item.tags} />
                  </div>
                  {item.statLabel && item.statValue && (
                    <div className="mt-5 inline-flex items-center gap-3 rounded-2xl border border-border bg-bg px-4 py-3 shadow-sm">
                      <div className="font-serif text-2xl text-primary">{item.statValue}</div>
                      <div className="text-xs text-muted uppercase tracking-[0.14em] font-semibold">{item.statLabel}</div>
                    </div>
                  )}
                  {item.href && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 btn-outline mt-5"
                    >
                      <FiExternalLink size={14} />
                      {item.buttonText ?? "View Profile"}
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          {minorAchievements.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.45, delay: index * 0.05 } }}
              viewport={{ once: true }}
              className="bg-bg border border-border rounded-card p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-md"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl border border-border bg-surface flex items-center justify-center text-lg shrink-0 shadow-sm">
                  {smallIconMap[item.icon] ?? item.icon}
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm text-ink mb-1">{item.title}</h4>
                  <p className="text-xs text-muted leading-[1.55]">{item.description}</p>
                  <div className="mt-3">
                    <TagList tags={item.tags} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
