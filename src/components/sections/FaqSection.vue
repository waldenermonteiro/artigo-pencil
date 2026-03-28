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
