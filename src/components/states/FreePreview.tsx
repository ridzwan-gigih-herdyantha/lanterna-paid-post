"use client";

import { VideoPlayer } from "@/components/VideoPlayer";
import { Button } from "@/components/ui/button";
import { Lock, Sparkles } from "lucide-react";
import type { Post } from "@/lib/post";

interface Props {
  post: Post;
  onSubscribe: () => void;
}

export function FreePreview({ post, onSubscribe }: Props) {
  return (
    <div className="space-y-6">
      <VideoPlayer interactive={false} blurred />

      <div className="relative">
        <div className="space-y-5">
          <p className="text-ink-200 leading-relaxed text-[15px] sm:text-base">
            {post.body[0]}
          </p>
          <p className="text-ink-200 leading-relaxed text-[15px] sm:text-base">
            {post.body[1].slice(0, 140)}…
          </p>

          {/* blurred remainder */}
          <div className="relative select-none pointer-events-none" aria-hidden>
            <div className="space-y-4 blur-[6px] opacity-70">
              <p className="text-ink-200 leading-relaxed">{post.body[1]}</p>
              <p className="text-ink-200 leading-relaxed">{post.body[2]}</p>
              <p className="text-ink-200 leading-relaxed">{post.body[3]}</p>
            </div>
            <div className="pointer-events-none absolute inset-x-0 -top-6 bottom-0 bg-gradient-to-b from-transparent via-ink-950/70 to-ink-950" />
          </div>
        </div>

        {/* Unlock card overlay */}
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-ember-500/20 bg-gradient-to-b from-ink-800/90 to-ink-900 p-5 sm:p-6">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-ember-500/15 blur-3xl" />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-ember-400/15 p-2 ring-1 ring-ember-400/30">
                <Lock className="h-5 w-5 text-ember-300" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-ember-300" />
                  <p className="text-sm font-medium text-ink-100">
                    You’re reading the free preview
                  </p>
                </div>
                <p className="mt-1 text-sm text-ink-300">
                  Members unlock the full session, stems, and the Ableton project
                  for{" "}
                  <span className="text-ink-100">{post.tierPrice}</span>.
                </p>
              </div>
            </div>
            <Button size="md" onClick={onSubscribe}>
              Unlock full post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
