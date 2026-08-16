"use client";

export default function Marquee({ words }: { words: string[] }) {
  const content = words.join(" · ");
  return (
    <div className="py-6 overflow-hidden border-y border-[var(--border-light)]" style={{ background: "var(--bg-secondary)" }}>
      <div className="animate-marquee whitespace-nowrap flex">
        {[0, 1].map((n) => (
          <span
            key={n}
            className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold mx-4"
            style={{ color: "var(--text-tertiary)" }}
          >
            {content} · {content} · {content} ·&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}
