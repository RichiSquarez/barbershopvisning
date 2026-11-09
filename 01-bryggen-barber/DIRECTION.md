# DIRECTION SHEET — The dark room
seed 897491432 · drawn 2026-11-09 · sector hospitality
Brief: Bryggen Barber — a hot-towel barbershop in a 1700s timber warehouse on Bryggen, Bergen. Timber, tar, harbour light, wet cobblestones.

| | |
| --- | --- |
| Direction | The dark room |
| Hero | Counter object, wide wordmark |
| Type | Clash Grotesk |
| Colour | Green-black and bone |
| Sections | about (Inset panel, shaped portrait) → list (Line-up at one type size) → gallery (Staggered pairs in empty ground) → contact (The email as display type) |
| Motion | Slow crossfade |
| Photographs | the "Coast" set, as atmosphere |

This is the direction for this build. Adopt it. Do not blend it with the layout you would have made anyway,
and do not redraw because it is unfamiliar: unfamiliar is the point. Redraw a slot only when it conflicts
with a stated brand constraint or needs an asset that does not exist, and say why in your report.

The parts of this sheet were written separately and will disagree in small ways. Settle every disagreement in this order:
**house rules** (including type no smaller than 13px and body text of 16px or more) → **the direction** (the idea, the composition habits, where the
one accent goes) → **the type system and the palette** (which face does which job, the five size steps, which colour is the ground and where the
accent goes) → **the hero blueprint** → **the section blueprints**. Under each blueprint below, "Adjusted for this page" lists where it disagrees.
In practice: take geometry from blueprints (columns, proportions, what sits where) and take everything else from above them. Map every size a
blueprint names onto one of your five type steps instead of adding a sixth. Use one button shape, one corner radius and one pair of page margins on
the whole page, whatever individual blueprints say. If a blueprint names a kind of typeface (a light serif, a heavy grotesk), use the dealt face.

## 1. The idea
One dark field from top to bottom, and in it, lit things. Photographs and objects appear like exhibits in a dim gallery: each with space around it, each the brightest thing on its screen. Type is light, small and sparse. The darkness is not a theme switch; it is a room, and the page is a slow walk through it. It suits subjects sold on atmosphere and material: an evening restaurant, a metal card, a record, a house at dusk.

Before anything else, write one sentence in your notes: "On this page, <the subject's own material> becomes <the device>."
Fill the first blank from your inventory of what only this client has (its name and what it means, its street, its numbers, its
constraint), then put the nearest competitor in the sentence: if it still works, the idea is the category's, not the client's.
Then name the one live thing the visitor can do on the page (SKILL.md step 4).

## 2. Composition
A single near-black or deep-toned ground runs the full page with no section bands. First screen: either the name at full width in a light weight along the bottom edge with one dim photograph above it, or one object or photograph centred at 40–50% of the viewport with a line of text beneath at 16–18px. Each later screen holds one or two lit items at a generous size (the main one 40–60% of the screen width) with its text set beside it at full reading size; the darkness frames the items, it does not replace content. Images vary in size but all share the same darkness at their edges so they sit in the ground without frames. Practical details come last in a simple two-column text block. The only solid light element on the page is the single primary action.

## 3. Type — Clash Grotesk
A slightly narrow neo-grotesk with closed apertures, used at regular weight from marquee size down to paragraphs. Suits agencies and digital studios that want large type without heaviness.
```html
<link rel="preconnect" href="https://api.fontshare.com">
<link rel="preconnect" href="https://cdn.fontshare.com" crossorigin>
<link href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@400,500&display=swap" rel="stylesheet">
```
- Display: **Clash Grotesk** — weight 400 · tracking -0.03em · leading 0.95 · sentence case, or uppercase for one statement
- Text: **Clash Grotesk** — 400 for body, 500 for emphasis · leading 1.4 · tracking 0
```css
:root {
  --step-small: clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem);
  --step-body: clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem);
  --step-lead: clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem);
  --step-head: clamp(2rem, 1.3rem + 3.2vw, 4rem);
}
```
Light or regular weights; they glow on dark. Avoid heavy bold, which looks cheap on black. Headings 4–7vw at most; text 16–18px with leading 1.6 and a slightly lifted ink (not pure white).
The direction decides sizes and how many of them; the type system decides how this face is set. Where the two give different tracking or leading, use the values of the type system: they are tuned to this face.
The display size itself comes from the hero blueprint below.

