"use client";

import { AlertTriangle, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  onRetry: () => void;
  onChangeMethod: () => void;
}

export function PaymentFailed({ onRetry, onChangeMethod }: Props) {
  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-b from-red-500/5 to-ink-900 p-6 sm:p-8">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-500/10 blur-3xl" />
        <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-start">
          <div className="rounded-full bg-red-500/15 p-3 ring-1 ring-red-500/30">
            <AlertTriangle className="h-6 w-6 text-red-300" />
          </div>
          <div className="flex-1 space-y-2">
            <h2 className="font-display text-xl text-ink-100">
              Your payment didn’t go through
            </h2>
            <p className="text-sm text-ink-300">
              The card issuer declined this charge. No funds were taken. You can
              retry the same card, or add a different payment method.
            </p>
            <div className="rounded-lg border border-white/5 bg-ink-800/60 p-3 text-xs text-ink-300">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-ink-200">
                  <CreditCard className="h-4 w-4" />
                  Visa ending 4242
                </span>
                <span className="rounded-full bg-red-500/15 px-2 py-0.5 text-red-200 ring-1 ring-inset ring-red-500/30">
                  Declined · <span className="font-mono">do_not_honor</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-3 sm:flex-row">
              <Button onClick={onRetry}>Retry payment</Button>
              <Button variant="outline" onClick={onChangeMethod}>
                Use a different card
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
