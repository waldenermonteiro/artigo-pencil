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
