"use client";

interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
}

export default function Tag({ children, variant = "default" }: TagProps) {
  const styles = {
    default: "bg-[var(--bg-tertiary)] text-[var(--text-secondary)]",
    accent: "bg-accent/10 text-accent",
    outline: "border border-[var(--border-color)] text-[var(--text-secondary)]",
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${styles[variant]}`}>
      {children}
    </span>
  );
}
