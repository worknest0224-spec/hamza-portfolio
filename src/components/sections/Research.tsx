"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

export default function Research() {
  return (
    <section id="research" className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <SectionHeader
        number="04"
        label="Research & Pharmacy"
        title="Scientific mind. Builder's instinct."
        highlight="Builder's instinct"
        description="Pharmacy is the foundation. Research sharpens the edge."
      />

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
          className="p-6 md:p-8 rounded-2xl border border-accent/20 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all"
          style={{ background: "var(--highlight)" }}
        >
          <h3 className="text-lg font-black uppercase tracking-wide mb-1">Avishkar Research</h3>
          <p className="text-xs text-accent font-semibold mb-4">Research Convention</p>
          <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
            Participated in the Avishkar Research Convention — developed skills in problem identification, research methodology, literature exploration, project planning, data collection, and scientific thinking.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {["Problem Identification", "Research Methodology", "Literature Exploration", "Project Planning", "Data Collection", "Innovation", "Scientific Thinking", "Research Presentation"].map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.04 }}
                className="px-2 py-1 rounded text-[10px] uppercase tracking-wider font-medium bg-accent/10 text-accent"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
          className="p-6 md:p-8 rounded-2xl border border-[var(--border-color)] hover:border-accent/30 hover:shadow-md transition-all"
          style={{ background: "var(--card-bg)" }}
        >
          <h3 className="text-lg font-black uppercase tracking-wide mb-1">Scientific Review Article</h3>
          <p className="text-xs font-semibold mb-4" style={{ color: "var(--text-tertiary)" }}>Academic Publication</p>
          <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
            Authored a scientific review article — literature searching, reading and analyzing research papers, scientific writing, proper referencing, critical analysis, and systematic presentation of scientific information.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {["Literature Searching", "Paper Analysis", "Scientific Writing", "Referencing", "Critical Analysis", "Systematic Presentation"].map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.04 }}
                className="px-2 py-1 rounded text-[10px] uppercase tracking-wider font-medium border border-[var(--border-color)]"
                style={{ color: "var(--text-tertiary)" }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Pharmacy context */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8 p-8 md:p-10 rounded-2xl border border-[var(--border-color)] text-center relative overflow-hidden"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        <p className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] mb-4">Currently pursuing</p>
        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">Bachelor of Pharmacy</h3>
        <p className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
          H.K. College of Pharmacy, Mumbai — Semester V
        </p>
        <p className="text-xs mt-3 max-w-md mx-auto" style={{ color: "var(--text-tertiary)" }}>
          Building a pharmaceutical foundation while combining it with research, entrepreneurship, and modern technology.
        </p>
      </motion.div>
    </section>
  );
}
