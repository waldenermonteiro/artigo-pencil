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
            <CircleCheck :size="20" color="var(--color-accent)" class="shrink-0" />
            <span class="text-[15px] text-gray-300">{{ bonus }}</span>
          </div>
        </div>

        <!-- CTA Button -->
        <button
          type="button"
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
