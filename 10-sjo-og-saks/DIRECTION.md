# DIRECTION SHEET — Dressed as something else
seed 316826971 · drawn 2026-11-09 · sector hospitality · tone playful
Brief: Sjø & Saks — sheep shearing meets barbering: a rural-edge Bergen shop cutting whole families, kids free under ten. Playful and printed.

| | |
| --- | --- |
| Direction | Dressed as something else |
| Hero | Shouted headline, rising photograph |
| Type | Cabinet Grotesk |
| Colour | Tobacco and olive |
| Sections | about (Inset panel, shaped portrait) → list (The printed menu sheet) → gallery (Full-bleed sequence, text interlocked) → faq (Tabbed index cards) → contact (Clip-out coupon form) |
| Motion | Masked headline |
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
Art-direct the subject as if it belonged to a different, more vivid category. A money app is sold like a streetwear drop. An industrial roaster is presented like a design object. Drilling hardware gets the calm of a watch brand. A parcel-locker service becomes a fairground of stickers. Choose the borrowed category by asking what feeling the audience is missing from this kind of product (swagger, calm, glamour, play) and which category owns that feeling. Then take its manners completely: its type, its pacing, its way of photographing things. The contrast between dull subject and vivid dress is what people remember.

Before anything else, write one sentence in your notes: "On this page, <the subject's own material> becomes <the device>."
Fill the first blank from your inventory of what only this client has (its name and what it means, its street, its numbers, its
constraint), then put the nearest competitor in the sentence: if it still works, the idea is the category's, not the client's.
Then name the one live thing the visitor can do on the page (SKILL.md step 4).

## 2. Composition
Depends on the borrowed category, so decide it explicitly and write it in your notes. Fashion drop: one shouted condensed headline across the full width, a single cropped image under it, then product facts as a blunt list. Watch or perfume: a centred object on a dark field, a small serif name, very few words, long vertical pauses. Poster or zine: flat colour blocks, heavy type, tilted cut-out images. Museum: one item per screen on a plinth-like band of colour with a short label beside it. Whichever you choose, the page structure stays simple (four to six sections) and every section uses the borrowed manners, including pricing and the footer.

## 3. Type — Cabinet Grotesk
A heavy sans with tight joins and an eccentric lowercase, friendly but loud. Suits bookshops, food, consumer subscriptions and marketing studios.
```html
<link rel="preconnect" href="https://api.fontshare.com">
<link rel="preconnect" href="https://cdn.fontshare.com" crossorigin>
<link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,800&display=swap" rel="stylesheet">
```
- Display: **Cabinet Grotesk** — weight 800 · tracking -0.035em · leading 0.9 · lowercase or sentence case, one or two words per line
- Text: **Cabinet Grotesk** — 400 for body, 500 for emphasis · leading 1.5 · tracking 0
```css
:root {
  --step-small: clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem);
  --step-body: clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem);
  --step-lead: clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem);
  --step-head: clamp(2.5rem, 1.2rem + 5vw, 5.5rem);
}
```
The borrowed category's type, fully committed: condensed and loud, or refined and small. No halfway.
The direction decides sizes and how many of them; the type system decides how this face is set. Where the two give different tracking or leading, use the values of the type system: they are tuned to this face.
The display size itself comes from the hero blueprint below.

## 4. Colour — Tobacco and olive
```css
:root {
  --bg: #472913;
  --surface: #55321a;
  --ink: #e4e0cf;
  --muted: #b39f84;
  --accent: #525e1b;
  --accent-ink: #e4e0cf;
  --field-1: #c79a3e;  --field-1-ink: #2b170a;
  --field-2: #525e1b;  --field-2-ink: #e4e0cf;
}
```
Tobacco brown fills the page with bone type, and photographs stay in browns and ochre. One olive block holds the main text or the button, and a single ochre band may break the brown once.
The borrowed category's palette, which will be unlike the subject's sector norm. That mismatch is intended.

## 5. Imagery
**Use the images that belong to the project in every picture slot.** For slots they cannot fill, real pictures of the subject's world from the open collections come next (start with `node /Users/panygolf/.agents/skills/design-taste-frontend/scripts/assets.mjs "whole families"`, then queries from your inventory (its street, its materials, its trade's tools and history); credit them on the page), then the dealt photographs.

Photograph the subject the way the borrowed category would be photographed. With the dealt set, choose images for attitude, not literal relevance, and crop them hard.

**Floor (the inspector checks it):** at least four real pictures on the page, usually six to twelve; SVG drawings do not count. One moving picture where an honest clip exists: `node <skill>/scripts/assets.mjs --video "<query>"`, used as a muted loop with a poster frame. Whatever this direction says about pictures, it is carried out with real ones.

