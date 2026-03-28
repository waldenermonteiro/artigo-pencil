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
