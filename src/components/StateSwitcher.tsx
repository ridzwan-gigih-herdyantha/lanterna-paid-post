"use client";

import { cn } from "@/lib/utils";
import type { PostState } from "@/lib/post";
import { motion } from "framer-motion";
import {
  Eye,
  Lock,
  Loader2,
  AlertTriangle,
  CheckCircle2,
  CalendarX,
} from "lucide-react";

interface Props {
  value: PostState;
  onChange: (next: PostState) => void;
}

const items: {
  value: PostState;
  label: string;
  short: string;
  Icon: React.ComponentType<{ className?: string }>;
}[] = [
  { value: "preview", label: "Free preview", short: "Preview", Icon: Eye },
  { value: "locked", label: "Locked", short: "Locked", Icon: Lock },
  { value: "pending", label: "Payment pending", short: "Pending", Icon: Loader2 },
  { value: "failed", label: "Payment failed", short: "Failed", Icon: AlertTriangle },
  {
    value: "subscribed",
    label: "Subscribed",
    short: "Subscribed",
    Icon: CheckCircle2,
  },
  { value: "expired", label: "Access expired", short: "Expired", Icon: CalendarX },
];

export function StateSwitcher({ value, onChange }: Props) {
  return (
    <div className="pointer-events-auto">
      <div className="mb-2 flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-ink-400">
        <span className="h-1.5 w-1.5 rounded-full bg-ember-400" />
        Prototype state toggle
      </div>

      <div
        role="radiogroup"
        aria-label="Post state"
        className="flex flex-wrap gap-1.5 rounded-2xl border border-white/5 bg-ink-900/80 p-1.5 backdrop-blur-md shadow-[0_12px_40px_-16px_rgba(0,0,0,0.9)]"
      >
        {items.map(({ value: v, label, short, Icon }) => {
          const active = v === value;
          return (
            <button
              key={v}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(v)}
              className={cn(
                "relative inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                active ? "text-ink-950" : "text-ink-200 hover:text-ink-100"
              )}
            >
              {active && (
                <motion.span
                  layoutId="state-pill"
                  className="absolute inset-0 rounded-full bg-ember-300"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative inline-flex items-center gap-1.5">
                <Icon className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{label}</span>
                <span className="sm:hidden">{short}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
