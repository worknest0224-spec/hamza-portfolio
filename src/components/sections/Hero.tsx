"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SKILL_TAGS = [
  "Prompt Engineering",
  "Vibe Coding",
  "Leadership",
  "Entrepreneurship",
  "Research & Innovation",
  "Business Management",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-end overflow-hidden pb-12 md:pb-16">
      {/* Animated grain texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      {/* Gradient orbs with float animation */}
      <div className="absolute top-20 right-[10%] w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] pointer-events-none bg-accent animate-float" />
      <div className="absolute bottom-40 left-[5%] w-[300px] h-[300px] rounded-full opacity-8 blur-[80px] pointer-events-none bg-accent/50" style={{ animationDelay: "3s" }} />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 pt-32 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-end">
          {/* Left content */}
          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-px bg-accent" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">
                Portfolio · 2026
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--text-tertiary)" }}>
                / Mumbai, India
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] uppercase"
              >
                Hamza
              </motion.h1>
            </div>
            <div className="overflow-hidden -mt-2">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] uppercase text-accent"
              >
                Tajani
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-2 flex flex-col gap-3"
            >
              <p className="text-lg md:text-xl font-semibold leading-snug max-w-md">
                Pharmacy Student. Entrepreneur.
                <br />
                Leader. <span className="text-accent">AI Builder.</span>
              </p>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                I turn ideas into execution by combining pharmacy, research, entrepreneurship, leadership, and modern AI technology.
              </p>
            </motion.div>

            {/* Tags with stagger */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="flex flex-wrap gap-2 mt-1"
            >
              {SKILL_TAGS.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                  className="px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.1em] font-semibold border border-[var(--border-color)] hover:border-accent hover:text-accent transition-all cursor-default hover:scale-105"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-4 mt-3"
            >
              <a
                href="#journey"
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-accent text-white rounded-full text-xs uppercase tracking-wider font-bold hover:bg-accent-dark transition-all hover:shadow-lg hover:shadow-accent/20"
              >
                Explore My Journey
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#ai"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs uppercase tracking-wider font-bold border-2 border-[var(--border-color)] hover:border-accent hover:text-accent transition-all"
                style={{ color: "var(--text-secondary)" }}
              >
                AI & Vibe Coding
              </a>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="relative flex-shrink-0 mx-auto lg:mx-0 hidden sm:block"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-[360px] lg:w-[320px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
              <Image
                src="/hamza.jpg"
                alt="Hamza Mohammed Faruk Tajani"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 rounded-2xl border-2 border-accent/20" />
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-accent/10 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-full h-full rounded-2xl border border-accent/5 -z-20" />
          </motion.div>
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 pt-8 border-t border-[var(--border-color)]"
        >
          {[
            { label: "Education", value: "B.Pharm, Sem V", sub: "H.K. College of Pharmacy" },
            { label: "Current Role", value: "Manager", sub: "Bellapaso" },
            { label: "Focus", value: "AI & Prompt Eng.", sub: "Vibe Coding" },
            { label: "Tagline", value: "Turning Ideas", sub: "Into Execution", accent: true },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.3 + i * 0.1 }}
            >
              <p className="text-[10px] uppercase tracking-[0.2em] mb-2 text-accent font-bold">{item.label}</p>
              <p className={`text-sm font-bold ${item.accent ? "text-accent" : ""}`}>{item.value}</p>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-tertiary)" }}>{item.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border-2 border-[var(--border-color)] flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-0.5 h-2.5 rounded-full bg-accent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
