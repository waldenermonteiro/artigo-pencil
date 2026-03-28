# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server at localhost:5173
npm run build     # type-check (vue-tsc) then production build
npm run preview   # preview the production build locally
```

There are no lint or test scripts configured.

## Architecture

This is a single-page Vue 3 landing page for a developer course ("DevCourse"), converted from a Pencil design file (`artigo-pencil.pen`). The page is static — no router, no state management, no API calls.

**Entry point:** `src/main.ts` → `src/App.vue` → renders 10 sections in order.

**Component hierarchy:**

```
src/
  components/
    ui/            ← reusable primitives (use these before writing inline markup)
      BaseButton   ← variant: 'primary' | 'secondary', withIcon: boolean
      BaseCard     ← variant: 'dark' | 'light', named slots: icon + default
      SectionHeader ← title, subtitle?, align?, theme? — use for section headings
      IconItem     ← resolves any lucide icon by name string + renders text beside it
    sections/      ← one file per page section, consumed only by App.vue
    layout/
      AppFooter
  composables/
    useFaq.ts      ← openIndex ref + toggle(i) — used by FaqSection + FaqItem
```

**Design tokens** are defined in `tailwind.config.ts` and as CSS custom properties in `src/assets/main.css`:

| Token            | Value               | Tailwind class               |
| ---------------- | ------------------- | ---------------------------- |
| Primary (purple) | `#7C3AED`           | `bg-primary`, `text-primary` |
| Accent (cyan)    | `#06B6D4`           | `bg-accent`, `text-accent`   |
| Dark background  | `#111827`           | `bg-dark`                    |
| Dark card        | `#1F2937`           | `bg-dark-card`               |
| Muted text       | `#6B7280`           | `text-muted`                 |
| Gradient         | 135° primary→accent | `bg-gradient-primary`        |

For Lucide icon `color=` props, use the CSS variables: `color="var(--color-primary)"` and `color="var(--color-accent)"` — not hardcoded hex.

**Responsiveness** is mobile-first. The breakpoint pattern used throughout is:

- Single column / stacked → `md:` (2-col grids) → `lg:` (side-by-side layouts, full padding)
- Section padding: `px-4 py-16 lg:px-16 lg:py-20`
- All sections are `max-w-6xl mx-auto` centered.

**Section backgrounds alternate** dark (`bg-dark`), white (`bg-white`), gray (`bg-gray-50`) to create visual rhythm. `CtaSection` uses `bg-gradient-primary`.

**Images** live in `src/assets/images/` (mockup, instructor, three testimonial avatars). They are imported directly in components as ES modules.

## Design source

The original design is in `artigo-pencil.pen` (Pencil MCP format). Spec and implementation plan are in `docs/superpowers/specs/` and `docs/superpowers/plans/`.
