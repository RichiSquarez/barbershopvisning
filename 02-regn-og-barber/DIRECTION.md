# DIRECTION SHEET — The name as a monument
seed 2044446740 · drawn 2026-11-09 · sector hospitality
Brief: Regn & Barber — a Bergen barbershop that treats the city's 210 rain days as its house style: wet hair, weatherproof cuts, a dry room.

| | |
| --- | --- |
| Direction | The name as a monument |
| Hero | Name band and rails |
| Type | General Sans |
| Colour | Olive on bone |
| Sections | about (Side facts, wide paragraph) → list (One item per poster line) → gallery (Small frames, wide space) → faq (Wide heading, indented questions) → contact (The email as display type) |
| Motion | Edge-to-edge marquee |
| Photographs | the "City by day" set, as atmosphere |

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
The name is the headline. Set it so large that it becomes architecture: as wide as the viewport, cropped by an edge, or stacked to fill the screen. Nothing else on the first screen competes; the description of what this is drops to a single small sentence. The idea comes from treating the name's letters as material. Ask what the subject can do to its own name: a photograph of the work sits inside a counter or replaces a letter, the name repeats down the page like a reel, the letters are split to opposite corners and the page happens between them. In the study this was the single most common device among sites scoring 7.5 or more.

Before anything else, write one sentence in your notes: "On this page, <the subject's own material> becomes <the device>."
Fill the first blank from your inventory of what only this client has (its name and what it means, its street, its numbers, its
constraint), then put the nearest competitor in the sentence: if it still works, the idea is the category's, not the client's.
Then name the one live thing the visitor can do on the page (SKILL.md step 4).

## 2. Composition
First screen: the wordmark spans 88–100% of the viewport width (font-size 16–24vw, set with a clamp so it never wraps), anchored either to the bottom edge with its descenders nearly touching it, or dead centre with everything else pushed to the corners. One line of supporting text at 16–20px sits in a corner on a shared margin; navigation is three or four words in the opposite corner. After the hero the page is deliberately small and calm: a narrow text column or a simple two-column grid, so the contrast with the monument holds. The name returns once more at full width as the footer, in the inverse colours. Margins are tight (20–32px) so the type reaches the edges. Two type sizes do nearly all the work: the monument and a small text size, with one mid size for section headings.

## 3. Type — General Sans
A grotesk with slightly geometric bowls, set bold and very large against plain 16px text with nothing in between. Suits studios, type and product launches, and finance or tech brands that lead with the name.
```html
<link rel="preconnect" href="https://api.fontshare.com">
<link rel="preconnect" href="https://cdn.fontshare.com" crossorigin>
<link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,700&display=swap" rel="stylesheet">
```
- Display: **General Sans** — weight 700 · tracking -0.02em · leading 0.9 · sentence case; sizes jump straight from 16px text to 10vw and larger
- Text: **General Sans** — 400 for body and lists, 500 for emphasis · leading 1.45 · tracking 0
```css
:root {
  --step-small: clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem);
  --step-body: clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem);
  --step-lead: clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem);
  --step-head: clamp(2rem, 1.3rem + 3.2vw, 4rem);
}
```
One family. The display cut must survive enormous sizes: tight tracking (-0.04 to -0.07em), leading 0.8–0.9, optical kerning on. Section headings are modest (28–40px) on purpose.
The direction decides sizes and how many of them; the type system decides how this face is set. Where the two give different tracking or leading, use the values of the type system: they are tuned to this face.
The display size itself comes from the hero blueprint below.

## 4. Colour — Olive on bone
```css
:root {
  --bg: #ecebe7;
  --surface: #e1dfd9;
  --ink: #38450f;
  --muted: #5d683a;
  --accent: #38450f;
  --accent-ink: #ecebe7;
  --field-1: #38450f;  --field-1-ink: #ecebe7;
}
```
A bone page with every word, large or small, in one olive green; the footer inverts to a solid olive field with bone text. Photography supplies all other colour, and the button is the same olive, filled.
Two values carry the page (ground and ink). The accent, if used at all, appears on one thing only: the single action or the inset image frame. The footer inverts ground and ink.

## 5. Imagery
**Use the images that belong to the project in every picture slot.** For slots they cannot fill, real pictures of the subject's world from the open collections come next (start with `node /Users/panygolf/.agents/skills/design-taste-frontend/scripts/assets.mjs "barbershop"`, then queries from your inventory (its street, its materials, its trade's tools and history); credit them on the page), then the dealt photographs.

Few images, used as inserts in the typography rather than as illustrations beside it: one photograph inside or behind the name (a 4:5 or 1:1 frame replacing a letter, or tucked between two words), then a short run of large full-width or half-width photographs further down. Square corners. No collage of small thumbnails.

