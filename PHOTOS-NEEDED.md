# Photos Needed — Habitat Cafe website

Every image slot on the site is listed below. Drop the real photos into
`public/images/` using these **exact file names** (case-sensitive) and they
appear on the site immediately — no code changes needed. Until a file exists,
the site shows a labeled placeholder for that slot, so nothing ever looks broken.

**Guidelines:** JPG (or WebP with a code tweak), sRGB, heroes 2000px+ wide,
cards/gallery 1200px+, ideally under 500 KB each. Prioritise warm, natural
light and the terracotta / ivory / charcoal palette. Avoid heavy filters —
light, honest editing matches the brand.

---

## 1. Hero (full-screen background)

| File | Used in | Subject |
|---|---|---|
| `hero.jpg` | Home hero | Rooftop terrace at dusk — terracotta arches, warm amber light, city beyond. Wide crop (16:9 or wider). This is the first thing visitors see. |

## 2. Our Story (editorial intro)

| File | Used in | Subject |
|---|---|---|
| `intro-main.jpg` | Our Story — large image | The arched terrace with warm ivory walls. Portrait-ish 4:5. |
| `intro-overlap.jpg` | Our Story — small overlap image | A quiet corner table / detail shot. Square or 4:5. |

## 3. The Habitat Experience (4 cards)

| File | Used in | Subject |
|---|---|---|
| `experience/mornings.jpg` | Card 01 — Slow Mornings | Morning coffee on the terrace. Portrait 3:4. |
| `experience/afternoons.jpg` | Card 02 — Rooftop Afternoons | Afternoon light over open-air seating. Portrait 3:4. |
| `experience/evenings.jpg` | Card 03 — Golden Evenings | The terrace glowing at golden hour. Portrait 3:4. |
| `experience/late.jpg` | Card 04 — Late-Night Conversations | The rooftop late at night, warm lighting. Portrait 3:4. |

## 4. House Favourites (6 dish photos)

Shown on the "Plates worth returning for" cards. If the sample dishes are
replaced with real menu items, update the photo and the dish together
(`image` field in `src/data/menu.js`).

| File | Used in | Subject |
|---|---|---|
| `dishes/dish-1.jpg` | Habitat Big Breakfast | The actual breakfast plate. |
| `dishes/dish-2.jpg` | Paneer Tikka Skewers | The actual plate. |
| `dishes/dish-3.jpg` | Pad Thai | The actual plate. |
| `dishes/dish-4.jpg` | Butter Chicken | The actual plate. |
| `dishes/dish-5.jpg` | Tiramisu | The actual dessert. |
| `dishes/dish-6.jpg` | Vietnamese Cold Coffee | The actual drink. |

## 5. Beverages ("Stay for another." — dark section)

| File | Used in | Subject |
|---|---|---|
| `beverages/pour.jpg` | Tall side image | Coffee being poured at the bar — moody, backlit. Portrait 2:3 or 3:4. |

## 6. The Space (architecture)

| File | Used in | Subject |
|---|---|---|
| `architecture/wide.jpg` | Large feature image | Wide shot of the arched rooftop architecture. Landscape 16:9. |
| `architecture/arches.jpg` | Small tile | The repeating terracotta arches, close. Landscape 4:3. |
| `architecture/seating.jpg` | Small tile | Curved seating on the terrace. Landscape 4:3. |
| `architecture/greenery.jpg` | Small tile | Tropical greenery between tables. Landscape 4:3. |

## 7. City View (full-bleed parallax band)

| File | Used in | Subject |
|---|---|---|
| `skyline.jpg` | "Above the city." band | The Hyderabad skyline seen from the rooftop. Ultrawide 21:9. |

## 8. Gallery (masonry grid + lightbox)

12 slots in `public/images/gallery/`. Mix orientations for the masonry effect.
Captions and filters live in `src/data/gallery.js` — rename files or edit that
file to match the final photo set.

| File | Filter | Caption |
|---|---|---|
| `01.jpg` | Rooftop | Rooftop seating under the open sky |
| `02.jpg` | Day | Morning light over the terrace |
| `03.jpg` | Details | Terracotta arches up close |
| `04.jpg` | Food | From the kitchen |
| `05.jpg` | Night | Amber evenings at Habitat |
| `06.jpg` | Rooftop | Golden hour on the terrace |
| `07.jpg` | Day | Greenery between the tables |
| `08.jpg` | Food | Plates worth returning for |
| `09.jpg` | Night | Late-night conversations |
| `10.jpg` | Details | Curves, textures and detail |
| `11.jpg` | Food | Something sweet |
| `12.jpg` | Rooftop | Above the city |

---

## Current status

All 27 slots are pending. None of the files exist yet, so the site currently
renders a branded terracotta "HABITAT — photograph coming soon" placeholder in
every slot (no broken-image icons, no raw file paths shown).
