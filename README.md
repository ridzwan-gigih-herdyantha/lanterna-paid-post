# Lanterna — Paid Post Prototype

A single-page prototype of a creator **paid post** with every access state
reachable through a toggle at the bottom of the screen. Submitted by **Ridzwan
Gigih** for the paid-post bidding brief.

> This is a prototype, not a production build. **Lanterna** is a fictional
> brand created for this submission and does not represent any real creator
> platform. All payment states are **simulated** on the client — there is no
> Stripe, no backend, no database, no auth.

**Live:** _add your Vercel URL here after deploying._

---

## Cover letter (for the bid)

Hi — thanks for sharing the brief.

The prototype is one page, state-driven, and matches the six access states
asked for. I kept the scope tight to what the brief described: no login,
no backend, no database, no real payment integration. Everything you see
switching between states is just React state and a few `setTimeout`
calls, labeled honestly in the UI (e.g. the Locked card has a small
"Simulated checkout — no real charge." note under the subscribe button).

What's inside:

- **Six states** reachable from a floating toggle bar at the bottom:
  - **Free preview** — intro visible, remainder blurred under a gradient fade,
    unlock CTA.
  - **Locked** — gated card with tier perks and a subscribe button.
  - **Payment pending** — animated spinner and shimmer rows, "Cancel" option.
  - **Payment failed** — declined-card panel with retry + change-method
    actions.
  - **Subscribed** — full content, interactive placeholder video player with
    play/pause, attachments list, member comments stub.
  - **Access expired** — renewal-failed panel with a "Renew now" action.
- **Smooth transitions** between states — Framer Motion fade/slide/blur, plus a
  sliding `layoutId` pill on the state toggle.
- **Mobile-first and responsive** — toggle labels collapse to short form on
  small screens, no horizontal overflow at 360 px, hit targets stay large.
- **Simulated flows** — subscribe, retry, and renew all go through a short
  "pending" step and resolve to "subscribed", so you can see the transition
  without touching a real payment provider.

Fictional brand: **Lanterna** ("light up what you make"). I picked a warm
amber-on-ink palette so it doesn't visually echo any existing creator
platform.

I used **Next.js 15 (App Router) + TypeScript + Tailwind + shadcn-style
primitives** (button, card, badge, avatar built in the shadcn pattern with
`class-variance-authority` and `@radix-ui/react-slot`, since the full `shadcn`
CLI is overkill for one page). Lucide for icons, Framer Motion for the
transitions.

Happy to extend from here — tier picker, real Stripe integration, member
comments, auth — once the direction's agreed. For now, this is the prototype
only.

— Ridzwan

---

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
3. Accept the auto-detected Next.js settings — no env vars needed.
4. Deploy. Paste the resulting URL at the top of this README.

Nothing to configure: there are no environment variables, no databases, no
secrets. Vercel's zero-config Next.js setup is enough.

## Project layout

```
src/
  app/
    layout.tsx         Root layout, dark theme, metadata
    page.tsx           Entry — renders <PaidPost />
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
