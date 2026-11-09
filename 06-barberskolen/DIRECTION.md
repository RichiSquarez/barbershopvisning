# DIRECTION SHEET — One motif
seed 761626633 · drawn 2026-11-09 · sector education
Brief: Barberskolen Bergen — a barber school where students cut for half price under a master's eye. Timetable, exams, apprenticeship.

| | |
| --- | --- |
| Direction | One motif |
| Hero | Striped card beside the room |
| Type | Albert Sans |
| Colour | Bottle green, gold |
| Sections | about (Inset panel, shaped portrait) → how-it-works (Tiles that grow) → list (Two-column menu, photo bullets) → faq (Tabbed index cards) → contact (Clip-out coupon form) |
| Motion | Slow crossfade |
| Photographs | the "People" set, as atmosphere |

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
Take one shape from the subject and let it run the whole system. A drilling tool's octagonal cross-section becomes the buttons, the image masks and the loader. A two-account money app becomes two circles that recur as icon, inline dot and section colour. A café's striped awning becomes every band on the page. Look at the product, the logo, the object or the word in the headline and find the simplest geometry in it (a circle, an arc, a chamfer, a stripe, a notch, a ring). Then use only that shape, at three or four very different scales, everywhere a designer would normally reach for a generic rounded rectangle.

Before anything else, write one sentence in your notes: "On this page, <the subject's own material> becomes <the device>."
Fill the first blank from your inventory of what only this client has (its name and what it means, its street, its numbers, its
constraint), then put the nearest competitor in the sentence: if it still works, the idea is the category's, not the client's.
Then name the one live thing the visitor can do on the page (SKILL.md step 4).

## 2. Composition
Hero: the motif appears once at enormous scale as a flat filled shape, cropped by the viewport (a circle 120vh across entering from the right, a chamfered block filling the lower half), with a short headline at 6–8vw and one supporting sentence set on the remaining ground, left-aligned on a shared margin. Through the page the motif returns as: the mask for every photograph (via `clip-path` or `border-radius` made from the same geometry), the shape of the primary button, the bullet beside list items at text size, and one full-width band that separates the two halves of the page. Sections use simple two-column or single-column layouts so the shape is the only thing with character.

