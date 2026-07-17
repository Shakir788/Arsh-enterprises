# CHAPTER 2 — DESIGN SYSTEM
## Arsh Enterprises | Visual Language

---

## 2.1 COLOR PALETTE

**Direction: Luxury Dark.** Competitors in this category (local grill/net fabricators) universally use white/cream backgrounds with blue or green accents — it reads as "hardware shop." Dark luxury immediately signals premium, and lets gold accent do the emotional work.

| Token | Hex | Usage |
|---|---|---|
| `background` | `#0B1114` | Page background, deepest layer |
| `surface` | `#11191D` | Cards, section backgrounds, elevated panels |
| `surface-alt` | `#161F24` | Alternating section backgrounds (subtle separation without hard lines) |
| `accent-gold` | `#C89A4A` | CTAs, highlights, active states, italic emphasis text, borders on hover |
| `accent-gold-bright` | `#E0B968` | Hover state of gold elements, glow effects |
| `text-primary` | `#F8F7F4` | Headings, primary copy |
| `text-secondary` | `#B7B7B7` | Body copy, descriptions |
| `text-muted` | `#7A7F82` | Captions, metadata, disclaimers |
| `border` | `rgba(255,255,255,0.08)` | Card borders, dividers |
| `glass` | `rgba(255,255,255,0.06)` | Glassmorphism panel fill |
| `glass-border` | `rgba(200,154,74,0.25)` | Gold-tinted glass edge (luxury signature) |
| `success` | `#5B8C6E` | Form success states only — muted, not neon green |
| `error` | `#B85C5C` | Form error states only — muted, not alarm red |

**Rule**: Gold is a *seasoning*, not a base — max 1-2 gold elements visible per viewport at once (CTA + one accent line/text). Overuse kills the luxury feel; scarcity creates it.

---

## 2.2 TYPOGRAPHY

| Role | Font | Weight | Notes |
|---|---|---|---|
| **Display / Hero** | Playfair Display (or Canela if licensed) | 500-600 | Serif for luxury heft on huge headlines |
| **Body / UI** | Inter or General Sans | 400-500 | Clean, modern, highly legible at small sizes |
| **Accent / Italic emphasis** | Playfair Display Italic | 500 | Used ONLY for 1-2 key words per section (e.g. "*The View*", "*Without Compromising*") |

**Scale (desktop, rem-based):**

| Level | Size | Line-height | Usage |
|---|---|---|---|
| Hero H1 | 5.5–7rem | 0.95 | Landing hero only |
| H1 | 3.5rem | 1.05 | Section titles |
| H2 | 2.25rem | 1.15 | Subsection titles |
| H3 | 1.5rem | 1.3 | Card titles |
| Body Large | 1.25rem | 1.6 | Intro paragraphs |
| Body | 1rem | 1.7 | Standard copy |
| Caption | 0.875rem | 1.5 | Metadata, labels |

Mobile: scale hero down to 2.75–3.25rem, everything else -20% roughly, never below 16px for body (accessibility).

---

## 2.3 SPACING SYSTEM

Base unit: **8px**. Everything is a multiple of 8.

| Token | Value | Usage |
|---|---|---|
| `space-xs` | 8px | Tight internal gaps (icon+text) |
| `space-sm` | 16px | Card internal padding (mobile) |
| `space-md` | 24px | Card internal padding (desktop), form gaps |
| `space-lg` | 48px | Gaps between related elements in a section |
| `space-xl` | 96px | Section internal top/bottom padding (mobile) |
| `space-2xl` | 160px | Section internal top/bottom padding (desktop) |
| `space-3xl` | 240px | Major section breaks (e.g. before/after Hero) |

**Huge whitespace is intentional** — this is what separates "luxury site" from "busy local business site." When in doubt, add more space, not more content.

---

## 2.4 GLASSMORPHISM RULES

```css
.glass-panel {
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(200,154,74,0.15);
  border-radius: 16px;
}

.glass-panel:hover {
  border-color: rgba(200,154,74,0.4);
  background: rgba(255,255,255,0.09);
}
```

Used for: Navbar (on scroll), floating stat cards on Hero, service cards, testimonial cards.
**Not used for**: buttons (buttons stay solid/gold for clarity), forms (need full opacity for readability).

