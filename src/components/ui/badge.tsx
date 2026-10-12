import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
  {
    variants: {
      tone: {
        neutral: "bg-ink-700/70 text-ink-100 ring-1 ring-inset ring-ink-500/50",
        ember: "bg-ember-500/15 text-ember-200 ring-1 ring-inset ring-ember-500/30",
        success: "bg-emerald-500/15 text-emerald-200 ring-1 ring-inset ring-emerald-500/30",
        warn: "bg-amber-500/15 text-amber-200 ring-1 ring-inset ring-amber-500/30",
        danger: "bg-red-500/15 text-red-200 ring-1 ring-inset ring-red-500/30",
      },
    },
    defaultVariants: { tone: "neutral" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}
