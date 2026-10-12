import * as React from "react";
import { cn } from "@/lib/utils";

interface AvatarProps {
  name: string;
  size?: number;
  className?: string;
}

export function Avatar({ name, size = 44, className }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center rounded-full bg-gradient-to-br from-ember-400 to-ember-700 text-ink-950 font-semibold ring-2 ring-ember-300/30 shadow-[0_6px_20px_-8px_rgba(245,137,7,0.6)]",
        className
      )}
      style={{ width: size, height: size, fontSize: size * 0.4 }}
      aria-label={name}
    >
      {initials}
    </div>
  );
}
