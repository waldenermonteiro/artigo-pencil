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