## 3. Type — Albert Sans
A geometric grotesque with Scandinavian restraint: round letters, even colour, nothing decorative. Suits logistics, health, property and corporate sites that need to look clear and dependable.
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```
- Display: **Albert Sans** — weight 600 · tracking -0.035em · leading 1.0 · sentence case
- Text: **Albert Sans** — 400 for body, 500 for emphasis · leading 1.5 · tracking 0
```css
:root {
  --step-small: clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem);
  --step-body: clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem);
  --step-lead: clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem);
  --step-head: clamp(2rem, 1.3rem + 3.2vw, 4rem);
}
```
A clean geometric or grotesk face that echoes the shape (round bowls for circles, squared terminals for chamfers). Medium weight; headings 6–8vw in the hero and 3–4vw after.
The direction decides sizes and how many of them; the type system decides how this face is set. Where the two give different tracking or leading, use the values of the type system: they are tuned to this face.
The display size itself comes from the hero blueprint below.

## 4. Colour — Bottle green, gold
```css
:root {
  --bg: #133621;
  --surface: #1a4429;
  --ink: #f4d96c;
  --muted: #b3a55e;
  --accent: #f4d96c;
  --accent-ink: #133621;
}
```
Bottle green covers the page and warm gold sets all the type, with panels one step lighter than the ground. The button is solid gold with green text, and photographs are kept dark and warm so the pair is not disturbed.
The motif carries the accent colour at large scale, flat. Everything else is ground and ink. A second motif colour is allowed only if the subject has a real pair (two accounts, two modes).

## 5. Imagery
**Use the images that belong to the project in every picture slot.** For slots they cannot fill, real pictures of the subject's world from the open collections come next (start with `node /Users/panygolf/.agents/skills/design-taste-frontend/scripts/assets.mjs "students cut"`, then queries from your inventory (its street, its materials, its trade's tools and history); credit them on the page), then the dealt photographs.

Photographs appear inside the motif's shape. If there is product interface to show, it sits on a flat colour stage shaped by the motif. Draw the shape with CSS or a simple inline SVG path; do not draw illustrations.

**Floor (the inspector checks it):** at least four real pictures on the page, usually six to twelve; SVG drawings do not count. One moving picture where an honest clip exists: `node <skill>/scripts/assets.mjs --video "<query>"`, used as a muted loop with a poster frame. Whatever this direction says about pictures, it is carried out with real ones.

Photographs dealt for this build, from the "People" set (figures, silhouettes and portraits, mostly unposed)
Order of preference for imagery: (1) the project's own photographs and product shots; (2) images you generate, if an image tool is
available; (3) real pictures of the subject's world found in the open collections (assets.mjs, downloaded and credited on the page);
(4) drawings of the subject in code; (5) these. They are real photographs (Unsplash licence, served by picsum.photos) of places, light and
texture. They are atmosphere, never a stand-in for a specific product, dish, person or interface. List the ones you use in your report so
they can be replaced.
- `https://picsum.photos/id/446/1600/1000` — Swimmer diving underwater in deep blue water with rising bubbles · dark tone · deep blue, navy · calm area: top · native landscape · photo: Jacob Walti
- `https://picsum.photos/id/669/1600/1000` — Person in a mustard jacket and grey beanie seen from behind in fog · light tone · mustard, pale grey, white · calm area: left · native landscape · photo: Luke Pamer
- `https://picsum.photos/id/177/1600/1000` — Hiker with a backpack looking over a hazy mountain valley · mid tone · warm tan, hazy gold, olive · calm area: left · native landscape · photo: Danka & Peter
- `https://picsum.photos/id/338/1600/1000` — Person in a hooded coat seen from behind facing a misty sea · mid tone · slate blue, grey, charcoal · calm area: left · native landscape · photo: Patryk Sobczak
- `https://picsum.photos/id/685/1600/1000` — Man sitting on a rock looking over a sea of clouds · mid tone · pale gold, grey, dark brown · calm area: right · native landscape · photo: Joshua Earle
- `https://picsum.photos/id/91/1600/1000` — Person in dark jacket holding a vintage twin-lens camera, monochrome · mid tone · grey, black · black-and-white · native landscape · photo: Jennifer Trovato
- `https://picsum.photos/id/375/1600/1000` — Person in a hooded jacket sitting among white daisies at dusk · dark tone · navy, dark green, white · calm area: top · native landscape · photo: Wellington Sanipe
- `https://picsum.photos/id/334/1600/1000` — Man carrying a guitar walking along a foggy beach, monochrome · light tone · light grey, white, charcoal · black-and-white · calm area: top · native landscape · photo: Kimberly Richards
The last two path numbers are width and height: request the exact crop you render (`/1200/1500` for a 4:5 portrait, `/2400/1350` for a hero) and
add `?grayscale` to desaturate. Use three to six of them, not all eight. Always set `width`, `height`, `alt` and `loading="lazy"` (not on the hero image).
Other sets that fit this brief: mountain, coast, fog-and-quiet, architecture — `node draw.mjs --photos <set>` prints one in full; `--photos list` shows all sets. Taking photographs from another set is your call and is not a redraw; keep them to one light and one treatment.

## 6. Hero — Striped card beside the room
The viewport is split 50/50 with a 12px gap and 12px outer margins. The right half is one full-height photograph of the room, corners radiused 16px, `position: sticky` so it stays in view while the left half scrolls. The left half is a printed card: a flat paper-colour panel with the same 16px radius, and the subject's stripe (from its awning, label or ribbon) as the only ornament. Across the card's top runs a band 56px tall made of alternating bars of the single ink colour and paper, each bar 28px wide, built as a flex row of filled blocks. The same stripe returns as an 8px band above the footer and inside the button on hover. Under the band, centred: the wordmark about 300px wide, then a two-line headline in a light serif at clamp(40px, 3.6vw, 56px) in the ink colour, one supporting sentence at 17px held to 36ch, and the single action as a solid rectangular button. Three text links sit in one centred row at 15px, 28px above the card's bottom edge. One ink on paper; the photograph supplies every other colour.

On a phone: The photograph comes first at full width inside 12px margins, 48svh tall, with the 16px radius. The card follows and overlaps the photograph's bottom edge by 24px using a negative margin. Its striped band is 40px tall; below it the wordmark at 56% width, the headline at 8vw on two lines, the sentence and the button, all centred. The links wrap into the card's foot.
Headline: A warm two-line welcome of three to six words, up to about 18 characters per line at 3.6vw.

Adjusted for this page:
- It sets text at 12px: use your small step (13px or more) instead.
- It names its own corners: use the one radius of this page (square unless the direction says otherwise) and one button shape.
- It names a kind of typeface: use the dealt faces (display Albert Sans, text Albert Sans) and their settings; capitals only where the type system sets them.

## 7. Sections, in order
Each is a composition to rebuild with this project's content. Keep the geometry; change the subject. Re-order or drop a
section when the argument of the page needs it (see references/copy.md), never to fall back to a card grid.

