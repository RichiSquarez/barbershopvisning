# DIRECTION SHEET — Loud and flat
seed 2011272894 · drawn 2026-11-09 · sector hospitality
Brief: Kai 12 — a barbershop in a converted harbour container on Bergen's waterfront. Steel, rope, salt, industrial signage, a roller door.

| | |
| --- | --- |
| Direction | Loud and flat |
| Hero | Colour field, two-ink statement |
| Type | Chillax |
| Colour | Post red, mustard |
| Sections | list (One item per poster line) → gallery (Wall of word tiles) → about (Pinned title, portraits pass) → contact (Photo strip, three-cell bar) |
| Motion | Colour by chapter |
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
A page with the directness of a street poster: flat saturated colour, the heaviest type you can find, short blunt statements, and photographs cut out and stuck on. It is for subjects with a voice. Write the page as things a person would actually say out loud, and let the design say them at full volume. The craft is in the control beneath the noise: a strict grid, two or three colours, and exact alignment keep it from becoming a mess.

Before anything else, write one sentence in your notes: "On this page, <the subject's own material> becomes <the device>."
Fill the first blank from your inventory of what only this client has (its name and what it means, its street, its numbers, its
constraint), then put the nearest competitor in the sentence: if it still works, the idea is the category's, not the client's.
Then name the one live thing the visitor can do on the page (SKILL.md step 4).

## 2. Composition
Hero: a statement of three to six words in ultra-heavy type at 11–15vw, filling the width, lines stacked tight (leading 0.85), flush left with 20–28px margins, on a flat saturated ground. One cut-out or hard-cropped photograph overlaps the type from the right or bottom, tilted 3–6 degrees. A single chunky button in the contrasting flat colour. Sections are solid panels in alternating palette colours: one is a row of short statements each on its own panel of unequal width; one is a single photograph bleeding off two edges with a caption block set over a solid colour bar; one is a large plain list. Panels meet edge to edge. Corners are square or use one large radius (28–40px) consistently.

## 3. Type — Chillax
A soft geometric sans with wide round letters and relaxed joins, warm at semibold and easy at text size. Suits consumer apps, community products, cafes and small friendly brands.
```html
<link rel="preconnect" href="https://api.fontshare.com">
<link rel="preconnect" href="https://cdn.fontshare.com" crossorigin>
<link href="https://api.fontshare.com/v2/css?f[]=chillax@400,500,600&display=swap" rel="stylesheet">
```
- Display: **Chillax** — weight 600 · tracking -0.03em · leading 1.0 · sentence case
- Text: **Chillax** — 400 for body, 500 for emphasis · leading 1.5 · tracking 0
```css
:root {
  --step-small: clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem);
  --step-body: clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem);
  --step-lead: clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem);
  --step-head: clamp(2rem, 1.3rem + 3.2vw, 4rem);
}
```
The heaviest weight available, set tight, mostly lowercase or mostly uppercase (choose one). Body text is a plain grotesk at 18–20px.
The direction decides sizes and how many of them; the type system decides how this face is set. Where the two give different tracking or leading, use the values of the type system: they are tuned to this face.
The display size itself comes from the hero blueprint below.

## 4. Colour — Post red, mustard
```css
:root {
  --bg: #e2dccf;
  --surface: #d7d0c1;
  --ink: #2a1110;
  --muted: #6b524c;
  --accent: #4a6f84;
  --accent-ink: #ffffff;
  --field-1: #dc1928;  --field-1-ink: #ffffff;
  --field-2: #952625;  --field-2-ink: #ffffff;
  --field-3: #e0a912;  --field-3-ink: #2a1110;
  --field-4: #4a6f84;  --field-4-ink: #ffffff;
  --field-5: #e2dccf;  --field-5-ink: #2a1110;
}
```
Post red and bone alternate as full section fields, with red holding the opening and the close. Mustard, slate blue and maroon are kept for whole card frames, and slate blue also fills the one button.
Three or four flat colours at full strength including black or white. Each panel is one colour; text on it is one other.

## 5. Imagery
**Use the images that belong to the project in every picture slot.** For slots they cannot fill, real pictures of the subject's world from the open collections come next (start with `node /Users/panygolf/.agents/skills/design-taste-frontend/scripts/assets.mjs "bergen's postcard"`, then "bergen's old map" and "barbershop", then queries from your inventory (its street, its materials, its trade's tools and history); credit them on the page), then the dealt photographs.

Photographs with attitude, cropped hard or cut to a simple shape with `clip-path` (circle, arch, blunt polygon), slightly rotated, overlapping the type. Two or three on the page.