**Floor (the inspector checks it):** at least four real pictures on the page, usually six to twelve; SVG drawings do not count. One moving picture where an honest clip exists: `node <skill>/scripts/assets.mjs --video "<query>"`, used as a muted loop with a poster frame. Whatever this direction says about pictures, it is carried out with real ones.

Photographs dealt for this build, from the "City by day" set (streets and buildings in daylight)
Order of preference for imagery: (1) the project's own photographs and product shots; (2) images you generate, if an image tool is
available; (3) real pictures of the subject's world found in the open collections (assets.mjs, downloaded and credited on the page);
(4) drawings of the subject in code; (5) these. They are real photographs (Unsplash licence, served by picsum.photos) of places, light and
texture. They are atmosphere, never a stand-in for a specific product, dish, person or interface. List the ones you use in your report so
they can be replaced.
- `https://picsum.photos/id/826/1600/1000` — Boat on a canal between tall brick warehouses in hazy light · dark tone · dark brown, hazy cream, dark teal · native landscape · photo: Nick Scheerbart
- `https://picsum.photos/id/308/1600/1000` — Narrow street of colourful houses with laundry hung between them · mid tone · terracotta red, pale yellow, sky blue · native landscape · photo: Charles L.
- `https://picsum.photos/id/322/1600/1000` — Narrow cobbled alley between worn ochre and terracotta walls · mid tone · ochre, terracotta, grey · native landscape · photo: Afroz Nawaf
- `https://picsum.photos/id/868/1600/1000` — Aerial view of a dense city skyline fading into haze · mid tone · grey blue, slate, pale grey · calm area: top · native square · photo: Jeffrey Swanson
- `https://picsum.photos/id/299/1600/1000` — City street between tall brick buildings with a glass tower beyond · mid tone · warm brown, pale blue, grey · native landscape · photo: Matthew Wiebe
- `https://picsum.photos/id/439/1600/1000` — City skyline low in the frame beneath a vast muted grey sky · mid tone · warm grey, taupe, slate · calm area: top · native landscape · photo: Matthew Wiebe
- `https://picsum.photos/id/57/1600/1000` — Narrow city street lined with brick buildings in shadow · mid tone · brick red, teal blue, dark grey · calm area: bottom · native portrait · photo: Nicholas Swanson
- `https://picsum.photos/id/1065/1600/1000` — Narrow alley between old stone buildings opening onto the sea · mid tone · stone beige, sea blue, dark brown · native portrait · photo: Bertrand Zuchuat
The last two path numbers are width and height: request the exact crop you render (`/1200/1500` for a 4:5 portrait, `/2400/1350` for a hero) and
add `?grayscale` to desaturate. Use three to six of them, not all eight. Always set `width`, `height`, `alt` and `loading="lazy"` (not on the hero image).
Other sets that fit this brief: coast, interior-and-table, city-night, fog-and-quiet — `node draw.mjs --photos <set>` prints one in full; `--photos list` shows all sets. Taking photographs from another set is your call and is not a redraw; keep them to one light and one treatment.

## 6. Hero — Name band and rails
One viewport filled completely with tiles on 8px gaps and 8px margins. Across the top, a band tile 170px tall holds the name on one line at clamp(140px, 14.4vw, 220px), heavy, tracking -0.04em, centred and deliberately wider than the band so both ends are cropped by the tile's edges (overflow: hidden, white-space: nowrap). Under it a row of four equal tiles, 64px tall, each holding one text link at 16px, top-left aligned. The remaining 62% of the height is three columns. Left rail (columns 1-2): two stacked tiles, a portrait photograph above and a short list of five facts below. Centre (columns 3-10): one large photograph tile, object-fit: cover, with a statement tile in the ground tone laid along its bottom third holding one sentence at clamp(24px, 2.4vw, 36px), top-left aligned on 24px padding. Right rail (columns 11-12): a full-height stack of five flat colour tiles, a light-to-dark run from the palette; the lowest takes the accent colour and holds the single action, the others each carry one short fact at 15px.

On a phone: Tiles restack in two columns with 6px gaps. The name band stays full width: 26vw type cropped at both sides in a 110px band. The four link tiles become a two-by-two block. The large photograph tile follows at full width, 4:3, with the statement tile under it at 6vw. The colour rail becomes a horizontal row of five short tiles, the action tile last and twice as wide.
Headline: The name on one cropped line, any length, plus one sentence of up to 60 characters in the statement tile.

Adjusted for this page:
- It sets a sentence large over several lines: jurors read that as a long headline. Either cut it to a two-line headline at display size, or keep it a statement at 36px or less on three lines (24px, four lines on a phone).

