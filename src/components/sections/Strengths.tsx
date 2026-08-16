"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { STRENGTHS } from "@/lib/constants";

export default function Strengths() {
  return (
    <section className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <SectionHeader
        number="07"
        label="Key Strengths"
        title="What sets me apart."
        highlight="sets me apart"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {STRENGTHS.map((strength, i) => (
          <motion.div
            key={strength.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.2 } }}
            className="group p-6 rounded-xl border border-[var(--border-color)] hover:border-accent/30 hover:shadow-md transition-all"
            style={{ background: "var(--card-bg)" }}
          >
            <motion.span
              className="text-3xl mb-4 block"
              whileHover={{ scale: 1.3, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {strength.icon}
            </motion.span>
            <h3 className="text-sm font-black uppercase tracking-wider mb-2 group-hover:text-accent transition-colors">{strength.title}</h3>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {strength.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
