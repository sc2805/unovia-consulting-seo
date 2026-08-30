# Unovia Consulting — Comprehensive Website Blueprint

> **Brand:** UNoviA Consulting  
> **Tagline:** Strategic Advisory. Lasting Impact.  
> **Audience:** High-net-worth individuals (HNIs), corporate executives, entrepreneurs, NRIs, family offices, growing businesses  
> **Location:** Kolkata, West Bengal, India  
> **Tone:** Authoritative, trustworthy, exclusive, refined, approachable  

---

## 1. SITEMAP

### Primary Navigation

| Label | URL | Priority | Change Freq |
|-------|-----|----------|-------------|
| Home | `/` | 1.0 | Daily |
| About | `/about` | 0.9 | Monthly |
| Services | `/services` | 0.9 | Monthly |
| About Us — Services (detail) | `/services/[slug]` | 0.7 | Monthly |
| Insights | `/insights` | 0.8 | Weekly |
| Insight Article | `/insights/[slug]` | 0.6 | Weekly |
| Calculators | `/calculators/sip-lumpsum` | 0.7 | Monthly |
| Daily Brief | `/daily-brief` | 0.7 | Daily |
| Daily Brief Article | `/daily-brief/[slug]` | 0.6 | Daily |
| Contact | `/contact` | 0.8 | Monthly |

### Secondary / Utility Pages

| Label | URL | Purpose |
|-------|-----|---------|
| Sitemap | `/sitemap.xml` | SEO crawl structure |
| Robots | `/robots.txt` | Search engine directives |

### Information Architecture Principles

- **Flat hierarchy:** Maximum 3 clicks to any major service or contact point
- **Content hubs:** Services and Insights act as authoritative content hubs with deep internal linking
- **Conversion-first:** Contact and calculator paths are prominent in the global nav and repeated in CTAs
- **Authority building:** Insights and Daily Brief establish thought leadership and improve SEO topical coverage

---

## 2. VISUAL DESIGN LANGUAGE

### 2.1 Brand Color System

The palette is built around the existing navy (`#0F2B5B`) and gold (`#C5A55A`) brand anchors, extended into a sophisticated, premium system.

#### Primary Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `navy-950` | `#040E1F` | Deepest backgrounds, immersive dark sections |
| `navy-900` | `#091C3D` | Hero backgrounds, footer, high-contrast dark UI |
| `navy-800` | `#0F2B5B` | Primary brand color, headings, CTAs, nav active states |
| `navy-700` | `#1E3F78` | Secondary headings, hover states |
| `navy-600` | `#305390` | Tertiary text, accent elements |
| `navy-100` | `#C9D5E8` | Subtle borders, dividers |
| `navy-50` | `#EBF0F7` | Light section backgrounds, card highlights |

#### Gold / Accent Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `gold-500` | `#C5A55A` | Primary accent, gradient endpoints, key CTAs |
| `gold-400` | `#D9B566` | Hover states, lighter accents |
| `gold-300` | `#E5C77E` | Subtle highlights, shimmer effects |
| `gold-200` | `#F0DBA8` | Very light accents, borders |
| `gold-50` | `#FDF8EE` | Near-white gold backgrounds |

#### Semantic Colors

| Role | Color | Usage |
|------|-------|-------|
| Success | `emerald-500` / `emerald-600` | Positive metrics, confirmations |
| Warning | `amber-500` / `amber-600` | Alerts, attention elements |
| Error | `rose-500` / `rose-600` | Form errors, critical alerts |
| Information | `blue-500` / `indigo-600` | Info banners, secondary CTAs |
| Neutral text | `gray-500` / `gray-600` | Body copy, descriptions |
| Surface | `white` | Cards, modals, form inputs |
| Background | `gray-50` / `nave-50` | Alternating section backgrounds |

### 2.2 Typography System

#### Font Stack

- **Primary typeface:** Inter (variable)
  - Rationale: Exceptional legibility across weights, modern geometric structure, excellent screen rendering, conveys precision and professionalism
  - Weights in use: 400 (body), 500 (medium emphasis), 600 (semibold), 700 (bold), 800 (extra bold), 900 (display)

