"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

const PILLARS = [
  { label: "Pharmacy & Research", desc: "Scientific knowledge as the foundation" },
  { label: "Entrepreneurship", desc: "Business thinking and execution" },
  { label: "Leadership", desc: "Coordinating people and driving outcomes" },
  { label: "AI & Technology", desc: "Modern tools for modern problems" },
];

export default function Direction() {
  return (
    <section id="direction" className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <SectionHeader
        number="08"
        label="Career Direction"
        title="The endgame."
        highlight="endgame"
        description="Pharmacy + Research + Entrepreneurship + AI + Technology — converging toward real-world impact."
      />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            The direction is clear: combine pharmaceutical knowledge, scientific research, entrepreneurial instinct, leadership ability, and modern technology to identify real-world problems and build practical solutions.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Every experience — from co-founding a startup to managing a business, from leading a club to engineering AI prompts — feeds into this vision. The goal isn&apos;t a title. It&apos;s the ability to see problems and solve them.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-xl border border-accent/30 relative overflow-hidden"
            style={{ background: "var(--highlight)" }}
          >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-accent via-accent/50 to-transparent" />
            <p className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] mb-3">Vision</p>
            <p className="text-xl md:text-2xl font-black uppercase tracking-tight leading-snug">
              Identify problems. Use science, business, leadership & tech to <span className="text-accent">solve them</span>.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -3, borderColor: "rgba(164, 122, 30, 0.3)", transition: { duration: 0.2 } }}
              className="p-5 rounded-xl border border-[var(--border-color)] transition-all hover:shadow-md"
              style={{ background: "var(--card-bg)" }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs font-black mb-3 border border-accent/20"
              >
                {String(i + 1).padStart(2, "0")}
              </motion.div>
              <h4 className="text-xs font-black uppercase tracking-wider mb-1">{pillar.label}</h4>
              <p className="text-[11px] leading-relaxed" style={{ color: "var(--text-tertiary)" }}>{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
