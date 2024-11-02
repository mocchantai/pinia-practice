import { ref } from 'vue'
import { defineStore } from 'pinia'

type Todo = {
    id: number
    text: string
    completed: boolean
}

export const useTodosStore = defineStore('todos', () => {
    const newTodo = ref<string>("")
    const todos = ref<Todo[]>([])

    const addDummyTodos = () => {
        todos.value.push(
            { id: 1, text: 'ダミーTODO 1', completed: false },
            { id: 2, text: 'ダミーTODO 2', completed: false },
            { id: 3, text: 'ダミーTODO 3', completed: false }
        )
    };

    const addTodo = (text: string) => {
        todos.value.push({
            id: Date.now(),
            text,
            completed: false,
        })
    };

    const toggleComplete = () => {
        todos.value.forEach(todo => {
            todo.completed = !todo.completed
        })
    }

    addDummyTodos()

    return {
        newTodo,
        todos,
        addTodo,
        toggleComplete,
    }
})
