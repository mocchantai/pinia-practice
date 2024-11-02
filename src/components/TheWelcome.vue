<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { useToggleStore } from '@/stores/toggle'

const counterStore = useCounterStore()
const toggleStore = useToggleStore()
</script>

<template>
  <h1>1. Counter</h1>
  <button @click="counterStore.increment">Increment</button>
  <button @click="counterStore.decrement">Decrement</button>
  <p>Count: {{ counterStore.count }}</p>

  <h1>2. Toggle</h1>
  <button @click="toggleStore.toggle">Toggle</button>
  <p>Is Open: {{ toggleStore.isOpen }}</p>


  <h1>3. Todo List</h1>


  <h1>4. Shopping Cart</h1>


  <h1>5. User Profile</h1>


  <h1>6. Dashboard</h1>



  <h1>7. Real Ti</h1>
</template>