---

## 2.5 BORDER RADIUS

| Token | Value | Usage |
|---|---|---|
| `radius-sm` | 8px | Buttons, small chips |
| `radius-md` | 16px | Cards, glass panels |
| `radius-lg` | 24px | Large image containers, modals |
| `radius-full` | 999px | Pills, avatar, floating CTA button |

No sharp corners anywhere — soft geometry reinforces "premium residential" feel over "industrial hardware."

---

## 2.6 BUTTONS

**Primary (Gold CTA):**
```css
background: linear-gradient(135deg, #C89A4A, #E0B968);
color: #0B1114;
padding: 16px 40px;
border-radius: 8px;
font-weight: 600;
letter-spacing: 0.02em;
transition: transform 0.3s ease, box-shadow 0.3s ease;
```
Hover: `transform: translateY(-2px)`, subtle gold glow shadow.

**Secondary (Ghost/Outline):**
```css
background: transparent;
border: 1px solid rgba(200,154,74,0.4);
color: #F8F7F4;
```
Hover: border becomes solid gold, background fills `rgba(200,154,74,0.08)`.

**WhatsApp CTA (special case — this is the actual conversion action):**
Same gold gradient as Primary, but always paired with a WhatsApp icon, always visible as a floating button bottom-right on scroll (mobile + desktop). This is the single most important button on the site — the real business runs through WhatsApp inquiries.

---

## 2.7 ANIMATION PRINCIPLES

| Principle | Rule |
|---|---|
| **Easing** | Never linear. Default: `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out feel) — fast start, gentle settle |
| **Duration** | Micro (hover, buttons): 200-300ms. Section reveals: 600-900ms. Page transitions: 400-600ms |
| **Scroll reveals** | Fade + rise (opacity 0→1, translateY 24px→0), staggered 80-100ms between siblings |
| **Parallax** | Subtle only — background layers move at 0.3-0.5x scroll speed max. Never nauseating |
| **Hover on cards** | Slight lift (translateY -4px) + border glow + image scale (1.0 → 1.05, 400ms) |
| **No animation without purpose** | Every motion should either (a) guide attention, (b) confirm an interaction, or (c) reinforce premium feel. If it's "cool but pointless," cut it. |

---

## 2.8 ICONOGRAPHY

- Style: **Thin line icons (1.5px stroke)**, not filled/solid — matches luxury minimal aesthetic
- Library: Lucide React (already available in the stack)
- Color: `text-secondary` default, `accent-gold` on hover/active
- Never use generic "safety/security" clipart icons (shields, locks) — feels like insurance company, not luxury home brand. Prefer abstract line icons (grid pattern for grills, wave pattern for airflow, fold pattern for PVC doors)

---

## 2.9 PHOTOGRAPHY / VIDEO TREATMENT

- **Color grading**: Slightly desaturated, warm shadows, cool highlights — cinematic, not Instagram-bright
- **Lighting**: Natural golden-hour preferred for hero shots; avoid harsh flash/on-site contractor lighting from raw install photos
- **Composition**: Wide shots showing the *view* (balcony, skyline) with the product as a subtle frame element — sell the lifestyle, not the hardware
- **Existing assets note**: Arsh's current Instagram reels (98K-431K views) are raw installation footage — high engagement but not cinematically graded. For the website hero, we either (a) re-shoot 2-3 hero clips professionally, or (b) color-grade the best existing footage in post. Recommend (b) first as a fast, low-cost starting point, upgrade to (a) later if budget allows.

---

## 2.10 LUXURY GUARDRAILS ("No AI Look" Rules)

- No stock photography of generic "happy family" — feels fake
- No default Tailwind/shadcn look (rounded-xl everywhere, purple-to-blue gradients, generic sans headings) — this screams "AI generated"
- No emoji in UI copy (fine in WhatsApp chat, never on the site itself)
- No more than one accent color (gold) — resist adding blue/green "trust" colors, gold alone carries the whole palette
- No centered-everything layouts — use asymmetry, offset grids, editorial-style compositions like Apple/Aesop product pages

---

*End of Chapter 2. Proceeds to Chapter 3 — Site Structure (every section, every page, every component) once reviewed.*