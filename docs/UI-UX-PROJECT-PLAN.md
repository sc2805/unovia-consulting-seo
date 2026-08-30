# Unovia Consulting — UI/UX Project Plan & Implementation Roadmap

> **Project:** Unovia Consulting Website Redesign  
> **Objective:** Deliver a premium, conversion-optimized website that conveys authority, trust, and exclusivity while modernizing the visual experience.  
> **Scope:** Frontend redesign preserving all content, data, animations, and functionality  
> **Status:** In Progress — Visual modernization complete; quality assurance and optimization pending  

---

## 1. EXECUTIVE SUMMARY

### Project Mission
Transform the Unovia Consulting web presence into a sophisticated digital flagship that mirrors the firm's CA-led expertise and premium positioning. The redesign must feel authoritative to high-net-worth clients and corporate executives while remaining approachable enough for emerging professionals and entrepreneurs.

### Success Criteria
- **Visual:** Premium aesthetic using navy/gold palette, refined typography, and generous whitespace
- **Performance:** Core Web Vitals in "Good" range (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- **Accessibility:** WCAG AA compliant (contrast ratios, focus states, semantic HTML)
- **Conversion:** Clear consultation booking path from every major page
- **SEO:** Maintain or improve organic search visibility for financial advisory keywords
- **Maintainability:** Clean component architecture, documented patterns, type-safe codebase

### Constraints
- Do NOT alter any text content, data, animations, icons, graphics, or functionality
- Do NOT change file structure or routing
- Preserve all existing data in `lib/constants.ts` and related files
- Modernize visual styling only: colors, spacing, typography, layout, component aesthetics

---

## 2. UI DESIGN PRINCIPLES

### 2.1 Design Philosophy

The interface must embody **"Quiet Authority"** — confident and capable without being ostentatious. Every visual choice reinforces the message that Unovia is a firm worth trusting with significant financial decisions.

### Core Principles

| Principle | Definition | Application |
|-----------|------------|-------------|
| **Hierarchy First** | Clear visual hierarchy guides users to what matters most | Size, weight, and spacing establish priority; gold accents highlight CTAs |
| **Restraint Over Excess** | Premium feel comes from intentional limits | Maximum 2 typefaces, limited color accents, generous whitespace |
| **Contrast as Tool** | Contrast creates focus, not decoration | Dark navy against white/gold; light sections between heavy content |
| **Motion with Purpose** | Animation guides attention and confirms actions | Scroll reveals, count-up stats, subtle hover states; no decorative motion |
| **Accessibility Non-Negotiable** | Beautiful design must be usable by everyone | WCAG AA contrast, keyboard navigation, semantic HTML, focus rings |
| **Content Is King** | Design serves the message, not the other way around | Typography optimized for long-form reading; no visual clutter |

### 2.2 Visual Design System

#### Color System
- **Primary:** Navy (`#0F2B5B`) — authority, trust, stability
- **Accent:** Gold (`#C5A55A`) — premium quality, warmth, action
- **Neutrals:** Cool grays with blue undertones to harmonize with navy
- **Semantic:** Emerald (success), Amber (warning), Rose (error), Blue (info)

#### Typography
- **Typeface:** Inter (variable) — exceptional legibility, modern geometric structure
- **Scale:** 8-step modular scale from 12px (labels) to 72px (hero headlines)
- **Line Height:** 1.5–1.6 for body text; tighter (1.1–1.2) for headlines
- **Weight Strategy:** Use weight contrast (400 vs 700 vs 800) before size contrast

#### Spacing
- **Base unit:** 4px
- **Scale:** 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px
- **Section padding:** `py-20` (80px) desktop, `py-12` (48px) mobile
- **Card padding:** `p-7` to `p-10` depending on card importance

#### Imagery
- **Photography:** Modern Indian professionals, clean office spaces, urban contexts
- **Mood:** Confident, understated, aspirational
- **Icons:** Lucide React — consistent stroke width, rounded terminals
- **Patterns:** Subtle grid overlays, mesh gradients, noise textures for depth

### 2.3 Component Design Language

#### Cards
- **Radius:** `rounded-2xl` (16px) primary; `rounded-xl` (12px) compact
- **Shadow:** `shadow-sm` default → `shadow-lg` on hover
- **Border:** `border-gray-100` default → `border-gold-200` on hover
- **Interaction:** `hover:-translate-y-0.5` to `hover:-translate-y-1` with 300ms ease

#### Buttons
| Variant | Background | Text | Border | Usage |
|---------|------------|------|--------|-------|
| `primary` | `bg-navy-800` | `text-white` | None | Primary CTAs |
| `secondary` | `bg-gold-500` | `text-navy-900` | None | Secondary CTAs |
| `outline` | Transparent | `text-navy-800` | `border-navy-200` | Tertiary actions |
| `ghost` | Transparent | `text-navy-700` | None | Minimal actions |

- **Sizes:** `sm` (py-2 px-4), `md` (py-3 px-6), `lg` (py-4 px-8)
- **Radius:** `rounded-xl` (12px)
- **States:** Hover, focus, active, disabled with clear visual feedback

#### Navigation
- **Desktop:** Horizontal nav with underline/highlight indicator on active link
- **Mobile:** Full-screen overlay with large touch targets (min 44px)
- **Scroll behavior:** Background blur + shadow on scroll (backdrop-filter)

#### Forms
- **Inputs:** `border-gray-200` default → `border-gold-400` focus with gold ring
- **Labels:** 12px uppercase tracking-wide, `text-gray-500`
- **Error states:** Red border + helper text, ARIA-describedby linked
- **Success states:** Green border + checkmark icon

---

## 3. UX OPTIMIZATION STRATEGIES

### 3.1 Information Architecture

**Flat hierarchy:** Maximum 3 clicks to any major service or contact point
**Content hubs:** Services and Insights act as authoritative hubs with deep internal linking
**Conversion-first:** Contact and calculator paths are prominent in global nav and repeated in CTAs

### 3.2 User Journeys

#### Primary Persona: High-Net-Worth Individual (HNI)
- **Entry:** Organic search → Homepage hero
- **Path:** Services → Wealth Management detail → Process section → Contact form
- **Decision factors:** CA credentials, client retention stats, testimonials
- **Friction points:** Long forms, unclear pricing, lack of social proof

#### Secondary Persona: Corporate Executive / Business Owner
- **Entry:** Direct navigation → Services
- **Path:** Business Consulting → Offerings → Why Unovia → Contact
- **Decision factors:** Industry expertise, team credentials, case studies
- **Friction points:** Generic messaging, lack of specific outcomes

#### Tertiary Persona: NRI / Global Indian
- **Entry:** Search → Tax Consultancy
- **Path:** Tax Consultancy → NRI Taxation mention → Contact
- **Decision factors:** DTAA expertise, cross-border experience, repatriation knowledge
- **Friction points:** Timezone confusion, lack of remote process clarity

### 3.3 Conversion Optimization

#### CTA Placement Strategy
1. **Above fold:** Primary CTA in hero (desktop: right side; mobile: below headline)
2. **End of sections:** Secondary CTA after each major section
3. **Service pages:** Contextual CTA referencing specific service
4. **Sticky mobile:** Bottom-aligned CTA bar on mobile (phone + consultation link)
5. **Footer:** Contact summary + social links

#### Trust Signals
- Client testimonials with names, titles, companies
- Animated trust statistics (10+ CAs, 98% retention)
- "CA-Led" badge in hero and throughout site
- Transparent process sections (3-4 step methodologies)
- Certifications and professional body logos (future enhancement)

#### Form Optimization
- **Minimal fields:** Name, email, phone, service interest, message
- **Progressive disclosure:** Show additional fields only when relevant
- **Inline validation:** Real-time feedback on input
- **Social proof near form:** "Join 500+ clients who trust Unovia"
- **Privacy assurance:** "Your information is confidential"

### 3.4 Accessibility Strategy

- **Contrast:** Navy-800 on white = 9.2:1 (AAA); gold-500 on navy-800 = 4.8:1 (AA)
- **Focus indicators:** 2px gold ring with 2px offset on all interactive elements
- **Keyboard navigation:** Logical tab order; skip-to-content link
- **Screen readers:** Semantic HTML; ARIA labels for icon-only buttons; descriptive alt text
- **Motion:** Respect `prefers-reduced-motion`; disable animations for users who prefer reduced motion

---

## 4. TECHNICAL IMPLEMENTATION ROADMAP

### 4.1 Recommended Technology Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Framework** | Next.js 14 (App Router) | React Server Components, optimal SEO, static generation |
| **Language** | TypeScript | Type safety, better DX, fewer runtime errors |
| **Styling** | Tailwind CSS | Utility-first, consistent design system, fast iteration |
| **Icons** | Lucide React | Consistent design, tree-shakeable, accessible |
| **Animation** | Motion (Framer Motion) | Scroll-triggered reveals, staggered animations, performance |
| **Fonts** | Inter (Google Fonts) | Exceptional legibility, variable font support |
| **Deployment** | Vercel (recommended) | Edge network, preview deployments, analytics |
| **Analytics** | Vercel Analytics / Google Analytics 4 | Performance monitoring, user behavior |
| **CMS** | None (static) — future: Sanity/Contentful | Content is currently hardcoded in constants |
| **Forms** | React Hook Form + Zod | Type-safe validation, accessible error handling |

### 4.2 Development Workflow

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   DESIGN    │───▶│  DEVELOP    │───▶│   REVIEW    │───▶│   DEPLOY    │
│   PHASE     │    │   PHASE     │    │   PHASE     │    │   PHASE     │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
       │                  │                  │                  │
       ▼                  ▼                  ▼                  ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ - Wireframes│    │ - Component │    │ - Code      │    │ - Staging   │
│ - Style     │    │   build     │    │   review    │    │   deploy    │
│   guide     │    │ - Integration│   │ - QA        │    │ - Production│
│ - Prototype │    │ - Testing   │    │ - Accessibility││   deploy    │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

### 4.3 Sprint Breakdown

#### Sprint 1: Foundation (Weeks 1-2) — COMPLETE
- [x] Repository setup and dependency installation
- [x] Design system implementation (colors, typography, spacing in Tailwind)
- [x] Base component library (Button, SectionHeading, ServiceCard, Logo)
- [x] Layout components (Navbar, Footer)
- [x] Animation system (fade-in, fade-in-up, float, count-up)
- [x] Homepage sections (Hero, ServicesGrid, TrustIndicators, Testimonials, InsightsPreview, CTABanner)
- [x] Build verification and linting

#### Sprint 2: Content Pages (Weeks 3-4) — IN PROGRESS
- [x] About page (hero, who-we-are, mission/vision, expertise, segments, values, process)
- [x] Services listing page
- [ ] Service detail pages (5 pages, data-driven from constants)
- [x] Contact page with form
- [ ] Calculators page enhancement
- [ ] Daily Brief listing and detail pages
- [ ] Insights listing and detail pages

#### Sprint 3: Polish & Optimization (Weeks 5-6) — PENDING
- [ ] Mobile responsiveness audit and fixes
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Performance optimization (images, fonts, code splitting)
- [ ] Accessibility audit (axe, Lighthouse, manual keyboard nav)
- [ ] SEO optimization (meta tags, structured data, Open Graph)
- [ ] Animation refinement and scroll-trigger setup

#### Sprint 4: Testing & Launch (Week 7) — PENDING
- [ ] End-to-end testing (Cypress / Playwright)
- [ ] Content review against blueprint
- [ ] Stakeholder review and feedback incorporation
- [ ] Production deployment
- [ ] Post-launch monitoring setup

### 4.4 Quality Assurance Checklist

#### Visual QA
- [ ] All pages match design system (colors, typography, spacing)
- [ ] Consistent component behavior across pages
- [ ] Hover states, focus states, active states implemented
- [ ] Dark/light section rhythm maintained
- [ ] Gold accents used sparingly and consistently

#### Functional QA
- [ ] All internal links resolve correctly
- [ ] Contact form validates and submits (API route functional)
- [ ] Service detail pages render all data from constants
- [ ] Calculator functions correctly
- [ ] Mobile menu toggles properly
- [ ] Smooth scroll behavior on anchor links

#### Performance QA
- [ ] Lighthouse Performance score > 90
- [ ] Lighthouse Accessibility score > 95
- [ ] Lighthouse Best Practices score > 90
- [ ] Lighthouse SEO score > 95
- [ ] Images optimized (WebP, proper sizing, lazy loading)
- [ ] Font loading optimized (font-display: swap, preconnect)
- [ ] No layout shifts (CLS < 0.1)

#### Accessibility QA
- [ ] Color contrast ratios meet WCAG AA (4.5:1 body, 3:1 large text)
- [ ] All interactive elements have visible focus indicators
- [ ] Form inputs have associated labels
- [ ] Error messages are announced via aria-describedby
- [ ] Heading hierarchy is logical (one h1 per page)
- [ ] Images have descriptive alt text
- [ ] Site is fully navigable via keyboard

---

## 5. COMPONENT ARCHITECTURE

### 5.1 Directory Structure

```
components/
├── layout/
│   ├── Navbar.tsx          # Global navigation with scroll effects
│   └── Footer.tsx          # Site footer with links and info
├── sections/
│   ├── Hero.tsx            # Homepage hero
│   ├── ServicesGrid.tsx    # Services overview grid
│   ├── TrustIndicators.tsx # Stats and market widget
│   ├── Testimonials.tsx    # Client testimonials carousel
│   ├── InsightsPreview.tsx # Recent articles grid
│   └── CTABanner.tsx       # Reusable call-to-action banner
├── ui/
│   ├── Button.tsx          # Primary/secondary/outline/ghost buttons
│   ├── ServiceCard.tsx     # Service detail card
│   ├── SectionHeading.tsx  # Consistent section titles with eyebrow
│   └── Logo.tsx            # Brand logo component
└── forms/
    └── ContactForm.tsx     # Accessible contact form
```

### 5.2 Component Design Patterns

#### Compound Components
```tsx
// SectionHeading accepts optional eyebrow, subtitle, alignment
<SectionHeading
  eyebrow="Our Expertise"
  title="Comprehensive Financial Solutions"
  subtitle="Supporting text..."
  align="center"
/>
```

#### Variant Props
```tsx
// Button uses variant + size for consistent styling
<Button href="/contact" variant="primary" size="lg">
  Book Consultation
</Button>
```

#### Data-Driven Rendering
```tsx
// Services rendered from constants, not hardcoded
{SERVICES.map((service) => (
  <ServiceCard key={service.slug} {...service} />
))}
```

---

## 6. DESIGN HANDOFF & SPECIFICATIONS

### 6.1 Design Tokens (Tailwind Config)

```ts
// tailwind.config.ts — Extended theme
{
  colors: {
    navy: { 50: '#EBF0F7', 100: '#C9D5E8', ..., 950: '#040E1F' },
    gold: { 50: '#FDF8EE', 100: '#F7ECCE', ..., 900: '#46391A' },
  },
  fontFamily: {
    sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
  },
  animation: {
    'fade-in': 'fadeIn 0.6s ease-out forwards',
    'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
    'float': 'float 6s ease-in-out infinite',
    // ... other animations
  },
}
```

### 6.2 Responsive Breakpoints

| Token | Min Width | Target |
|-------|-----------|--------|
| `sm` | 640px | Large phones, small tablets |
| `md` | 768px | Tablets, small laptops |
| `lg` | 1024px | Laptops, desktops |
| `xl` | 1280px | Large desktops |
| `2xl` | 1536px | Ultra-wide displays |

### 6.3 Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `1` | 4px | Tight gaps, icon padding |
| `2` | 8px | Component padding |
| `3` | 12px | Small element spacing |
| `4` | 16px | Form inputs, small cards |
| `6` | 24px | Card padding, section gaps |
| `8` | 32px | Large gaps, card internals |
| `10` | 40px | Section padding mobile |
| `12` | 48px | Section padding tablet |
| `16` | 64px | Section padding desktop |
| `20` | 80px | Large section padding |
| `24` | 96px | Hero section padding |

---

## 7. RISK MITIGATION

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| **Design changes mid-project** | Medium | High | Lock design system before development; change control process |
| **Performance degradation** | Medium | High | Lighthouse CI in pipeline; image optimization checklist |
| **Accessibility oversights** | Medium | High | Automated axe tests; manual keyboard/screen reader testing |
| **Content drift** | Low | Medium | All content in constants; no inline hardcoding |
| **Browser compatibility** | Low | Medium | Test on latest 2 versions of Chrome, Firefox, Safari, Edge |
| **Deployment issues** | Low | High | Staging environment; rollback plan; Vercel preview URLs |

---

## 8. SUCCESS METRICS

### Quantitative Metrics
- **Performance:** Lighthouse scores > 90 across all categories
- **Accessibility:** 0 axe violations; WCAG AA compliance
- **SEO:** Maintain or improve current search rankings
- **Bundle size:** Total JS < 200KB gzipped
- **Image weight:** Hero images < 100KB optimized

### Qualitative Metrics
- **Design fidelity:** Matches blueprint specifications
- **Brand consistency:** Navy/gold palette applied consistently
- **User flow:** Clear path from homepage to contact form
- **Mobile experience:** Full functionality on 375px viewport
- **Stakeholder approval:** Sign-off from decision makers

---

## 9. MAINTENANCE & EVOLUTION

### Post-Launch Checklist
- [ ] Set up Vercel Analytics and monitor Core Web Vitals
- [ ] Configure Google Search Console and submit sitemap
- [ ] Set up uptime monitoring (e.g., UptimeRobot, Pingdom)
- [ ] Create content calendar for Insights/Daily Brief
- [ ] Document component library in Storybook (optional)
- [ ] Establish design system versioning (semantic versioning for components)

### Future Enhancements
- Client portal with authentication
- Team/Leadership profiles page
- Case studies with measurable outcomes
- Whitepaper/resource downloads
- Multi-language support (English + Bengali)
- CRM integration (HubSpot/Zoho)
- Advanced financial calculators
- AI-powered financial assessment quiz

---

## 10. APPENDIX

### A. References
- Website Blueprint: `docs/WEBSITE-BLUEPRINT.md`
- Tailwind Configuration: `tailwind.config.ts`
- Component Library: `components/`
- Constants/Data: `lib/constants.ts`

### B. Key Decisions Log
| Decision | Rationale | Date |
|----------|-----------|------|
| Next.js App Router | Modern React, RSC, optimal SEO | 2026-08-03 |
| Tailwind CSS | Utility-first, consistent design system | 2026-08-03 |
| Inter font family | Exceptional legibility, professional appearance | 2026-08-03 |
| Navy/Gold palette | Existing brand colors; premium financial aesthetic | 2026-08-03 |
| Lucide icons | Consistent design, accessible, tree-shakeable | 2026-08-03 |
| Motion library | Scroll-triggered animations, performant | 2026-08-03 |

### C. Stakeholder Contacts
- **Client:** Unovia Consulting
- **Primary Contact:** [Decision maker name]
- **Feedback Cycle:** Weekly review, sprint-based delivery

---

*Document Version: 1.0*  
*Last Updated: 2026-08-03*  
*Status: In Progress*
