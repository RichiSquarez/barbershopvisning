# DIRECTION SHEET — The page is the object
seed 749631958 · drawn 2026-11-09 · sector hospitality
Brief: Åsane Barber — a family barbershop in a shopping centre in Åsane, Bergen. Three generations, a wall of family photographs.

| | |
| --- | --- |
| Direction | The page is the object |
| Hero | Tabbed folder stack |
| Type | General Sans |
| Colour | Orange and black |
| Sections | about (Founder's letter) → list (Cards that fold into spines) → testimonial (One long letter) → contact (Visit card on a photograph) |
| Motion | Index with preview |
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
Find the printed or physical artefact that already exists in the subject's world and build the page as that thing. A wedding site is the invitation card. A restaurant is its menu. A conference is the ticket; a record is its sleeve; a shop is the receipt or the swing tag; an archive is a stack of tabbed folders; a course is the syllabus sheet. The artefact supplies everything a template would otherwise invent: its proportions, its typographic manners, its way of grouping information. Visitors recognise the object instantly, which is why these pages feel specific.

Before anything else, write one sentence in your notes: "On this page, <the subject's own material> becomes <the device>."
Fill the first blank from your inventory of what only this client has (its name and what it means, its street, its numbers, its
constraint), then put the nearest competitor in the sentence: if it still works, the idea is the category's, not the client's.
Then name the one live thing the visitor can do on the page (SKILL.md step 4).

## 2. Composition
The first screen shows the artefact as a single filled panel (paper colour on a contrasting ground) centred or offset, with believable proportions: a card at 5:7, a ticket at about 2.2:1 with a notch cut by `clip-path`, a menu as a tall sheet. All primary content lives on it, set the way that object is set: centred and symmetrical for an invitation, in tidy aligned columns for a menu or ticket. The ground behind is a flat colour or one full-bleed photograph. As the page continues, each section is another piece of the same stationery: a second card, a tear-off stub, a folded panel, always filled shapes with real edges (straight, notched, scalloped, perforated by a dotted `border` of round dots at 4px or more), never outlined boxes. The footer is the back of the object.

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
Take the manners of the artefact: a bookish serif with small caps avoided, or a blunt condensed face for tickets and posters. Sizes stay within what print would use relative to the panel; the name is large on the panel, details are small and exact.
The direction decides sizes and how many of them; the type system decides how this face is set. Where the two give different tracking or leading, use the values of the type system: they are tuned to this face.
The display size itself comes from the hero blueprint below.

## 4. Colour — Orange and black
```css
:root {
  --bg: #ff7a1f;
  --surface: #ff8633;
  --ink: #050f16;
  --muted: #5a2306;
  --accent: #050f16;
  --accent-ink: #ff7a1f;
  --field-1: #ffffff;  --field-1-ink: #050f16;
}
```
Hot orange is the page: one flat field with blue-black type, flipping at a hard horizontal seam to a white section when the content needs a rest. The button is a solid block of the same blue-black with orange text, and every other colour comes from the objects shown.
Paper and ink plus the ground the paper sits on. Two or three flat colours in total, like a two-colour print job.

## 5. Imagery
**Use the images that belong to the project in every picture slot.** For slots they cannot fill, real pictures of the subject's world from the open collections come next (start with `node /Users/panygolf/.agents/skills/design-taste-frontend/scripts/assets.mjs "åsane postcard"`, then "åsane old map" and "barbershop", then queries from your inventory (its street, its materials, its trade's tools and history); credit them on the page), then the dealt photographs.

Optional. One photograph behind the object, or small photographs placed on it like tipped-in plates. The object itself is the image.

**Floor (the inspector checks it):** at least four real pictures on the page, usually six to twelve; SVG drawings do not count. One moving picture where an honest clip exists: `node <skill>/scripts/assets.mjs --video "<query>"`, used as a muted loop with a poster frame. Whatever this direction says about pictures, it is carried out with real ones.

