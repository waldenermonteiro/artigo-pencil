# Design Spec: Vue 3 Landing Page — Dev Course

**Data:** 2026-03-28
**Origem:** artigo-pencil.pen (Pencil MCP)
**Stack:** Vue 3 + Vite + Tailwind CSS + TypeScript (sem Vue Router)

---

## Visão Geral

Converter o design da landing page "De zero ao seu primeiro emprego como dev em 6 meses" em uma aplicação Vue 3 componentizada, escalável e pronta para manutenção.

---

## Estrutura de Pastas

```
artigo-pencil/
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── src/
    ├── main.ts
    ├── App.vue
    ├── assets/
    │   ├── images/                 ← imagens copiadas do design
    │   └── main.css                ← @tailwind directives
    ├── components/
    │   ├── layout/
    │   │   └── AppFooter.vue
    │   ├── ui/
    │   │   ├── BaseButton.vue
    │   │   ├── BaseCard.vue
    │   │   ├── SectionHeader.vue
    │   │   └── IconItem.vue
    │   └── sections/
    │       ├── HeroSection.vue
    │       ├── PainSection.vue
    │       ├── ModulesSection.vue
    │       ├── AboutSection.vue
    │       ├── TestimonialsSection.vue
    │       ├── InstructorSection.vue
    │       ├── PricingSection.vue
    │       ├── CtaSection.vue
    │       ├── FaqSection.vue
    │       └── FaqItem.vue
    └── composables/
        └── useFaq.ts
```

---

## Design Tokens (tailwind.config.ts)

```ts
colors: {
  primary: '#7C3AED',
  accent:  '#06B6D4',
  dark: { DEFAULT: '#111827', card: '#1F2937' },
  muted:   '#6B7280',
}
fontFamily: { sans: ['Inter', 'sans-serif'] }
```

---

## Componentes UI

### BaseButton.vue
- Props: `variant: 'primary' | 'secondary'`, `withIcon?: boolean`
- Slot padrão para label
- `primary`: `bg-primary text-white` com shadow e hover scale
- `secondary`: `border border-gray-600 text-white` com hover `bg-white/10`

### BaseCard.vue
- Props: `variant: 'dark' | 'light'`
- Slots: `icon`, `default`
- `dark`: `bg-dark-card rounded-2xl`
- `light`: `bg-white rounded-2xl shadow-md`

### SectionHeader.vue
- Props: `title: string`, `subtitle?: string`, `align?: 'center' | 'left'`, `theme?: 'dark' | 'light'`
- Renderiza título h2 + parágrafo opcional

### IconItem.vue
- Props: `icon: string` (nome lucide), `text: string`
- Usado em listas de benefícios, trust signals, FAQ headers

---

## Seções

| Seção | Componente | Background |
|---|---|---|
| Hero | HeroSection.vue | `bg-dark` (#111827) |
| Dores | PainSection.vue | `bg-white` |
| Módulos | ModulesSection.vue | `bg-dark` (#111827) |
| Sobre o Curso | AboutSection.vue | `bg-gray-50` |
| Testemunhos | TestimonialsSection.vue | `bg-white` |
| Instrutor | InstructorSection.vue | `bg-gray-50` |
| Oferta/Preço | PricingSection.vue | `bg-dark` (#111827) |
| CTA Final | CtaSection.vue | gradiente primary→accent |
| FAQ | FaqSection.vue + FaqItem.vue | `bg-gray-50` |
| Footer | AppFooter.vue | `bg-dark` (#111827) |

### Detalhes por Seção

**HeroSection:** badge roxo, heading 34px bold, subtítulo, botões CTA row, social proof row, mockup image à direita (480px). Layout `flex-col lg:flex-row`, gap 64px.

**PainSection:** 3 cards brancos com borda esquerda roxa 4px (`border-l-4 border-primary`), ícone lucide, título, descrição. Grid `grid-cols-1 md:grid-cols-3`.

**ModulesSection:** 6 cards dark (#1F2937) em 2 linhas de 3. Cada card: ícone lucide roxo, badge "MÓDULO 0X" em cyan, título, descrição. Grid `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.

**AboutSection:** coluna esquerda com lista de 6 itens (ícone + texto), coluna direita com card roxo (#7C3AED) contendo benefícios e CTA. Layout `flex-col lg:flex-row`.

**TestimonialsSection:** 3 cards brancos com sombra, estrelas douradas, depoimento em itálico, avatar com nome e cargo. Grid `grid-cols-1 md:grid-cols-3`.

**InstructorSection:** imagem 420x420 à esquerda, bio com nome, descrição, stats (10 anos, 5000 alunos), empresas. Layout `flex-col lg:flex-row`, gap 64px.

**PricingSection:** card centralizado (560px), preço riscado + preço atual cyan, lista de bônus com ícones, CTA roxo com sombra, garantia 7 dias.

**CtaSection:** gradiente 135° de #7C3AED para #06B6D4, heading branco, 2 botões, 3 trust signals com ícones.

**FaqSection + FaqItem:** 5 itens accordion. `useFaq.ts` controla `openIndex ref`, toggle fecha/abre. Animação com `v-show` + `transition`.

**AppFooter:** `justify-between`, copyright à esquerda, links à direita (Política, Termos, Suporte em roxo).

---

## Composable: useFaq.ts

```ts
import { ref } from 'vue'

export function useFaq() {
  const openIndex = ref<number | null>(null)
  const toggle = (i: number) => {
    openIndex.value = openIndex.value === i ? null : i
  }
  return { openIndex, toggle }
}
```

---

## Responsividade Mobile-First

| Breakpoint | Comportamento |
|---|---|
| base (mobile) | stack vertical, `grid-cols-1`, `px-4 py-12` |
| `md` (768px) | grids passam para 2-3 colunas |
| `lg` (1024px) | layouts side-by-side, `px-16 py-20` |

Padding de seção: `px-4 py-16 lg:px-16 lg:py-20` aplicado via classe `.section-container` ou diretamente em cada seção.

---

## App.vue

Importa e renderiza todas as seções em ordem:
```
HeroSection → PainSection → ModulesSection → AboutSection →
TestimonialsSection → InstructorSection → PricingSection →
CtaSection → FaqSection → AppFooter
```

---

## Fidelidade ao Design

- Paleta exata do .pen: primary #7C3AED, accent #06B6D4, muted #6B7280
- Fonte Inter (Google Fonts via @import no CSS)
- Ícones via `lucide-vue-next`
- Imagens referenciadas em `src/assets/images/` (copiadas de `images/`)
- Corner radius: cards 16px (`rounded-2xl`), botões 12px (`rounded-xl`)
- Sombras: conforme design (shadow-md, shadow-lg, shadow-purple custom)
