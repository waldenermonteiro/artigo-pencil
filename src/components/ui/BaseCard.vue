<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'dark' | 'light'
}>(), {
  variant: 'dark',
})
</script>

<template>
  <div
    :class="[
      'rounded-2xl p-6',
      variant === 'dark'
        ? 'bg-dark-card shadow-lg shadow-black/20'
        : 'bg-white shadow-md shadow-black/10',
    ]"
  >
    <slot name="icon" />
    <slot />
  </div>
</template>
