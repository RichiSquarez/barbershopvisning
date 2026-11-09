# DIRECTION SHEET — The pinned poster
seed 436701514 · drawn 2026-11-09 · sector hospitality · tone bold
Brief: Fjell & Fade — a loud, cheap fade studio near Nygårdstangen for students and young men in Bergen. Flat colour, big type.

| | |
| --- | --- |
| Direction | The pinned poster |
| Hero | Sentence split by a frame |
| Type | Hanken Grotesk |
| Colour | Navy on white |
| Sections | pricing (The ticket) → list (Sticky photograph, active list) → gallery (One frame, contents change) → contact (The email as display type) |
| Motion | Pinned story |
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
Something stays put while everything else changes. A title holds its place across the viewport and the images beneath it swap; the name is split to two opposite corners and the page passes between the halves; a single frame stays centred while its contents change. Every scroll step is a new cover of the same magazine. The idea suits subjects that are a series (a book of portraits, a line-up, a collection, a set of projects): the fixed element says what the series is, the changing element shows its members.

Before anything else, write one sentence in your notes: "On this page, <the subject's own material> becomes <the device>."
Fill the first blank from your inventory of what only this client has (its name and what it means, its street, its numbers, its
constraint), then put the nearest competitor in the sentence: if it still works, the idea is the category's, not the client's.
Then name the one live thing the visitor can do on the page (SKILL.md step 4).

## 2. Composition
A sticky layer holds the fixed element for the height of two to three viewports: usually the title at 10–14vw across the middle or top of the screen, or two words pinned to the top-left and bottom-right corners. Under it, a stack of full-height panels scrolls by, each a single large photograph (portrait 4:5, centred, 40–50% of the viewport wide) with one line of caption at the same small size everywhere. The title sits above the images in the stacking order and uses `mix-blend-mode: difference` or a solid colour that reads on every panel. When the pinned run ends, the page releases into ordinary flowing sections with a narrow measure. Build with `position: sticky`; never hijack the scroll.

