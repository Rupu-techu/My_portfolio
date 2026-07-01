"use client";
import { motion } from "framer-motion";
import { about } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const fadeUp  = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-14 items-start">
          <div>
            <SectionHeader label="About Me" title={<>Driven by curiosity,<br /><em>guided by purpose</em></>} />
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4 mb-7">
              {about.paragraphs.map((p,i) => <motion.p key={i} variants={fadeUp} className="text-muted text-base leading-[1.8]">{p}</motion.p>)}
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap gap-2">
              {about.interests.map(interest => <motion.span key={interest} variants={fadeUp} className="chip">{interest}</motion.span>)}
            </motion.div>
          </div>
          <motion.div initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }} className="space-y-4 lg:pt-[4.5rem]">
            <motion.div variants={fadeUp} whileHover={{ y: -6, scale: 1.01 }} className="bg-surface border border-border rounded-[20px] p-6 shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-200 hover:shadow-[0_16px_42px_rgba(0,0,0,0.11)]">
              <h4 className="font-serif text-lg text-ink mb-2.5">🎯 Career Aspirations</h4>
              <p className="text-sm text-muted leading-[1.75]">{about.career}</p>
            </motion.div>
            <motion.div variants={fadeUp} whileHover={{ y: -6, scale: 1.01 }} className="bg-surface border border-border rounded-[20px] p-6 shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-200 hover:shadow-[0_16px_42px_rgba(0,0,0,0.11)]">
              <h4 className="font-serif text-lg text-ink mb-2.5">🎓 Academic Focus</h4>
              <p className="text-sm text-muted leading-[1.75]">{about.academic}</p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
              {about.stats.map(s => (
                <div key={s.label} className="bg-surface border border-border rounded-[18px] p-5 text-center shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_16px_42px_rgba(0,0,0,0.11)]">
                  <p className="font-serif text-[2rem] leading-none text-primary">{s.value}</p>
                  <p className="text-xs text-muted mt-2 font-medium">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
