"use client";

import { useState } from "react";
import { Play, Pause, Volume2, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  interactive?: boolean;
  blurred?: boolean;
}

export function VideoPlayer({ interactive = true, blurred = false }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl ring-1 ring-white/10 aspect-video",
        "bg-[radial-gradient(circle_at_30%_20%,rgba(255,189,78,0.18),transparent_55%),radial-gradient(circle_at_75%_80%,rgba(245,137,7,0.14),transparent_55%),linear-gradient(135deg,#141821,#0b0d12)]"
      )}
    >
      {/* ambient “video” frame */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-500",
          blurred && "blur-md scale-105 saturate-50"
        )}
      >
        <div className="absolute inset-0 opacity-60 mix-blend-screen bg-[conic-gradient(from_210deg_at_60%_40%,rgba(255,163,32,0.15),transparent_30%,rgba(255,189,78,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(0,0,0,0.5)_100%)]" />
      </div>

      {/* center play */}
      {!blurred && (
        <button
          type="button"
          disabled={!interactive}
          onClick={() => setPlaying((p) => !p)}
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 sm:h-20 sm:w-20 rounded-full",
            "bg-ember-400 text-ink-950 shadow-[0_12px_40px_-10px_rgba(245,137,7,0.7)] ring-4 ring-ember-400/20",
            "transition-transform duration-200 hover:scale-105 active:scale-95",
            !interactive && "cursor-default opacity-90"
          )}
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? (
            <Pause className="mx-auto h-7 w-7" strokeWidth={2.5} />
          ) : (
            <Play className="mx-auto ml-1 h-7 w-7" strokeWidth={2.5} />
          )}
        </button>
      )}

      {/* bottom controls */}
      {!blurred && (
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 px-4 py-3 text-ink-100">
          <span className="text-xs tabular-nums text-ink-200">00:00</span>
          <div className="relative h-1 flex-1 rounded-full bg-white/15">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-ember-400 transition-all"
              style={{ width: playing ? "32%" : "0%" }}
            />
          </div>
          <span className="text-xs tabular-nums text-ink-300">22:14</span>
          <Volume2 className="h-4 w-4 text-ink-200" />
          <Maximize2 className="h-4 w-4 text-ink-200" />
        </div>
      )}
    </div>
  );
}