## 3. Type — Hanken Grotesk
Medium-weight grotesk statements at one large size against caption-size text: a two-size system with no bold. Suits portfolios, agencies and tools that speak in short declarative lines.
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500&display=swap" rel="stylesheet">
```
- Display: **Hanken Grotesk** — weight 500 · tracking -0.05em · leading 0.9 · sentence case; one statement size (about 6vw) used for every heading
- Text: **Hanken Grotesk** — 400 for body, 500 for emphasis · leading 1.45 · tracking -0.005em
```css
:root {
  --step-small: clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem);
  --step-body: clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem);
  --step-lead: clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem);
  --step-head: clamp(2rem, 1.3rem + 3.2vw, 4rem);
}
```
The pinned title is the only large type on the page. Captions and body share one small size (15–17px). Tight tracking and solid weight so the title reads over photographs.
The direction decides sizes and how many of them; the type system decides how this face is set. Where the two give different tracking or leading, use the values of the type system: they are tuned to this face.
The display size itself comes from the hero blueprint below.

## 4. Colour — Navy on white
```css
:root {
  --bg: #ffffff;
  --surface: #f4f4f2;
  --ink: #1f2b4d;
  --muted: #6a7186;
  --accent: #f7941d;
  --accent-ink: #1f2b4d;
  --field-1: #05070a;  --field-1-ink: #ffffff;
  --field-2: #e3e1dc;  --field-2-ink: #1f2b4d;
}
```
Pure white pages with navy type sit between full-bleed photographs, opening on near-black and closing on a warm grey footer. Tangerine is one small tab or button, never larger than a thumbnail.
One strong title colour against a pale or dark ground. Each panel may take its own flat ground colour sampled from its photograph.

## 5. Imagery
**Use the images that belong to the project in every picture slot.** For slots they cannot fill, real pictures of the subject's world from the open collections come next (start with `node /Users/panygolf/.agents/skills/design-taste-frontend/scripts/assets.mjs "nygårdstangen postcard"`, then "nygårdstangen old map" and "loud", then queries from your inventory (its street, its materials, its trade's tools and history); credit them on the page), then the dealt photographs.

A series of photographs with the same crop ratio and the same framing (all portraits, all objects, all rooms), so that swapping them reads as one image changing. Five to eight in the pinned run.

**Floor (the inspector checks it):** at least four real pictures on the page, usually six to twelve; SVG drawings do not count. One moving picture where an honest clip exists: `node <skill>/scripts/assets.mjs --video "<query>"`, used as a muted loop with a poster frame. Whatever this direction says about pictures, it is carried out with real ones.

Photographs dealt for this build, from the "Coast" set (sea, shoreline, cliffs, piers and beaches)
Order of preference for imagery: (1) the project's own photographs and product shots; (2) images you generate, if an image tool is
available; (3) real pictures of the subject's world found in the open collections (assets.mjs, downloaded and credited on the page);
(4) drawings of the subject in code; (5) these. They are real photographs (Unsplash licence, served by picsum.photos) of places, light and
texture. They are atmosphere, never a stand-in for a specific product, dish, person or interface. List the ones you use in your report so
they can be replaced.
- `https://picsum.photos/id/640/1600/1000` — Aerial view of turquoise surf breaking onto golden sand · mid tone · sand, turquoise, white · calm area: bottom · native landscape · photo: Sarah Bürvenich
- `https://picsum.photos/id/77/1600/1000` — Wooden jetty leading to a small pavilion over calm sea · mid tone · warm tan, pale teal, soft grey · calm area: top · native landscape · photo: May Pamintuan
- `https://picsum.photos/id/1052/1600/1000` — Black sea stacks off a dark beach with white surf under a pale sky · light tone · black, white, pale grey · calm area: top · native landscape · photo: Annie Spratt
- `https://picsum.photos/id/1049/1600/1000` — Rock island reflected on a wet beach under a pale sky · light tone · pale grey, soft white, dark green · calm area: top · native landscape · photo: Rosan Harmens
- `https://picsum.photos/id/626/1600/1000` — Red and white lighthouse in turquoise sea below a chalk cliff · light tone · turquoise, white, grass green · calm area: left · native landscape · photo: Nick Diamantidis
- `https://picsum.photos/id/853/1600/1000` — Lone rock in a calm blue sea beneath a pastel sky · mid tone · sea blue, peach, pale pink · calm area: top · native landscape · photo: Stephen Radford
- `https://picsum.photos/id/641/1600/1000` — Empty lifeguard chair on a beach at pastel dusk · mid tone · peach, slate blue, dusty teal · calm area: right · native landscape · photo: Fré Sonneveld
- `https://picsum.photos/id/574/1600/1000` — Grassy cliff and black sand beach with sea stacks offshore · mid tone · green, charcoal, pale blue · calm area: right · native landscape · photo: Julien Lavallée
The last two path numbers are width and height: request the exact crop you render (`/1200/1500` for a 4:5 portrait, `/2400/1350` for a hero) and
add `?grayscale` to desaturate. Use three to six of them, not all eight. Always set `width`, `height`, `alt` and `loading="lazy"` (not on the hero image).
Other sets that fit this brief: fog-and-quiet, mountain, water, hands-and-making — `node draw.mjs --photos <set>` prints one in full; `--photos list` shows all sets. Taking photographs from another set is your call and is not a redraw; keep them to one light and one treatment.

## 6. Hero — Sentence split by a frame
A white or pale ground. One short sentence is broken in two and pushed to the edges: the first half flush to the 32px left margin, the second half flush to the right margin, both on the vertical centre line at clamp(40px, 3.6vw, 60px), medium weight. Between them, dead centre on columns 5–8, sits one media frame: 35% of the viewport wide, 16:9, corners 4px, holding a photograph or a working fragment of the product. The frame belongs to a vertical reel: the bottom 60px of the previous frame shows at the top edge of the viewport and the top 60px of the next at the bottom edge, same width, 24px gaps, so the centre column reads as a strip passing through the sentence. The stage is sticky; the reel advances three or four steps while the two halves of the sentence hold their place. Wordmark top-left; three text links and the single action as a small solid button top-right, all at 15px. Bottom-left on columns 1–4: one supporting sentence at 18px, its last line 32px above the bottom edge. The other corners stay empty.

