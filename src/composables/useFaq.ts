import { ref } from 'vue'

export function useFaq() {
  const openIndex = ref<number | null>(null)

  function toggle(i: number): void {
    openIndex.value = openIndex.value === i ? null : i
  }

  return { openIndex, toggle }
}
