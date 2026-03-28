<script setup lang="ts">
import * as LucideIcons from 'lucide-vue-next'
import type { Component } from 'vue'
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  icon: string
  text: string
  iconColor?: string
  iconSize?: number
  textClass?: string
}>(), {
  iconColor: 'var(--color-primary)',
  iconSize: 24,
  textClass: 'text-gray-700',
})

function toPascalCase(str: string): string {
  return str.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')
}

const IconComponent = computed<Component>(() => {
  const name = toPascalCase(props.icon)
  return (LucideIcons as unknown as Record<string, Component>)[name] ?? LucideIcons.Circle
})
</script>

<template>
  <div class="flex items-center gap-4">
    <component :is="IconComponent" :size="iconSize" :color="iconColor" class="shrink-0" />
    <span :class="['text-base font-medium', textClass]">{{ text }}</span>
  </div>
</template>
