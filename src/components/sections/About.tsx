"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <SectionHeader
        number="01"
        label="About Me"
        title="B.Pharm student. Builder by instinct."
        highlight="Builder by instinct"
      />

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="p-5 rounded-xl border border-accent/20" style={{ background: "var(--highlight)" }}>
            <p className="text-[10px] uppercase tracking-[0.2em] mb-2 text-accent font-bold">Academic Foundation</p>
            <p className="text-lg font-bold">Bachelor of Pharmacy (B.Pharm)</p>
            <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
              H.K. College of Pharmacy, Mumbai — Semester V
            </p>
          </div>

          <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            I am a B.Pharm student with a deep interest in pharmaceutical sciences, research methodology, and scientific thinking. Pharmacy is my academic core — it shapes how I approach problems: methodically, rigorously, and with attention to detail.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Beyond pharmacy, I&apos;ve independently built experience in entrepreneurship, leadership, business management, and AI-assisted development. These are separate pursuits that complement my pharmaceutical foundation.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
            Co-founded a startup in 12th standard. Led as President of Lions Club. Currently managing a footwear brand. Engineering AI prompts to build real products. Every move is intentional — and separate from my academic work.
          </p>
        </motion.div>

        <div className="space-y-4">
          {[
            { label: "Who I am", value: "A B.Pharm student who combines pharmaceutical knowledge with entrepreneurship, leadership, and modern technology — each pursued independently." },
            { label: "What drives me", value: "Turning concepts into tangible outcomes. Not talking — doing. Pharmacy gives me the scientific mind; everything else gives me the execution muscle." },
            { label: "How I think", value: "Identify the problem. Plan the solution. Use every resource available. Execute without hesitation." },
            { label: "Current focus", value: "Completing B.Pharm while simultaneously growing in AI-assisted development, prompt engineering, and business operations." },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              whileHover={{ x: 6, borderColor: "rgba(164, 122, 30, 0.3)" }}
              className="p-5 rounded-xl border border-[var(--border-color)] transition-all cursor-default"
              style={{ background: "var(--card-bg)" }}
            >
              <p className="text-[10px] uppercase tracking-[0.2em] mb-2 text-accent font-bold">
                {item.label}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {item.value}
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-6 rounded-xl border border-accent/30"
            style={{ background: "var(--highlight)" }}
          >
            <p className="text-2xl font-black uppercase tracking-tight">
              &ldquo;Turning Ideas Into <span className="text-accent">Execution</span>.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