On a phone: The halves stack: the first half of the sentence at 9vw flush left under the wordmark, then the frame at full width minus 16px margins and 4:3, then the second half flush right at 9vw. The neighbouring frames show as 28px slivers above and below. The supporting sentence and the action button follow at 16px. The links collapse to one word.
Headline: One sentence of four to six words split into two halves of up to about 14 characters each; the frame between them shows what it is about.

Adjusted for this page:
- It names colours (white): map them onto this palette's roles (ground `--bg`, panels `--surface` and the fields, text `--ink`/`--muted`, the accent `--accent` on the primary action only).
- It sets a sentence large over several lines: jurors read that as a long headline. Either cut it to a two-line headline at display size, or keep it a statement at 36px or less on three lines (24px, four lines on a phone).

## 7. Sections, in order
Each is a composition to rebuild with this project's content. Keep the geometry; change the subject. Re-order or drop a
section when the argument of the page needs it (see references/copy.md), never to fall back to a card grid.

### 1. pricing — The ticket (strip)
The price is printed on a ticket. On a flat contrasting ground, one filled panel about 64vw wide with 2.3:1 proportions sits centred and straight, built as a two-part grid (7fr 3fr). A half-round notch 28px across is bitten out of the top and bottom edges where the two parts meet (two absolutely positioned circles in the ground colour), and a column of round dots 6px across in the ground colour runs between the notches as the perforation. The main part holds, top-left with 40px padding, what is being bought in two to four words at about 4vw, and along its bottom three or four short lines at 17px (dates, what is included, terms) in two tidy columns. The stub holds the price at about 6vw, centred, and under it the action as a solid bar the full width of the stub, 56px tall.
On a phone: The ticket turns upright: full width less 20px margins, main part on top, stub beneath, the notches now on the left and right edges and the dot perforation running across. Title at 9vw, price at 16vw, the action bar full width inside the stub.

### 2. list — Sticky photograph, active list (split)
Two columns. The left, columns 1–5, is `position: sticky; top: 12vh` and holds one photograph or object at 4:5, 34vw wide, unframed on the ground. The right, columns 7–11, holds a vertical list of five to nine names (treatments, rooms, courses, services) at clamp(20px, 1.6vw, 24px), each row 58px tall with the name at the left and a price or duration right-aligned at 15px in the soft ink. The active row is full ink; the others rest at 40% opacity. Hovering, focusing or scrolling a row to the middle of the viewport makes it active, crossfades the left photograph to that item's image over 300ms, and opens a three-line description at 15px, 34ch wide, directly under the name, pushing later rows down. A heading of two or three words at clamp(32px, 3.4vw, 48px) sits above the list, aligned to its left edge, 48px above the first row.
On a phone: The photograph becomes a 4:3 band pinned to the top of the screen at 38svh while the list scrolls beneath it; the heading sits above the first row. Rows are 56px tall and the description opens on tap. The image changes with the row nearest the band.

Adjusted for this page:
- It fades text: anything a visitor reads, inactive items of a list included, is `--ink` or `--muted` at full strength (contrast 4.5:1 or more). The active item is told apart by `--ink` against `--muted`, weight or the accent, not by fading the rest.

### 3. gallery — One frame, contents change (pinned)
Instead of many pictures side by side, one frame stays in place and its contents change. The frame is small and exact: 300px square on a quiet page, or up to 40vw at 4:5 on an object-led one, centred or sitting on the text column's left edge, with at least 20vh of empty ground above and below. Five to seven photographs are stacked inside it with `position: absolute` and crossfade in turn (opacity over 600ms, each held for 2.4 seconds, via CSS keyframes with staggered delays). All are shot or cropped alike: same scale, same light direction, the subject at the same position, so only the subject seems to change. On a flat ground use `mix-blend-mode: multiply` so studio backgrounds vanish. One caption line at 14px sits 16px below the frame and changes with the image. No arrows and no counter. On a motif-led page the frame takes the motif's shape through `clip-path`.
On a phone: The frame is 72vw wide, centred, in a section 70svh tall. The crossfade continues on its own; tapping the frame advances to the next image at once. The caption sits beneath, centred, at 14px. When reduced motion is requested the first image holds and tapping still advances.

