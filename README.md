# Lanterna: Paid Post Prototype

A single-page prototype of a creator **paid post** with every access state
reachable through a toggle at the bottom of the screen. Submitted by **Ridzwan
Gigih** for the paid-post bidding brief.

> This is a prototype, not a production build. **Lanterna** is a fictional
> brand created for this submission and does not represent any real creator
> platform. All payment states are **simulated** on the client. There is no
> Stripe, no backend, no database, no auth.

**Live:** _lanterna-paid-post.vercel.app_

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

Then flip through the six states using the toggle at the bottom.

## Deploy to Vercel

Two options:

**One-click (CLI):**

```bash
npm i -g vercel
vercel          # follow prompts, accept defaults
vercel --prod   # deploy to production once you're happy
```

**Git-based:**

1. Push this folder to a new GitHub repo.
2. On [vercel.com/new](https://vercel.com/new), import the repo.
3. Accept the auto-detected Next.js settings, no env vars needed.
4. Deploy. Paste the resulting URL at the top of this README.

Nothing to configure: there are no environment variables, no databases, no
secrets. Vercel's zero-config Next.js setup is enough.

## Project layout

```
src/
  app/
    layout.tsx         Root layout, dark theme, metadata
    page.tsx           Entry, renders <PaidPost />
    globals.css        Tailwind + glow / shimmer utilities
  components/
    PaidPost.tsx       Page shell, AnimatePresence, flow helpers
    PostHeader.tsx     Creator + title + meta
    VideoPlayer.tsx    Placeholder video with play/pause + scrubber
    StateSwitcher.tsx  Floating radio-group toggle
    states/
      FreePreview.tsx
      Locked.tsx
      PaymentPending.tsx
      PaymentFailed.tsx
      Subscribed.tsx
      AccessExpired.tsx
    ui/
      button.tsx       shadcn-style, cva variants
      card.tsx
      badge.tsx
      avatar.tsx
  lib/
    utils.ts           cn() helper
    post.ts            Sample post data + state type
```

## What this prototype is _not_

- Not production. Every state is simulated in the browser.
- Not a copy of any real creator platform. Lanterna is fictional.
- Not a full product. No login, no backend, no database, no payment provider.
  One page, cleanly done.
