"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PostHeader } from "@/components/PostHeader";
import { StateSwitcher } from "@/components/StateSwitcher";
import { FreePreview } from "@/components/states/FreePreview";
import { Locked } from "@/components/states/Locked";
import { PaymentPending } from "@/components/states/PaymentPending";
import { PaymentFailed } from "@/components/states/PaymentFailed";
import { Subscribed } from "@/components/states/Subscribed";
import { AccessExpired } from "@/components/states/AccessExpired";
import { samplePost, type PostState } from "@/lib/post";

const transition = {
  initial: { opacity: 0, y: 12, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -8, filter: "blur(6px)" },
  transition: { duration: 0.35, ease: [0.2, 0.8, 0.2, 1] as const },
};

export function PaidPost() {
  const [state, setState] = useState<PostState>("preview");

  const go = (s: PostState) => setState(s);

  // Simulated flow helpers, intentionally fake, no real network / Stripe.
  const subscribe = () => {
    setState("pending");
    window.setTimeout(() => setState("subscribed"), 1800);
  };
  const retry = () => {
    setState("pending");
    window.setTimeout(() => setState("subscribed"), 1800);
  };
  const renew = () => {
    setState("pending");
    window.setTimeout(() => setState("subscribed"), 1800);
  };

  return (
    <div className="min-h-screen lanterna-glow">
      <TopBar />

      <main className="mx-auto w-full max-w-2xl px-4 pt-6 pb-40 sm:pt-10">
        <PostHeader post={samplePost} />

        <section className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={state}
              initial={transition.initial}
              animate={transition.animate}
              exit={transition.exit}
              transition={transition.transition}
            >
              {state === "preview" && (
                <FreePreview post={samplePost} onSubscribe={subscribe} />
              )}
              {state === "locked" && (
                <Locked post={samplePost} onSubscribe={subscribe} />
              )}
              {state === "pending" && (
                <PaymentPending onCancel={() => go("locked")} />
              )}
              {state === "failed" && (
                <PaymentFailed
                  onRetry={retry}
                  onChangeMethod={() => go("locked")}
                />
              )}
              {state === "subscribed" && <Subscribed post={samplePost} />}
              {state === "expired" && (
                <AccessExpired post={samplePost} onRenew={renew} />
              )}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>

      {/* Floating state switcher */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center p-3 sm:p-5">
        <StateSwitcher value={state} onChange={go} />
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="sticky top-0 z-30 border-b border-white/5 bg-ink-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-b from-ember-300 to-ember-500 text-ink-950">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
              strokeWidth={2}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M12 3c3 3 4 6 4 8a4 4 0 0 1-8 0c0-2 1-5 4-8z" />
              <path d="M9 16h6" />
              <path d="M10 20h4" />
            </svg>
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-ink-100">Lanterna</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-ink-400">
              Prototype
            </div>
          </div>
        </div>
        <div className="hidden items-center gap-5 text-xs text-ink-300 sm:flex">
          <span className="hover:text-ink-100 cursor-pointer transition">Discover</span>
          <span className="hover:text-ink-100 cursor-pointer transition">Library</span>
          <span className="hover:text-ink-100 cursor-pointer transition">Inbox</span>
        </div>
      </div>
    </div>
  );
}