Photographs dealt for this build, from the "People" set (figures, silhouettes and portraits, mostly unposed)
Order of preference for imagery: (1) the project's own photographs and product shots; (2) images you generate, if an image tool is
available; (3) real pictures of the subject's world found in the open collections (assets.mjs, downloaded and credited on the page);
(4) drawings of the subject in code; (5) these. They are real photographs (Unsplash licence, served by picsum.photos) of places, light and
texture. They are atmosphere, never a stand-in for a specific product, dish, person or interface. List the ones you use in your report so
they can be replaced.
- `https://picsum.photos/id/338/1600/1000` — Person in a hooded coat seen from behind facing a misty sea · mid tone · slate blue, grey, charcoal · calm area: left · native landscape · photo: Patryk Sobczak
- `https://picsum.photos/id/177/1600/1000` — Hiker with a backpack looking over a hazy mountain valley · mid tone · warm tan, hazy gold, olive · calm area: left · native landscape · photo: Danka & Peter
- `https://picsum.photos/id/685/1600/1000` — Man sitting on a rock looking over a sea of clouds · mid tone · pale gold, grey, dark brown · calm area: right · native landscape · photo: Joshua Earle
- `https://picsum.photos/id/669/1600/1000` — Person in a mustard jacket and grey beanie seen from behind in fog · light tone · mustard, pale grey, white · calm area: left · native landscape · photo: Luke Pamer
- `https://picsum.photos/id/832/1600/1000` — Woman in a pale blue shirt reading a book in soft window light · dark tone · dark olive, pale blue, warm skin · calm area: left · native landscape · photo: hieu le
- `https://picsum.photos/id/22/1600/1000` — Man in a dark suit walking across painted road markings · mid tone · warm grey, charcoal · calm area: left · native landscape · photo: Alejandro Escamilla
- `https://picsum.photos/id/1009/1600/1000` — Back of a person's head beneath a wide pale blue sky · light tone · pale blue, soft white, dark brown · calm area: top · native portrait · photo: Christopher Campbell
- `https://picsum.photos/id/665/1600/1000` — Man sitting on a stone wall overlooking a hazy valley · mid tone · pale teal, cream, grey · calm area: top · native landscape · photo: Joshua Earle
The last two path numbers are width and height: request the exact crop you render (`/1200/1500` for a 4:5 portrait, `/2400/1350` for a hero) and
add `?grayscale` to desaturate. Use three to six of them, not all eight. Always set `width`, `height`, `alt` and `loading="lazy"` (not on the hero image).
Other sets that fit this brief: coast, plants-and-flowers, texture, fog-and-quiet — `node draw.mjs --photos <set>` prints one in full; `--photos list` shows all sets. Taking photographs from another set is your call and is not a redraw; keep them to one light and one treatment.

## 6. Hero — Tabbed folder stack
A dark flat ground. A slim top row at 24px holds the wordmark dead centre and one text link far right at 15px. The headline is one centred line of heavy condensed capitals at clamp(96px, 10vw, 160px), spanning about 70% of the width, its cap line 110px from the top. Under it one supporting sentence in a serif at 20px, centred, max 46ch. From 51% of the height down the screen is a stack of five file folders: flat colour bands 86% of the viewport wide, centred, each offset 64px below the one behind so only a strip of the back four shows. Every folder has one trapezoid tab rising 40px from its top edge, cut with `clip-path: polygon()`, at its own horizontal position and in its own colour, holding one section name at 18px. The front folder is open and runs off the bottom edge; it carries the single action as a solid button at its top-left with 32px padding. Each folder links to its section and lends that section its ground colour. The tab shape returns as the button's top corners.

On a phone: The headline sits 96px down at 17vw on one line, or two at 15vw, centred, with the supporting sentence at 16px beneath. The folder stack starts at 48svh at full width: bands offset 52px, tabs 32px tall with names at 15px, staggered left, centre and right. The front folder runs off the bottom with the action button at full width inside it.
Headline: The name or a two-word statement on one line of up to about 12 characters at 10vw; two lines allowed on a phone.

