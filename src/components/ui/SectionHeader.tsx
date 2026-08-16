"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
  highlight?: string;
  description?: string;
}

export default function SectionHeader({ number, label, title, highlight, description }: SectionHeaderProps) {
  const words = title.split(" ");

  return (
    <div className="mb-16 md:mb-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-6"
      >
        <div className="w-8 h-px bg-accent" />
        <p className="text-xs font-mono tracking-[0.2em] uppercase text-accent font-medium">
          {number} / {label}
        </p>
      </motion.div>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight uppercase">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className={`inline-block mr-[0.3em] ${highlight && word.includes(highlight.split(" ")[0]) ? "text-accent" : ""}`}
          >
            {highlight && title.includes(highlight) && highlight.split(" ").some(hw => word === hw) ? (
              <span className="text-accent">{word}</span>
            ) : (
              word
            )}
          </motion.span>
        ))}
      </h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5 text-base md:text-lg max-w-2xl leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
