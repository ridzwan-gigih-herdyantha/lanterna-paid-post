"use client";

import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  onCancel: () => void;
}

export function PaymentPending({ onCancel }: Props) {
  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/70 p-6 sm:p-8">
        <div className="flex flex-col items-center gap-5 py-4 text-center">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-ember-400/15" />
            <div className="relative rounded-full bg-ember-400/10 p-4 ring-1 ring-ember-400/30">
              <Loader2 className="h-7 w-7 animate-spin text-ember-300" />
            </div>
          </div>

          <div className="space-y-1">
            <h2 className="font-display text-xl text-ink-100">
              Confirming your payment
            </h2>
            <p className="max-w-sm text-sm text-ink-300">
              Hang tight, this usually clears in a few seconds. We’ll unlock the
              post as soon as the charge goes through.
            </p>
          </div>

          {/* Shimmer rows */}
          <div className="w-full max-w-sm space-y-2 pt-2">
            <div className="shimmer animate-shimmer h-3 w-full rounded-full" />
            <div className="shimmer animate-shimmer h-3 w-5/6 rounded-full" />
            <div className="shimmer animate-shimmer h-3 w-2/3 rounded-full" />
          </div>

          <Button variant="ghost" size="sm" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
