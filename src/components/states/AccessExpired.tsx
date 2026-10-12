"use client";

import { CalendarX, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Post } from "@/lib/post";

interface Props {
  post: Post;
  onRenew: () => void;
}

export function AccessExpired({ post, onRenew }: Props) {
  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-2xl border border-amber-400/20 bg-gradient-to-b from-amber-400/5 to-ink-900 p-6 sm:p-8">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="relative flex flex-col items-start gap-4 sm:flex-row">
          <div className="rounded-full bg-amber-400/15 p-3 ring-1 ring-amber-400/30">
            <CalendarX className="h-6 w-6 text-amber-300" />
          </div>
          <div className="flex-1 space-y-2">
            <h2 className="font-display text-xl text-ink-100">
              Your access expired on Oct 1, 2026
            </h2>
            <p className="text-sm text-ink-300">
              The last renewal attempt on your Visa ending 4242 was declined, and
              we weren’t able to charge again. Renew to restore access to this
              post and every members-only drop.
            </p>

            <div className="grid gap-2 pt-2 sm:grid-cols-2">
              <div className="rounded-lg border border-white/5 bg-ink-800/60 p-3">
                <div className="text-[11px] uppercase tracking-wider text-ink-400">
                  Tier
                </div>
                <div className="mt-0.5 text-sm text-ink-100">{post.tierName}</div>
              </div>
              <div className="rounded-lg border border-white/5 bg-ink-800/60 p-3">
                <div className="text-[11px] uppercase tracking-wider text-ink-400">
                  Price
                </div>
                <div className="mt-0.5 text-sm text-ink-100">{post.tierPrice}</div>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-3 sm:flex-row">
              <Button onClick={onRenew}>
                <RefreshCw className="h-4 w-4" />
                Renew now
              </Button>
              <Button variant="outline">Update payment method</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