Adjusted for this page:
- It names a kind of typeface: use the dealt faces (display General Sans, text General Sans) and their settings; capitals only where the type system sets them.

## 7. Sections, in order
Each is a composition to rebuild with this project's content. Keep the geometry; change the subject. Re-order or drop a
section when the argument of the page needs it (see references/copy.md), never to fall back to a card grid.

### 1. about — Founder's letter (stack)
A letter in a centred column 520px wide with at least 160px of empty ground above and below. At the column's top-left, a round portrait 44px across. 28px below it, four or five short paragraphs at 16–17px with leading 1.55, each two to four lines and separated by one blank line, written in the first person. No heading. The sign-off is the writer's name at 22px in the text face's italic, with the role at 14px in the soft ink beneath it. One phrase in the letter may carry a flat marker-colour background. Variant for a page built as an object: the letter sits on a filled paper-colour sheet 640px wide with 60px padding on a contrasting ground, square corners, its bottom edge cut into small scallops with `clip-path`, and below a row of 5px round dots a tear-off strip 72px tall that carries the email address.
On a phone: The column takes the full width with 24px margins; text at 16px, portrait 40px. In the sheet variant the sheet spans edge to edge with 24px padding and keeps its shaped bottom edge; the tear-off strip stacks the email above a full-width button.

Adjusted for this page:
- It names a kind of typeface: use the dealt faces (display General Sans, text General Sans) and their settings; capitals only where the type system sets them.

### 2. list — Cards that fold into spines (pinned)
For a journal, a run of notes or a list of chapters without pictures. A wrapper about 400svh tall holds a sticky stage of 100svh. The heading, two to four words at clamp(48px, 4.2vw, 64px), sits top-left on the 32px margin, 120px from the top. Under it a band 360px tall spans the content width and holds a horizontal deck of text cards, each about 620px wide, in three neighbouring flat tones of one hue taken in turn. On a card, with 32px padding: its title at 30px on up to two lines, leading 1.1; an excerpt of two lines at 16px; and along the bottom edge the date on the left and a text link to read it on the right, both at 16px. As the page scrolls, each step slides the next card in from the right edge and squeezes the earlier ones into slivers 120px wide stacked edge to edge at the left, like book spines, where only the first letters of their titles show, clipped by the sliver. Clicking a sliver brings its card back. 48px under the band, the number of entries and a link to the full list sit at 17px on the left margin, so the stage does not end on an empty floor.
On a phone: No pin and no slivers. The cards stack at full width with 12px gaps, each in its tone, the title at 24px, the excerpt at 16px, the date and link at the foot. The heading sits above them at 10vw.

Adjusted for this page:
- It pins something for three screens or more: hold a pin for two or three screens at most, give every screen under it its own content, and let nothing pass over the pinned words (the inspector checks all three).

### 3. testimonial — One long letter (stack)
A single testimonial given room to be read, set like a letter. One column 34–38ch wide begins at column 5 of 12, or shares the page's own reading column. The first sentence of the quotation is pulled up as the opening line at 28–32px in medium weight, two lines at most. The rest follows as two or three ordinary paragraphs at 18–19px with leading 1.55 and 20px between paragraphs, in the full ink, not grey. It closes the way a letter does: 40px of space, then the name on one line and the role on the next at 16px. In columns 1–3, top-aligned with the first line, sits either nothing or one small square photograph of the writer, 120px wide. There are no quotation marks at all; the letter form makes them unnecessary. Space above and below is 140px.
On a phone: The column takes the full width with 20px margins. If there is a photograph it goes first at 96px square, left-aligned. Opening sentence at 24px, body at 17px, sign-off beneath. Nothing else changes; this section is already a phone composition.

Adjusted for this page:
- It names colours (grey): map them onto this palette's roles (ground `--bg`, panels `--surface` and the fields, text `--ink`/`--muted`, the accent `--accent` on the primary action only).