Photographs dealt for this build, from the "Coast" set (sea, shoreline, cliffs, piers and beaches)
Order of preference for imagery: (1) the project's own photographs and product shots; (2) images you generate, if an image tool is
available; (3) real pictures of the subject's world found in the open collections (assets.mjs, downloaded and credited on the page);
(4) drawings of the subject in code; (5) these. They are real photographs (Unsplash licence, served by picsum.photos) of places, light and
texture. They are atmosphere, never a stand-in for a specific product, dish, person or interface. List the ones you use in your report so
they can be replaced.
- `https://picsum.photos/id/1052/1600/1000` — Black sea stacks off a dark beach with white surf under a pale sky · light tone · black, white, pale grey · calm area: top · native landscape · photo: Annie Spratt
- `https://picsum.photos/id/1049/1600/1000` — Rock island reflected on a wet beach under a pale sky · light tone · pale grey, soft white, dark green · calm area: top · native landscape · photo: Rosan Harmens
- `https://picsum.photos/id/218/1600/1000` — Calm turquoise bay between two limestone cliffs under storm clouds · mid tone · turquoise, slate grey, dark green · calm area: centre · native landscape · photo: Monika Majkowska
- `https://picsum.photos/id/732/1600/1000` — Dark rocky shoreline beside a calm sea under a pale cloudy sky · light tone · pale blue, soft grey, charcoal · calm area: top · native landscape · photo: Dominik Schröder
- `https://picsum.photos/id/1055/1600/1000` — Wide wet sand flat with a distant shoreline under a pale sky · mid tone · warm brown, sand, off-white · calm area: bottom · native landscape · photo: Neil Thomas
- `https://picsum.photos/id/372/1600/1000` — Lifeguard tower on an empty sandy beach under a hazy sky · light tone · pale blue, sand, soft grey · calm area: left · native landscape · photo: Gabriel Santiago
- `https://picsum.photos/id/268/1600/1000` — White lifeguard chair standing in dune grass under overcast sky · light tone · white, straw yellow, green · calm area: top · native landscape · photo: davide ragusa
- `https://picsum.photos/id/969/1600/1000` — Wet rocky shore with sea stacks under a bright sky, black and white · dark tone · black, grey, silver · black-and-white · native landscape · photo: Lee Miller
The last two path numbers are width and height: request the exact crop you render (`/1200/1500` for a 4:5 portrait, `/2400/1350` for a hero) and
add `?grayscale` to desaturate. Use three to six of them, not all eight. Always set `width`, `height`, `alt` and `loading="lazy"` (not on the hero image).
Other sets that fit this brief: mountain, fog-and-quiet, field-and-farm, desert-and-road — `node draw.mjs --photos <set>` prints one in full; `--photos list` shows all sets. Taking photographs from another set is your call and is not a redraw; keep them to one light and one treatment.

## 6. Hero — Shouted headline, rising photograph
Borrowed from a fashion drop. A near-white or single flat colour field. Navigation is one compact line at the top on 24px margins: condensed wordmark left, three text links centred, the single action right. Directly beneath, a two-line uppercase headline in a bold condensed face at clamp(88px, 11.4vw, 176px), centred, leading 0.88, tracking -0.02em, about 60% of the viewport wide; it occupies the band from 12% to 43% of the height. Immediately under the second line, pulled up with a negative margin of -1.2vw so its top edge tucks behind the letters' baseline, a single portrait photograph rises: 27% of the viewport wide (columns 5-8), 3:4, square corners, object-fit: cover, cropped by the bottom edge so only its upper two thirds show. The photograph is the only colour on the screen. The flanks either side of it stay empty apart from one supporting sentence at 17px bottom-left in a 280px column, and the price or key fact at the same size bottom-right, both on a baseline 32px above the bottom edge.

On a phone: The headline sets at 17vw on two lines, flush to 16px margins and filling the width, in the top third of the screen. The photograph widens to 64% of the width, centred, 3:4, starting directly under the headline and running off the bottom. The supporting sentence and the key fact move below the fold. Navigation collapses to the wordmark and the action.
Headline: A blunt 2-4 word statement in condensed capitals, at most 22 characters, one or two words per line.

Adjusted for this page:
- It names a kind of typeface: use the dealt faces (display Cabinet Grotesk, text Cabinet Grotesk) and their settings; capitals only where the type system sets them.
- It names colours (white): map them onto this palette's roles (ground `--bg`, panels `--surface` and the fields, text `--ink`/`--muted`, the accent `--accent` on the primary action only).