**Floor (the inspector checks it):** at least four real pictures on the page, usually six to twelve; SVG drawings do not count. One moving picture where an honest clip exists: `node <skill>/scripts/assets.mjs --video "<query>"`, used as a muted loop with a poster frame. Whatever this direction says about pictures, it is carried out with real ones.

Photographs dealt for this build, from the "Coast" set (sea, shoreline, cliffs, piers and beaches)
Order of preference for imagery: (1) the project's own photographs and product shots; (2) images you generate, if an image tool is
available; (3) real pictures of the subject's world found in the open collections (assets.mjs, downloaded and credited on the page);
(4) drawings of the subject in code; (5) these. They are real photographs (Unsplash licence, served by picsum.photos) of places, light and
texture. They are atmosphere, never a stand-in for a specific product, dish, person or interface. List the ones you use in your report so
they can be replaced.
- `https://picsum.photos/id/640/1600/1000` — Aerial view of turquoise surf breaking onto golden sand · mid tone · sand, turquoise, white · calm area: bottom · native landscape · photo: Sarah Bürvenich
- `https://picsum.photos/id/1052/1600/1000` — Black sea stacks off a dark beach with white surf under a pale sky · light tone · black, white, pale grey · calm area: top · native landscape · photo: Annie Spratt
- `https://picsum.photos/id/626/1600/1000` — Red and white lighthouse in turquoise sea below a chalk cliff · light tone · turquoise, white, grass green · calm area: left · native landscape · photo: Nick Diamantidis
- `https://picsum.photos/id/1049/1600/1000` — Rock island reflected on a wet beach under a pale sky · light tone · pale grey, soft white, dark green · calm area: top · native landscape · photo: Rosan Harmens
- `https://picsum.photos/id/77/1600/1000` — Wooden jetty leading to a small pavilion over calm sea · mid tone · warm tan, pale teal, soft grey · calm area: top · native landscape · photo: May Pamintuan
- `https://picsum.photos/id/853/1600/1000` — Lone rock in a calm blue sea beneath a pastel sky · mid tone · sea blue, peach, pale pink · calm area: top · native landscape · photo: Stephen Radford
- `https://picsum.photos/id/641/1600/1000` — Empty lifeguard chair on a beach at pastel dusk · mid tone · peach, slate blue, dusty teal · calm area: right · native landscape · photo: Fré Sonneveld
- `https://picsum.photos/id/606/1600/1000` — Wooden boardwalk winding through grassy dunes toward the sea · light tone · pale grey, sage green, sand · calm area: top · native landscape · photo: Aleksandra Boguslawska
The last two path numbers are width and height: request the exact crop you render (`/1200/1500` for a 4:5 portrait, `/2400/1350` for a hero) and
add `?grayscale` to desaturate. Use three to six of them, not all eight. Always set `width`, `height`, `alt` and `loading="lazy"` (not on the hero image).
Other sets that fit this brief: water, architecture, transport, fog-and-quiet — `node draw.mjs --photos <set>` prints one in full; `--photos list` shows all sets. Taking photographs from another set is your call and is not a redraw; keep them to one light and one treatment.

## 6. Hero — Colour field, two-ink statement
One saturated flat colour covers the whole viewport; there is no navigation bar and no image. Two short pieces of 15px text sit in the top corners on 3% margins: the wordmark at the left, the single action as a text link in the dark ink at the right. The statement starts 15% down, left-aligned from the 3% margin, in a soft heavy serif or a heavy grotesk at clamp(110px, 14vw, 220px), tracking -0.03em, leaded so tightly (0.82) that the two lines nearly touch. Line one is set in a pale ink and line two in a dark ink, the only two inks on the field; the pair fills the top 55% of the screen and the longer line reaches about 90% of the width. A long name may be broken across the two lines with a hyphen if the second half reads as a word of its own. In the bottom-right corner, right-aligned in a column 24% of the viewport wide, one supporting sentence at 17px in the pale ink. The bottom-left quarter stays empty colour.

On a phone: The same field. The corner texts stay at the top at 14px. The statement sets at 21vw on two lines from a 16px margin, starting at 16% of the height, pale line over dark line. The supporting sentence moves to the bottom-left at 16px across 80% of the width, ending 24px above the bottom edge. The middle fifth of the screen stays empty colour.
Headline: The name or a two-word statement over two lines, at most 8 characters per line at 21vw on a phone.

