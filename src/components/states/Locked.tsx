"use client";

import { Button } from "@/components/ui/button";
import { Check, Lock } from "lucide-react";
import type { Post } from "@/lib/post";

interface Props {
  post: Post;
  onSubscribe: () => void;
}

const perks = [
  "Full 22-minute studio video",
  "Stems + Ableton project file",
  "Chord sheet PDF",
  "Member-only comments and live Q&A",
];

export function Locked({ post, onSubscribe }: Props) {
  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-ink-800/80 to-ink-900 p-6 sm:p-8">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-ember-500/15 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-ember-700/10 blur-3xl" />

        <div className="relative flex flex-col items-start gap-5 sm:items-center sm:text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-ember-400/10 p-3 ring-1 ring-ember-400/30">
            <Lock className="h-6 w-6 text-ember-300" />
          </div>

          <div className="space-y-2">
            <h2 className="font-display text-2xl text-ink-100">
              This post is for {post.tierName}
            </h2>
            <p className="max-w-md text-sm text-ink-300">
              Join to open this post and every members-only drop. Cancel from your
              account page anytime.
            </p>
          </div>

          <ul className="w-full max-w-sm space-y-2 pt-2 text-left">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm text-ink-200">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ember-400/15 ring-1 ring-ember-400/30">
                  <Check className="h-3 w-3 text-ember-300" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="flex w-full flex-col items-stretch gap-3 pt-4 sm:w-auto sm:flex-row sm:items-center">
            <Button size="lg" onClick={onSubscribe} className="sm:min-w-[220px]">
              Subscribe · {post.tierPrice}
            </Button>
            <Button size="lg" variant="ghost">
              See all tiers
            </Button>
          </div>
          <p className="text-[11px] text-ink-400 pt-1">
            Simulated checkout, no real charge.
          </p>
        </div>
      </div>
    </div>
  );
}