## 7. Sections, in order
Each is a composition to rebuild with this project's content. Keep the geometry; change the subject. Re-order or drop a
section when the argument of the page needs it (see references/copy.md), never to fall back to a card grid.

### 1. about — Inset panel, shaped portrait (split)
A deep-toned panel inset 20px from the page edges with a 12px radius, about 110svh tall, `overflow: hidden`. Left half: a two-line statement of four to seven words at clamp(40px, 4.4vw, 64px) in a pale ink, top-left with 56px padding; it is the heading and has nothing above it. Below it a photograph of the person or the workshop, masked with `clip-path` or an SVG `mask` to one bold shape taken from the subject (a four-lobed flower, a circle, an arch, a chamfered block), 38vw across, positioned so the panel's bottom edge crops its lowest fifth. Right side, starting at 63% of the width and 56px from the top: two text blocks 300px wide and 64px apart, each a subhead at 22px over a four-line paragraph at 15px; then one solid button in the accent colour. Between the statement and the text blocks the panel is empty. One photograph only.
On a phone: The panel is inset 10px and stacks: the statement at 8.5vw, then the two text blocks at full width, the button, and last the shaped photograph at 86vw across, centred and cropped by the panel's bottom edge by a quarter of its height.

Adjusted for this page:
- It names its own corners: use the one radius of this page (square unless the direction says otherwise) and one button shape.
- It sets a sentence large over several lines: jurors read that as a long headline. Either cut it to a two-line headline at display size, or keep it a statement at 36px or less on three lines (24px, four lines on a phone).

### 2. list — The printed menu sheet (band)
The list is one tall sheet of paper. A filled paper-colour panel 640px wide sits centred, or offset to columns 7–12, on a contrasting flat ground or a full-bleed photograph, with square corners and its top and bottom edges cut into shallow scallops by `clip-path` or an SVG `mask`. Inside, 64px padding and a centred, symmetrical setting like a printed card: the venue or section name at 40–48px, a one-line note at 15px, then three or four groups 56px apart. Each group opens with its name at 22px, centred. Items follow at 17px with 16px between them: the dish or service at the left of a 420px measure, the price at the right with tabular figures, and a one-line description at 14px in the soft ink under the name. Alignment alone links name and price; there are no leaders. The sheet ends with the opening hours as two centred lines. Holds 12–24 items.
On a phone: The sheet spans the screen with 10px of ground showing at each side and 28px padding; the scalloped edges stay at top and bottom. The measure is the full inner width and prices stay right-aligned. Group names at 20px, items at 16px.

### 3. gallery — Full-bleed sequence, text interlocked (full-bleed)
Three photographs, each 100vw by 100svh, shown one after another with nothing between them. Each is `position: sticky; top: 0` inside a wrapper 300svh tall, so the second slides up over the first and the third over the second like a curtain; no scroll hijacking. The section above interlocks with the first photograph: a narrow paragraph at 13–14px, 220px wide, sitting on the column line at 58% of the width, is pulled down with a negative bottom margin so its last four lines overlap the photograph's top edge, in a colour that reads on both ground and image. Each photograph carries one caption line at 15px in white at the bottom-left margin, over a neutral dark scrim limited to the lowest 120px. No heading. Choose three frames with the same light and a calm lower-left corner. The last photograph releases into the next section.
On a phone: Each photograph is 100vw by 88svh in a portrait crop and still sticks so the next covers it. The interlocking paragraph sits at the left margin, 60% wide, overlapping the first photograph by three lines. Captions stay bottom-left at 14px.

Adjusted for this page:
- It names colours (white): map them onto this palette's roles (ground `--bg`, panels `--surface` and the fields, text `--ink`/`--muted`, the accent `--accent` on the primary action only).
- It pins something for three screens or more: hold a pin for two or three screens at most, give every screen under it its own content, and let nothing pass over the pinned words (the inspector checks all three).

### 4. faq — Tabbed index cards (stack)
Questions are filed like cards in a drawer. A heading of two to four words at about 4vw sits in columns 3–10. Beneath it, in the same columns, five or six filled panels are stacked so that each overlaps the one above, leaving 96px of every card showing. Each card has a tab on its top edge, 200px wide and 40px tall, stepping right by 150px per card, cut with `clip-path: polygon()` so card and tab are one filled shape. The cards rotate through two or three palette colours. The tab carries the topic in one or two words at 16px; the visible strip under it shows the question at 20px medium. Choosing a card expands it to show the answer at 17px over at most 50ch and pushes the cards below it down. One card is open at a time; the first is open on load.
On a phone: Cards run full width with the same overlap, 88px of each showing. Tabs shrink to 120px wide and step right by 48px per card. The open card expands in place with its answer at 16px and 20px padding, and the heading leads at 9vw.

