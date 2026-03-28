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
