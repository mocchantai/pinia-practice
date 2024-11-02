import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // State
  const count = ref<number>(0)

  // Getters
  const doubleCount = computed(() => count.value * 2)

  // Actions
  const increment = () => count.value++
  const decrement = () => count.value--

  return { count, doubleCount, increment, decrement }
})