### 1. about — Inset panel, shaped portrait (split)
A deep-toned panel inset 20px from the page edges with a 12px radius, about 110svh tall, `overflow: hidden`. Left half: a two-line statement of four to seven words at clamp(40px, 4.4vw, 64px) in a pale ink, top-left with 56px padding; it is the heading and has nothing above it. Below it a photograph of the person or the workshop, masked with `clip-path` or an SVG `mask` to one bold shape taken from the subject (a four-lobed flower, a circle, an arch, a chamfered block), 38vw across, positioned so the panel's bottom edge crops its lowest fifth. Right side, starting at 63% of the width and 56px from the top: two text blocks 300px wide and 64px apart, each a subhead at 22px over a four-line paragraph at 15px; then one solid button in the accent colour. Between the statement and the text blocks the panel is empty. One photograph only.
On a phone: The panel is inset 10px and stacks: the statement at 8.5vw, then the two text blocks at full width, the button, and last the shaped photograph at 86vw across, centred and cropped by the panel's bottom edge by a quarter of its height.

Adjusted for this page:
- It names its own corners: use the one radius of this page (square unless the direction says otherwise) and one button shape.
- It sets a sentence large over several lines: jurors read that as a long headline. Either cut it to a two-line headline at display size, or keep it a statement at 36px or less on three lines (24px, four lines on a phone).

### 2. how-it-works — Tiles that grow (grid)
Order is carried by size. Three flat colour tiles stand in one row, bottom-aligned (align-items: end) with 10px gaps, each larger than the one before: columns 1–3 at 30vh tall, columns 4–7 at 44vh, columns 8–12 at 60vh. Each tile holds one photograph of the subject at that stage (raw, in progress, finished), centred and scaled so the object grows from tile to tile; on light tiles mix-blend-mode: multiply removes a white studio background. One palette colour per tile. Text sits under the tiles, outside them, aligned to each tile's left edge: a stage name at 20px medium whose wording carries the order ('Picked', 'Pressed', 'Poured') and two lines at 16px in the soft ink. The heading, two to four words at 40–52px, occupies the empty ground above the two smaller tiles, top-aligned with the tallest tile. A fourth stage is possible with spans of 2, 3, 3 and 4 columns.
On a phone: Tiles stack in order and grow in height instead: 34vw, 46vw and 62vw tall, each at full width. The name and text sit under each tile at 18px and 16px. The heading comes first at 30px. 28px between stages.

