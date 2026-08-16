"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <SectionHeader
        number="01"
        label="About"
        title="I don't pick one lane. I build the road."
        highlight="build the road"
      />

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            B.Pharm student at H.K. College of Pharmacy, Mumbai — but that&apos;s just the foundation. I operate at the intersection of pharmacy, research, entrepreneurship, leadership, marketing, business management, and artificial intelligence.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            My edge? I take an idea, break it down, build the plan, rally the people, leverage technology, and make it happen. I don&apos;t just think about things — I execute.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
            Co-founded a startup in 12th standard. Led as President of Lions Club. Managing a footwear brand. Engineering AI prompts to build real products. Every move is intentional.
          </p>
        </motion.div>

        <div className="space-y-4">
          {[
            { label: "What drives me", value: "Turning concepts into tangible outcomes. Not talking — doing." },
            { label: "How I think", value: "Identify the problem. Plan the solution. Use every resource available. Execute without hesitation." },
            { label: "Current focus", value: "AI-assisted development, prompt engineering, and scaling business operations." },
            { label: "Philosophy", value: "I am not defined by a single field — I combine disciplines to dominate." },
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
