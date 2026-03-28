<script setup lang="ts">
import { Layers, Globe, Zap, Server, Database, Rocket } from 'lucide-vue-next'
import type { Component } from 'vue'
import SectionHeader from '../ui/SectionHeader.vue'

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
      <SectionHeader
        title="O que você vai dominar"
        subtitle="6 módulos completos do zero ao mercado de trabalho"
        align="center"
        theme="dark"
      />

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="mod in modules"
          :key="mod.badge"
          class="flex flex-col gap-3 rounded-2xl bg-dark-card p-6"
        >
          <component :is="mod.icon" :size="28" color="var(--color-primary)" />
          <span class="text-xs font-bold tracking-widest text-accent">{{ mod.badge }}</span>
          <h3 class="text-lg font-semibold text-white">{{ mod.title }}</h3>
          <p class="text-sm leading-[1.5] text-muted">{{ mod.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