Adjusted for this page:
- It sets running text at 15px: paragraphs use your body step (16px or more).
- It names a kind of typeface: use the dealt faces (display Chillax, text Chillax) and their settings; capitals only where the type system sets them.
- It sets a sentence large over several lines: jurors read that as a long headline. Either cut it to a two-line headline at display size, or keep it a statement at 36px or less on three lines (24px, four lines on a phone).
- Its action is a text link: the primary action on the first screen is a real button (filled or solid-bordered, 44px or taller), placed where the blueprint puts the link. A second action may stay a link.

## 7. Sections, in order
Each is a composition to rebuild with this project's content. Keep the geometry; change the subject. Re-order or drop a
section when the argument of the page needs it (see references/copy.md), never to fall back to a card grid.

### 1. list — One item per poster line (statement)
A short list set as a poster. Four to seven items (services, headline acts, courses, opening days) stack one per line at clamp(64px, 10vw, 150px) in the display weight, all capitals or all lowercase, leading 0.92, flush left at a 20px margin on a flat field. Its one detail (a price, a date, a time range) sits at the right margin on the same baseline at 18–20px with tabular figures, so the page has two alignments only: giant words left, small facts right. Items too long for one line at this size are shortened, not shrunk. Between items there is only the tight leading. Hovering an item swaps its ink for the accent. There is no heading: the first item starts 80px below the section top and the last ends 80px above the bottom. The list reuses the hero title's exact type size, so it reads as another poster.
On a phone: Items at 15vw, one per line, flush left with 16px margins. Each detail moves beneath its item at 15px, left-aligned, with 6px above and 22px below. If any single word is wider than the screen at 15vw, drop the whole list to 12vw rather than breaking a word.

Adjusted for this page:
- It names a kind of typeface: use the dealt faces (display Chillax, text Chillax) and their settings; capitals only where the type system sets them.

### 2. gallery — Wall of word tiles (grid)
A gallery that works with no photographs: a four-column grid of identical square cells with 8px gaps running three or more rows, edge to edge with 8px margins. Each cell is a flat filled tile and centres one large element about 55% of the cell's width: a single word, a letter, a figure with its unit, or a simple inline SVG shape taken from the subject, set at clamp(56px, 9vw, 150px) in the display face. A one- or two-word caption at 14px sits centred 18px above the cell's bottom edge. Tile and ink colours rotate through three or four palette pairs in a fixed order, so a uniform grid looks varied. Where photographs exist, every third or fourth cell is a photograph covering its tile, all given one treatment. There is no hierarchy between cells: it is a specimen sheet. A heading is optional; if used, it occupies the first cell as that cell's word.
On a phone: Two columns with 6px gaps; cells stay square and the central element is set at 22vw. Captions stay at 13px. Twelve cells make six rows; if there are more than sixteen, show twelve and let the rest follow after a full-width tile holding a text link.

### 3. about — Pinned title, portraits pass (pinned)
A wrapper tall enough for its portraits: about 90svh per person, up to six people. A `position: sticky; top: 0` layer of 100svh holds the heading, two words at clamp(88px, 12vw, 180px), leading 0.85, centred at mid-height, in white with `mix-blend-mode: difference` so it reads over ground and photographs alike. Beneath it in the stacking order, portraits scroll past in normal flow: each a 4:5 photograph 26–30vw wide, alternately starting at column 2 and ending at column 11, 60svh apart, so each one passes behind a different half of the heading. Under each portrait's left corner: the name at 18px, the role at 14px in the soft ink, and one sentence of up to 30 words in a 280px measure. The last portrait is followed by 40svh of empty ground before the heading releases. Square corners. Nothing else is on screen.
On a phone: The heading shrinks to 17vw and pins 16px from the top instead of at mid-height. Portraits become 72% wide, alternating between the left and right margins, 48px apart, each with name, role and sentence beneath at the portrait's width.

Adjusted for this page:
- It names colours (white): map them onto this palette's roles (ground `--bg`, panels `--surface` and the fields, text `--ink`/`--muted`, the accent `--accent` on the primary action only).
- It blends text with `difference`: over anything but black, white or grey that gives random hues. Use a solid ink chosen for each ground instead.

### 4. contact — Photo strip, three-cell bar (strip)
A saturated flat field about 80svh tall. Across the top, 48px from the section edge, a strip of small photographs runs off both sides: all 150px tall at differing widths (3:4, 1:1, 3:2 in turn), 8px gaps, ten or more, drifting slowly as a marquee. A heading of two to four words at clamp(36px, 4vw, 60px) sits 72px below the strip at the left margin. 40px below the heading, the newsletter or booking form is one bar spanning the content width, 96px tall, divided into three equal cells with 8px gaps. Each cell is a filled block in a tone one step from the field with one radius: the first two are inputs (name, email) with placeholder text centred at 18px, the third is the submit action in the inverse colours with its word centred. Focus changes a cell's fill to the lightest tone. Small print at 13px sits under the first and third cells.
On a phone: The strip is 110px tall and scrolls by touch. The heading follows at 9vw. The three cells stack as full-width filled blocks 60px tall with 8px gaps, the submit block last. Small print sits beneath the stack, left-aligned.