### 4. contact — The email as display type (statement)
The section is 100svh in the inverse of the page's colours. A single email address is set as one line of display type spanning the content width: the font-size is fitted so the address runs from margin to margin (about 7–9vw for 20 characters; break after the @ onto two lines if it is longer than 26), light or regular weight, tight tracking, sitting on a baseline 12vh above the bottom edge. It is a `mailto:` link; on hover the whole line takes the accent ink. In the top-left corner, a sentence of up to 12 words at 20–22px says what to write about. In the two bottom corners at 14px: phone and city at the left, two or three social links at the right. No heading and no form. For a pinned ending, make the section `position: sticky; bottom: 0` beneath the page so the previous section lifts off it.
On a phone: The address breaks after the @ onto two lines at 11.5vw, left-aligned, sitting at 55% of an 86svh screen. The sentence sits at the top-left at 18px. Phone, city and social links stack at the bottom-left at 15px with 12px between them.

## 8. Motion — Pinned story
One element holds its place with `position: sticky` (a title, a frame, a product fragment) while the items that belong to it scroll past or swap inside it. The page's ordinary scrolling does the work; nothing is hijacked. Hold it for about one screen per step and three screens at most, two held stages per page at most, with a line of text on every held screen. Recipe: 'Pinned story' in references/motion.md.
This is the signature move, the one loud moment. Around it the page still needs the rest of the motion layer (SKILL.md step 9): an entrance for the parts of every section, feedback on every control, and one moving picture. The inspector fails a page that barely moves. Recipes: references/motion.md.

## 10. Where the richness comes from
Repetition with change. The fixed title makes each new photograph feel like an event, so the photographs must be good and consistent.

## 11. How this direction goes wrong
If the title is not legible over every panel, the idea fails: test each one. Keep the pinned run under six viewports or it feels like a trap. On a phone the title shrinks to 16–18vw and stays pinned at the top; panels become full-width. A pin longer than three screens, or one where the screens under it are nearly empty, read in blind tests as a stuck page. Every screen under the pin needs its own content, and nothing may pass over the pinned words.

## 12. Real references
Studied sites that work this way. Take the principle, never the specifics: no names, copy, images or signature assets of theirs.
- **City of Angels** (One Page Love, studied score 7.6) `opl-city-of-angels`
  Idea: A fixed poster: the book title stays pinned across the viewport while portraits and press quotes swap underneath it, so every scroll step is a new cover.
  Hero: Pale icy-blue page. The title runs as one line of extra-bold uppercase grotesk at 10vw, centred, spanning about 82% of the width in saturated cyan, 120px from the top. A single portrait photograph, 37% of the viewport wide and nearly full height, is centred beneath; the title crosses over its upper quarter, so the middle letters sit on the image. The author name sits top-centre in small bold caps, a two-bar menu icon top-right. Bottom-left, a 13-line bold paragraph in a narrow 340px column; bottom-right, a solid black five-point star about 70px wide.
  Worth taking: Pin one giant title across the viewport and let a single centred image change beneath it, with the type overprinting the photo's top quarter.
- **NORMAL IS BORING** (Awwwards Site of the Day, studied score 7.3) `aww-normal-is-boring`
  Idea: The brand name is split and half of it turned upside down: a plain sans first word top-left and a serif last word flipped 180 degrees bottom-right stay fixed while panels slide sideways between them.
  Hero: A white panel fills the left 80%; a full-height interior photo takes the right 20%. Top-left: the first word of the name in light geometric capitals, about 56px. Bottom-right of the white panel: an italic 'is' above the last word in bold didone, rotated 180 degrees so it reads upside down. Three small caps nav links run vertically up the panel's right edge. The 50px headline is broken into three two-line fragments on different columns and baselines: one at 21% from the left, one a line lower at 42%, one back at 21% whose last word turns bold italic didone. A seven-line 13px paragraph hangs beneath the middle fragment.
  Worth taking: Split a two-part brand name into opposite corners of the viewport and flip one half 180 degrees so the logo enacts the name.
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

Saved to /Users/panygolf/Documents/barbershop-bergen/.taste-skill/04-fjell-fade/direction.json · reprint with `node draw.mjs --show`
