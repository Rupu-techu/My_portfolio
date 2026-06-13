"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { contactLinks } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiSend } from "react-icons/fi";

function getIcon(label: string) {
  if (label === "Email") return <FiMail size={18} />;
  if (label === "Phone") return <span className="text-sm font-semibold">P</span>;
  if (label === "LinkedIn") return <FiLinkedin size={18} />;
  if (label === "GitHub") return <FiGithub size={18} />;
  return <FiMapPin size={18} />;
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="Get in Touch" title={<>Let&apos;s build something<br /><em>meaningful together</em></>} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }} viewport={{ once: true }}>
            <p className="text-muted text-base leading-[1.75] mb-7">Whether you&apos;re a recruiter, researcher, or collaborator, I&apos;d love to connect. I&apos;m open to internships, research opportunities, hackathons, and project discussions in AI, ML, healthcare AI, and security.</p>
            <div className="space-y-3">
              {contactLinks.map(cl => {
                const inner = (
                  <div className="flex items-center gap-4 bg-bg border border-border rounded-card p-4 transition-all duration-200 hover:border-primary hover:bg-accent group cursor-pointer">
                    <div className="w-10 h-10 bg-surface border border-border rounded-xl flex items-center justify-center text-muted group-hover:text-primary shrink-0 transition-colors">
                      {getIcon(cl.label)}
                    </div>
                    <div>
                      <strong className="block text-sm font-semibold text-ink">{cl.label}</strong>
                      <span className="text-xs text-muted">{cl.value}</span>
                    </div>
                  </div>
                );
                return cl.href
                  ? <a key={cl.label} href={cl.href} target="_blank" rel="noopener noreferrer">{inner}</a>
                  : <div key={cl.label}>{inner}</div>;
              })}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }} viewport={{ once: true }} className="bg-bg border border-border rounded-2xl p-7">
            <h3 className="font-serif text-xl text-ink mb-5">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-ink mb-1.5">Name</label>
                <input type="text" required placeholder="Enter your name" className="w-full bg-surface border-[1.5px] border-border rounded-lg px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink mb-1.5">Email</label>
                <input type="email" required placeholder="Enter your email" className="w-full bg-surface border-[1.5px] border-border rounded-lg px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink mb-1.5">Subject</label>
                <input type="text" required placeholder="Enter a subject" className="w-full bg-surface border-[1.5px] border-border rounded-lg px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink mb-1.5">Message</label>
                <textarea required rows={4} placeholder="Enter your message" className="w-full bg-surface border-[1.5px] border-border rounded-lg px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-primary transition-colors resize-y" />
              </div>
              <button type="submit" className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-pill text-sm font-semibold transition-all duration-300 ${sent ? "bg-[#4a7c59] text-white" : "btn-primary"}`}>
                <FiSend size={14} />{sent ? "Message Sent" : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
