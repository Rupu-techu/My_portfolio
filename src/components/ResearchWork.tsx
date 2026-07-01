"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const techTags = [
  "CNN",
  "RAG",
  "XAI",
  "Healthcare AI",
];

export default function ResearchWork() {
  return (
    <section id="research" className="pt-0 pb-12 bg-bg">
      <div className="max-w-5xl mx-auto px-6 pt-0">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-border to-transparent" />
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-accent-border bg-accent/70 text-[0.75rem] text-primary shadow-sm">
            *
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-border to-transparent" />
        </div>

        <SectionHeader
          label="RESEARCH"
          title="Research & Academic Work"
          subtitle="Applied research projects, conference submissions, and ongoing technical investigations."
          align="left"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-8">
        <div className="flex justify-center">
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
            className="w-full max-w-5xl rounded-[20px] border border-[#dccfc4] bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(249,243,237,0.98)_100%)] p-9 md:p-10 shadow-[0_14px_38px_rgba(124,92,69,0.12),0_2px_6px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(124,92,69,0.16),0_4px_10px_rgba(0,0,0,0.05)]"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <span className="inline-flex items-center rounded-full border border-accent-border bg-bg px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-primary">
                Featured Research
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                Research Paper
              </span>
            </div>

            <div className="max-w-4xl">
              <h3 className="mt-6 font-serif text-2xl md:text-[2.15rem] text-ink leading-[1.16] text-balance">
                AI-Powered Intelligent Advisory System using CNN and RAG for Environmental Health Risk Detection
              </h3>

              <p className="mt-6 max-w-3xl text-sm text-muted leading-[1.8]">
                Designed an AI-powered intelligent advisory system that combines Convolutional Neural Networks (CNN) with Retrieval-Augmented Generation (RAG) to identify potential health risks from environmental factors. The system analyzes medical and environmental inputs to provide explainable, context-aware health recommendations while improving reliability through retrieval-based reasoning.
              </p>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                {techTags.join(" | ")}
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                Conference Submission | Research Project | 2026
              </p>
              <span className="inline-flex items-center rounded-full border border-accent-border bg-bg px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary shadow-sm">
                Conference Review Pending
              </span>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
