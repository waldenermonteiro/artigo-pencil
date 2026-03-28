# Vue 3 Landing Page — Dev Course Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Converter o design `artigo-pencil.pen` em uma landing page Vue 3 + Vite + Tailwind CSS + TypeScript, componentizada, mobile-first e pronta para manutenção.

**Architecture:** Flat component structure com `ui/`, `sections/` e `layout/`. App.vue orquestra 10 seções. Composable `useFaq.ts` isola lógica de accordion. Sem Vue Router.

**Tech Stack:** Vue 3.4+, Vite 5+, Tailwind CSS 3, TypeScript 5, lucide-vue-next

---

## File Map

| File | Responsibility |
|---|---|
| `app/index.html` | Entry HTML com título |
| `app/vite.config.ts` | Vite + Vue plugin |
| `app/tailwind.config.ts` | Design tokens (cores, fonte) |
| `app/postcss.config.js` | PostCSS para Tailwind |
| `app/src/main.ts` | Mount Vue app |
| `app/src/App.vue` | Orquestra todas as seções |
| `app/src/assets/main.css` | Tailwind directives + Inter font |
| `app/src/components/ui/BaseButton.vue` | Botão primary/secondary reutilizável |
| `app/src/components/ui/BaseCard.vue` | Card dark/light reutilizável |
| `app/src/components/ui/SectionHeader.vue` | Título + subtítulo de seção |
| `app/src/components/ui/IconItem.vue` | Ícone Lucide + texto |
| `app/src/composables/useFaq.ts` | Toggle estado do accordion FAQ |
| `app/src/components/sections/HeroSection.vue` | Hero com badge, heading, CTA, mockup |
| `app/src/components/sections/PainSection.vue` | 3 cards de dores com borda roxa |
| `app/src/components/sections/ModulesSection.vue` | 6 cards de módulos em grid |
| `app/src/components/sections/AboutSection.vue` | Features list + card roxo CTA |
| `app/src/components/sections/TestimonialsSection.vue` | 3 depoimentos com avatar |
| `app/src/components/sections/InstructorSection.vue` | Foto + bio + stats + empresas |
| `app/src/components/sections/PricingSection.vue` | Card preço + bônus + CTA |
| `app/src/components/sections/CtaSection.vue` | Seção gradiente com CTA final |
| `app/src/components/sections/FaqSection.vue` | Container FAQ com lista |
| `app/src/components/sections/FaqItem.vue` | Item accordion individual |
| `app/src/components/layout/AppFooter.vue` | Rodapé com copyright e links |
| `app/src/assets/images/` | Imagens copiadas de `../images/` |

---

## Task 1: Scaffold Vite + Vue 3 + TypeScript

**Files:**
- Create: `app/` (diretório scaffolded pelo Vite)

- [ ] **Step 1: Criar projeto Vite Vue TypeScript**

```bash
cd /Users/waldenermonteiro/development/artigo-pencil
npm create vite@latest app -- --template vue-ts
```

Expected: diretório `app/` criado com estrutura Vue + TS.

- [ ] **Step 2: Instalar dependências base**

```bash
cd app
npm install
npm install lucide-vue-next
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init --ts -p
```

Expected: `node_modules/` criado, `tailwind.config.ts` e `postcss.config.js` gerados.

- [ ] **Step 3: Verificar build inicial**

```bash
npm run build
```

Expected: `dist/` criado sem erros TypeScript.

- [ ] **Step 4: Commit**

```bash
cd /Users/waldenermonteiro/development/artigo-pencil
git add app/
git commit -m "feat: scaffold Vue 3 + Vite + TypeScript + Tailwind"
```

---

## Task 2: Configurar Tailwind com Design Tokens

**Files:**
- Modify: `app/tailwind.config.ts`
- Modify: `app/src/style.css` → renomear para `app/src/assets/main.css`
- Modify: `app/src/main.ts`
- Modify: `app/index.html`

- [ ] **Step 1: Remover arquivos default do Vite**

```bash
cd /Users/waldenermonteiro/development/artigo-pencil/app
rm -f src/style.css src/assets/vue.svg public/vite.svg src/components/HelloWorld.vue
```

- [ ] **Step 2: Criar estrutura de diretórios**

```bash
mkdir -p src/assets/images src/components/ui src/components/sections src/components/layout src/composables
```

- [ ] **Step 3: Escrever `app/tailwind.config.ts`**

Substituir conteúdo completo:

```ts
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        accent: '#06B6D4',
        dark: {
          DEFAULT: '#111827',
          card: '#1F2937',
        },
        muted: '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
```

- [ ] **Step 4: Criar `app/src/assets/main.css`**

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', sans-serif;
}
```

- [ ] **Step 5: Atualizar `app/src/main.ts`**

```ts
import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'

createApp(App).mount('#app')
```

- [ ] **Step 6: Atualizar `app/index.html`**

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DevCourse — De zero ao seu primeiro emprego como dev</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

- [ ] **Step 7: Criar `app/src/App.vue` provisório (para testar build)**

```vue
<template>
  <div class="bg-dark text-white min-h-screen p-8">
    <h1 class="text-primary text-3xl font-bold">DevCourse</h1>
    <p class="text-muted mt-2">Build em progresso...</p>
  </div>