- **Fallback stack:** `Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

#### Type Scale (Tailwind-based)

| Token | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `display-xl` | `4.5rem` (72px) | `1.08` | 800 | Hero headlines (large screens) |
| `display-lg` | `3.75rem` (60px) | `1.1` | 800 | Page hero titles |
| `heading-xl` | `3rem` (48px) | `1.15` | 700 | Section headings |
| `heading-lg` | `2.25rem` (36px) | `1.2` | 700 | Component titles |
| `heading-md` | `1.5rem` (24px) | `1.3` | 600 | Card headings |
| `body-lg` | `1.125rem` (18px) | `1.6` | 400 | Lead paragraphs, subtitles |
| `body-base` | `1rem` (16px) | `1.6` | 400 | Body copy |
| `body-sm` | `0.875rem` (14px) | `1.5` | 400 | Captions, metadata |
| `label-xs` | `0.75rem` (12px) | `1.4` | 600 | Eyebrows, tags, badges |

#### Typography Guidelines

- **Headings:** Use `tracking-tight` for headlines to convey confidence; `tracking-normal` for subheadings
- **Body:** Maintain `1.6` line height for readability; avoid justified text
- **Hierarchy:** Always maintain clear contrast between heading levels using size AND weight, not just size
- **Color usage:** Headings in `navy-800` or white (on dark backgrounds); body in `gray-500` or `gray-400`

### 2.3 Imagery & Visual Style

#### Photography Direction

- **Subject:** Modern Indian professionals, diverse boardrooms, contemporary office spaces, urban skylines (Kolkata/Mumbai)
- **Mood:** Confident, understated, aspirational — not ostentatious
- **Composition:** Clean, well-lit, generous whitespace; avoid cluttered or generic stock imagery
- **People:** Natural expressions, collaborative body language, visible diversity in age, gender, and ethnicity
- **Avoid:** Excessive luxury signaling (yachts, mansions), cartoonish illustrations, overly saturated colors

#### Graphic Elements

- **Icons:** Lucide React icon library (consistent stroke width, rounded terminals)
  - Usage: Service categories, process steps, trust indicators
  - Style: Outlined at 24px, filled at 16-20px for badges
- **Patterns:** Subtle grid overlays, mesh gradients, noise textures
  - Usage: Hero backgrounds, section dividers, card hover states
- **Accents:** Thin gold lines, corner brackets, geometric shapes
- **Data viz:** TradingView widgets for market trust indicators; clean, minimal charts

#### Visual Hierarchy Principles

1. **Dark → Light → Dark rhythm:** Alternate between deep navy sections and white/light gray sections to create visual breathing room
2. **Gold as punctuation:** Use gold accents sparingly to draw attention to CTAs, key numbers, and section transitions
3. **Generous whitespace:** Section padding of `py-20` to `py-28` (desktop); cards use `p-7` to `p-10`
4. **Contrast control:** Maintain WCAG AA minimum contrast ratios (4.5:1 for body text)

### 2.4 Component Design Language

#### Cards

- **Radius:** `rounded-2xl` (16px) for primary cards; `rounded-xl` (12px) for compact cards
- **Shadows:** Subtle `shadow-sm` default; `shadow-lg` on hover with transition
- **Borders:** `border-gray-100` default; `border-gold-200` on hover
- **Lift effect:** `hover:-translate-y-0.5` to `hover:-translate-y-1` on interactive cards

#### Buttons

| Variant | Style | Usage |
|---------|-------|-------|
| `primary` | Solid navy (`bg-navy-800`), gold text, hover: navy-700 | Primary CTAs |
| `secondary` | Solid gold (`bg-gold-500`), navy text, hover: gold-600 | Secondary CTAs |
| `outline` | Transparent bg, border, hover fill | Tertiary actions |
| `ghost` | No border, hover bg | Minimal actions |

- **Sizes:** `sm` (py-2 px-4), `md` (py-3 px-6), `lg` (py-4 px-8)
- **Radius:** `rounded-xl` (12px) for modern feel
- **Icons:** 20px icons inside buttons; 5px gap from text

#### Section Spacing

- **Standard:** `py-20` (80px) desktop, `py-12` (48px) mobile
- **Generous:** `py-28` (112px) desktop for hero-adjacent sections
- **Tight:** `py-16` (64px) for related component groups

#### Container System

- **Max width:** `max-w-7xl` (1280px) for full-width sections
- **Narrow content:** `max-w-3xl` (768px) for text-heavy sections
- **Padding:** `px-4 sm:px-6 lg:px-8` consistent across all sections

---

## 3. PAGE WIREFRAME OUTLINES

### 3.1 Homepage (`/`)

**Objective:** Establish authority, communicate value proposition immediately, and drive consultation bookings.

**Section Order & Layout:**

```
┌─────────────────────────────────────────────────────────┐
│  NAVBAR                                                 │
│  [Logo]         [Home][About][Services][Insights]...   │
│                            [Book Consultation →]        │
├─────────────────────────────────────────────────────────┤
│  HERO (Full-viewport, dark navy)                        │
│                                                         │
│  ┌─────────────────────────────────────────────┐        │
│  │ Eyebrow badge: "Powered by CAs & MBAs"     │        │
│  │                                             │        │
│  │ H1: Strategic Financial Advisory for       │        │
│  │     Sustainable Growth [gradient gold]      │        │
│  │                                             │        │
│  │ Lead paragraph (2 lines, gray-300)          │        │
│  │                                             │        │
│  │ [Book a Consultation →] [Explore Services]  │        │
│  │                                             │        │
│  └─────────────────────────────────────────────┘        │
│                                                         │
│  [Decorative: floating gold circles, grid pattern]      │
├─────────────────────────────────────────────────────────┤
│  SERVICES GRID (White bg)                               │
│                                                         │
│  Eyebrow: "Our Expertise"                               │
│  H2: Financial Excellence, Delivered                    │
│  Subtitle: Four pillars...                              │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐│
│  │ Service  │  │ Service  │  │ Service  │  │Service ││
│  │ Card 1   │  │ Card 2   │  │ Card 3   │  │Card 4 ││
│  │ Icon     │  │ Icon     │  │ Icon     │  │Icon   ││
│  │ Title    │  │ Title    │  │ Title    │  │Title  ││
│  │ Desc     │  │ Desc     │  │ Desc     │  │Desc   ││
│  │ [Learn →]│  │ [Learn →]│  │ [Learn →]│  │[Learn]││
│  └──────────┘  └──────────┘  └──────────┘  └────────┘│
├─────────────────────────────────────────────────────────┤
│  TRUST INDICATORS (Light bg)                            │
│                                                         │
│  ┌──────────────────┐  ┌──────────────────┐            │
│  │ 10+              │  │ 98%              │            │
│  │ Expert CAs & MBAs│  │ Client Retention │            │
│  │ [animated count] │  │ [animated count] │            │
│  └──────────────────┘  └──────────────────┘            │
│  [Market data widget / Certifications row]              │
├─────────────────────────────────────────────────────────┤
│  TESTIMONIALS (White bg)                                │
│                                                         │
│  Eyebrow: "Client Voices"                               │
│  H2: Trusted by Ambitious Individuals & Businesses       │
│                                                         │
│  ┌─────────────────────────────────────────────┐        │
│  │ ★★★★★ Quote text...                         │        │
│  │                                             │        │
│  │ — Name, Title, Company                      │        │
│  │ [Services received badges]                  │        │
│  └─────────────────────────────────────────────┘        │
│  [Trust banner: CA-led | 98% Retention | 10+ Years]     │
├─────────────────────────────────────────────────────────┤
│  INSIGHTS PREVIEW (Gray-50 bg)                          │
│                                                         │
│  Eyebrow: "Insights"                                    │
│  H2: Thinking Forward                                   │
│  [View All Insights →]                                  │
│                                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐               │
│  │ Article │  │ Article │  │ Article │               │
│  │ Card 1  │  │ Card 2  │  │ Card 3  │               │
│  │ Category│  │ Category│  │ Category│               │
│  │ Title   │  │ Title   │  │ Title   │               │
│  │ Excerpt │  │ Excerpt │  │ Excerpt │               │
│  │ [Read →]│  │ [Read →]│  │ [Read →]│               │
│  └─────────┘  └─────────┘  └─────────┘               │
├─────────────────────────────────────────────────────────┤
│  CTA BANNER (Navy-800 bg)                               │
│                                                         │
│  H2: Ready to Take Control...                           │
│  Subtext: Schedule a confidential...                    │
│  [Start Your Journey →]                                 │
└─────────────────────────────────────────────────────────┘
```

### 3.2 About Us (`/about`)

**Objective:** Build credibility, humanize the firm, and articulate purpose.

**Section Order & Layout:**

```
┌─────────────────────────────────────────────────────────┐
│  ABOUT HERO (Light gradient bg)                         │
│                                                         │
│  H1: Your Trusted Partner in                           │
│      Building Wealth [gold] & Securing Futures [gold]  │
│  Lead paragraph...                                      │
│  [Pills: CA-Led | Client-Centric | Transparent | Data]  │
├─────────────────────────────────────────────────────────┤
│  WHO WE ARE (White bg, 2-col grid)                      │
│                                                         │
│  [Text col]                    [Visual col]             │
│  Eyebrow: "Who We Are"       ┌──────────────────┐       │
│  H2: Financial Advisory...    │ Differentiator  │       │
│  Body text...                 │ Card 1 [01]     │       │
│                               └──────────────────┘       │
│                               ┌──────────────────┐       │
│                               │ Differentiator  │       │
│                               │ Card 2 [02]     │       │
│                               └──────────────────┘       │
│                               ┌──────────────────┐       │
│                               │ Differentiator  │       │
│                               │ Card 3 [03]     │       │
│                               └──────────────────┘       │
├─────────────────────────────────────────────────────────┤
│  MISSION & VISION (Gray-50 bg, 2-col cards)             │
│                                                         │
│  Eyebrow: "Our Purpose"                                 │
│  H2: Guided by Purpose, Driven by Impact                │
│                                                         │
│  ┌─────────────────┐  ┌─────────────────┐              │
│  │ Our Mission     │  │ Our Vision      │              │
│  │ [Icon: Target]  │  │ [Icon: Eye]     │              │
│  │ Text...         │  │ Text...         │              │
│  └─────────────────┘  └─────────────────┘              │
├─────────────────────────────────────────────────────────┤
│  OUR EXPERTISE (White bg, 3-col grid)                   │
│                                                         │
│  Eyebrow: "Our Expertise"                               │
│  H2: Comprehensive Financial Solutions...               │
│                                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐               │
│  │Expertise│  │Expertise│  │Expertise│               │
│  │ Card 1  │  │ Card 2  │  │ Card 3  │               │
│  │[Icon]   │  │ [Icon]  │  │ [Icon]  │               │
│  │ Title   │  │ Title   │  │ Title   │               │
│  │ Desc    │  │ Desc    │  │ Desc    │               │
│  └─────────┘  └─────────┘  └─────────┘               │
│  [Row 2: 3 more expertise cards]                        │
├─────────────────────────────────────────────────────────┤
│  WHO WE SERVE (Gray-50 bg, 3-col grid)                  │
│                                                         │
│  Eyebrow: "Who We Serve"                                │
│  H2: Built for Ambitious Individuals...                 │
│                                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐               │
│  │ Segment │  │ Segment │  │ Segment │               │
│  │ Card 1  │  │ Card 2  │  │ Card 3  │               │
│  │[Icon]   │  │ [Icon]  │  │ [Icon]  │               │
│  │ Label   │  │ Label   │  │ Label   │               │
│  │ Detail  │  │ Detail  │  │ Detail  │               │
│  └─────────┘  └─────────┘  └─────────┘               │
│  [Row 2: 3 more segment cards]                          │
├─────────────────────────────────────────────────────────┤
│  CORE VALUES (Navy-800 bg, 4-col grid)                  │
│                                                         │
│  Eyebrow: "Our Values"                                  │
│  H2: Principles That Define...                          │
│                                                         │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐              │
│  │Value │  │Value │  │Value │  │Value │              │
│  │ 1    │  │ 2    │  │ 3    │  │ 4    │              │
│  │[Icon]│  │[Icon]│  │[Icon]│  │[Icon]│              │
│  │Title │  │Title │  │Title │  │Title │              │
│  │Desc  │  │Desc  │  │Desc  │  │Desc  │              │
│  └──────┘  └──────┘  └──────┘  └──────┘              │
├─────────────────────────────────────────────────────────┤
│  OUR PROCESS (White bg, 3-col steps)                    │
│                                                         │
│  Eyebrow: "Getting Started"                             │
│  H2: Your Journey to Financial Clarity...               │
│                                                         │
│  ┌─────────┐      ┌─────────┐      ┌─────────┐        │
│  │ Step 01 │─────▶│ Step 02 │─────▶│ Step 03 │        │
│  │Discover │      │Strategize│     │Execute  │        │
│  │[Icon]   │      │ [Icon]  │     │ [Icon]  │        │
│  │Desc...  │      │Desc...  │     │Desc...  │        │
│  └─────────┘      └─────────┘      └─────────┘        │
│  [Dashed connector lines between steps]                 │
├─────────────────────────────────────────────────────────┤
│  CLOSING STATEMENT (Gray-50 bg, centered)               │
│                                                         │
│  [Icon: BadgeCheck]                                     │
│  H2: More Than Advisors. Your Financial Partners.       │
│  Body text (3 paragraphs)...                            │
│  [Start Your Journey →]                                 │
├─────────────────────────────────────────────────────────┤
│  CTA BANNER (Navy-800 bg)                               │
│  H2: Ready to Take Control...                           │
│  [Book Consultation →]                                  │
└─────────────────────────────────────────────────────────┘
```

### 3.3 Services (`/services`)

**Objective:** Showcase service breadth, communicate depth, and drive detail page visits.

**Section Order & Layout:**

```
┌─────────────────────────────────────────────────────────┐
│  SERVICES HERO (Light gradient bg)                       │
│                                                         │
│  Eyebrow: "Our Services"                                │
│  H1: Financial Excellence, Delivered [gold]             │
│  Subtitle: Four pillars of expertise...                 │
├─────────────────────────────────────────────────────────┤
│  SERVICES GRID (White bg, 2-col on desktop)             │
│                                                         │
│  ┌─────────────────┐  ┌─────────────────┐              │
│  │ Service Card 1  │  │ Service Card 2  │              │
│  │ [Gradient top]  │  │ [Gradient top]  │              │
│  │ [Icon]          │  │ [Icon]          │              │
│  │ Title           │  │ Title           │              │
│  │ Short Desc      │  │ Short Desc      │              │
│  │ Offerings list  │  │ Offerings list  │              │
│  │ [Explore →]     │  │ [Explore →]     │              │
│  └─────────────────┘  └─────────────────┘              │
│  ┌─────────────────┐  ┌─────────────────┐              │
│  │ Service Card 3  │  │ Service Card 4  │              │
│  │ ...             │  │ ...             │              │
│  └─────────────────┘  └─────────────────┘              │
├─────────────────────────────────────────────────────────┤
│  WHY UNOVIA (Gray-50 bg, 3-col cards)                   │
│                                                         │
│  Eyebrow: "Why Unovia"                                  │
│  H2: What Sets Us Apart                                 │
│                                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐               │
│  │ Why 1   │  │ Why 2   │  │ Why 3   │               │
│  │[01]     │  │ [02]    │  │ [03]    │               │
│  │ Title   │  │ Title   │  │ Title   │               │
│  │ Desc    │  │ Desc    │  │ Desc    │               │
│  └─────────┘  └─────────┘  └─────────┘               │
├─────────────────────────────────────────────────────────┤
│  CTA BANNER                                             │
│  [Default CTA]                                          │
└─────────────────────────────────────────────────────────┘
```

### 3.4 Service Detail (`/services/[slug]`)

**Objective:** Deep-dive into a single service, demonstrate expertise, and convert visitors.

**Section Order & Layout:**

```
┌─────────────────────────────────────────────────────────┐
│  SERVICE HERO (Dark navy gradient)                       │
│                                                         │
│  Eyebrow: "Wealth Management" (service name)            │
│  H1: {Service Title}                                     │
│  Lead: {shortDescription}                                │
│  [Icon: {icon}] [Color accent bar]                      │
├─────────────────────────────────────────────────────────┤
│  OVERVIEW (White bg)                                    │
│                                                         │
│  H2: About This Service                                 │
│  {description} (2-col: text + visual)                   │
├─────────────────────────────────────────────────────────┤
│  WHAT WE OFFER (White bg)                               │
│                                                         │
│  H2: Comprehensive Offerings                             │
│  ┌──────┐  ┌──────┐  ┌──────┐                         │
│  │Offering│  │Offering│  │Offering│                     │
│  │  1    │  │  2    │  │  3    │                       │
│  └──────┘  └──────┘  └──────┘                         │
│  ┌──────┐  ┌──────┐  ┌──────┐                         │
│  │Offering│  │Offering│  │Offering│                     │
│  │  4    │  │  5    │  │  6    │                       │
│  └──────┘  └──────┘  └──────┘                         │
├─────────────────────────────────────────────────────────┤
│  OUR PROCESS (Light bg, 4-col steps)                    │
│                                                         │
│  H2: How We Work                                        │
│  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐                  │
│  │Step │  │Step │  │Step │  │Step │                  │
│  │ 01  │  │ 02  │  │ 03  │  │ 04  │                  │
│  │{step}│  │{step}│  │{step}│  │{step}│               │
│  │Desc │  │Desc │  │Desc │  │Desc │                  │
│  └─────┘  └─────┘  └─────┘  └─────┘                  │
│  [Numbered circles with accent colors]                  │
├─────────────────────────────────────────────────────────┤
│  RELATED SERVICES (White bg)                            │
│  H2: Explore Other Services                             │
│  [Horizontal cards for other services]                  │
├─────────────────────────────────────────────────────────┤
│  CTA BANNER                                             │
│  "Ready to discuss {Service Title}?"                    │
│  [Book Consultation →]                                  │
└─────────────────────────────────────────────────────────┘
```

---

## 4. ANIMATION & MOTION STRATEGY

### Principles

- **Purposeful:** Every animation serves a functional purpose (guiding attention, confirming action, revealing content)
- **Subtle:** Premium feel comes from restraint, not excess
- **Performance-first:** Use CSS animations and `transform`/`opacity` only; avoid layout thrashing
- **Accessibility:** Respect `prefers-reduced-motion` media query

### Animation Inventory

| Animation | Duration | Easing | Usage |
|-----------|----------|--------|-------|
| `fade-in` | 0.6s | ease-out | General content reveal |
| `fade-in-up` | 0.6s | ease-out | Hero text, section headings |
| `slide-in-left` | 0.6s | ease-out | Sidebar elements, alternating layouts |
| `slide-in-right` | 0.6s | ease-out | Complementary visual elements |
| `count-up` | 2s | ease-out | Trust statistics, key metrics |
| `float` | 6s | ease-in-out infinite | Decorative background elements |
| `pulse-slow` | 3s | cubic-bezier(0.4, 0, 0.6, 1) | Status indicators, live badges |

### Scroll-Triggered Reveals

- Use Intersection Observer for section-level reveals
- Stagger children with `stagger-1`, `stagger-2`, `stagger-3` delays (0.1s increments)
- Apply `animate-fade-in-up` class with initial `opacity-0` state

### Micro-interactions

- **Buttons:** Scale 1.02 on hover with 150ms transition
- **Cards:** TranslateY -4px on hover with 300ms ease
- **Links:** Underline animation expanding from center
- **Form inputs:** Border color transition on focus with glow ring

---

## 5. RESPONSIVE DESIGN SYSTEM

### Breakpoints

| Breakpoint | Min Width | Target Devices |
|------------|-----------|----------------|
| `sm` | 640px | Large phones, small tablets |
| `md` | 768px | Tablets, small laptops |
| `lg` | 1024px | Laptops, desktops |
| `xl` | 1280px | Large desktops |
| `2xl` | 1536px | Ultra-wide displays |

### Mobile Adaptations

- **Navigation:** Hamburger menu with full-screen overlay; link stack with generous touch targets (min 44px height)
- **Hero:** Stack headline and CTAs vertically; reduce font size by 1 step
- **Grids:** Single column on mobile; 2-col on `sm` and above; 3-col on `md` and above; 4-col on `lg` and above
- **Cards:** Full-width on mobile; maintain 2-col grid from `md` for service cards
- **Typography:** Scale down by 1 step at each breakpoint for optimal readability
- **Touch targets:** Minimum 44x44px for all interactive elements

---

## 6. ACCESSIBILITY STANDARDS

### WCAG Compliance Target

- **Level:** AA (minimum), AAA where feasible
- **Contrast:** 4.5:1 for body text; 3:1 for large text (18px+)
- **Focus indicators:** Visible 2px ring in gold (`#C5A55A`) with 2px offset
- **Keyboard navigation:** Full site accessible via keyboard; visible focus order
- **Alt text:** Descriptive alt text for all meaningful images; empty alt for decorative

