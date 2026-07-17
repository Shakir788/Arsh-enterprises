# CHAPTER 3 — SITE STRUCTURE
## Arsh Enterprises | Every Page, Every Section, Every Component

---

## 3.1 SITE MAP

```
/                       → Home (the main showcase — most effort here)
/about                  → Brand story, 6-year journey, why SS316
/services               → Overview grid of all 6 offerings
/services/invisible-grills
/services/mosquito-nets    (covers all 4 variants: Standard, Pleated, Sliding, Honeycomb)
/services/pvc-doors
/gallery                → Full project showcase, filterable
/contact                → Form + map + WhatsApp + address
```

**Why this structure**: Home carries 90% of conversion weight (most visitors from Instagram/WhatsApp links land here and decide in seconds). Service pages exist mainly for SEO ("invisible grill Mumbai" searches) and to give serious buyers deeper detail before contacting.

---

## 3.2 HOME PAGE — FULL SECTION FLOW

```
1. Loader (first visit only)
2. Navbar (sticky, transforms on scroll)
3. Hero
4. About (brief)
5. Services Grid
6. Why Choose Us (SS316 material story)
7. Featured Projects
8. Video Gallery
9. Before/After Interactive Slider
10. Testimonials / Trust Section
11. FAQ
12. Contact / Final CTA
13. Footer
14. Floating WhatsApp CTA (persistent)
```

---

### 3.2.1 LOADER

- Black screen → thin gold line draws itself (SVG path animation, ~800ms) → Arsh logo (from their existing brand mark) fades in → line completes into underline → fades out → reveals Hero
- Total duration: 1.5-2s max. Skippable after 1s if user clicks/scrolls (never trap the user)
- Session-based: only shows on first visit, not on every internal navigation

---

### 3.2.2 NAVBAR

**States:**
- **Top of page**: Transparent, logo + white text, no background
- **On scroll (>80px)**: Glass panel (per Chapter 2 glass rules) slides in, gold bottom border (1px), backdrop blur

**Content:**
- Left: Arsh Enterprises logo (mark only on mobile, mark+text on desktop)
- Center/Right: Home / About / Services (dropdown: 3 items) / Gallery / Contact
- Far right: Gold "Get Free Measurement" button (their existing CTA language — "Free measurement available" from their own poster) — links to WhatsApp

**Mobile**: Hamburger → full-screen glass overlay menu, large serif nav items, staggered fade-in

---

### 3.2.3 HERO

**Layout**: 100vh, full-bleed background video, content overlay

**Background**: Color-graded installation footage (per Chapter 2) — slow motion, balcony/skyline visible, invisible grill or mosquito net subtly in frame. Dark gradient overlay (bottom-heavy, `rgba(11,17,20,0.3)` to `rgba(11,17,20,0.85)`) for text legibility.

**Copy:**
```
Eyebrow (gold, small, tracked-out): PREMIUM HOME PROTECTION SOLUTIONS

H1: Protect Your Home
    Without Compromising
    *The View*          ← "The View" in gold italic

Subtext: Marine-grade SS 316 invisible grills, mosquito nets & PVC 
         partitions — trusted by 1000+ homes and businesses across 
         Mumbai & Thane.

CTA row: [Get Free Measurement →] (gold, primary)  [View Our Work] (ghost, secondary)
```

**Floating stat card** (glass panel, bottom-left or right, appears after 1s delay):
```
6+ Years  |  1000+ Clients  |  SS 316 Marine Grade
```

**Scroll indicator**: Thin animated line + "Scroll" label, bottom-center, fades on scroll start

---

### 3.2.4 ABOUT (Brief, on homepage)

Two-column: left = short brand story (3-4 sentences, from Chapter 1 mission), right = large editorial photo (installer at work, or finished balcony shot)

Copy direction:
> "For 6 years, Arsh Enterprises has protected Mumbai & Thane homes and businesses — not with the cheapest materials, but with marine-grade SS 316 stainless steel built to survive this city's weather. What started as a single installer's promise is now trusted by 1000+ clients."

Link: "Our Full Story →" → `/about`

---

### 3.2.5 SERVICES GRID

6 glass cards, 3-col desktop / 1-col mobile, each with:
- Background image (product-specific)
- Icon (thin-line, per Chapter 2)
- Title
- One-line description
- Hover: image zoom (1.05x), gold border appears, gold underline draws under title

Cards:
1. Invisible Grills — "Safety that disappears into the view"
2. Mosquito Nets (Standard) — "Fresh air, zero compromise"
3. Pleated Mosquito Nets — "Retractable elegance for modern doors"
4. Sliding Window Nets — "Built for your window's exact track"
5. Honeycomb Mosquito Nets — "Premium mesh, seamless fold"
6. PVC Folding Doors — "Smart partitions for flexible spaces"

Each card links to its relevant `/services/*` page.

---

### 3.2.6 WHY CHOOSE US (Material Story Section)

