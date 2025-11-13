<script setup lang="ts">
// import TodoItem from './components/TodoItem.vue'
import { computed } from 'vue';
import type { Todo } from '../types/api-types';
import TodoList from '../components/TodoList.vue'
import TodoInput from '../components/TodoInput.vue'
import { useTodos } from '../composables/useTodos'
import { useRoute } from 'vue-router'
const route = useRoute()
const { todos, loading, error, addTodo, toggleTodo, deleteTodo } = useTodos()

const filteredTodos = computed<Todo[]>(() => {
    const filter = route.query.filter

    if (filter === 'all' || filter === undefined) {
        return todos.value
    } else if (filter === 'active') {
        return todos.value.filter(t => !t.completed)
    } else {
        return todos.value.filter(t => t.completed)
    }
})

  // function handleDelete(id : number) {
  //   console.log(`Bortagning av item med id ${id}`)
  // }

  // function handleToggle(id : number) {
  //   console.log(`Ändring av ${id} motaget`)
  // }

//   function toggleTodo(id: number) {
//     const todo = todos.value.find(t => t.id === id)
//     if (todo) {
//       todo.completed = !todo.completed
//     }
//   }

//   function addTodo(text: string) {
//     const newTodo: Todo = {
//       id: Date.now(),
//       text: text,
//       completed: false
//     }
//     todos.value.push(newTodo)
//     console.log(newTodo)
//   }

//   function deleteTodo(id: number) {
//     todos.value = todos.value.filter(t => t.id !== id)
//   }

//   const todos = ref<Todo[]>([
//   { id: 1, text: "Lära mig Vue", completed: false },
//   { id: 2, text: "Bygga todo-app", completed: false },
//   { id: 3, text: "Bli Vue-expert", completed: true }
// ])


</script>



<template>

    <router-link :to="{name: 'home'}">← Hem</router-link>
    <nav class="filter-nav">
        <router-link :to="{ name: 'todos' }">Alla | </router-link>
        <router-link :to="{ name: 'todos', query: { filter: 'active' } }">
        Aktiva |
        </router-link>
        <router-link :to="{ name: 'todos', query: { filter: 'completed' } }">
        Färdiga
        </router-link>
    </nav>

  <TodoInput @addTodo="addTodo" />
  <div v-if="loading">Laddar...</div>
  <div v-if="error">Whops!</div>
  <TodoList v-if="!loading && !error" :todos ="filteredTodos" @toggleCompletion="toggleTodo" @delete="deleteTodo"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
