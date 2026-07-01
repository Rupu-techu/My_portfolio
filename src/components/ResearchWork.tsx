"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { FiExternalLink } from "react-icons/fi";

const techTags = [
  "CNN",
  "RAG",
  "Python",
  "Deep Learning",
  "Computer Vision",
  "Healthcare AI",
  "Explainable AI",
];

export default function ResearchWork() {
  return (
    <section id="research" className="py-24 bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="RESEARCH"
          title="Research & Academic Work"
          subtitle="Applied research projects, conference submissions, and ongoing technical investigations."
          align="center"
        />

        <div className="flex justify-center">
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
            className="w-full max-w-3xl bg-surface border border-border rounded-2xl p-6 md:p-7 shadow-card hover:shadow-card-md transition-all duration-300"
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <span className="inline-flex items-center rounded-full border border-accent-border bg-bg px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-widest text-primary">
                Conference Review Pending
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                Research Paper
              </span>
            </div>

            <h3 className="font-serif text-2xl md:text-[2rem] text-ink leading-[1.18] text-balance">
              AI-Powered Intelligent Advisory System using CNN and RAG for Environmental Health Risk Detection
            </h3>

            <p className="text-sm text-muted leading-[1.75] mt-4">
              Designed an AI-powered intelligent advisory system that combines Convolutional Neural Networks (CNN) with Retrieval-Augmented Generation (RAG) to identify potential health risks from environmental factors. The system analyzes medical and environmental inputs to provide explainable, context-aware health recommendations while improving reliability through retrieval-based reasoning.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {techTags.map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-border bg-bg px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                Conference Submission • Research Project • 2026
              </p>
              <a href="#" className="btn-outline self-start sm:self-auto">
                <FiExternalLink size={14} />
                View Abstract
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