## 4. Colour — Green-black and bone
```css
:root {
  --bg: #161c1a;
  --surface: #1f2725;
  --ink: #e3e2da;
  --muted: #8e948d;
  --accent: #9fc7b8;
  --accent-ink: #161c1a;
}
```
Bone type on green-black from top to bottom, with panels and drawn details barely lighter than the ground so photographs supply the colour. Pale jade is for the booking or contact button alone.
A dark ground with a tint (blue-black, green-black, brown-black), a soft light ink, a dimmer ink for secondary text, and one warm or bright accent used once per screen at most.

## 5. Imagery
**Use the images that belong to the project in every picture slot.** For slots they cannot fill, real pictures of the subject's world from the open collections come next (start with `node /Users/panygolf/.agents/skills/design-taste-frontend/scripts/assets.mjs "bryggen postcard"`, then "bryggen old map" and "barbershop", then queries from your inventory (its street, its materials, its trade's tools and history); credit them on the page), then the dealt photographs.

Low-key photographs: dark backgrounds, one light source, subjects emerging from shadow. Their dark edges should blend into the page ground.

**Floor (the inspector checks it):** at least four real pictures on the page, usually six to twelve; SVG drawings do not count. One moving picture where an honest clip exists: `node <skill>/scripts/assets.mjs --video "<query>"`, used as a muted loop with a poster frame. Whatever this direction says about pictures, it is carried out with real ones.

Photographs dealt for this build, from the "Coast" set (sea, shoreline, cliffs, piers and beaches)
Order of preference for imagery: (1) the project's own photographs and product shots; (2) images you generate, if an image tool is
available; (3) real pictures of the subject's world found in the open collections (assets.mjs, downloaded and credited on the page);
(4) drawings of the subject in code; (5) these. They are real photographs (Unsplash licence, served by picsum.photos) of places, light and
texture. They are atmosphere, never a stand-in for a specific product, dish, person or interface. List the ones you use in your report so
they can be replaced.
Treatment: If a photograph's background is lighter than the page, darken the image slightly (`filter: brightness(0.85) contrast(1.05)`) rather than adding a frame.
- `https://picsum.photos/id/641/1600/1000` — Empty lifeguard chair on a beach at pastel dusk · mid tone · peach, slate blue, dusty teal · calm area: right · native landscape · photo: Fré Sonneveld
- `https://picsum.photos/id/640/1600/1000` — Aerial view of turquoise surf breaking onto golden sand · mid tone · sand, turquoise, white · calm area: bottom · native landscape · photo: Sarah Bürvenich
- `https://picsum.photos/id/853/1600/1000` — Lone rock in a calm blue sea beneath a pastel sky · mid tone · sea blue, peach, pale pink · calm area: top · native landscape · photo: Stephen Radford
- `https://picsum.photos/id/77/1600/1000` — Wooden jetty leading to a small pavilion over calm sea · mid tone · warm tan, pale teal, soft grey · calm area: top · native landscape · photo: May Pamintuan
- `https://picsum.photos/id/14/1600/1000` — Rocky shoreline meeting a calm pale sea under hazy sky · mid tone · pale blue, warm brown · calm area: top · native landscape · photo: Paul Jarvis
- `https://picsum.photos/id/27/1600/1000` — Person standing on a rocky shore watching misty waves at sunset · mid tone · warm orange, brown, pale gold · calm area: right · native landscape · photo: Yoni Kaplan-Nadel
- `https://picsum.photos/id/162/1600/1000` — Aerial view of a coastline with turquoise sea and patchwork fields · mid tone · turquoise, sand brown, deep blue · calm area: bottom · native landscape · photo: Dillon McIntosh
- `https://picsum.photos/id/16/1600/1000` — Blue sea and distant islands seen over a rocky driftwood shore · mid tone · sky blue, deep blue, grey · calm area: top · native landscape · photo: Paul Jarvis
The last two path numbers are width and height: request the exact crop you render (`/1200/1500` for a 4:5 portrait, `/2400/1350` for a hero) and
add `?grayscale` to desaturate. Use three to six of them, not all eight. Always set `width`, `height`, `alt` and `loading="lazy"` (not on the hero image).
Other sets that fit this brief: forest, architecture, water, city-night — `node draw.mjs --photos <set>` prints one in full; `--photos list` shows all sets. Taking photographs from another set is your call and is not a redraw; keep them to one light and one treatment.

