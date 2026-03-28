<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

withDefaults(defineProps<{
  variant?: 'primary' | 'secondary'
  withIcon?: boolean
}>(), {
  variant: 'primary',
  withIcon: false,
})
</script>

<template>
  <button
    type="button"
    :class="[
      'inline-flex cursor-pointer items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold transition-all duration-200',
      variant === 'primary'
        ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/40'
        : 'border border-gray-600 text-white hover:bg-white/10',
    ]"
  >
    <slot />
    <ArrowRight v-if="withIcon" :size="18" />
  </button>
</template>
