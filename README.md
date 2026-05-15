# LAB Systems

Marketing site for LAB Systems. Strategy, AI, scale, for UK companies turning over £5M to £100M.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (CSS-first config in `app/globals.css`)
- Plain CSS transitions + an IntersectionObserver hook (`lib/use-reveal.ts`) for the subtle scroll fade-ins — no Framer Motion dependency
- Fraunces (serif display), Inter (sans), JetBrains Mono (mono), all via `next/font`

## Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Build

```bash
npm run build
npm start
```

## Routes

| Path        | Purpose                                                          |
| ----------- | ---------------------------------------------------------------- |
| `/`         | Homepage. Hero, problem, what we build, daily use, impact, approach, platform teaser, who it's for, closing CTA. |
| `/approach` | Long-form explanation of the 4-stage engagement model.           |
| `/platform` | Coming-2026 teaser for the SaaS platform, with early-access form.|
| `/about`    | Short founder note. Copy is `{{TODO}}` placeholders for now.     |
| `/contact`  | Discovery-call booking. Calendly slot reserved as a `{{TODO}}` block, plus a fallback form. |

## API routes

Both are stubs that `console.log` and return `200`. Wire them to a real backend before launch.

| Path                  | Purpose                                                |
| --------------------- | ------------------------------------------------------ |
| `/api/early-access`   | Receives `{ email }` from the platform-teaser form.    |
| `/api/contact`        | Receives `{ name, company, email, prompt }` from `/contact`. |

## Design system

Tokens live as CSS variables in `app/globals.css` under `@theme {}` (Tailwind v4 syntax):

- **Colors**: `ink`, `graphite`, `paper`, `fog`, `line`, `accent`, `white`.
- **Type**: Fluid scale via `clamp()` — `display`, `h1`, `h2`, `h3`, `body-lg`, `body`, `small`.
- **Containers**: `1200px` wide, `760px` narrow.
- **Motion**: `cubic-bezier(0.16, 1, 0.3, 1)` brand ease.

All components are typed and live in `components/`. Page sections are split into `components/home/`.

## TODO placeholders

Open items are tagged with `{{TODO: ...}}` so they're easy to grep. Run:

```bash
rg "TODO" app components
```

Current TODOs:

- Founder copy and portrait on `/about`
- Calendly embed slot on `/contact`

## Voice rules

The copy follows a specific register. Keep it that way:

- No words from the kill list: *delve, leverage, robust, foster, enhance, facilitate, holistic, synergy, transformative, cornerstone, truly, deeply, incredibly*.
- No em-dashes, en-dashes, or hyphens used as punctuation. Commas, colons, or restructure.
- Numbers as digits: "8 to 12 hours", not "eight to twelve".
- No clichés: *in today's fast-paced world*, *at the end of the day*, *it goes without saying*.

## License

Proprietary. Copyright LAB Systems Ltd.
