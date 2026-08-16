"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { SKILL_CATEGORIES } from "@/lib/constants";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <SectionHeader
        number="06"
        label="Skills & Tools"
        title="The arsenal."
        highlight="arsenal"
        description="Built through real experience. Not a buzzword list."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SKILL_CATEGORIES.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={`p-5 rounded-xl border transition-all ${
              category.title === "Currently Learning"
                ? "border-accent/20 bg-[var(--highlight)] hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
                : "border-[var(--border-color)] bg-[var(--card-bg)] hover:border-accent/30 hover:shadow-md"
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <motion.span
                className="text-lg"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                {category.icon}
              </motion.span>
              <h3 className="text-xs font-black uppercase tracking-wider">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 rounded text-[10px] uppercase tracking-wider font-medium"
                  style={{
                    background: "var(--bg-tertiary)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
