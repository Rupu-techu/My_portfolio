"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personal, navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [open,       setOpen]       = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map(l => document.querySelector(l.href) as HTMLElement)
      .filter(Boolean);
    const obs = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length) setActiveHash("#" + visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-bg/92 backdrop-blur-md border-b border-border ${scrolled ? "shadow-[0_2px_16px_rgba(30,26,23,0.08)]" : "border-transparent"}`}>
      <div className="max-w-5xl mx-auto px-6 h-[60px] flex items-center justify-between">
        <a href="#hero" className="font-serif text-xl text-primary tracking-tight">{personal.name}</a>
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(l => {
            const active = activeHash === l.href;
            return (
              <a key={l.href} href={l.href} className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 ${active ? "text-primary" : "text-muted hover:text-ink"}`}>
                {l.label}
                {active && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 bg-accent rounded-md -z-10" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                )}
              </a>
            );
          })}
        </nav>
        <button className="md:hidden flex flex-col justify-center gap-[5px] p-1.5" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          <span className={`block w-[21px] h-[1.5px] bg-ink rounded transition-transform duration-300 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-[21px] h-[1.5px] bg-ink rounded transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-[21px] h-[1.5px] bg-ink rounded transition-transform duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="md:hidden overflow-hidden bg-surface border-b border-border">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex items-center px-6 py-3.5 text-sm text-muted border-b border-border last:border-0 hover:text-primary hover:bg-accent/40 transition-colors">{l.label}</a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
