<script setup lang="ts">
import type { Todo } from '../types'
import { computed } from 'vue'
import TodoItem from './TodoItem.vue'
import { ref } from 'vue'

const filteredTodos = computed(() => {
    if (searchTerm.value.trim() === '') {
        return props.todos;
    } else {
        return props.todos.filter(t => t.text.toLowerCase().includes(searchTerm.value))

    }
})



const searchTerm = ref('')
const props = defineProps<{ todos: Todo[] }>()
const emit = defineEmits<{
  toggleCompletion: [id: string]
  delete: [id: string]
}>()

function handleToggle(id: string) {
    emit('toggleCompletion', id) 
}

function handleDelete(id: string) {
    emit('delete', id)
}
</script>

<template>
  <div>
    <input v-model="searchTerm" type="text" placeholder="Sök todos..."></input>
    <TodoItem v-for="todo in filteredTodos" :key="todo.id" :todo="todo" @toggleCompletion="handleToggle" @delete="handleDelete">
        
    </TodoItem>


  </div>
</template>