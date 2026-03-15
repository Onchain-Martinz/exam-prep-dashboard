"use client";

import { motion } from "framer-motion";

import { useTheme } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";

const options = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" }
] as const;

export function ThemeToggle() {
  const { mounted, setTheme, theme } = useTheme();

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="inline-grid h-8 min-w-[7.6rem] grid-cols-2 rounded-full border border-border bg-secondary p-0.5 shadow-card"
      >
        <span className="rounded-full bg-card/80" />
        <span />
      </div>
    );
  }

  return (
    <div
      aria-label="Theme mode"
      className="inline-grid shrink-0 grid-cols-2 rounded-full border border-border bg-secondary p-0.5 shadow-card"
      role="group"
    >
      {options.map((option) => {
        const active = theme === option.value;

        return (
          <button
            key={option.value}
            aria-label={`Switch to ${option.label.toLowerCase()} mode`}
            aria-pressed={active}
            className={cn(
              "relative inline-flex min-h-8 min-w-[3.8rem] items-center justify-center overflow-hidden rounded-full px-3 text-[12px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
              active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
            onClick={() => setTheme(option.value)}
            type="button"
          >
            {active ? (
              <motion.span
                layoutId="theme-toggle-indicator"
                className="absolute inset-0 rounded-full bg-card shadow-card dark:bg-[rgba(139,92,246,0.16)] dark:shadow-[0_0_0_1px_rgba(139,92,246,0.26),0_10px_22px_rgba(139,92,246,0.16)]"
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              />
            ) : null}
            <span className="relative z-10">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
