"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { TIMELINE_ITEMS } from "@/lib/constants";

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "leadership", label: "Leadership" },
  { key: "entrepreneurship", label: "Entrepreneurship" },
  { key: "business", label: "Business" },
  { key: "research", label: "Research" },
  { key: "ai", label: "AI & Tech" },
] as const;

const CATEGORY_COLORS: Record<string, string> = {
  leadership: "#d4a853",
  entrepreneurship: "#f97316",
  business: "#a78bfa",
  research: "#38bdf8",
  ai: "#f472b6",
};

export default function Journey() {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all"
    ? TIMELINE_ITEMS
    : TIMELINE_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="journey" className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <SectionHeader
        number="02"
        label="Journey"
        title="From discipline leader to AI builder."
        highlight="AI builder"
        description="Every step was intentional. Every role earned."
      />

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap gap-2 mb-14"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            className={`px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.15em] font-bold transition-all ${
              filter === cat.key
                ? "bg-accent text-white shadow-md shadow-accent/20"
                : "border border-[var(--border-color)] hover:border-accent hover:text-accent"
            }`}
            style={filter !== cat.key ? { color: "var(--text-tertiary)" } : undefined}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        <div
          className="absolute left-4 md:left-6 top-0 bottom-0 w-px"
          style={{ background: "var(--border-color)" }}
        />

        <AnimatePresence mode="popLayout">
          <div className="space-y-1">
            {filtered.map((item, i) => (
              <motion.div
                key={`${item.title}-${item.year}`}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="relative pl-14 md:pl-20 py-3 group"
              >
                <motion.div
                  className="absolute left-[11px] md:left-[19px] top-5 w-3 h-3 rounded-full border-2 border-[var(--bg)]"
                  style={{ background: CATEGORY_COLORS[item.category] || "var(--color-accent)" }}
                  whileHover={{ scale: 2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />

                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-4 md:p-5 rounded-xl border border-[var(--border-color)] group-hover:border-accent/30 transition-colors"
                  style={{ background: "var(--card-bg)" }}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-1.5">
                    <span
                      className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                      style={{
                        background: `${CATEGORY_COLORS[item.category]}15`,
                        color: CATEGORY_COLORS[item.category],
                      }}
                    >
                      {item.year}
                    </span>
                    <h3 className="text-sm font-bold uppercase tracking-wide">{item.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {item.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