### Semantic HTML

- Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Proper heading hierarchy: one `<h1>` per page, logical `<h2>` → `<h3>` progression
- ARIA labels for icon-only buttons and complex interactions
- Form labels properly associated with inputs; error messages linked via `aria-describedby`

---

## 7. PERFORMANCE & TECHNICAL GUIDELINES

### Core Web Vitals Targets

| Metric | Target | Strategy |
|--------|--------|----------|
| LCP | < 2.5s | Preload hero image, optimize font loading, use CDN |
| FID | < 100ms | Minimize JS bundles, defer non-critical scripts |
| CLS | < 0.1 | Reserve space for images, avoid dynamic content injection above fold |

### Image Strategy

- **Formats:** WebP primary, fallback to JPEG/PNG
- **Responsive:** `srcset` with multiple densities; `sizes` attribute
- **Lazy loading:** Native `loading="lazy"` for below-fold images
- **Placeholders:** Low-quality image placeholders (LQIP) or solid color backgrounds

### Font Loading

- Use `font-display: swap` for Inter
- Preconnect to font CDN in `<head>`
- Subset fonts if possible (latin-ext for India audience)

---

## 8. CONTENT PRINCIPLES

### Voice & Tone

- **Authoritative:** Speak from expertise without jargon overload
- **Trustworthy:** Transparent about processes, fees, and limitations
- **Exclusive:** Make HNIs feel understood, not sold to
- **Approachable:** Avoid elitism; clarity over complexity

