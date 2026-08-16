"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

const WORKFLOW_STEPS = [
  { label: "Identify", desc: "Spot the real problem" },
  { label: "Analyze", desc: "Break it into clear requirements" },
  { label: "Prompt", desc: "Craft a precise AI prompt" },
  { label: "Execute", desc: "Generate output with AI" },
  { label: "Refine", desc: "Iterate and validate" },
  { label: "Deliver", desc: "Ship the final result" },
];

export default function AISection() {
  return (
    <section id="ai" className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <SectionHeader
        number="05"
        label="AI & Prompt Engineering"
        title="AI is my execution engine."
        highlight="execution engine"
        description="Not just understanding AI — wielding it to build, research, design, plan, and solve real problems."
      />

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Workflow diagram */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="rounded-2xl border border-[var(--border-color)] p-6 md:p-8 relative overflow-hidden"
            style={{ background: "var(--card-bg)" }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-[60px] bg-accent" />
            <p className="text-[10px] font-mono text-accent mb-8 uppercase tracking-[0.2em] font-bold">
              Idea → Execution Pipeline
            </p>

            <div className="space-y-0">
              {WORKFLOW_STEPS.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex items-start gap-4 group"
                >
                  {i < WORKFLOW_STEPS.length - 1 && (
                    <div className="absolute left-[18px] top-10 w-px h-full bg-accent/20" />
                  )}

                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="relative z-10 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-black bg-accent/10 text-accent border border-accent/30 group-hover:bg-accent group-hover:text-white transition-colors"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.div>

                  <div className="pb-6">
                    <h4 className="text-sm font-black uppercase tracking-wide">{step.label}</h4>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-2 p-4 rounded-xl border border-accent/30 text-center"
              style={{ background: "var(--highlight)" }}
            >
              <p className="text-sm font-black uppercase tracking-wide text-accent">
                From idea to reality — AI at every step
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* AI skills description */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-xl font-black uppercase tracking-wide">Prompt Engineering</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Crafting detailed, structured prompts that turn complex requirements into actionable AI outputs. Research, design, content, business ideation — AI becomes the tool, and the prompt is the blueprint.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Detailed Prompts", "Prompt Optimization", "Complex Requirements", "AI Research", "AI Design", "Content Creation", "Business Ideation", "Workflow Automation"].map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.04 }}
                  className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold bg-accent/10 text-accent"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="h-px" style={{ background: "var(--border-color)" }} />

          <div className="space-y-4">
            <h3 className="text-xl font-black uppercase tracking-wide">Vibe Coding</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Transforming ideas into digital experiences through AI-assisted development. I know what needs to be built, describe the outcome clearly, and use AI to make it real.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Landing Pages", "Website Concepts", "UI/UX Planning", "AI-assisted Coding", "Iterative Development", "Digital Products"].map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.04 }}
                  className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold border border-accent/30 text-accent"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="h-px" style={{ background: "var(--border-color)" }} />

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="p-4 rounded-xl border border-[var(--border-color)] transition-all hover:border-accent/30"
            style={{ background: "var(--bg-secondary)" }}
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-2">Currently Learning</p>
            <p className="text-sm font-bold">Python</p>
            <p className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>
              Building programming foundations to combine with AI, prompt engineering, research, and automation.
            </p>
            <div className="mt-3 h-1.5 rounded-full overflow-hidden" style={{ background: "var(--border-color)" }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "25%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                className="h-full rounded-full bg-accent"
              />
            </div>
            <p className="text-[10px] mt-1.5 uppercase tracking-wider font-medium" style={{ color: "var(--text-tertiary)" }}>Beginner — In Progress</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
