"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-b from-ember-400 to-ember-500 text-ink-950 shadow-[0_8px_24px_-8px_rgba(245,137,7,0.6)] hover:from-ember-300 hover:to-ember-400",
        secondary:
          "bg-ink-700/70 text-ink-100 ring-1 ring-inset ring-ink-500/60 hover:bg-ink-600/80",
        ghost: "text-ink-200 hover:bg-white/5",
        outline:
          "border border-ink-500/60 bg-transparent text-ink-100 hover:bg-white/5",
        danger:
          "bg-red-500/90 text-white shadow-[0_8px_24px_-8px_rgba(239,68,68,0.6)] hover:bg-red-500",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-7 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