## 6. Hero — Counter object, wide wordmark
Borrowed from a watch or perfume counter. One flat charcoal field. Centred slightly above the midline, a single low-key photograph of the object about 31% of the viewport wide (columns 5-8), 4:5, its own dark background matched to the field with filter: brightness(0.9) so it sits without a frame. Under it the name runs on one line as an ultra-wide wordmark spanning 72% of the width yet only about 45px tall: an extended face with letter-spacing near 0.6em, or a regular face stretched with transform: scaleX(2.4). Then one centred serif sentence at clamp(24px, 2.6vw, 38px). Then a single centred row at 15px with 48px between its three parts: one specification, the price inside the one solid light rectangle that is also the action, a second specification. The wordmark repeats small top-left and one text link sits top-right, both on 32px margins. The bottom fifth and both outer quarters of the screen stay empty and dark.

On a phone: The photograph grows to 70% of the width at 4:5, its top at 16% of the height. The wide wordmark spans the full width inside 20px margins at about 28px tall. The serif sentence sets at 6vw on two lines. The row stacks into three centred lines with the action in the middle at full width. The lowest sixth of the screen stays dark and empty.
Headline: The name as a very wide, very low wordmark on one line (up to 12 characters); the serif sentence beneath is the supporting line, up to 40 characters.

Adjusted for this page:
- It names a kind of typeface: use the dealt faces (display Clash Grotesk, text Clash Grotesk) and their settings; capitals only where the type system sets them.
- It sets a sentence large over several lines: jurors read that as a long headline. Either cut it to a two-line headline at display size, or keep it a statement at 36px or less on three lines (24px, four lines on a phone).

## 7. Sections, in order
Each is a composition to rebuild with this project's content. Keep the geometry; change the subject. Re-order or drop a
section when the argument of the page needs it (see references/copy.md), never to fall back to a card grid.

### 1. about — Inset panel, shaped portrait (split)
A deep-toned panel inset 20px from the page edges with a 12px radius, about 110svh tall, `overflow: hidden`. Left half: a two-line statement of four to seven words at clamp(40px, 4.4vw, 64px) in a pale ink, top-left with 56px padding; it is the heading and has nothing above it. Below it a photograph of the person or the workshop, masked with `clip-path` or an SVG `mask` to one bold shape taken from the subject (a four-lobed flower, a circle, an arch, a chamfered block), 38vw across, positioned so the panel's bottom edge crops its lowest fifth. Right side, starting at 63% of the width and 56px from the top: two text blocks 300px wide and 64px apart, each a subhead at 22px over a four-line paragraph at 15px; then one solid button in the accent colour. Between the statement and the text blocks the panel is empty. One photograph only.
On a phone: The panel is inset 10px and stacks: the statement at 8.5vw, then the two text blocks at full width, the button, and last the shaped photograph at 86vw across, centred and cropped by the panel's bottom edge by a quarter of its height.