## 7. Sections, in order
Each is a composition to rebuild with this project's content. Keep the geometry; change the subject. Re-order or drop a
section when the argument of the page needs it (see references/copy.md), never to fall back to a card grid.

### 1. about — Side facts, wide paragraph (table)
Two rows share one vertical line at 34% of the viewport width. Row one: in a 160px column at the left margin, three label and value pairs stack with 20px between them, each a label in the soft ink with its value beneath in full ink, all at 13px (founded, based in, team size). From the 34% line a five-line paragraph at clamp(20px, 1.7vw, 26px), leading 1.35, runs to 90% of the width. Row two starts 120px lower and repeats the logic for the record of the practice: one plain word at 13px at the far left (awards, press, clients), then from the 34% line two list columns, each 260px wide with a 64px gutter, at 13px with 10px between lines: name at the left, year at the right in the soft ink. No heading; the paragraph opens the section. Each list comfortably holds 6–12 lines. No photographs are needed.
On a phone: Everything aligns to the left margin. The paragraph comes first at 19px. The three label and value pairs follow as a two-column grid at 14px. The two record lists stack with 40px between them, each opened by its plain word in full ink.

### 2. list — One item per poster line (statement)
A short list set as a poster. Four to seven items (services, headline acts, courses, opening days) stack one per line at clamp(64px, 10vw, 150px) in the display weight, all capitals or all lowercase, leading 0.92, flush left at a 20px margin on a flat field. Its one detail (a price, a date, a time range) sits at the right margin on the same baseline at 18–20px with tabular figures, so the page has two alignments only: giant words left, small facts right. Items too long for one line at this size are shortened, not shrunk. Between items there is only the tight leading. Hovering an item swaps its ink for the accent. There is no heading: the first item starts 80px below the section top and the last ends 80px above the bottom. The list reuses the hero title's exact type size, so it reads as another poster.
On a phone: Items at 15vw, one per line, flush left with 16px margins. Each detail moves beneath its item at 15px, left-aligned, with 6px above and 22px below. If any single word is wider than the screen at 15vw, drop the whole list to 12vw rather than breaking a word.

Adjusted for this page:
- It names a kind of typeface: use the dealt faces (display General Sans, text General Sans) and their settings; capitals only where the type system sets them.

### 3. gallery — Small frames, wide space (strip)
A flat, quiet viewport 100svh tall in which about 70% of the screen is empty. At mid-height a single row of small portrait frames runs across and off both sides: each frame 11vw wide and 24svh tall (roughly 2:3), spaced 5vw apart, vertically centred, six or seven visible at 1440. Frames have square corners and sit directly on the ground with no border. The row scrolls sideways by drag or trackpad (`overflow-x: auto` with the scrollbar hidden) and may hold 12–24 frames. One line of text overlaps the top-left of the first frame by 12px: a title of two or three words at 20–24px followed by the count, placed above the frame in the stacking order. Hovering a frame scales it to 1.1 from its centre over 250ms; nothing else moves. No captions under frames, no arrows, and no other text in the section.
On a phone: The row sits at 45% of an 80svh section. Frames are 34vw wide at 2:3 and 5vw apart, so two and a half are visible and the row scrolls by touch with snapping. The title line sits 20px above the row at the left margin.

Adjusted for this page:
- It sets text at 12px: use your small step (13px or more) instead.

### 4. faq — Wide heading, indented questions (list)
A heading of three to five words at about 5.5vw runs from the left margin on one or two lines and is the only large thing in the section. 80px beneath it the questions begin, indented to start at column 5 and running to column 12, so the left third under the heading stays empty. Each question is a row at 22–24px in the regular weight with a chevron of two 2px strokes at the far right; rows are separated by 36px of space and no rules. Opening a row lays a tile of the one-step tone behind that row and its answer (24px padding, extending 24px beyond the text on both sides) and shows the answer at 17px with a 48ch measure. Six questions. Nothing else shares the screen; the indent against the wide heading is the composition. Build with `<details>`.
On a phone: The heading sits at 10vw on two lines. Questions lose the indent and run full width at 19px with 28px between rows; the open row keeps its tone tile, now bleeding to both screen edges, with the answer at 16px inside it.

### 5. contact — The email as display type (statement)
The section is 100svh in the inverse of the page's colours. A single email address is set as one line of display type spanning the content width: the font-size is fitted so the address runs from margin to margin (about 7–9vw for 20 characters; break after the @ onto two lines if it is longer than 26), light or regular weight, tight tracking, sitting on a baseline 12vh above the bottom edge. It is a `mailto:` link; on hover the whole line takes the accent ink. In the top-left corner, a sentence of up to 12 words at 20–22px says what to write about. In the two bottom corners at 14px: phone and city at the left, two or three social links at the right. No heading and no form. For a pinned ending, make the section `position: sticky; bottom: 0` beneath the page so the previous section lifts off it.
On a phone: The address breaks after the @ onto two lines at 11.5vw, left-aligned, sitting at 55% of an 86svh screen. The sentence sits at the top-left at 18px. Phone, city and social links stack at the bottom-left at 15px with 12px between them.