</template>
```

- [ ] **Step 8: Verificar build**

```bash
cd /Users/waldenermonteiro/development/artigo-pencil/app
npm run build
```

Expected: sem erros. As classes `bg-dark`, `text-primary`, `text-muted` devem compilar corretamente.

- [ ] **Step 9: Commit**

```bash
cd /Users/waldenermonteiro/development/artigo-pencil
git add app/
git commit -m "feat: configure Tailwind with design tokens and Inter font"
```

---

## Task 3: Copiar Imagens do Design

**Files:**
- Create: `app/src/assets/images/mockup.png`
- Create: `app/src/assets/images/instructor.png`
- Create: `app/src/assets/images/avatar-ana.png`
- Create: `app/src/assets/images/avatar-carlos.png`
- Create: `app/src/assets/images/avatar-mariana.png`

- [ ] **Step 1: Copiar imagens referenciadas no design**

```bash
cd /Users/waldenermonteiro/development/artigo-pencil
cp images/generated-1774728830262.png app/src/assets/images/mockup.png
cp images/generated-1774728501807.png app/src/assets/images/instructor.png
cp images/generated-1774729138882.png app/src/assets/images/avatar-ana.png
cp images/generated-1774729158138.png app/src/assets/images/avatar-carlos.png
cp images/generated-1774729174262.png app/src/assets/images/avatar-mariana.png
```

- [ ] **Step 2: Verificar arquivos copiados**

```bash
ls app/src/assets/images/
```

Expected: 5 arquivos `.png` listados.

- [ ] **Step 3: Commit**

```bash
git add app/src/assets/images/
git commit -m "feat: add design images to assets"
```

---

## Task 4: Componentes UI Base

**Files:**
- Create: `app/src/components/ui/BaseButton.vue`
- Create: `app/src/components/ui/BaseCard.vue`
- Create: `app/src/components/ui/SectionHeader.vue`
- Create: `app/src/components/ui/IconItem.vue`

- [ ] **Step 1: Criar `app/src/components/ui/BaseButton.vue`**

```vue
<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

withDefaults(defineProps<{
  variant?: 'primary' | 'secondary'
  withIcon?: boolean
}>(), {
  variant: 'primary',
  withIcon: false,
})
</script>

<template>
  <button
    :class="[
      'inline-flex cursor-pointer items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold transition-all duration-200',
      variant === 'primary'
        ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/40'
        : 'border border-gray-600 text-white hover:bg-white/10',
    ]"
  >
    <slot />
    <ArrowRight v-if="withIcon" :size="18" />
  </button>
</template>
```

- [ ] **Step 2: Criar `app/src/components/ui/BaseCard.vue`**

```vue
<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'dark' | 'light'
}>(), {
  variant: 'dark',
})
</script>

<template>
  <div
    :class="[
      'rounded-2xl p-6',
      variant === 'dark'
        ? 'bg-dark-card shadow-lg shadow-black/20'
        : 'bg-white shadow-md shadow-black/10',
    ]"
  >
    <slot name="icon" />
    <slot />
  </div>
</template>
```

- [ ] **Step 3: Criar `app/src/components/ui/SectionHeader.vue`**

```vue
<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  theme?: 'dark' | 'light'
}>(), {
  align: 'center',
  theme: 'light',
})
</script>

<template>
  <div :class="['flex flex-col gap-3', align === 'center' ? 'items-center text-center' : 'items-start']">
    <h2
      :class="[
        'text-2xl font-bold lg:text-3xl',
        theme === 'dark' ? 'text-white' : 'text-dark',
      ]"
    >
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-base text-muted lg:text-lg">
      {{ subtitle }}
    </p>
  </div>
</template>
```

- [ ] **Step 4: Criar `app/src/components/ui/IconItem.vue`**

```vue
<script setup lang="ts">
import * as LucideIcons from 'lucide-vue-next'
import type { Component } from 'vue'
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  icon: string
  text: string
  iconColor?: string
  iconSize?: number
  textClass?: string
}>(), {
  iconColor: '#7C3AED',
  iconSize: 24,
  textClass: 'text-gray-700',
})

function toPascalCase(str: string): string {
  return str.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')
}

const IconComponent = computed<Component>(() => {
  const name = toPascalCase(props.icon)
  return (LucideIcons as Record<string, Component>)[name] ?? LucideIcons.Circle
})
</script>

<template>
  <div class="flex items-center gap-4">
    <component :is="IconComponent" :size="iconSize" :color="iconColor" class="shrink-0" />
    <span :class="['text-base font-medium', textClass]">{{ text }}</span>
  </div>
</template>
```

- [ ] **Step 5: Verificar build**

```bash
cd /Users/waldenermonteiro/development/artigo-pencil/app
npm run build
```

Expected: sem erros TypeScript.

- [ ] **Step 6: Commit**

```bash
cd /Users/waldenermonteiro/development/artigo-pencil
git add app/src/components/ui/
git commit -m "feat: add BaseButton, BaseCard, SectionHeader, IconItem UI components"
```

---

## Task 5: Composable useFaq

**Files:**
- Create: `app/src/composables/useFaq.ts`

- [ ] **Step 1: Criar `app/src/composables/useFaq.ts`**

```ts
import { ref } from 'vue'

