"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiCode, FiShield, FiUsers, FiZap } from "react-icons/fi";
import { journeySoFar } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const categoryStyles: Record<string, string> = {
  Hackathons: "bg-[#e8f0f8] text-[#2a5ca0] border-[#b4cff0]",
  Competitions: "bg-[#f8f2e6] text-[#8a5a1a] border-[#e6cfaa]",
  "Open Source Contributions": "bg-[#e8f8ee] text-[#2a8055] border-[#b4f0cc]",
  Community: "bg-[#f0e8f8] text-[#6a2aa0] border-[#d4b4f0]",
};

const categoryIcons: Record<string, ReactNode> = {
  Hackathons: <FiZap size={12} />,
  Competitions: <FiCode size={12} />,
  "Open Source Contributions": <FiGithub size={12} />,
  Community: <FiUsers size={12} />,
};

function TimelineItem({ item, index }: { item: (typeof journeySoFar)[number]; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.45, delay: index * 0.06 } }}
      viewport={{ once: true, amount: 0.35 }}
      className="grid grid-cols-[18px_1fr] md:grid-cols-[1fr_24px_1fr] gap-4 md:gap-6 items-start"
    >
      <div className="relative flex items-start justify-center md:col-start-2">
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.35, delay: index * 0.06 } }}
          viewport={{ once: true, amount: 0.35 }}
          className="relative z-10 mt-5 flex h-4 w-4 items-center justify-center rounded-full border border-border bg-primary text-bg shadow-sm"
        />
      </div>

      <motion.article
        initial={{ opacity: 0, x: isLeft ? -16 : 16 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.45, delay: index * 0.06 } }}
        viewport={{ once: true, amount: 0.35 }}
        whileHover={{ y: -6, scale: 1.01 }}
        className={`bg-surface border border-border rounded-[20px] p-5 shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-200 hover:shadow-[0_16px_42px_rgba(0,0,0,0.11)] ${
          isLeft ? "md:col-start-1 md:justify-self-end md:pr-10" : "md:col-start-3 md:pl-10"
        }`}
      >
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl border border-border bg-bg flex items-center justify-center text-primary shrink-0">
            {categoryIcons[item.category] ?? <FiShield size={12} />}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] ${categoryStyles[item.category] ?? "bg-bg text-muted border-border"}`}>
                {item.category}
              </span>
              <span className="text-xs text-muted">{item.date}</span>
            </div>
            <h3 className="font-semibold text-base text-ink">{item.title}</h3>
            <p className="text-sm text-secondary mb-2">{item.org}</p>
            <p className="text-sm text-muted leading-[1.65]">{item.body}</p>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function JourneySoFarSection() {
  return (
    <section id="journey" className="py-24 bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="Journey"
          title="Journey so far"
          subtitle="A chronological look at hackathons, competitions, and community contributions that shaped my growth."
        />

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }}
            viewport={{ once: true, amount: 0.2 }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[8px] top-1 bottom-1 w-px bg-border md:left-1/2 md:-translate-x-1/2"
          />
          <div className="space-y-4 md:space-y-5">
            {journeySoFar.map((item, index) => (
              <TimelineItem key={`${item.date}-${item.title}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