### 5. contact — Clip-out coupon form (split)
The form is a coupon to cut out. One filled card in a strong flat colour, about 2.2:1, spans columns 2–11 with a 14px radius, with 120px of ground above and below. Semicircular notches 28px across are cut into its top and bottom edges at the 46% mark with `clip-path` or an SVG `mask`, and a vertical row of round dots (a dotted `border-left` 5px thick in the ground colour) joins the two notches as the perforation. Left of the perforation, with 48px padding: a two-line heading of three to five words at clamp(28px, 3vw, 44px) in heavy capitals at the top, and one sentence at 16px at the bottom. Right of it: four inputs stacked with 10px gaps, each a filled block 52px tall in a lighter tone of the card with its placeholder at 16px, then a full-width solid submit bar 56px tall in the darkest ink. Inputs keep visually hidden `label` elements.
On a phone: The card turns upright and spans the width with 12px margins. The perforation becomes horizontal: notches on the left and right edges, dots across. Heading and sentence sit above it; the four inputs and the submit bar sit below, each 54px tall.

Adjusted for this page:
- It names its own corners: use the one radius of this page (square unless the direction says otherwise) and one button shape.
- It names a kind of typeface: use the dealt faces (display Cabinet Grotesk, text Cabinet Grotesk) and their settings; capitals only where the type system sets them.
- It draws lines or borders: keep them only inside a table, a form or a `data-ui` fragment; elsewhere separate with space or a change of ground.

## 8. Motion — Masked headline
On load, each line of the headline rises from behind its own baseline, about 900ms with a strong ease-out, the second line 110ms after the first; the supporting sentence and the action then fade up together. Nothing else on the page performs. Because headlines are two lines at most, you author the line breaks and wrap each line yourself. Recipe: 'Masked line reveal' in references/motion.md.
This is the signature move, the one loud moment. Around it the page still needs the rest of the motion layer (SKILL.md step 9): an entrance for the parts of every section, feedback on every control, and one moving picture. The inspector fails a page that barely moves. Recipes: references/motion.md.

## 10. Where the richness comes from
Attitude. The page has a recognisable voice from another world, applied to a subject nobody expected it for.

## 11. How this direction goes wrong
Name the borrowed category in one word before you start, or the result is merely loud. The content must still be clear: what it is, what it costs, how to get it. Avoid borrowing from 'tech startup', which is the default you are escaping.

## 12. Real references
Studied sites that work this way. Take the principle, never the specifics: no names, copy, images or signature assets of theirs.
- **SSTR - Friction Reduction** (Awwwards Site of the Day, studied score 7.7) `aww-sstr-friction-reduction`
  Idea: Drilling hardware treated like precision consumer tech: a chamfered octagon taken from the tool's cross-section drives the buttons, icons and loader.
  Hero: The captured first viewport is the preloader: a 2 by 2 grid with hairline dividers, top-left quadrant solid orange with the slash-prefixed name at 5.6vw in black bold grotesk; top-right dark with a plus-sign dot grid and an orange square beside a percentage; bottom quadrants hold wireframe octagon stacks under small labels. The real hero is a full-bleed grey 3D render of a steel downhole tool rising from bottom centre. A two-line uppercase headline at about 3.5vw in light grotesk sits left-anchored at mid-height, with a short paragraph and an orange chamfered-corner button below. A slim bar holds logo left, five small caps links, globe and contact right.
  Worth taking: Derive one shape from the product (here a chamfered octagon) and reuse it for button corners, icons and loader graphics.
- **Moto Finance** (Awwwards Site of the Day, studied score 7.3) `aww-moto-finance`
  Idea: A metal card presented like a museum piece: lit by a single overhead light box in a black room, then orbiting through dim architectural stills.
  Hero: Black full-bleed 3D scene. A pale silver-lavender light panel, a trapezoid in perspective like a ceiling light box, occupies the top 20% and centre 55% of the viewport. The two-line uppercase headline, centred at 4.4vw in medium grotesk with tight leading, straddles the panel's lower edge so its first line sits half on light, half on black. In the exact centre a small metal card stands on a low plinth, only about 150px wide, surrounded by darkness. A light-grey pill button (about 250 by 52px) is centred near the bottom; the logo is top-left and a dark pill button top-right.
  Worth taking: Let a headline straddle the edge of a light shape so one line is half on light and half on dark.
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

Saved to /Users/panygolf/Documents/barbershop-bergen/.taste-skill/10-sjo-og-saks/direction.json · reprint with `node draw.mjs --show`
