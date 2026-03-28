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