This is the **most differentiated section** — competitors cannot copy this because it's based on real material specs (Chapter 1.4).

Layout: Large section, dark surface-alt background, split into 4 material callouts (SS 316 wire, SS bolts, Aluminium ferrule, SS fasteners) — each with a macro/close-up shot (from Arsh's own catalog photos), spec label, and one-line "why it matters."

Headline: **"Built From What's Underneath, Not Just What You See"**
Subhead: "Every Arsh Enterprises installation uses marine-grade SS 316 — engineered to resist Mumbai's coastal humidity for years, not months."

---

### 3.2.7 FEATURED PROJECTS

Apple-style large image gallery — 3-4 hero projects, huge images, generous whitespace, minimal text (location type + product used only, e.g. "High-Rise Apartment, Mira Road — Invisible Grills"). Click opens lightbox with 3-5 more images of that project.

---

### 3.2.8 VIDEO GALLERY

Grid of their existing Instagram reels (re-embedded or re-hosted, color-graded per Chapter 2), autoplay muted on hover/inview, click to expand with sound. This directly leverages their proven high-view content (98K, 431K views) as trust-building social proof.

---

### 3.2.9 BEFORE/AFTER INTERACTIVE SLIDER

The "dangerous feature" from the original brainstorm — kept, because it's genuinely a strong differentiator no local competitor has:

- Mouse-drag or touch-drag slider over a balcony image
- Left side: open balcony (before)
- Right side: same balcony with invisible grill installed (after)
- Smooth reveal, gold divider line follows cursor/finger

Needs 2-3 good before/after photo pairs — check if Arsh has matching before/after shots, or plan a quick shoot.

---

### 3.2.10 TESTIMONIALS / TRUST SECTION

Since written testimonials don't exist yet (Chapter 1.8), this section leads with **verifiable stats** instead of fabricated quotes:

```
1000+          6+             115K+           4-Variant
Happy Clients  Years Experience  Monthly Reach   Mosquito Net Range
```

Below stats: a "Client Stories Coming Soon" placeholder card OR (better) embed 2-3 Instagram comment screenshots if any positive ones exist on their posts — real social proof beats fake quotes every time. Structure is built to easily drop in real testimonials once collected.

---

### 3.2.11 FAQ

Accordion style, glass cards, gold plus/minus icon rotation on open. Suggested starting questions:
- How long does installation take?
- What makes SS 316 different from regular steel grills?
- Do you provide free site measurement?
- Which mosquito net type is right for my window?
- What areas do you service?
- Is there a warranty?

(Final answers need Arsh's input — draft copy only, mark as `[NEEDS ARSH INPUT]` in Chapter 6 Copywriting doc.)

---

### 3.2.12 CONTACT / FINAL CTA

Full-width dark section, large centered gold CTA button, WhatsApp number displayed large and clickable (`tel:` and `wa.me` links), embedded Google Map (Mira Road East location), quick-inquiry form (Name, Phone, Product Interest dropdown, Message) — submits via `/api/contact` (Chapter 8 covers this in detail).

---

### 3.2.13 FOOTER

Minimal, dark, single row on desktop:
- Logo + one-line tagline
- Quick links (Services, Gallery, Contact)
- Social icons (Instagram, Facebook) — thin line style
- Address + WhatsApp
- Copyright line

No newsletter signup, no excessive link columns — matches Chapter 2's minimal luxury guardrails.

---

### 3.2.14 FLOATING WHATSAPP CTA

Persistent, bottom-right, appears after scrolling past Hero. Gold circular button, WhatsApp icon, subtle pulse animation every 8-10s to draw attention without being annoying. Pre-filled message on click: "Hi, I'm interested in [service] — please share details."

---

## 3.3 SERVICE PAGE TEMPLATE (applies to all 3 service pages)

```
1. Mini-hero (large image, product name, one-line positioning)
2. Product detail (specs, material, variants if applicable)
3. Why this product (benefits, tied to material story)
4. Gallery (product-specific images)
5. Process (how installation works, 3-4 steps)
6. FAQ (product-specific questions)
7. CTA (Get Quote via WhatsApp)
```

`/services/mosquito-nets` gets an extra **Range Comparison** section (Standard vs Pleated vs Sliding vs Honeycomb — side-by-side glass cards with key differences) since it covers 4 variants.

---

## 3.4 RESPONSIVE BEHAVIOR SUMMARY

| Breakpoint | Key changes |
|---|---|
| Desktop (1280px+) | Full multi-column layouts, large hero video, parallax active |
| Tablet (768-1279px) | 2-col grids collapse to fit, hero text scales down, parallax reduced |
| Mobile (<768px) | Single column everywhere, hero video may swap to poster image + shorter clip for performance, floating CTA always visible, hamburger nav |

---

*End of Chapter 3. Proceeds to Chapter 4 — Animations (detailed motion specs per component) once reviewed.*