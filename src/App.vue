<script setup lang="ts">
// import TodoItem from './components/TodoItem.vue'
// import TodoList from './components/TodoList.vue'
// import TodoInput from './components/TodoInput.vue'
// import { useTodos } from './composables/useTodos'


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

// const { todos, loading, error, addTodo, toggleTodo, deleteTodo } = useTodos()

</script>



<template>
  <router-view></router-view> 
  <!-- <TodoInput @addTodo="addTodo" />
  <div v-if="loading">Laddar...</div>
  <div v-if="error">Whops!</div>
  <TodoList v-if="!loading && !error" :todos="todos" @toggleCompletion="toggleTodo" @delete="deleteTodo"/> -->
</template>

<style>
body {
  background-color: gainsboro;
}
</style>