### Content Hierarchy

1. **Benefit first:** Lead with outcomes, not features
2. **Social proof:** Client names, retention stats, testimonials
3. **Authority markers:** CA/MBA credentials, years of experience, certifications
4. **Clear CTAs:** Every section ends with a purposeful next step

### SEO Content Strategy

- **Service pages:** Target primary keywords (e.g., "wealth management Kolkata", "NRI tax advisory India")
- **Insights/Blog:** Topical authority through long-form, data-backed articles
- **Local SEO:** Kolkata-specific mentions, Google Business Profile alignment
- **Schema markup:** Organization, Service, Article, FAQPage structured data

---

## 9. BRAND ASSET GUIDELINES

### Logo Usage

- **Primary lockup:** Wordmark "UNoviA" with "Consulting" subtext
- **Clear space:** Minimum padding equal to height of "U" in UNoviA
- **Minimum size:** 120px width for digital, 1 inch for print
- **Backgrounds:** Navy or white preferred; gold on dark navy for emphasis

### Iconography

- **System:** Lucide React (outline style)
- **Sizing:** 24px standard, 16px inline, 32px feature icons
- **Color:** `navy-700` or `navy-800` default; `gold-500` for accent; white on dark backgrounds

### Spacing Rhythm

- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96
- Apply consistently across padding, margins, and gaps