### 3. list — Two-column menu, photo bullets (grid)
A menu or catalogue list in which each item has a small cut-out photograph where a bullet would be. Each category opens with its name at clamp(32px, 3.4vw, 50px) at the left margin and the number of items at 16px right-aligned on the same baseline, with 96px above and 40px below. Items then run in two columns with a 64px gutter and 36px between rows. Each item is a two-part row: a 64px photograph of the item on a plain background at the left (multiplied onto the ground with `mix-blend-mode: multiply`, or masked to the page's one shape), then 20px to its right the name in bold at 17–18px with the price right-aligned on the same line, and beneath it a two- or three-line description at 15px in the soft ink, max 38ch. A short note such as an allergen follows the description in the accent ink. No boxes. Holds 6–10 items per category.
On a phone: One column. Photographs shrink to 52px and stay at the left; name and price share the first line with the description beneath at 15px. Category names at 8.5vw with the count on the same baseline. A sticky row of category names as text links lets the reader jump.

### 4. faq — Tabbed index cards (stack)
Questions are filed like cards in a drawer. A heading of two to four words at about 4vw sits in columns 3–10. Beneath it, in the same columns, five or six filled panels are stacked so that each overlaps the one above, leaving 96px of every card showing. Each card has a tab on its top edge, 200px wide and 40px tall, stepping right by 150px per card, cut with `clip-path: polygon()` so card and tab are one filled shape. The cards rotate through two or three palette colours. The tab carries the topic in one or two words at 16px; the visible strip under it shows the question at 20px medium. Choosing a card expands it to show the answer at 17px over at most 50ch and pushes the cards below it down. One card is open at a time; the first is open on load.
On a phone: Cards run full width with the same overlap, 88px of each showing. Tabs shrink to 120px wide and step right by 48px per card. The open card expands in place with its answer at 16px and 20px padding, and the heading leads at 9vw.

### 5. contact — Clip-out coupon form (split)
The form is a coupon to cut out. One filled card in a strong flat colour, about 2.2:1, spans columns 2–11 with a 14px radius, with 120px of ground above and below. Semicircular notches 28px across are cut into its top and bottom edges at the 46% mark with `clip-path` or an SVG `mask`, and a vertical row of round dots (a dotted `border-left` 5px thick in the ground colour) joins the two notches as the perforation. Left of the perforation, with 48px padding: a two-line heading of three to five words at clamp(28px, 3vw, 44px) in heavy capitals at the top, and one sentence at 16px at the bottom. Right of it: four inputs stacked with 10px gaps, each a filled block 52px tall in a lighter tone of the card with its placeholder at 16px, then a full-width solid submit bar 56px tall in the darkest ink. Inputs keep visually hidden `label` elements.
On a phone: The card turns upright and spans the width with 12px margins. The perforation becomes horizontal: notches on the left and right edges, dots across. Heading and sentence sit above it; the four inputs and the submit bar sit below, each 54px tall.

Adjusted for this page:
- It names its own corners: use the one radius of this page (square unless the direction says otherwise) and one button shape.
- It names a kind of typeface: use the dealt faces (display Albert Sans, text Albert Sans) and their settings; capitals only where the type system sets them.
- It draws lines or borders: keep them only inside a table, a form or a `data-ui` fragment; elsewhere separate with space or a change of ground.

## 8. Motion — Slow crossfade
The principal photograph quietly changes: three or four images of the same framing crossfade over about 1.6 seconds, holding five to six seconds each, or the fixed image changes when its matching section arrives. It should feel like light shifting in a room. Pause when the tab is hidden; under reduced motion show only the first image.
This is the signature move, the one loud moment. Around it the page still needs the rest of the motion layer (SKILL.md step 9): an entrance for the parts of every section, feedback on every control, and one moving picture. The inspector fails a page that barely moves. Recipes: references/motion.md.

## 10. Where the richness comes from
One shape at many sizes. The giant cropped shape gives the hero mass and colour without a single image.

## 11. How this direction goes wrong
One motif means one. A circle here, a hexagon there and a blob behind is the generated look this replaces. The motif must come from the subject and you must be able to say from where in one clause.

## 12. Real references
Studied sites that work this way. Take the principle, never the specifics: no names, copy, images or signature assets of theirs.
- **Billow** (One Page Love, studied score 6.9) `opl-billow`
  Idea: A conventional product page softened by a cloud motif: the logo's cloud silhouette is blown up and blurred into a blue stage for the app.
  Hero: Centred stack on near-white. Nav inside a 1230px container: cloud logo left, four links centred, outline Log in and navy pill right. A small outlined pill badge, then a two-line title-case serif headline at 6.4vw with -0.05em tracking in deep navy, a three-line 18px paragraph whose opening phrase sits on a pale-blue highlighter block, a glossy blue gradient pill button and an 11px reassurance line. The bottom third is a huge blurred cobalt-to-cyan cloud silhouette, the logo enlarged to full width, with the top of a white app window rising from the fold and a handwritten note with a scribbled arrow at its right corner.
  Worth taking: Enlarge the logo silhouette to full width, blur it heavily, and use it as the coloured stage behind the product screenshot.
- **Midnight** (One Page Love, studied score 7.1) `opl-midnight-2`
  Idea: The headline's circles are literally pictured: one blurred dark ring, sliced into horizontal bands, becomes the hero, the demo panel, the session cards and the footer.
  Hero: No navigation at all. A canvas fills the full width and the top 90% of the viewport: a huge out-of-focus dark navy ring on drifting taupe, sage and terracotta, cut into horizontal bands about 78px tall that are slightly offset like blinds. On the vertical centre line, starting 58px from the left, sit a small rounded-square line icon and a one-line headline at 48px in cream. On the same baseline, starting 59% across, a two-line 17px statement whose first sentence is white and bold while the rest drops to half opacity. The cream page background shows as a 90px strip at the bottom. No button.
  Worth taking: Slice a soft blurred gradient into horizontal bands with small offsets so a familiar glow becomes a recognisable, ownable texture.
Full notes on any of them: `node draw.mjs --site <id>`.

## Always
Headlines two lines or fewer at every width. No eyebrow labels, no monospace, no 01/02/03, no thin rules, no gradients, no shadows at rest,
no cream-and-terracotta, no violet. The frame: one h1 on the first screen that says what this is, equal outer margins, no
section huddled on one side with the other half empty, no blank stretch over half a screen, a heading on every section.
`inspect.mjs` measures all of it.

Saved to /Users/panygolf/Documents/barbershop-bergen/.taste-skill/06-barberskolen/direction.json · reprint with `node draw.mjs --show`
