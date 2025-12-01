<script setup lang="ts">
import type { TodoItem } from '/TodoApi/Models/TodoItem.cs'

const props = defineProps<{ todo: TodoItem }>()

function handleToggle() {
    emit('toggleCompletion', props.todo.id) 
}

function handleDelete() {
    emit('delete', props.todo.id)
}


const emit = defineEmits<{
  toggleCompletion: [id: number]
  delete: [id: number]
}>()
</script>

<template>
    <div style="display: flex; align-items: center;" :class="{ completed: todo.completed }"> {{ todo.name }}
        
        <input type="checkbox" @change.prevent="handleToggle" :checked ="todo.completed"></input>
        <h3>{{todo.category}}</h3>
        <button type="button" @click="handleDelete">Ta bort</button>
        <router-link :to="{ name: 'todoDetail', params: { id: todo.id } }">  Detaljer </router-link>
    </div>

</template>

<style scoped>
.completed {
   text-decoration: line-through; 
}



</style>