export function useFaq() {
  const openIndex = ref<number | null>(null)

  function toggle(i: number): void {
    openIndex.value = openIndex.value === i ? null : i
  }

  return { openIndex, toggle }
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/waldenermonteiro/development/artigo-pencil
git add app/src/composables/useFaq.ts
git commit -m "feat: add useFaq composable for accordion state"
```

---

## Task 6: HeroSection

**Files:**
- Create: `app/src/components/sections/HeroSection.vue`

- [ ] **Step 1: Criar `app/src/components/sections/HeroSection.vue`**

```vue
<script setup lang="ts">
import BaseButton from '../ui/BaseButton.vue'
import mockupImg from '../../assets/images/mockup.png'
</script>

<template>
  <section class="bg-dark px-4 py-16 lg:px-16 lg:py-20">
    <div class="mx-auto max-w-6xl">
      <div class="flex flex-col gap-16 lg:flex-row lg:items-center">

        <!-- Left Column -->
        <div class="flex flex-1 flex-col gap-7">
          <!-- Badge -->
          <span class="w-fit rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white">
            Curso de Programação Online
          </span>

          <!-- Heading -->
          <h1 class="text-3xl font-bold leading-[1.3] text-white lg:text-[34px]">
            De zero ao seu primeiro emprego como dev em 6 meses
          </h1>

          <!-- Subtitle -->
          <p class="text-lg leading-[1.6] text-muted">
            Aprenda do zero, construa projetos reais e conquiste sua primeira vaga em apenas 6 meses de estudo prático e orientado ao mercado.
          </p>

          <!-- CTA Row -->
          <div class="flex flex-wrap items-center gap-4">
            <BaseButton variant="primary" :with-icon="true">Quero começar agora</BaseButton>
            <BaseButton variant="secondary">Ver o programa</BaseButton>
          </div>

          <!-- Social Proof Row -->
          <div class="flex flex-wrap items-center gap-6 text-sm">
            <span class="font-medium text-gray-400">5.000+ alunos</span>
            <span class="text-gray-600">·</span>
            <span class="font-medium text-amber-400">4.9★ avaliação</span>
            <span class="text-gray-600">·</span>
            <span class="font-medium text-gray-400">120h de conteúdo</span>
          </div>
        </div>

        <!-- Right Column (Mockup) -->
        <div class="w-full rounded-[20px] bg-dark-card p-6 lg:w-[480px]">
          <img
            :src="mockupImg"
            alt="Preview do curso"
            class="w-full rounded-xl object-cover"
          />
        </div>

      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 2: Adicionar ao App.vue e testar no browser**

Substituir `app/src/App.vue`:

```vue
<script setup lang="ts">
import HeroSection from './components/sections/HeroSection.vue'
</script>

<template>
  <main>
    <HeroSection />
  </main>
</template>
```

```bash
cd /Users/waldenermonteiro/development/artigo-pencil/app
npm run dev
```

Expected: abrir `http://localhost:5173`, ver hero section com fundo escuro, badge roxo, heading branco, botões, e mockup.

- [ ] **Step 3: Commit**

```bash
cd /Users/waldenermonteiro/development/artigo-pencil
git add app/src/components/sections/HeroSection.vue app/src/App.vue
git commit -m "feat: add HeroSection with badge, heading, CTA and mockup"
```

---

## Task 7: PainSection

**Files:**
- Create: `app/src/components/sections/PainSection.vue`

- [ ] **Step 1: Criar `app/src/components/sections/PainSection.vue`**

```vue
<script setup lang="ts">
import { Briefcase, Terminal, Compass } from 'lucide-vue-next'
import type { Component } from 'vue'

interface Pain {
  icon: Component
  title: string
  description: string
}

const pains: Pain[] = [
  {
    icon: Briefcase,
    title: 'Primeiro Emprego Distante',
    description: 'Estudei muito mas ainda não sei como conseguir meu primeiro emprego como desenvolvedor.',
  },
  {
    icon: Terminal,
    title: 'Teoria Sem Prática Real',
    description: 'Sinto que aprendo teoria mas não consigo construir projetos reais do zero.',
  },
  {
    icon: Compass,
    title: 'Sem Direção no Mercado',
    description: 'Estou estagnado e sem saber qual tecnologia focar para entrar no mercado.',
  },
]
</script>

<template>
  <section class="bg-white px-4 py-16 lg:px-16 lg:py-20">
    <div class="mx-auto max-w-6xl flex flex-col gap-10">
      <div class="flex flex-col gap-3 text-center">
        <h2 class="text-2xl font-bold text-dark lg:text-3xl">
          Você se identifica com algum desses cenários?
        </h2>
        <p class="text-base text-muted lg:text-lg">
          Não está sozinho — a maioria dos devs passa por isso antes de dar a virada.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div
          v-for="pain in pains"
          :key="pain.title"
          class="flex flex-col gap-4 rounded-2xl border-l-4 border-primary bg-white p-6 shadow-lg shadow-black/[0.06]"
        >
          <component :is="pain.icon" :size="32" color="#7C3AED" />
          <h3 class="text-lg font-semibold text-dark">{{ pain.title }}</h3>
          <p class="text-sm leading-[1.5] text-muted">{{ pain.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 2: Adicionar ao App.vue**

```vue
<script setup lang="ts">
import HeroSection from './components/sections/HeroSection.vue'
import PainSection from './components/sections/PainSection.vue'
</script>

<template>
  <main>
    <HeroSection />
    <PainSection />
  </main>
</template>
```

- [ ] **Step 3: Verificar no browser**

Expected: 3 cards brancos com borda esquerda roxa, ícone, título e descrição.

- [ ] **Step 4: Commit**

```bash
cd /Users/waldenermonteiro/development/artigo-pencil
git add app/src/components/sections/PainSection.vue app/src/App.vue
git commit -m "feat: add PainSection with 3 pain-point cards"
```

---

## Task 8: ModulesSection

**Files:**
- Create: `app/src/components/sections/ModulesSection.vue`

- [ ] **Step 1: Criar `app/src/components/sections/ModulesSection.vue`**

```vue
<script setup lang="ts">
import { Layers, Globe, Zap, Server, Database, Rocket } from 'lucide-vue-next'
import type { Component } from 'vue'

interface Module {
  icon: Component
  badge: string
  title: string
  description: string
}

const modules: Module[] = [
  {
    icon: Layers,
    badge: 'MÓDULO 01',
    title: 'Fundamentos da Programação',
    description: 'Lógica, algoritmos, terminal e controle de versão com Git.',
  },
  {
    icon: Globe,
    badge: 'MÓDULO 02',
    title: 'HTML, CSS e JavaScript',
    description: 'Do zero ao domínio das tecnologias web fundamentais.',
  },
  {
    icon: Zap,
    badge: 'MÓDULO 03',
    title: 'React e Frameworks Modernos',
    description: 'Componentes, estado, hooks e construção de SPAs completas.',
  },
  {
    icon: Server,
    badge: 'MÓDULO 04',
    title: 'Node.js e Back-end',
    description: 'APIs RESTful, autenticação JWT e lógica de servidor com Node.',
  },
  {
    icon: Database,
    badge: 'MÓDULO 05',
    title: 'Banco de Dados e APIs',
    description: 'PostgreSQL, MongoDB, ORM e integração com serviços externos.',
  },
  {
    icon: Rocket,
    badge: 'MÓDULO 06',
    title: 'Deploy e Projetos Reais',
    description: 'Portfólio profissional, CI/CD, deploy na nuvem e entrevistas.',
  },
]
</script>

<template>
  <section class="bg-dark px-4 py-16 lg:px-16 lg:py-20">
    <div class="mx-auto max-w-6xl flex flex-col gap-12">
      <div class="flex flex-col gap-3 text-center">
        <h2 class="text-2xl font-bold text-white lg:text-3xl">O que você vai dominar</h2>
        <p class="text-base text-muted lg:text-lg">6 módulos completos do zero ao mercado de trabalho</p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="mod in modules"
          :key="mod.badge"
          class="flex flex-col gap-3 rounded-2xl bg-dark-card p-6"
        >
          <component :is="mod.icon" :size="28" color="#7C3AED" />
          <span class="text-xs font-bold tracking-widest text-accent">{{ mod.badge }}</span>
          <h3 class="text-lg font-semibold text-white">{{ mod.title }}</h3>
          <p class="text-sm leading-[1.5] text-muted">{{ mod.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 2: Adicionar ao App.vue**

```vue
<script setup lang="ts">
import HeroSection from './components/sections/HeroSection.vue'
import PainSection from './components/sections/PainSection.vue'
import ModulesSection from './components/sections/ModulesSection.vue'
</script>

<template>
  <main>
    <HeroSection />
    <PainSection />
    <ModulesSection />
  </main>
</template>
```

- [ ] **Step 3: Verificar no browser**

Expected: grid escura com 6 cards, badge cyan, título branco, ícone roxo.

- [ ] **Step 4: Commit**

```bash
cd /Users/waldenermonteiro/development/artigo-pencil
git add app/src/components/sections/ModulesSection.vue app/src/App.vue
git commit -m "feat: add ModulesSection with 6 module cards in responsive grid"
```

---

## Task 9: AboutSection

**Files:**
- Create: `app/src/components/sections/AboutSection.vue`

- [ ] **Step 1: Criar `app/src/components/sections/AboutSection.vue`**

```vue
<script setup lang="ts">
import { Video, TrendingUp, Monitor, Award, MessageCircle, Infinity } from 'lucide-vue-next'
import type { Component } from 'vue'

interface Feature {
  icon: Component
  text: string
}

const features: Feature[] = [
  { icon: Video, text: '120+ horas de conteúdo' },
  { icon: TrendingUp, text: 'Iniciante ao Avançado' },
  { icon: Monitor, text: '100% Online e Assíncrono' },
  { icon: Award, text: 'Certificado de Conclusão' },
  { icon: MessageCircle, text: 'Comunidade no Discord' },
  { icon: Infinity, text: 'Acesso Vitalício' },
]

const benefits = [
  'Acesse todos os módulos imediatamente',
  'Suporte e mentoria com instrutores experientes',
  'Atualizações gratuitas vitalícias do conteúdo',
  'Certificado reconhecido pelo mercado de trabalho',
]
</script>

<template>
  <section class="bg-gray-50 px-4 py-16 lg:px-16 lg:py-20">
    <div class="mx-auto max-w-6xl flex flex-col gap-10">
      <h2 class="text-2xl font-bold text-dark lg:text-3xl">
        Tudo que você precisa saber sobre o curso
      </h2>

      <div class="flex flex-col gap-12 lg:flex-row lg:items-start">

        <!-- Left: Feature List -->
        <div class="flex flex-1 flex-col gap-5">
          <div
            v-for="feat in features"
            :key="feat.text"
            class="flex items-center gap-4"
          >
            <component :is="feat.icon" :size="24" color="#7C3AED" class="shrink-0" />
            <span class="text-base font-medium text-gray-700">{{ feat.text }}</span>
          </div>
        </div>

        <!-- Right: Purple CTA Card -->
        <div class="flex w-full flex-col gap-5 rounded-2xl bg-primary p-8 lg:w-[400px]">
          <h3 class="text-xl font-bold leading-snug text-white">
            Comece hoje e tenha acesso imediato a todo o conteúdo
          </h3>

          <div class="flex flex-col gap-3">
            <div
              v-for="ben in benefits"
              :key="ben"
              class="flex items-start gap-3"
            >
              <span class="text-base font-bold text-white">✓</span>
              <span class="text-[15px] leading-snug text-[#EDE9FE]">{{ ben }}</span>
            </div>
          </div>

          <button class="w-full rounded-xl bg-white py-3.5 text-center text-base font-bold text-primary transition-colors hover:bg-gray-50">
            Garantir minha vaga →
          </button>
        </div>

      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 2: Adicionar ao App.vue**

Acrescentar `AboutSection` após `ModulesSection` nos imports e no template.

- [ ] **Step 3: Commit**

```bash
cd /Users/waldenermonteiro/development/artigo-pencil
git add app/src/components/sections/AboutSection.vue app/src/App.vue
git commit -m "feat: add AboutSection with features list and CTA card"
```

---

## Task 10: TestimonialsSection

**Files:**
- Create: `app/src/components/sections/TestimonialsSection.vue`

- [ ] **Step 1: Criar `app/src/components/sections/TestimonialsSection.vue`**

```vue
<script setup lang="ts">
import avatarAna from '../../assets/images/avatar-ana.png'
import avatarCarlos from '../../assets/images/avatar-carlos.png'
import avatarMariana from '../../assets/images/avatar-mariana.png'

interface Testimonial {
  stars: string
  quote: string
  name: string
  role: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    stars: '★★★★★',
    quote: 'Consegui meu primeiro emprego 3 meses após o curso. O conteúdo é direto ao ponto e os projetos fizeram toda a diferença.',
    name: 'Ana Silva',
    role: 'Dev Júnior na Nubank',
    avatar: avatarAna,
  },
  {
    stars: '★★★★★',
    quote: 'Saí do zero e hoje ganho R$5.000/mês como desenvolvedor. Vale cada centavo.',
    name: 'Carlos Lima',
    role: 'Freelancer Full-Stack',
    avatar: avatarCarlos,
  },
  {
    stars: '★★★★★',
    quote: 'O melhor investimento que já fiz na minha vida profissional. Recomendo demais!',
    name: 'Mariana Costa',
    role: 'Front-end Dev',
    avatar: avatarMariana,
  },
]
</script>

<template>
  <section class="bg-white px-4 py-16 lg:px-16 lg:py-20">
    <div class="mx-auto max-w-6xl flex flex-col gap-12">
      <div class="flex flex-col gap-3 text-center">
        <h2 class="text-2xl font-bold text-dark lg:text-3xl">Quem já transformou a carreira</h2>
        <p class="text-base text-muted lg:text-lg">Mais de 5.000 alunos já deram o primeiro passo</p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div
          v-for="t in testimonials"
          :key="t.name"
          class="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg shadow-black/[0.06]"
        >
          <span class="text-lg text-amber-400">{{ t.stars }}</span>
          <p class="flex-1 text-[15px] italic leading-[1.6] text-gray-700">
            "{{ t.quote }}"
          </p>
          <div class="flex items-center gap-3">
            <img :src="t.avatar" :alt="t.name" class="h-12 w-12 rounded-full object-cover" />
            <div>
              <p class="text-[15px] font-semibold text-dark">{{ t.name }}</p>
              <p class="text-sm text-muted">{{ t.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 2: Adicionar ao App.vue**

Acrescentar `TestimonialsSection` após `AboutSection`.

- [ ] **Step 3: Commit**

```bash
cd /Users/waldenermonteiro/development/artigo-pencil
git add app/src/components/sections/TestimonialsSection.vue app/src/App.vue
git commit -m "feat: add TestimonialsSection with 3 testimonial cards and avatars"
```

---

## Task 11: InstructorSection

**Files:**
- Create: `app/src/components/sections/InstructorSection.vue`

- [ ] **Step 1: Criar `app/src/components/sections/InstructorSection.vue`**

```vue
<script setup lang="ts">
import instructorImg from '../../assets/images/instructor.png'

const stats = [
  { value: '10+', label: 'Anos de mercado' },
  { value: '5.000+', label: 'Alunos formados' },
  { value: '3', label: 'Empresas unicórnio' },
]

const companies = ['Nubank', 'iFood', 'Creditas']
</script>

<template>
  <section class="bg-gray-50 px-4 py-16 lg:px-16 lg:py-20">
    <div class="mx-auto max-w-6xl flex flex-col gap-12">

      <!-- Header -->
      <div class="flex flex-col gap-2">
        <span class="text-sm font-semibold tracking-wide text-primary">Conheça seu instrutor</span>
        <h2 class="text-2xl font-semibold text-dark lg:text-3xl">Aprenda com quem vive o mercado</h2>
      </div>

      <!-- Content -->
      <div class="flex flex-col gap-16 lg:flex-row lg:items-center">
        <img
          :src="instructorImg"
          alt="Rafael Mendes"
          class="w-full rounded-2xl object-cover lg:h-[420px] lg:w-[420px]"
        />

        <div class="flex flex-1 flex-col gap-6">
          <div>
            <h3 class="text-2xl font-semibold text-dark">Rafael Mendes</h3>
            <p class="text-base font-medium text-primary">Engenheiro de Software Sênior & Educador</p>
          </div>

          <p class="text-base leading-[1.6] text-muted">
            Com mais de 10 anos de experiência no mercado, Rafael já trabalhou em empresas como Nubank, iFood e startups do Vale do Silício. Formou mais de 5.000 desenvolvedores e é apaixonado por transformar a vida das pessoas através da programação.
          </p>

          <!-- Stats -->
          <div class="flex gap-8">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="flex flex-col gap-1"
            >
              <span class="text-2xl font-bold text-primary">{{ stat.value }}</span>
              <span class="text-sm text-muted">{{ stat.label }}</span>
            </div>
          </div>

          <!-- Companies -->
          <div class="flex flex-col gap-3">
            <span class="text-sm font-medium text-muted">Experiência em:</span>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="company in companies"
                :key="company"
                class="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700"
              >
                {{ company }}
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
```

- [ ] **Step 2: Adicionar ao App.vue**

Acrescentar `InstructorSection` após `TestimonialsSection`.

- [ ] **Step 3: Commit**

```bash
cd /Users/waldenermonteiro/development/artigo-pencil
git add app/src/components/sections/InstructorSection.vue app/src/App.vue
git commit -m "feat: add InstructorSection with bio, stats and company badges"
```

---

## Task 12: PricingSection

**Files:**
- Create: `app/src/components/sections/PricingSection.vue`

- [ ] **Step 1: Criar `app/src/components/sections/PricingSection.vue`**

```vue
<script setup lang="ts">
import { CircleCheck, ArrowRight, ShieldCheck } from 'lucide-vue-next'

const bonuses = [
  '120+ horas de aulas em vídeo HD',
  'Projetos práticos do mercado real',
  'Certificado de conclusão reconhecido',
  'Comunidade exclusiva no Discord',
  'Acesso vitalício com atualizações',
  'Bônus: Guia de entrevistas técnicas (PDF)',
]
</script>

<template>
  <section class="bg-dark px-4 py-16 lg:px-16 lg:py-20">
    <div class="mx-auto max-w-6xl flex flex-col items-center gap-10">

      <!-- Header -->
      <div class="flex flex-col items-center gap-2 text-center">
        <span class="text-sm font-semibold tracking-wide text-accent">Investimento</span>
        <h2 class="text-2xl font-semibold text-white lg:text-3xl">Comece sua transformação hoje</h2>
        <p class="text-base text-muted">Acesso completo ao curso com todos os bônus por um valor especial</p>
      </div>

      <!-- Offer Card -->
      <div class="flex w-full max-w-[560px] flex-col gap-8 rounded-3xl bg-dark-card p-10 shadow-2xl shadow-black/40">

        <!-- Price Block -->
        <div class="flex flex-col items-center gap-2">
          <span class="text-base text-muted line-through">De R$ 997</span>
          <span class="text-5xl font-bold text-accent">R$ 497</span>
          <span class="text-sm text-muted">ou 12x de R$ 49,70 sem juros</span>
        </div>

        <hr class="border-gray-700" />

        <!-- Bonus List -->
        <div class="flex flex-col gap-4">
          <p class="text-sm font-semibold text-white">O que está incluso:</p>
          <div
            v-for="bonus in bonuses"
            :key="bonus"
            class="flex items-center gap-3"
          >
            <CircleCheck :size="20" color="#06B6D4" class="shrink-0" />
            <span class="text-[15px] text-gray-300">{{ bonus }}</span>
          </div>
        </div>

        <!-- CTA Button -->
        <button
          class="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-lg font-semibold text-white shadow-xl shadow-primary/30 transition-colors hover:bg-primary/90"
        >
          Garantir minha vaga agora
          <ArrowRight :size="18" />
        </button>

        <!-- Guarantee -->
        <div class="flex items-center justify-center gap-2 text-sm text-muted">
          <ShieldCheck :size="18" class="shrink-0" />
          <span>Garantia incondicional de 7 dias ou seu dinheiro de volta</span>
        </div>

      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 2: Adicionar ao App.vue**

Acrescentar `PricingSection` após `InstructorSection`.

- [ ] **Step 3: Commit**

```bash
cd /Users/waldenermonteiro/development/artigo-pencil
git add app/src/components/sections/PricingSection.vue app/src/App.vue
git commit -m "feat: add PricingSection with offer card, bonus list and guarantee"
```

---

## Task 13: CtaSection

**Files:**
- Create: `app/src/components/sections/CtaSection.vue`

- [ ] **Step 1: Criar `app/src/components/sections/CtaSection.vue`**

```vue
<script setup lang="ts">
import { ShieldCheck, Lock, Zap, ArrowRight } from 'lucide-vue-next'
import type { Component } from 'vue'

interface TrustSignal {
  icon: Component
  text: string
}

const trustSignals: TrustSignal[] = [
  { icon: ShieldCheck, text: '7 dias de garantia' },
  { icon: Lock, text: 'Pagamento seguro' },
  { icon: Zap, text: 'Acesso imediato' },
]
</script>

<template>
  <section
    class="bg-gradient-to-br from-primary to-accent px-4 py-20 lg:px-16"
    style="background-image: linear-gradient(135deg, #7C3AED, #06B6D4)"
  >
    <div class="mx-auto max-w-6xl flex flex-col items-center gap-8 text-center">

      <!-- Content -->
      <div class="flex flex-col items-center gap-4">
        <h2 class="text-3xl font-bold text-white lg:text-4xl">
          Pronto para mudar sua carreira?
        </h2>
        <p class="max-w-xl text-lg leading-[1.5] text-indigo-100">
          Mais de 5.000 alunos já deram o primeiro passo. Agora é a sua vez.
        </p>
      </div>

      <!-- Buttons -->
      <div class="flex flex-wrap items-center justify-center gap-4">
        <button
          class="flex items-center gap-2 rounded-xl bg-white px-8 py-5 text-lg font-bold text-primary shadow-xl shadow-black/20 transition-colors hover:bg-gray-50"
        >
          Quero começar agora
          <ArrowRight :size="18" />
        </button>
        <button
          class="rounded-xl border border-white/50 px-8 py-5 text-base font-medium text-white transition-colors hover:bg-white/10"
        >
          Ver o programa completo
        </button>
      </div>

      <!-- Trust Signals -->
      <div class="flex flex-wrap items-center justify-center gap-8">
        <div
          v-for="signal in trustSignals"
          :key="signal.text"
          class="flex items-center gap-2"
        >
          <component :is="signal.icon" :size="18" color="#E0E7FF" />
          <span class="text-sm text-indigo-100">{{ signal.text }}</span>
        </div>
      </div>

    </div>
  </section>
</template>
```

- [ ] **Step 2: Adicionar ao App.vue**

Acrescentar `CtaSection` após `PricingSection`.

- [ ] **Step 3: Commit**

```bash
cd /Users/waldenermonteiro/development/artigo-pencil
git add app/src/components/sections/CtaSection.vue app/src/App.vue
git commit -m "feat: add CtaSection with gradient background and trust signals"
```

---

## Task 14: FaqItem + FaqSection

**Files:**
- Create: `app/src/components/sections/FaqItem.vue`
- Create: `app/src/components/sections/FaqSection.vue`

- [ ] **Step 1: Criar `app/src/components/sections/FaqItem.vue`**

```vue
<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

defineProps<{
  question: string
  answer: string
  isOpen: boolean
}>()

defineEmits<{
  toggle: []
}>()
</script>

<template>
  <div class="overflow-hidden rounded-xl bg-white shadow-sm shadow-black/[0.06]">
    <button
      class="flex w-full cursor-pointer items-center justify-between gap-3 px-6 py-5 text-left"
      @click="$emit('toggle')"
    >
      <span class="text-base font-semibold text-dark">{{ question }}</span>
      <ChevronDown
        :size="20"
        color="#7C3AED"
        :class="['shrink-0 transition-transform duration-200', isOpen && 'rotate-180']"
      />
    </button>
    <div v-show="isOpen" class="px-6 pb-5">
      <p class="text-sm leading-[1.6] text-muted">{{ answer }}</p>
    </div>
  </div>
</template>
```

- [ ] **Step 2: Criar `app/src/components/sections/FaqSection.vue`**

```vue
<script setup lang="ts">
import FaqItem from './FaqItem.vue'
import { useFaq } from '../../composables/useFaq'

const { openIndex, toggle } = useFaq()

interface Faq {
  question: string
  answer: string
}

const faqs: Faq[] = [
  {
    question: 'Preciso ter conhecimento prévio de programação?',
    answer: 'Não! O curso foi criado para quem está começando do zero. Você vai aprender desde os conceitos mais básicos até técnicas avançadas usadas no mercado.',
  },
  {
    question: 'Como funciona o certificado de conclusão?',
    answer: 'Após completar todos os módulos e os projetos práticos, você recebe um certificado digital reconhecido pelo mercado, que pode ser adicionado ao seu LinkedIn e currículo.',
  },
  {
    question: 'Por quanto tempo terei acesso ao curso?',
    answer: 'O acesso é vitalício! Uma vez inscrito, você pode assistir às aulas quando quiser e quantas vezes precisar. Você também recebe todas as atualizações futuras sem custo adicional.',
  },
  {
    question: 'Como funciona o suporte durante o curso?',
    answer: 'Você terá acesso a nossa comunidade exclusiva no Discord com suporte da equipe e dos colegas de turma. O instrutor Rafael responde perguntas semanalmente em sessões ao vivo.',
  },
  {
    question: 'Consigo mesmo conseguir emprego após o curso?',
    answer: 'O curso inclui um módulo inteiro dedicado à empregabilidade: como montar seu portfólio, se destacar no LinkedIn, preparar seu currículo e se sair bem em entrevistas técnicas.',
  },
]
</script>

<template>
  <section class="bg-gray-50 px-4 py-16 lg:px-16 lg:py-20">
    <div class="mx-auto max-w-6xl flex flex-col gap-8">

      <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-semibold text-dark lg:text-3xl">Perguntas Frequentes</h2>
        <p class="text-base text-muted">Tudo que você precisa saber antes de começar</p>
      </div>

      <div class="flex flex-col gap-3">
        <FaqItem
          v-for="(faq, i) in faqs"
          :key="faq.question"
          :question="faq.question"
          :answer="faq.answer"
          :is-open="openIndex === i"
          @toggle="toggle(i)"
        />
      </div>

    </div>
  </section>
</template>
```

- [ ] **Step 3: Adicionar ao App.vue**

Acrescentar `FaqSection` após `CtaSection`.

- [ ] **Step 4: Verificar accordion no browser**

Clicar em uma pergunta → resposta expande. Clicar novamente → fecha. Clicar em outra → fecha a anterior e abre a nova.

- [ ] **Step 5: Commit**

```bash
cd /Users/waldenermonteiro/development/artigo-pencil
git add app/src/components/sections/FaqItem.vue app/src/components/sections/FaqSection.vue app/src/App.vue
git commit -m "feat: add FaqSection with accordion behavior via useFaq composable"
```

---

## Task 15: AppFooter + App.vue Final

**Files:**
- Create: `app/src/components/layout/AppFooter.vue`
- Modify: `app/src/App.vue` (versão final)

- [ ] **Step 1: Criar `app/src/components/layout/AppFooter.vue`**

```vue
<template>
  <footer class="flex flex-col items-center justify-between gap-4 bg-dark px-10 py-10 sm:flex-row">
    <p class="text-sm text-muted">© 2024 DevCourse. Todos os direitos reservados.</p>
    <nav class="flex gap-6">
      <a href="#" class="text-sm text-muted transition-colors hover:text-white">Política de Privacidade</a>
      <a href="#" class="text-sm text-muted transition-colors hover:text-white">Termos de Uso</a>
      <a href="#" class="text-sm text-primary transition-colors hover:text-primary/80">Suporte</a>
    </nav>
  </footer>
</template>
```

- [ ] **Step 2: Escrever `app/src/App.vue` final completo**

```vue
<script setup lang="ts">
import HeroSection from './components/sections/HeroSection.vue'
import PainSection from './components/sections/PainSection.vue'
import ModulesSection from './components/sections/ModulesSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import TestimonialsSection from './components/sections/TestimonialsSection.vue'
import InstructorSection from './components/sections/InstructorSection.vue'
import PricingSection from './components/sections/PricingSection.vue'
import CtaSection from './components/sections/CtaSection.vue'
import FaqSection from './components/sections/FaqSection.vue'
import AppFooter from './components/layout/AppFooter.vue'
</script>

<template>
  <main>
    <HeroSection />
    <PainSection />
    <ModulesSection />
    <AboutSection />
    <TestimonialsSection />
    <InstructorSection />
    <PricingSection />
    <CtaSection />
    <FaqSection />
    <AppFooter />
  </main>
</template>
```

- [ ] **Step 3: Build final de produção**

```bash
cd /Users/waldenermonteiro/development/artigo-pencil/app
npm run build
```

Expected: `dist/` gerado sem erros TypeScript. Output com chunks de JS e CSS.

- [ ] **Step 4: Preview da build de produção**

```bash
npm run preview
```

Expected: abrir `http://localhost:4173`, percorrer todas as 10 seções visualmente, verificar:
- Hero com badge, heading, botões e mockup
- 3 cards de dores com borda roxa
- 6 cards de módulos em grid responsivo
- Feature list + card roxo CTA
- 3 depoimentos com avatares
- Foto do instrutor + bio + stats
- Card de preço com bônus e CTA
- Seção gradiente roxo→cyan
- FAQ accordion funcional
- Footer com links

- [ ] **Step 5: Commit final**

```bash
cd /Users/waldenermonteiro/development/artigo-pencil
git add app/src/components/layout/AppFooter.vue app/src/App.vue
git commit -m "feat: complete Vue 3 landing page — all 10 sections assembled"
```

---

## Checklist de Cobertura da Spec

- [x] Vue 3 + Vite + Tailwind CSS + TypeScript — Tasks 1–2
- [x] Composition API com `<script setup>` — todos os componentes
- [x] Estrutura escalável `ui/`, `sections/`, `layout/`, `composables/` — Task 2
- [x] Design tokens como variáveis Tailwind — Task 2
- [x] Inter font — Task 2
- [x] Ícones Lucide — Tasks 4, 6–15
- [x] Mobile-first responsividade — todas as seções usam `grid-cols-1 → md → lg`
- [x] Hero (badge, heading, CTA, social proof, mockup) — Task 6
- [x] Pain cards com borda roxa — Task 7
- [x] 6 módulos em grid — Task 8
- [x] About com feature list e CTA card — Task 9
- [x] Testimonials com avatares — Task 10
- [x] Instrutor com stats e empresas — Task 11
- [x] Pricing com bônus e garantia — Task 12
- [x] CTA Final com gradiente e trust signals — Task 13
- [x] FAQ accordion com composable — Tasks 5 + 14
- [x] Footer — Task 15
- [x] Imagens do design copiadas — Task 3