### 4. contact — Visit card on a photograph (full-bleed)
A full-bleed photograph of the place, 100vw by 100svh, carries one solid card and nothing else. The card is a filled panel in the paper colour, fully opaque, 380px wide with 8px corners and 32px padding, placed in the upper-right corner 60px from the top and right edges (or the upper-left: pick the corner where the photograph is calmest). It holds, top to bottom: a two- or three-word title at 28px in a light weight; the address on two lines at 16px; the opening hours as three rows with days at the left and times right-aligned in tabular figures; the phone number; then, flush with the card's bottom edge and spanning its width, a solid booking button 52px tall. The card may be `position: sticky; top: 60px` inside a taller section so it holds while the photograph scrolls beneath it. The photograph's focal point must stay clear of the card. No heading outside the card.
On a phone: The photograph is 100vw by 70svh. The card leaves the corner: it spans the width with 16px margins and overlaps the photograph's bottom edge by 80px, so image and card interlock. The booking button is full width, 56px tall, at the card's bottom.

## 8. Motion — Index with preview
Rows of text are the navigation through the work; pointing at a row brings up its image in one fixed frame and dims the other rows. On touch screens each row shows its image inline instead. Fast and exact (about 240ms crossfade), no lag behind the pointer. Recipe: 'Index with preview, anchored to the row' in references/motion.md.
This is the signature move, the one loud moment. Around it the page still needs the rest of the motion layer (SKILL.md step 9): an entrance for the parts of every section, feedback on every control, and one moving picture. The inspector fails a page that barely moves. Recipes: references/motion.md.

## 10. Where the richness comes from
Recognition. The shaped edges, the print-like alignment and the limited inks make a familiar object out of plain HTML.

## 11. How this direction goes wrong
Choose an artefact that truly belongs to the subject, or it becomes costume. Shape the edges with fills and `clip-path`; an outlined rectangle with a thin border is not an object. Keep text sizes readable on a phone, where the object becomes full width with its shaped edge kept at top and bottom.

## 12. Real references
Studied sites that work this way. Take the principle, never the specifics: no names, copy, images or signature assets of theirs.
- **Sarah & Matt Wedding** (One Page Love, studied score 8) `opl-sarah-matt-wedding`
  Idea: The site is the invitation: a letterpress-style card rendered as a physical object opens the page, and its ornaments, rules and small typographic parts become the components for everything after it.
  Hero: A flat blush-pink field fills the viewport. Top-left sits a gold filigree monogram about 120px square; three plain nav links are centred on the same line; a solid gold rectangular RSVP button sits top-right. Below, centred, a portrait invitation card half the viewport wide starts 200px down and is cropped by the bottom edge, with a soft halo shadow and a debossed border with scalloped inner corners. On the card: the two names in a large italic swash serif, staggered left and right against two ornamental roundels, separated by hairline rules carrying tiny wide-tracked caps for date and time.
  Worth taking: Make a real-world object (an invitation, a ticket, a label) the hero and reuse its small typographic parts, such as a boxed address line with slashes, as recurring components down the page.
- **Mosby’s Files** (Awwwards Site of the Day, studied score 8) `aww-mosbys-files`
  Idea: An archive of architects presented as a physical stack of coloured index-tab file folders that you flip through.
  Hero: Charcoal background. A slim top bar over a hairline holds the condensed wordmark dead centre and one mono link far right. The headline is one centred line of heavy condensed uppercase at 10vw, about 71% of the width, in the upper quarter. Beneath it, a three-line centred serif paragraph in mid-grey, about 42% wide. From 51% down sits a stack of file folders 86% of the viewport wide: each is a flat colour band with one to three trapezoid tabs rising from its top-left edge, each tab a different colour holding a serif name. Mono category labels sit right-aligned. The front red folder is open, running off the bottom.
  Worth taking: Build navigation as stacked full-width colour bands with trapezoid tabs, each tab coloured to clash with the folder behind it.
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

Saved to /Users/panygolf/Documents/barbershop-bergen/.taste-skill/08-asane-barber/direction.json · reprint with `node draw.mjs --show`
