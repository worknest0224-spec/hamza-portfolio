"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

const CREDENTIALS = [
  {
    title: "CA Office Certificate",
    category: "Professional",
    description: "Certificate from CA office experience — TDS filing, RTI filing, banking management, and financial administration.",
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
  const [selectedCredential, setSelectedCredential] = useState<string | null>(null);

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
            onClick={() => setSelectedCredential(cred.title)}
            className="group p-5 rounded-xl border border-[var(--border-color)] hover:border-accent/30 hover:shadow-md transition-all cursor-pointer"
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
            <div className="mt-3 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-accent/50" />
              <span className="text-[10px] uppercase tracking-wider font-medium text-accent">
                View Document
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedCredential && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedCredential(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-lg p-8 rounded-2xl border border-[var(--border-color)]"
              style={{ background: "var(--bg)" }}
            >
              <button
                onClick={() => setSelectedCredential(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center border border-[var(--border-color)] hover:border-accent hover:text-accent transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-3">Document Preview</p>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4">{selectedCredential}</h3>
              <div className="w-full h-64 rounded-xl border border-[var(--border-color)] flex items-center justify-center" style={{ background: "var(--bg-secondary)" }}>
                <div className="text-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mx-auto mb-3 text-accent">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-xs font-medium" style={{ color: "var(--text-tertiary)" }}>
                    Document will be available soon
                  </p>
                  <p className="text-[10px] mt-1" style={{ color: "var(--text-tertiary)" }}>
                    Files to be uploaded
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
