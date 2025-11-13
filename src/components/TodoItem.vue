<script setup lang="ts">
import type { Todo } from '../types'

const props = defineProps<{ todo: Todo }>()

function handleToggle() {
    emit('toggleCompletion', props.todo.id) 
}

function handleDelete() {
    emit('delete', props.todo.id)
}


const emit = defineEmits<{
  toggleCompletion: [id: string]
  delete: [id: string]
}>()
</script>

<template>
    <p :class="{ completed: todo.completed }"> {{ todo.text }}
        <input type="checkbox" @change="handleToggle" :checked ="todo.completed"></input>
        <button type="button" @click="handleDelete">Delete</button>
        <router-link :to="{ name: 'todoDetail', params: { id: todo.id } }">  Detaljer </router-link>
    </p>

</template>

<style scoped>
.completed {
   text-decoration: line-through; 
}

</style>