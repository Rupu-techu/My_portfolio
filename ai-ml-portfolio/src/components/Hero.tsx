"use client";
import { motion } from "framer-motion";
import { personal, heroStats } from "@/lib/data";
import { FiDownload, FiArrowRight } from "react-icons/fi";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-[72px] pb-12 bg-bg overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className="inline-flex items-center gap-2 bg-surface border border-border rounded-pill px-4 py-1.5 text-xs font-semibold text-secondary mb-7 shadow-card">
              <span className="w-[7px] h-[7px] rounded-full bg-[#4a9c6d] animate-pulse-dot" />
              {personal.tagline}
            </motion.div>
            <motion.h1 variants={item} className="font-serif text-[3.4rem] md:text-[4rem] leading-[1.04] text-ink mb-2 tracking-tight">
              {personal.name}
            </motion.h1>
            <motion.p variants={item} className="text-lg text-secondary font-medium mb-1">{personal.title}</motion.p>
            <motion.p variants={item} className="text-sm text-muted mb-6">
              {personal.degree} | GPA {personal.gpa} | {personal.gradYear}
            </motion.p>
            <motion.p variants={item} className="text-base text-muted leading-[1.8] max-w-[500px] mb-9">{personal.bio}</motion.p>
            <motion.div variants={item} className="flex flex-wrap gap-3">
              <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <FiDownload size={15} /> Download Resume
              </a>
              <a href="#contact" className="btn-outline">
                Get in Touch <FiArrowRight size={14} />
              </a>
            </motion.div>
            <motion.div variants={item} className="flex flex-wrap gap-5 mt-9 pt-7 border-t border-border">
              {heroStats.map(s => (
                <div key={s.label}>
                  <span className="font-serif text-2xl text-primary">{s.value}</span>
                  <span className="block text-xs text-muted mt-0.5">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.93 }} animate={{ opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.65 } }} className="flex justify-center md:justify-end order-first md:order-last">
            <div className="relative">
              <div className="absolute inset-[-10px] rounded-[28px] border border-border/60" />
              <div className="relative w-[260px] md:w-[300px] h-[320px] md:h-[370px] rounded-[22px] flex items-center justify-center overflow-hidden shadow-card-hover" style={{ background: "linear-gradient(145deg,#EAE0D8 0%,#D4C2B0 100%)" }}>
                <span className="font-serif text-[6rem] text-primary/25 select-none">AI</span>
                <div className="absolute top-4 right-4 grid grid-cols-3 gap-1.5">
                  {Array.from({ length: 9 }).map((_, i) => <span key={i} className="w-[4px] h-[4px] rounded-full bg-primary/20" />)}
                </div>
              </div>
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.75 } }} className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-surface border border-border rounded-pill px-5 py-2 text-xs font-semibold text-primary whitespace-nowrap shadow-card-md">
                LOC {personal.location}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