Adjusted for this page:
- It names its own corners: use the one radius of this page (square unless the direction says otherwise) and one button shape.
- It sets a sentence large over several lines: jurors read that as a long headline. Either cut it to a two-line headline at display size, or keep it a statement at 36px or less on three lines (24px, four lines on a phone).

### 2. list — Line-up at one type size (table)
A full-bleed flat section. The programme is a four-column table spanning the full width between 24px margins, with every cell at one size, clamp(20px, 2.1vw, 30px), one weight, no bold: the act or session flush left, the format starting at 33%, the room or stage at 66%, and the time range right-aligned at the far edge with tabular figures. Rows are 1.5em tall and separated by nothing but that leading; the fixed column starts do the organising. Day or part headings are a single line at the same size in the accent ink with 72px above and 20px below, and may be `position: sticky; top: 0` on a strip of the section's ground colour so the current day stays in view. Breaks and changeovers are rows set in capitals in the soft ink. There is no other heading. Comfortably holds 12–40 rows; with fewer than eight, raise the size to 3vw.
On a phone: Each entry becomes two lines: the act at 22px on the first, then format, room and time on one line at 14px in the soft ink with the time right-aligned. 18px between entries. Day headings stay sticky at the top on the ground colour.

Adjusted for this page:
- It names a kind of typeface: use the dealt faces (display Clash Grotesk, text Clash Grotesk) and their settings; capitals only where the type system sets them.

### 3. gallery — Staggered pairs in empty ground (stack)
No heading. Photographs are placed one or two per screen so that more than half of every screen stays empty ground. Screen one: a 3:4 portrait in columns 1–4 against the left margin, and a near-square 5:4 image in columns 7–12 against the right margin whose top edge starts 30vh lower than the portrait's. Screen two: a 3:2 landscape in columns 6–11 and, 24vh lower, a small 4:5 image in columns 2–4. Repeat the two arrangements, mirrored on the second pass, for six to ten photographs. Under each image's left corner, a one-line caption at 13px in the soft ink, 10px below the image. Vertical gaps between pairs are 22–28vh. Every edge sits on a column line and offsets come from only two values. Square corners. If motion is used, images enter with a short `clip-path` wipe from the bottom edge.
On a phone: A single column in which widths and sides alternate: 70% against the left margin, 84% against the right, 56% left, then 100% full-bleed, with 64px between images. Captions sit under each image's left corner at 13px. Portrait crops are preferred so each image fills most of the screen height.

### 4. contact — The email as display type (statement)
The section is 100svh in the inverse of the page's colours. A single email address is set as one line of display type spanning the content width: the font-size is fitted so the address runs from margin to margin (about 7–9vw for 20 characters; break after the @ onto two lines if it is longer than 26), light or regular weight, tight tracking, sitting on a baseline 12vh above the bottom edge. It is a `mailto:` link; on hover the whole line takes the accent ink. In the top-left corner, a sentence of up to 12 words at 20–22px says what to write about. In the two bottom corners at 14px: phone and city at the left, two or three social links at the right. No heading and no form. For a pinned ending, make the section `position: sticky; bottom: 0` beneath the page so the previous section lifts off it.
On a phone: The address breaks after the @ onto two lines at 11.5vw, left-aligned, sitting at 55% of an 86svh screen. The sentence sits at the top-left at 18px. Phone, city and social links stack at the bottom-left at 15px with 12px between them.

## 8. Motion — Slow crossfade
The principal photograph quietly changes: three or four images of the same framing crossfade over about 1.6 seconds, holding five to six seconds each, or the fixed image changes when its matching section arrives. It should feel like light shifting in a room. Pause when the tab is hidden; under reduced motion show only the first image.
This is the signature move, the one loud moment. Around it the page still needs the rest of the motion layer (SKILL.md step 9): an entrance for the parts of every section, feedback on every control, and one moving picture. The inspector fails a page that barely moves. Recipes: references/motion.md.

