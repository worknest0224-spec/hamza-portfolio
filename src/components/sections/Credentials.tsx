"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

const CREDENTIALS = [
  {
    title: "CA Office Certificate",
    category: "Professional",
    description: "Certificate from CA office experience — TDS filing, ITR filing, banking management, and financial administration.",
    hasDocument: true,
  },
  {
    title: "Avishkar Participation",
    category: "Academic",
    description: "Participation in the Avishkar convention — exposure to research methodology, project planning, and scientific thinking.",
    hasDocument: true,
  },
  {
    title: "Scientific Review Article",
    category: "Academic",
    description: "Authored scientific review article — literature searching, analysis, scientific writing, and systematic presentation.",
    hasDocument: true,
  },
  {
    title: "Lions Club — President",
    category: "Leadership",
    description: "Leadership role as President of Lions Club — event planning, team coordination, delegation, and strategic decision-making.",
    hasDocument: true,
  },
  {
    title: "Hackathon Participation",
    category: "Academic",
    description: "Participation in hackathon — rapid problem-solving, teamwork, and innovative thinking under pressure.",
    hasDocument: true,
  },
];

export default function Credentials() {
  return (
    <section id="credentials" className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <SectionHeader
        number="09"
        label="Credentials"
        title="Documents & achievements."
        highlight="achievements"
        description="Verified credentials and participation records. Click to view documents."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CREDENTIALS.map((cred, i) => (
          <motion.div
            key={cred.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group p-5 rounded-xl border border-[var(--border-color)] hover:border-accent/30 hover:shadow-md transition-all"
            style={{ background: "var(--card-bg)" }}
          >
            <div className="flex items-start justify-between mb-3">
              <span
                className="text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold border border-[var(--border-color)]"
                style={{ color: "var(--text-tertiary)" }}
              >
                {cred.category}
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-sm font-black uppercase tracking-wider mb-2 group-hover:text-accent transition-colors">{cred.title}</h3>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {cred.description}
            </p>
            <div className="mt-3">
              <span className="text-[10px] uppercase tracking-wider font-medium" style={{ color: "var(--text-tertiary)" }}>
                Document coming soon
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-xs mt-8 text-center"
        style={{ color: "var(--text-tertiary)" }}
      >
        Documents will be linked here once uploaded. Click any card to preview.
      </motion.p>
    </section>
  );
}
