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
