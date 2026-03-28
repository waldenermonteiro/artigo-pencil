<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  theme?: 'dark' | 'light'
}>(), {
  align: 'center',
  theme: 'light',
})
</script>

<template>
  <div :class="['flex flex-col gap-3', align === 'center' ? 'items-center text-center' : 'items-start']">
    <h2
      :class="[
        'text-2xl font-bold lg:text-3xl',
        theme === 'dark' ? 'text-white' : 'text-dark',
      ]"
    >
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-base text-muted lg:text-lg">
      {{ subtitle }}
    </p>
  </div>
</template>
