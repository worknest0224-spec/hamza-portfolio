"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-px bg-accent" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">The Bottom Line</span>
          <div className="w-12 h-px bg-accent" />
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05] mb-6"
        >
          I am not defined
          <br />
          by a single <span className="text-accent">field</span>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base max-w-lg mx-auto leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          I combine pharmacy, research, business, leadership, and technology to turn ideas into execution.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-8"
        >
          <span className="inline-block px-6 py-3 rounded-full text-xs uppercase tracking-[0.15em] font-black border border-accent text-accent hover:bg-accent hover:text-white transition-colors cursor-default">
            Turning Ideas Into Execution
          </span>
        </motion.div>
      </motion.div>

      {/* Footer bar */}
      <div className="pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[10px] uppercase tracking-[0.2em] font-medium" style={{ color: "var(--text-tertiary)" }}>
          &copy; 2026 Hamza Mohammed Faruk Tajani
        </p>
        <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--text-tertiary)" }}>
          Mumbai, India
        </p>
        <a
          href="#hero"
          className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent hover:underline"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
