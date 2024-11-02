<script setup lang="ts">
import { useToggleStore } from '@/stores/toggle'

const toggleStore = useToggleStore()
</script>

<template>
	<button @click="toggleStore.toggle">Toggle</button>
	<p>Is Open: {{ toggleStore.isOpen }}</p>
</template>