## 8. Motion — Colour by chapter
Each chapter is its own full-bleed field of one palette colour, so the ground changes exactly at section edges as you scroll, never as a global recolouring of the screen. The only movement: the fixed header (or the one pinned element) takes the ink of the chapter beneath it, switching with a 300ms colour transition as each edge passes under it. Do not drive the page background from an observer: in blind tests a page recoloured mid-section, with a paragraph sitting on two colours, read as broken twice.
This is the signature move, the one loud moment. Around it the page still needs the rest of the motion layer (SKILL.md step 9): an entrance for the parts of every section, feedback on every control, and one moving picture. The inspector fails a page that barely moves. Recipes: references/motion.md.

## 10. Where the richness comes from
Colour mass, type mass, and overlap.

## 11. How this direction goes wrong
Headlines still obey the two-line rule: at 13vw that means very few words, which is correct for this voice. No outlines, no offset shadows, no sticker confetti. Rotation is for two or three images only, never for text blocks.

## 12. Real references
Studied sites that work this way. Take the principle, never the specifics: no names, copy, images or signature assets of theirs.
- **UGLYCASH** (One Page Love, studied score 7.4) `opl-uglycash`
  Idea: A money app sold like streetwear: one shouted condensed headline over the phone, then sticker-covered 3D props where feature icons would normally go.
  Hero: Near-white page. A floating light-grey nav bar only 35% of the viewport wide sits centred 20px from the top: condensed wordmark left, two social icons in the middle, an app button with a glowing magenta outline right. Directly beneath, a two-line uppercase headline in bold condensed grotesque at 11.4vw, centred, leading under 0.9, about 60% of the width, with a faint cyan and magenta fringe on the letter edges; it fills the band from 12% to 43% of the height. A single phone mockup 27% of the viewport wide rises immediately under the headline, centred, cut off by the bottom edge. Its magenta screen glow is the only colour.
  Worth taking: Make the nav a short floating bar a third of the viewport wide so the headline can start almost at the top edge.
- **Depo Budget App** (One Page Love, studied score 6.9) `opl-depo-budget-app`
  Idea: Budgeting reduced to one daily number, dressed in neo-brutalist sticker graphics: flat primaries, thick black outlines and a hard offset shadow on every box.
  Hero: Saturated blue field with a faint grid of 100px squares. A 72px header holds a white wordmark left and a black store badge right, above a 3px black rule. Left column, starting 7% in and vertically centred: a cream box with black border holding one line of uppercase mono, a two-line white headline in very heavy grotesque at 5.3vw, two lines of 20px white copy, and a coral button with black border and hard offset shadow. Right of centre: an illustrated phone tilted about 4 degrees, 24% of the width and nearly full height, thick black outline, star stickers on two corners. A lime marquee strip closes the bottom.
  Worth taking: Give each section its own flat saturated fill and separate them with a 3px black rule, so colour does the sectioning.
- **Kereliott** (One Page Love, studied score 7.3) `opl-kereliott`
  Idea: A quiet house gets a quiet page: one dark field, one typeface, the name set as wide as the screen and photographs left to drift in generous darkness.
  Hero: Very dark green-black field with cream type. A two-line introductory sentence at about 30px sits top-left inside 30px margins; a small cream rectangular button sits top-right. The upper half is otherwise empty. The house name fills the full content width in a flared humanist sans, mixed case, with capitals about 19vw tall, its baseline at roughly 87% of the viewport height. Immediately beneath, separated by a gap of a few pixels, the top sliver of a full-width landscape photograph enters from the bottom edge.
  Worth taking: Size the wordmark to fill the content width exactly and let the first photograph tuck directly under its baseline.
Full notes on any of them: `node draw.mjs --site <id>`.

## Always
Headlines two lines or fewer at every width. No eyebrow labels, no monospace, no 01/02/03, no thin rules, no gradients, no shadows at rest,
no cream-and-terracotta, no violet. The frame: one h1 on the first screen that says what this is, equal outer margins, no
section huddled on one side with the other half empty, no blank stretch over half a screen, a heading on every section.
`inspect.mjs` measures all of it.

Saved to /Users/panygolf/Documents/barbershop-bergen/.taste-skill/07-kai-12/direction.json · reprint with `node draw.mjs --show`