## 10. Where the richness comes from
Light against dark, and the slow pacing.

## 11. How this direction goes wrong
Grey text on black fails contrast quickly: check it. No glow effects, no neon accent, no coloured light blobs. A dark page with a bright busy photograph is not this direction; choose low-key images. Dark does not mean empty: every screen still carries its content at a readable size, and running text is a light ink at 7:1 or more, not a dim grey.

## 12. Real references
Studied sites that work this way. Take the principle, never the specifics: no names, copy, images or signature assets of theirs.
- **Deeo Studio** (One Page Love, studied score 7) `opl-deeo-studio-2`
  Idea: The studio's four letters as huge extruded iridescent 3D blocks tumbling across a black stage, with a quiet ultralight serif statement underneath.
  Hero: Near-black viewport. Four extruded 3D letters, each roughly 45-60% of the viewport tall, are scattered at different depths and tilts across the top 80% of the screen: one cropped by the top-left corner, one lower and left of centre, a larger one upper-right, the last cropped by the right edge. Faces are dark glass; edges catch lilac, orange and holographic rainbow light. Over them runs a slim nav: bold caps wordmark top-left at a 60px margin, three small caps links (one with a tiny yellow tag) and an outlined rounded button top-right. Bottom-left, a light serif headline at about 72px begins and is cut by the fold after two lines.
  Worth taking: Render the studio name as separate 3D letters at different depths and tilts, cropped by the viewport edges, instead of a flat wordmark.
- **Kereliott** (One Page Love, studied score 7.3) `opl-kereliott`
  Idea: A quiet house gets a quiet page: one dark field, one typeface, the name set as wide as the screen and photographs left to drift in generous darkness.
  Hero: Very dark green-black field with cream type. A two-line introductory sentence at about 30px sits top-left inside 30px margins; a small cream rectangular button sits top-right. The upper half is otherwise empty. The house name fills the full content width in a flared humanist sans, mixed case, with capitals about 19vw tall, its baseline at roughly 87% of the viewport height. Immediately beneath, separated by a gap of a few pixels, the top sliver of a full-width landscape photograph enters from the bottom edge.
  Worth taking: Size the wordmark to fill the content width exactly and let the first photograph tuck directly under its baseline.
- **Tengile Malamala Collection** (Awwwards Site of the Day, studied score 7.6) `aww-tengile-malamala-collection`
  Idea: Let the land and animals carry everything: one staggered hairline-serif headline over aerial footage, then cream pages of olive-green serif text with photographs placed at uneven sizes.
  Hero: Aerial river footage fills the viewport, slightly darkened. Three small white caps items sit on the top edge: an enquiry link hard left, a stacked three-line wordmark centred, 'menu' hard right. The headline is two words on two lines in thin serif capitals about 8.3vw tall: the first line starts 10% from the left, the second is indented to 40% and ends near 90%, so the pair steps diagonally across the middle third. Below, starting at the 50% line, a three-line serif sentence at about 20px and a small white square-cornered button with a separate arrow square beside it. The lower third is left to the water.
  Worth taking: Stagger a two-line headline: first line from the left margin, second indented by 30% so the pair steps diagonally across the image.
Full notes on any of them: `node draw.mjs --site <id>`.

## Always
Headlines two lines or fewer at every width. No eyebrow labels, no monospace, no 01/02/03, no thin rules, no gradients, no shadows at rest,
no cream-and-terracotta, no violet. The frame: one h1 on the first screen that says what this is, equal outer margins, no
section huddled on one side with the other half empty, no blank stretch over half a screen, a heading on every section.
`inspect.mjs` measures all of it.

Saved to /Users/panygolf/Documents/barbershop-bergen/.taste-skill/01-bryggen-barber/direction.json · reprint with `node draw.mjs --show`
