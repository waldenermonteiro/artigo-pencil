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
    class="bg-gradient-primary px-4 py-20 lg:px-16"
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
          type="button"
          class="flex items-center gap-2 rounded-xl bg-white px-8 py-5 text-lg font-bold text-primary shadow-xl shadow-black/20 transition-colors hover:bg-gray-50"
        >
          Quero começar agora
          <ArrowRight :size="18" />
        </button>
        <button
          type="button"
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
