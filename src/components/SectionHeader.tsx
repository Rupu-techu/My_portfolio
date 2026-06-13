"use client";
import { motion } from "framer-motion";

interface Props {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  noDivider?: boolean;
}

export default function SectionHeader({ label, title, subtitle, align = "left", noDivider = false }: Props) {
  const center = align === "center";
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.45 } }} viewport={{ once: true }} className="text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-secondary mb-3">
        {label}
      </motion.p>
      <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.05 } }} viewport={{ once: true }} className="font-serif text-3xl md:text-[2.35rem] text-ink leading-[1.18] text-balance">
        {title}
      </motion.h2>
      {!noDivider && (
        <motion.div initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1, transition: { duration: 0.45, delay: 0.1 } }} viewport={{ once: true }} style={{ originX: center ? 0.5 : 0 }} className={`w-10 h-[3px] bg-primary rounded-full mt-5 ${center ? "mx-auto" : ""}`} />
      )}
      {subtitle && (
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.45, delay: 0.15 } }} viewport={{ once: true }} className={`text-muted text-base leading-relaxed mt-4 ${center ? "max-w-xl mx-auto" : "max-w-xl"}`}>
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
