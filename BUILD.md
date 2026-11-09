# BUILD SPEC — how every page in this project is built and checked

Read this before writing any page. It is the contract between all builders, so ten pages look like ten
designed sites and not ten interpretations of one hurried brief.

## 0. Ground rules

- Working root: `/Users/panygolf/Documents/barbershop-bergen`. Work only inside it.
- Each page lives at `NN-name/index.html`, with its own `style.css` and `script.js` **in the same folder**
  (no bundler, no framework, no build step). Photographs come from `../assets/img/`.
- The direction sheet for your page is `NN-name/DIRECTION.md`. **It is authoritative.** Adopt its
  direction, hero blueprint and section blueprints. Do not blend in a layout you would have made anyway.
- Copy is Norwegian Bokmål, `du`-form. Comments and code identifiers may be English.
- Never invent proof: no customer quotes, review scores, press mentions, award badges, or customer
  counts. Sample service names and prices are expected; sample *proof* is not.
- Do not touch other pages' folders, `assets/`, `research/`, or the root `index.html`.

## 1. Required page skeleton

```html
<!doctype html>
<html lang="nb">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>… · Bergen</title>
<meta name="description" content="…">
<link rel="preconnect" href="…font host…">
<link href="…the dealt font css…" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>
  <a class="skip" href="#hoved">Til innholdet</a>
  <header>…wordmark + nav + the one action…</header>
  <main id="hoved">
    <section>…hero…</section>
    …the sections on the sheet, in that order…
  </main>
  <footer>…address, hours, phone, credits…</footer>
  <script src="script.js" defer></script>
</body>
</html>
```

Plus at the very top of `style.css`, in a comment: the idea sentence, the palette, the faces.

## 2. Type

Use the face on the sheet, loaded from the URL printed on the sheet. Map **every** size onto five steps:

```css
:root{
  --step-small: clamp(.8125rem,.79rem + .1vw,.875rem);   /* 13–14px, captions, credits */
  --step-body:  clamp(1.0625rem,1rem + .25vw,1.1875rem); /* 17–19px, the floor */
  --step-lead:  clamp(1.25rem,1.1rem + .7vw,1.625rem);   /* 20–26px, standfirsts */
  --step-head:  clamp(2rem,1.3rem + 3.2vw,4rem);         /* section headings */
  --step-display: ...;                                    /* hero only, from the hero blueprint */
}
```

- Body text ≥ 16px. Nothing anywhere below 13px. Never set a paragraph in the display size.
- Headline ≤ 2 lines at 1440, 768 **and** 390. Check with the inspector, not by eye.
- Letter-spacing only where the sheet names it.

## 3. Colour

Take the palette from the sheet, verbatim, as custom properties. One ground, one ink, one muted ink, one
accent, `--accent-ink`. Additional `--field-N` tokens on the sheet are full-bleed section grounds.
The accent appears at most once per screen. Check contrast: body text at 7:1 on its ground, large type
at 4.5:1.

Ways this gets missed and caught by the inspector: light grey text on a dark ground, a paragraph that
lands across two different grounds, a caption under 13px.

## 4. Layout

- One page margin pair (`--margin`) and one gutter pair for the whole page; one corner radius value
  (`--radius`), used consistently or set to 0.
- One button shape for the whole page — one `.btn` class, 44px minimum height, the accent (or ink) fill.
  Every link that asks the visitor to do the thing uses it. Secondary links are plain underlined text.
- Sections must not repeat each other's composition. If two sections would be "heading left, picture
  right", change one.
- No centred 3-line headline, no label above a heading, no row of icon cards, no thin rules between
  blocks, no gradients, no shadows at rest, no monospace.
- Mobile first is fine, but the 1440 layout is the one on the sheet: build it as drawn.

## 5. Content — the minimum each page carries

Every page includes, somewhere sensible:

1. **The service list with real prices** (NOK, from `research/00-research.md` §3, adjusted to the shop's
   own angle — a student shop is cheaper, a hot-towel shop is dearer). Full list, not three rows.
2. **Address, neighbourhood, opening hours** including Saturday hours and "stengt søndag".
3. **Phone** as `tel:+47…` and a booking link styled as a button. Use `#booking` or a `mailto:` — this is
   a static page, so the button may point at a real anchor, a `tel:`, or a placeholder `mailto:`.
4. **The one live thing** named on the sheet — a working element the visitor can actually use (an
   interactive price list, a filter, tabbed FAQ, an opening-hours state that says "åpent nå / stengt",
   a drag row, a folder stack that opens). Real behaviour, plain fallback, works at 390px.
5. **Footer credits** for the photographs actually used: one line, 13px, muted, e.g.
   `Foto: «Bergen Bryggen night» av Svein Magne Tunli, CC BY-SA 4.0, via Wikimedia Commons.` Pull the
   exact credit strings from `../assets/img/credits.json`.

## 6. Imagery

Allowed files are in `../assets/img/` (see `credits.json` for the full list and credit strings). Use the
ones that fit your page's idea; 6–12 real pictures per page is normal, **4 is the floor**. SVG drawings
do not count toward the floor. Always set `width`, `height`, `alt`; `loading="lazy"` on everything except
the hero image; `decoding="async"`.

Never write on the page what the pictures are not, and never caption a found photograph as the shop's own
premises, team or work. A caption may say what the picture shows ("Bryggen, kveldslys", "Barberhøvel og
kost, 1700-tall").

If you need a picture the pack does not have, say so in your report instead of downloading: the Lead owns
`assets/`.

## 7. Motion

Build it so the page is finished with JavaScript switched off; motion only adds arrival.

- One signature move, exactly as the sheet's §8 names it.
- An entrance for the parts of each section (heading, then text, then picture, staggered 60–90ms,
  rising 16–32px with opacity), triggered once via `IntersectionObserver`.
- Feedback on every control (press, hover, focus).
- Transform and opacity only. Every move has a `prefers-reduced-motion: reduce` branch that keeps the
  content and drops the travel.
- Headline must be readable within 1.2s of load — never hide the h1 behind a load sequence.

## 8. Checks — run both, fix every FAIL, then look

From `/Users/panygolf/Documents/barbershop-bergen`:

```bash
# static scan (banned patterns in source)
node /Users/panygolf/.agents/skills/design-taste-frontend/scripts/lint.mjs NN-name

# real-browser inspection at three widths (needs the no-sandbox Chrome wrapper on this machine)
CHROME_PATH="$PWD/.taste-skill/bin/chrome-nosandbox" TASTE_SKILL_TMP="$PWD/.taste-skill/tmp" \
  node /Users/panygolf/.agents/skills/design-taste-frontend/scripts/inspect.mjs NN-name/index.html \
  --out NN-name/.inspect --widths 1440,768,390
```

The inspector needs `.taste-skill/tmp` to exist (`mkdir -p .taste-skill/tmp`). Exit code 0 = clean.
It writes screenshots into `NN-name/.inspect/`. **Open them with the Read tool and look** — desktop-fold,
desktop-page-NN, mobile-fold, mobile-page-NN — then fix what you see and run it again. Judging your own
render by eye is part of the job; a clean report on an ugly page is a fail.

Findings you are allowed to accept without fixing (say so in your report): `no-footage` (no honest clip
exists for this shop), and `font-not-dealt` if the dealt face fails to load from its CDN — in that case
name the fallback you used.

## 9. Report back

When your pages are done, message the Lead with, per page: the idea sentence, what the live thing does,
the image files used, the final lint/inspect result, and anything the client must confirm (invented
service names, prices, hours). Keep it terse.
