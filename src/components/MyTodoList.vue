<script setup lang="ts">
import { ref } from 'vue'
import { useTodosStore } from '@/stores/todo';

const todosStore = useTodosStore()

</script>

<template>
	<input v-model="todosStore.newTodo" @keydown.enter="() => { todosStore.addTodo(todosStore.newTodo); todosStore.newTodo = '' }" />
	<button @click="() => { todosStore.addTodo(todosStore.newTodo); todosStore.newTodo = '' }">TODOを追加</button>

	<div v-for="todo in todosStore.todos" :key="todo.id">
		<p>{{ todo.text }}</p>
	</div>
</template>
