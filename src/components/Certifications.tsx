"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { certifications, personal } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import { FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";

function CertificationCard({ cert, index }: { cert: (typeof certifications)[number]; index: number }) {
  return (
    <motion.article
      key={`${cert.title}-${cert.issuer}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.45, delay: index * 0.05 } }}
      viewport={{ once: true }}
      className="bg-surface border border-border rounded-card p-5 shadow-card hover:shadow-card-md transition-shadow duration-300"
    >
      <div className="w-10 h-10 bg-bg border border-border rounded-xl flex items-center justify-center text-lg text-primary mb-4">
        {cert.icon}
      </div>
      <div className="inline-flex items-center rounded-full border border-accent-border bg-bg px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-widest text-primary mb-3">
        {cert.credentialType}
      </div>
      <h3 className="font-semibold text-sm text-ink">{cert.title}</h3>
      <p className="text-xs text-secondary mt-1">{cert.issuer}</p>
      <a
        href={cert.url ?? personal.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary mt-4 hover:underline"
      >
        View Credential <FiExternalLink size={12} />
      </a>
    </motion.article>
  );
}

export default function CertificationsSection() {
  const [showMore, setShowMore] = useState(false);
  const visibleCertifications = certifications.slice(0, 3);
  const hiddenCertifications = certifications.slice(3);

  return (
    <section id="certifications" className="pt-24 pb-8 bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="Certifications"
          title="Featured certifications"
          subtitle="A curated selection of credentials that best represent my current technical growth."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {visibleCertifications.map((cert, index) => (
            <CertificationCard key={`${cert.title}-${cert.issuer}`} cert={cert} index={index} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowMore(value => !value)}
            className="btn-outline"
            aria-expanded={showMore}
            aria-controls="more-certifications"
          >
            {showMore ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
            {showMore ? "Show Less Certifications" : "Show More Certifications"}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {showMore && (
            <motion.div
              id="more-certifications"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {hiddenCertifications.map((cert, index) => (
                  <CertificationCard key={`${cert.title}-${cert.issuer}`} cert={cert} index={index} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
