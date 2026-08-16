"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

const EXPERIENCES = [
  {
    title: "Hijab Couture",
    role: "Co-founder",
    period: "Started in 12th Standard · ~3 Years",
    description: "Built a startup from zero. Operated and scaled it for three years. Learned business development, marketing, sales, customer handling, product management, and brand building — the hard way.",
    skills: ["Business Development", "Marketing", "Sales", "Customer Handling", "Product Management", "Brand Building", "Business Strategy", "Execution"],
    highlight: true,
  },
  {
    title: "Lions Club",
    role: "Vice President → President",
    period: "Progressive Leadership",
    description: "Climbed from Vice President to President. Led event planning, team coordination, delegation, project management, and strategic decision-making for the entire organization.",
    skills: ["Team Leadership", "Event Planning", "Delegation", "Project Management", "Decision-making", "Execution"],
    highlight: true,
  },
  {
    title: "Affiliate Marketing",
    role: "Digital Marketer",
    period: "~6 Months",
    description: "Explored digital marketing, online promotion, customer acquisition, and conversion-oriented marketing through affiliate business models.",
    skills: ["Digital Marketing", "Online Promotion", "Customer Acquisition", "Social Media", "Conversion Marketing"],
    highlight: false,
  },
  {
    title: "Class Representative",
    role: "CR — Semester II through V (Current)",
    period: "4 Consecutive Semesters",
    description: "Elected repeatedly. Academic coordination, faculty communication, managing deadlines, organizing activities, and taking full responsibility for the class.",
    skills: ["Academic Coordination", "Student Liaison", "Deadline Management", "Organization", "Responsibility"],
    highlight: false,
  },
];

export default function Entrepreneurship() {
  return (
    <section id="experience" className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <SectionHeader
        number="03"
        label="Experience"
        title="Built things. Led people. Made it happen."
        highlight="Made it happen"
        description="From startups to student leadership to business management — results at every stage."
      />

      <div className="grid gap-4">
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className={`p-6 md:p-8 rounded-2xl border transition-all ${
              exp.highlight
                ? "border-accent/20 bg-[var(--highlight)] hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
                : "border-[var(--border-color)] bg-[var(--card-bg)] hover:border-accent/30 hover:shadow-md"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-black uppercase tracking-wide">{exp.title}</h3>
                  {exp.highlight && (
                    <span className="text-[9px] px-2.5 py-0.5 rounded-full bg-accent/15 text-accent font-bold uppercase tracking-wider">
                      Key
                    </span>
                  )}
                </div>
                <p className="text-sm font-semibold text-accent">{exp.role}</p>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: "var(--text-tertiary)" }}>
                {exp.period}
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded text-[10px] uppercase tracking-wider font-medium border border-[var(--border-color)]"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Business Experience */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16"
      >
        <h3 className="text-2xl font-black uppercase tracking-wide mb-8">Business & Professional</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Bellapaso",
              role: "Manager (Current)",
              desc: "Women's footwear manufacturing brand. Business management, digital marketing, product operations, customer strategy, and end-to-end coordination.",
            },
            {
              title: "Indian Handicraft",
              role: "Marketing",
              desc: "Marketing strategy, product promotion, brand positioning, business communication, and digital marketing.",
            },
            {
              title: "CA Office",
              role: "Assistant",
              desc: "TDS filing, RTI filing, banking management, documentation, financial administration, and professional communication.",
            },
          ].map((biz, i) => (
            <motion.div
              key={biz.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-5 rounded-xl border border-[var(--border-color)] hover:border-accent/30 transition-colors hover:shadow-md"
              style={{ background: "var(--card-bg)" }}
            >
              <h4 className="font-bold uppercase tracking-wide mb-1">{biz.title}</h4>
              <p className="text-xs text-accent font-semibold mb-3">{biz.role}</p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {biz.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Extra roles */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-8 grid md:grid-cols-2 gap-4"
      >
        <div className="p-5 rounded-xl border border-[var(--border-color)]" style={{ background: "var(--card-bg)" }}>
          <h4 className="font-bold uppercase tracking-wide mb-1">Culture Committee</h4>
          <p className="text-xs text-accent font-semibold mb-2">Member · H.K. College of Pharmacy</p>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
            Cultural event planning, creative coordination, student engagement, and event execution.
          </p>
        </div>
        <div className="p-5 rounded-xl border border-[var(--border-color)]" style={{ background: "var(--card-bg)" }}>
          <h4 className="font-bold uppercase tracking-wide mb-1">DLLE</h4>
          <p className="text-xs text-accent font-semibold mb-2">Member</p>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
            Community engagement, teamwork, coordination, and social initiatives through institutional activities.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