## 8. Motion — Edge-to-edge marquee
One line of very large type travels sideways across the full width at a slow constant speed, as a band between two sections or as the closing statement. Linear timing, duplicated content for a seamless loop, paused on hover and under reduced motion. One marquee per page, carrying real words (the name, the claim), never a list of buzzwords.
This is the signature move, the one loud moment. Around it the page still needs the rest of the motion layer (SKILL.md step 9): an entrance for the parts of every section, feedback on every control, and one moving picture. The inspector fails a page that barely moves. Recipes: references/motion.md.

## 10. Where the richness comes from
Scale. The size of the name against the smallness of everything else is the entire visual event, so protect both ends: do not shrink the name to make room, and do not let body text creep above 20px.

## 11. How this direction goes wrong
A long name set small is just a logo. If the name has more than about 12 characters, stack it on two lines or crop it with the viewport edge; never drop below 12vw. Do not add a second big headline under the name. Do not decorate the letters.

## 12. Real references
Studied sites that work this way. Take the principle, never the specifics: no names, copy, images or signature assets of theirs.
- **Kereliott** (One Page Love, studied score 7.3) `opl-kereliott`
  Idea: A quiet house gets a quiet page: one dark field, one typeface, the name set as wide as the screen and photographs left to drift in generous darkness.
  Hero: Very dark green-black field with cream type. A two-line introductory sentence at about 30px sits top-left inside 30px margins; a small cream rectangular button sits top-right. The upper half is otherwise empty. The house name fills the full content width in a flared humanist sans, mixed case, with capitals about 19vw tall, its baseline at roughly 87% of the viewport height. Immediately beneath, separated by a gap of a few pixels, the top sliver of a full-width landscape photograph enters from the bottom edge.
  Worth taking: Size the wordmark to fill the content width exactly and let the first photograph tuck directly under its baseline.
- **House of Honey** (Awwwards Site of the Day, studied score 8.4) `aww-house-of-honey-1`
  Idea: A block-heavy wordmark pierced by a hairline script: the bold-against-delicate contrast is repeated at every scale, with giant pink script behind quiet serif statements.
  Hero: Top 42% is a flat blush-pink band; the bottom 58% is a full-bleed photograph of a bright living room, arched window on the centre axis, butting against the band with no margin. A tiny nav row sits at the very top with 8px side margins: block logo glyph and five links left, contact link with a small square arrow box far right. The wordmark fills the width edge to edge: two words in ultra-black extended caps, about 120px cap height, dark aubergine, with a hairline script 'of' 230px tall between them, overshooting above and below. Directly beneath, two two-line serif uppercase taglines at 31px, one flush left, one flush right.
  Worth taking: Set a wordmark edge to edge in ultra-heavy extended caps and thread a hairline script connecting word through it that overshoots the cap height both ways.
- **Eagle’s Nest** (One Page Love, studied score 7.5) `opl-eagles-nest`
  Idea: Let the lake view do the selling: full-bleed footage of the volcano horizon with the name set as a monumental cream serif along the bottom edge.
  Hero: Full-bleed video of a silhouetted figure meditating before a lake and volcanoes, with no scrim. The name is set in a high-contrast cream serif, uppercase, about 15vw, spanning the full width between 34px margins and sitting on the bottom edge so it covers the lower fifth of the frame. Directly above its left and right ends sit two pairs of small white labels (what it is, where it is). Top row: a round emblem far left, eight plain text links grouped right of centre and an outlined pill button far right. A small black vertical awards tab hangs on the right edge.
  Worth taking: Anchor the name at full width on the bottom edge of a full-bleed video and tuck two tiny descriptor pairs above its left and right ends.
Full notes on any of them: `node draw.mjs --site <id>`.

## Always
Headlines two lines or fewer at every width. No eyebrow labels, no monospace, no 01/02/03, no thin rules, no gradients, no shadows at rest,
no cream-and-terracotta, no violet. The frame: one h1 on the first screen that says what this is, equal outer margins, no
section huddled on one side with the other half empty, no blank stretch over half a screen, a heading on every section.
`inspect.mjs` measures all of it.

Saved to /Users/panygolf/Documents/barbershop-bergen/.taste-skill/02-regn-og-barber/direction.json · reprint with `node draw.mjs --show`