---

## 10. CONVERSION OPTIMIZATION

### Primary Conversion Goals

1. **Consultation booking:** Contact form submission → email/phone capture
2. **Service inquiry:** Service detail page → contact form with pre-selected service
3. **Newsletter signup:** Insights/Daily Brief → email capture (future enhancement)
4. **Phone call:** Sticky CTA on mobile, prominent phone number in header

### Trust Signals

- Client testimonials with names, titles, companies
- Animated trust statistics (10+ CAs, 98% retention)
- Certifications and professional body logos
- "CA-Led" badge in hero and throughout site
- Transparent process sections (3-4 step methodologies)

### CTA Placement Strategy

- **Above fold:** Primary CTA in hero
- **End of sections:** Secondary CTA after each major section
- **Floating mobile:** Sticky phone/CTA button on mobile
- **Service pages:** Contextual CTAs referencing specific service
- **Footer:** Contact summary + social links

---

## 11. FUTURE ENHANCEMENT ROADMAP

### Phase 1 (Current)

- Core pages: Home, About, Services, Contact
- Blog/Insights system
- Calculators
- Daily Brief

### Phase 2 (Next)

- Client portal login (secured area)
- Team/Leadership page with individual profiles
- Case studies / Success stories
- Resource library (whitepapers, guides)
- Multi-language support (English + Bengali)

### Phase 3 (Advanced)

- AI-powered financial assessment tool
- Interactive ROI calculator
- Webinar/Event registration system
- Integration with CRM (HubSpot/Zoho)
- Advanced analytics dashboard for clients

---

*Document Version: 1.0*  
*Last Updated: 2026-08-03*  
*Owner: Unovia Consulting Digital Strategy*
