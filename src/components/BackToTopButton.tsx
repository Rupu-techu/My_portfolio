"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

type Props = {
  projectsSectionId?: string;
};

export default function BackToTopButton({ projectsSectionId = "projects" }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateVisibility = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const projectsSection = document.getElementById(projectsSectionId);

      if (scrollY <= 8) {
        setVisible(false);
        return;
      }

      if (!projectsSection) {
        setVisible(false);
        return;
      }

      const projectsBottom = projectsSection.getBoundingClientRect().bottom;
      const belowProjects = projectsBottom <= 0;

      setVisible(belowProjects);
    };

    const onScroll = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateVisibility);
    };

    const onForceShow = () => setVisible(true);

    updateVisibility();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateVisibility);
    window.addEventListener("portfolio:back-to-top-force-open", onForceShow as EventListener);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateVisibility);
      window.removeEventListener("portfolio:back-to-top-force-open", onForceShow as EventListener);
    };
  }, [projectsSectionId]);

  const scrollToHero = () => {
    const hero = document.getElementById("hero");

    if (hero) {
      hero.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to Top"
          title="Back to Top"
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 14, scale: 0.96 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3, scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          onClick={scrollToHero}
          className="group fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-14 h-14 rounded-full border border-[#cfb293] bg-gradient-to-br from-[#f1e4d6] to-[#d8bca0] text-primary shadow-[0_12px_30px_rgba(90,58,34,0.18)] flex items-center justify-center transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(90,58,34,0.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8c6346] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f0eb]"
        >
          <span className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#cfb293] bg-[#f7efe6] px-3 py-1 text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-[#7c5c45] shadow-[0_10px_20px_rgba(90,58,34,0.12)] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
            Back to Top
          </span>
          <FiArrowUp size={18} strokeWidth={2.2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
