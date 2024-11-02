<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>

<template>
	<button @click="counterStore.increment">Increment</button>
	  <button @click="counterStore.decrement">Decrement</button>
	  <p>Count: {{ counterStore.count }}</p>
</template>
